Før jeg laget repository la jeg til .gitignore *node-modules/* for å ikke pushe det.
Setter opp en egen workflow, github gjenkjenner dette ved mappe strukturen .github/workflows .
Lager en yml med instruksjoner for hva github skal gjøre.

navn: Navn på prosess.

on:
    push:
        branch:
           //Hvilken branch som setter igang prosessen.

jobs:
    test:
        runs-on: ubuntu-latest //stod anbefalt av github

        steps: //alt prosessen skal utføre
        //her lastes alt av dependencies ned og testene kjøres.
        
       