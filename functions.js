collections = [cardio, resp, neuro, bjs, endo, repro, renal, gi, heme, summer];
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
			case_images = new Array()
			for (resource in case_resources) {
				resource_data = case_resources[resource];
				case_images.push(resource_data);
			};
			document.write(JSON.stringify({'case': case_title, 'resources': case_images}) + ",");
		};
	};
};