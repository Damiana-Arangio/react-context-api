import { Children, createContext, useContext, useState } from "react";

// Creazione del contesto
const BudgetContext = createContext();


// Definizione del componente Provider
function BudgetProvider({ children } ) {

    // Stato globale: indica se la modalità budget è attiva
    const [budgetMode, setBudgetMode] = useState(false);

    // Funzione che attiva/disattiva la modalità budget invertendo lo stato budgetMode (true/false)
    function toggleBudgetMode() {
        setBudgetMode(budgetModeCorrente => !budgetModeCorrente ); 
    }

    return (
        <BudgetContext.Provider value = {{budgetMode, toggleBudgetMode}}>
            {children}
        </BudgetContext.Provider>
    );

}

// Definizione di un hook personalizzato per usare BudgetContext senza doverlo importare ogni volta
function useBudgetContext() {
    const context = useContext(BudgetContext);
    return context;
}

export { BudgetProvider, useBudgetContext };