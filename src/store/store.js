import { create } from 'zustand';
import axios from 'axios';

const useStore = create((set) => ({
  countries: [],
  filteredCountries: [],
  loading: true,
  error: null,
  searchQuery: '',

  fetchCountries: async () => {
    try {
      const response = await axios.get('https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes.json');
      const countriesWithFlags = response.data.map(country => ({
        ...country,
        flag: `https://flagcdn.com/w320/${country.code.toLowerCase()}.png`
      }));
      set({ countries: countriesWithFlags, filteredCountries: countriesWithFlags, loading: false });
    } catch (error) {
      set({ error: 'Error fetching data', loading: false });
    }
  },

  setSearchQuery: (query) => {
    set({ searchQuery: query });
    const filtered = useStore.getState().countries.filter(country =>
      country.name.toLowerCase().includes(query.toLowerCase())
    );
    set({ filteredCountries: filtered });
  },
}));

export default useStore;