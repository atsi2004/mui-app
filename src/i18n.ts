import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng: 'en', 
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        welcome: "Welcome to Movie Finder",
        searchMovies: "Search and explore movies instantly.",
        getStarted: "Get Started",
        movieDetails: "Movie Details",
        noResults: "No results found.",
        loading: "Loading...",
        error: "An error occurred. Please try again.",
        movieSearch: "Movie Search",
        searchLabel: "Movie Title",
        year: "Year",
        type: "Type",
        all: "All",
        movie: "Movie",
        series: "Series",
        episode: "Episode"
      }

    },
    pt: {
      translation: {
        welcome: "Bem-vindo ao Movie Finder",
        searchMovies: "Pesquise e explore filmes instantaneamente.",
        getStarted: "Começar",
        movieDetails: "Detalhes do Filme",
        noResults: "Nenhum resultado encontrado.",
        loading: "Carregando...",
        error: "Ocorreu um erro. Por favor, tente novamente.",
        movieSearch: "Pesquisa de Filmes",
        searchLabel: "Título do Filme",
        year: "Ano",
        type: "Tipo",
        all: "Todos",
        movie: "Filme",
        series: "Série",
        episode: "Episódio"
      }
    },
    es: {
      translation: {
        welcome: "Bienvenido a Movie Finder",
        searchMovies: "Busca y explora películas al instante.",
        getStarted: "Empezar",
        movieDetails: "Detalles de la Película",
        noResults: "No se encontraron resultados.",
        loading: "Cargando...",
        error: "Ocurrió un error. Por favor, inténtalo de nuevo.",
        movieSearch: "Búsqueda de Películas",
        searchLabel: "Título de la Película",
        year: "Año",
        type: "Tipo",
        all: "Todos",
        movie: "Película",
        series: "Serie",
        episode: "Episodio"

      }
    },
    hi: {
      translation: {
        welcome: "Movie Finder में आपका स्वागत है",
        searchMovies: "तुरंत फ़िल्में खोजें और अन्वेषण करें।",
        getStarted: "शुरू करें",
        movieDetails: "फ़िल्म विवरण",
        noResults: "कोई परिणाम नहीं मिला।",
        loading: "लोड हो रहा है...",
        error: "एक त्रुटि हुई। कृपया फिर से प्रयास करें।",
        movieSearch: "फ़िल्म खोज",
        searchLabel: "फ़िल्म शीर्षक",
        year: "वर्ष",
        type: "प्रकार",
        all: "सभी",
        movie: "फिल्म",
        series: "श्रृंखला",
        episode: "कड़ी"
      }
    }
  }
})

export default i18n;