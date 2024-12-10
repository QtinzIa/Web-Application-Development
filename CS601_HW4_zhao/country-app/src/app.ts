/**
 * MET CS601 - Assignment 4
 * Country Management System
 */

// an interface accepting html and with name property
interface ICountry {
    name: string;
    getInfo(element: HTMLElement): HTMLElement;
    flagUrl: string;
    countryType: string; // 'SNOWY', 'RAINY', 'ISLAND'
}

//rainy country
  
class RainyCountry implements ICountry {
    name: string;
    rainLevel: number;
    flagUrl: string;
    countryType = 'RAINY';
  
    constructor(name: string, rainLevel: number, flagUrl: string, countryType: string) {
        this.name = name;
        this.rainLevel = rainLevel;
        this.flagUrl = flagUrl;
        this.countryType = countryType;
    }
  
    getInfo(element: HTMLElement): HTMLElement {
        element.innerHTML = `<img src="${this.flagUrl}" alt="${this.name}" style="width:50px;"><br>${this.name} has a rain level of ${this.rainLevel} inches.`;
        return element;
    }
}

//SnowyCountry country
  
class SnowyCountry implements ICountry {
    name: string;
    snowLevel: number;
    flagUrl: string;
    countryType = 'SNOWY';
  
    constructor(name: string, snowLevel: number, flagUrl: string, countryType: string) {
        this.name = name;
        this.snowLevel = snowLevel;
        this.flagUrl = flagUrl;
        this.countryType = countryType;
    }
  
    getInfo(element: HTMLElement): HTMLElement {
        element.innerHTML = `<img src="${this.flagUrl}" alt="${this.name}" style="width:50px;"><br>${this.name} has a snow level of ${this.snowLevel} inches.`;
        return element;
    }
}
  

//IslandCountry country
class IslandCountry implements ICountry {
    name: string;
    landSize: number;
    flagUrl: string;
    countryType = 'ISLAND';
  
    constructor(name: string, landSize: number, flagUrl: string, countryType: string) {
        this.name = name;
        this.landSize = landSize;
        this.flagUrl = flagUrl;
        this.countryType = countryType;
    }
  
    getInfo(element: HTMLElement): HTMLElement {
        element.innerHTML = `<img src="${this.flagUrl}" alt="${this.name}" style="width:50px;"><br>${this.name} has a land size of ${this.landSize} square miles.`;
        return element;
    }
}
  
const countries: ICountry[] = [
    new RainyCountry("United States", 28, "flags/usa.png", "Rainy"),
    new SnowyCountry("Norway", 20, "flags/nor.png", "Snowy"),
    new RainyCountry("Brazil", 40, "flags/bra.png", "Rainy"),
    new IslandCountry("Japan", 145937, "flags/jap.png", "Island"),
    new SnowyCountry("Sweden", 30, "flags/swe.png", "Snowy"),
    new IslandCountry("Australia", 2968464, "flags/aus.png", "Island"),
    new RainyCountry("China", 28, "flags/chi.png", "Rainy"),
    new IslandCountry("England", 94060, "flags/eng.png", "Island")
];
  
// Function to filter countries by type using a dropdown
function filterCountries(type: string): ICountry[] {
    switch (type) {
        case 'Snowy':
            return countries.filter(country => country instanceof SnowyCountry);
        case 'Rainy':
            return countries.filter(country => country instanceof RainyCountry);
        case 'Island':
            return countries.filter(country => country instanceof IslandCountry);
        default:
            return countries;
    }
}

// Function to display countries
function displayCountries(countries: ICountry[], type: string): void {
    const container = document.getElementById("countries-container");
    if (container) {
        container.innerHTML = ''; // Clear previous content
        countries.forEach(country => {
            const element = document.createElement("p");
            container.appendChild(country.getInfo(element));
        });
        if (type === "Snowy") {
            const totalSnowLevel = (countries as SnowyCountry[]).reduce((acc, country) => acc + country.snowLevel, 0);
            const totalElement = document.createElement("p");
            totalElement.innerText = `Total snow level: ${totalSnowLevel.toFixed(2)} inches.`;
            container.appendChild(totalElement);
        }
        if (type === "Rainy") {
            const totalRainLevel = (countries as RainyCountry[]).reduce((acc, country) => acc + country.rainLevel, 0);
            const totalElement = document.createElement("p");
            totalElement.innerText = `Total rain level: ${totalRainLevel.toFixed(2)} inches.`;
            container.appendChild(totalElement);
        }
    }
}

// Event listener for the dropdown
function setupDropdownListener(): void {
    const dropdown = document.getElementById("country-type-selector") as HTMLSelectElement;
    dropdown.addEventListener('change', () => {
        const selectedType = dropdown.value;
        const filteredCountries = filterCountries(selectedType);
        displayCountries(filteredCountries, selectedType);
    });
}

// Initial display of all countries
document.addEventListener('DOMContentLoaded', () => {
    displayCountries(countries, "");
    setupDropdownListener();
});