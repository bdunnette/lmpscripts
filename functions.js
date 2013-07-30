collections = [summer, cardio, resp, neuro, bjs, endo, repro, renal, gi, heme];
//console.log(collections);
for (collection in collections) {
	collection_labs = collections[collection];
	//console.log('Labs: ', collection_labs);
	for (lab in collection_labs) {
		lab_path = collection_labs[lab][1];
		lab_cases = collection_labs[lab][3];
		//console.log('Cases: ', lab_cases);
		for (my_case in lab_cases) {
			case_data = lab_cases[my_case];
			console.log(case_data);
			case_title = case_data[1].toString();
			case_resources = case_data[2];
			for (resource in case_resources) {
				resource_data = case_resources[resource];
				document.write([['http://160.94.51.142/meded', lab_path, resource_data[0]].join('/'), JSON.stringify(case_title), JSON.stringify(resource_data[1])].join(), '<br/>');
			};
		};
	};
};