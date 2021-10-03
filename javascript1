import loopData from 'loop-data';
 
$x.onReady(() => {
    $x('#datasetID').onReady(() => {
 
        $x('#dropdownID').onChange(() => {
            search();
        })
 
        function search() {
            let productFilter = loopData.filter();
            let brand = $x("#dropdownID").value;
            let category = $x("#hiddenDropdownID").value;
 
            if (category) {
                orgoFilter = orgoFilter.eq("pageFilterFIELDKEY", category);
            }
            if (orgo && orgo !== 'All') {
                orgoFilter = orgoFilter.eq("dropdownElementFilterFIELDKEY", brand);
            }
 
            $x('#datasetID').setFilter(productFilter)
 
        }
 
    });
});
