import { create } from 'zustand';
import axios from 'axios';

const useStore = create((set, get) => ({
  countries: [],
  filteredCountries: [],
  selectedCountry: null,
  loading: true,
  error: null,
  searchQuery: '',

  fetchCountries: async () => {
    if (get().countries.length > 0) {
      set({ loading: false });
      return;
    }
    try {
      set({ loading: true });
      const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,cca2,flags,idd,capital,population,region');
      
      const formattedCountries = response.data
        .filter(country => country.idd.root) // Ensure country has a phone code
        .map(country => ({
          name: country.name.common,
          code: country.cca2,
          flag: country.flags.png,
          dial_code: `${country.idd.root}${country.idd.suffixes ? country.idd.suffixes[0] : ''}`,
          capital: country.capital ? country.capital[0] : 'N/A',
          population: country.population.toLocaleString(),
          region: country.region,
        }))
        .sort((a, b) => a.name.localeCompare(b.name)); // Sort countries alphabetically

      set({ 
        countries: formattedCountries, 
        filteredCountries: formattedCountries, 
        loading: false 
      });

    } catch (error) {
      set({ error: 'Error fetching data', loading: false });
    }
  },

  setSearchQuery: (query) => {
    set({ searchQuery: query });
    const filtered = get().countries.filter(country =>
      country.name.toLowerCase().includes(query.toLowerCase()) ||
      country.dial_code.includes(query)
    );
    set({ filteredCountries: filtered });
  },

  selectCountry: (countryCode) => {
    const country = get().countries.find(c => c.code === countryCode);
    set({ selectedCountry: country });
  },
}));

export default useStore;