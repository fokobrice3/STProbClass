//FETCH library
let fetch = require('sync-fetch')
//File Server Library *
let fs = require("fs"); 
//PATH Library *
let path = require('path');   
//Jaccard Index - Cousine Similarity - SorensenDice coefficient - Jaro-Winkler - Levenshtein
let stringComparison = require('string-comparison')
//Gzip Library
let gunzip = require('gunzip-file')
//Custom funtions Module
var _fcts = require('./fcts.js');  


main();

async function main(){        
    //CPA test
    await _fcts.cpaNMB(
		_gtTableLink="./ressource/WikidataTables2023R1/DataSets/Valid/tables/",
		tableLink="./ressource/WikidataTables2023R1/DataSets/Test/tables/",
		_gtCPA="./ressource/WikidataTables2023R1/DataSets/Valid/gt/cpa_gt.csv",
		_targetCPA="./ressource/WikidataTables2023R1/DataSets/Test/targets/cpa_targets.csv",
		cpa_results="WikidataTables2023R1_cpa.csv"
	);
	
	//CEA - CTA - CPA tables folder
    	//let tables_Names = _fcts.getCSVNames("./ressource/WikidataTables2023R1/DataSets/Test/tables/");
    	//_fcts._annotate("./ressource/WikidataTables2023R1/DataSets/", tables_Names)
}

//R2-QA
	//_fcts.properties_qualifiers();
	
//Extract SOTAB JSON Table 
	/*
	_fcts.extract_sotab(
		_cta_test_targets_dir = "./ressource/Round2-SOTAB-CTA-SCH-Datasets/sotab_cta_test_targets_round2.csv",
		_cta_gt_targets_dir = "./ressource/Round2-SOTAB-CTA-SCH-Datasets/sotab_cta_train_round2.csv",
		_cpa_test_targets_dir = "./ressource/Round2-SOTAB-CPA-Datasets/sotab_cpa_test_targets_round1.csv",
		_cpa_gt_targets_dir = "./ressource/Round2-SOTAB-CPA-Datasets/gt.csv",
		opt_cta_test=true,
		opt_cta_gt=true,
		opt_cpa_test=false,
		opt_cpa_gt=false);
	*/ 