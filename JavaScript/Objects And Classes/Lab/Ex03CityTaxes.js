function cityTaxes(name, population, treasury) {
    let city = {
        name,
        population,
        treasury,
        taxRate : 10,
        collectTaxes() {
            this.treasury += this.population * 10;
        },
        applyGrowth(percentage){
            this.population += percentage / 100 * this.population;
        },
        applyRecession(percentage){
            this.treasury -= (this.treasury * percentage / 100);
        }
        
    }
    return city;
}