//javascript document	
//2010 HD2 Lab Data

//initialize index values. These vars keep track of current viewing states and are called for navigation
var slide_index=0; //lab component (specimen group)
var image_index=0; //image within a specimen group

var list = "";

// info and lec_info are displayed at the bottom of lecture and lab index pages and supply instructions
var info = "<br><span class=\"info\"><span style=\'color:#000000'>INTSTRUCTIONS</span><br>Click on one of the thumbnails to view its full sized image and description. <br>Red Case links (<span style='color: #993333'>Case NNN</span>) lead to the first slide of the case. <br><br><img src='assets/img/scope.gif' /> icon means there is a virtual slide available for a given specimen.  Click it to open the Spectrum web viewer.<br>When asked for login info, use:<br> user: lampstudent<br>pass: path0l0gy (p-a-t-h-'zero'-l-'zero'-g-y)<br> Note that you must be connected to the internet in order to view the virtual slides.<br><br><a target='blank' class='img' href='http://images.pathology.umn.edu/'>Click here</a> for a full list of virtual slides available for period 2.</span>"; 
var lec_info = "<br><span class=\"info\"><span style=\'color:#000000'>INTSTRUCTIONS</span><br><br>Click on the <span style='color: #993333'>lecture title</span> to view its 'lectures online' page.<br>Click the PPT icon <img src='assets/img/pps_ccc.gif /> to download the lecture presentation.";

//lab image directories.
var img = "_images/";
var thmb = "_thumbs/";
var mkd = "_marked/";
var lec_dir = "Lectures/";
var rev_dir = "Reviews/";
var svs_dir ="http://images.pathology.umn.edu/";

//current lab directories relative to Content folder
var neuro_lab01_dir = "Labs/Neuro_Lab01/";
var neuro_lab02_dir = "Labs/Neuro_Lab02/";
var neuro_lab03_dir = "Labs/Neuro_Lab03/";
var neuro_lab04_dir = "Labs/Neuro_Lab04/";
var bjs_lab01_dir = "Labs/BJS_Lab01/";
var bjs_lab02_dir = "Labs/BJS_Lab02/";
var bjs_lab03_dir = "Labs/BJS_Lab03/";
var mc40_dir = "Labs/MiniCase_40/";
var mc41_dir = "Labs/Minicase_41/";

//powerpoint link icon
var link_ppt = "<img class='thumbs' src='assets/img/ppt.png' />";

//PDF link icon
var link_pdf = "<img class='thumbs' src='assets/img/pdf.png' />";

//help icon
var link_help ="<a href='#' onclick='show_help()'>?</a>";

//help page section separator
var line_sep = "<br><br><hr class=\"hr1\" /><br>";

/* Templates

//lectures
var pdX_lecs =
[
	['title', 'date', 'time', 'pages', 'instructor', 'ppt', 'lol']
];

//flash videos
var videos =
[
	["flv", year#, "organ", lab#, "title", "presenter"]
];

//reviews
var reviews =
[
 	["title", "file_extension", "filename_sansextension"],
];

//specimen images
var period_lab01_case01 =
[
	['filename.jpg', 'description', 1 => annotation file exists],
];

//lab components (specimen collections)
var lab =
[
	['specimen_name', 'description', specimen, lab_dir, 'svs_file'],
]

//period contents (lab collection)
var period =
[
	['lab_title', 'lab', 'description'],
]
*/

//if a property is not applicable, leave the default value in.
//for example, if there is no powerpoint file, leave 'ppt' in place.
var pd2_lecs = 
[
    ['Neuroanatomy Review', '10/19 - T', '8:00 AM', 'pages', 'H. B. Clark', 'NeuroAnatReview.ppt', 'lol', 'pdf'],
	['Pathological Reactions of the Nervous System', '10/26 - T', '8:00 AM', '<a target=_blank href=http://www.expertconsultbook.com/expertconsult/b/linkTo?type=bookPage&isbn=978-1-4377-0792-2&eid=4-u1.0-B978-1-4377-0792-2..50033-X--cesec1>1281-1284</a>', 'H. B. Clark', 'PathoReactionsNVS.ppt', 'lol', 'pdf'],
	['CNS Vascular Diseases', '10/26 - T', '9:05 AM', '<a target=_blank href=http://www.expertconsultbook.com/expertconsult/b/linkTo?type=bookPage&isbn=978-1-4377-0792-2&eid=4-u1.0-B978-1-4377-0792-2..50033-X--cesec32>1290-1299</a>', 'H. B. Clark', 'CNSVascDis.ppt', 'lol', 'pdf'],
	['Pediatric Neuropathology', '11/02 - T', '9:05 AM', '<a target=_blank href=http://www.expertconsultbook.com/expertconsult/b/linkTo?type=bookPage&isbn=978-1-4377-0792-2&eid=4-u1.0-B978-1-4377-0792-2..50033-X--cesec13>1284-1287</a>; <a target=_blank href=http://www.expertconsultbook.com/expertconsult/b/linkTo?type=bookPage&isbn=978-1-4377-0792-2&eid=4-u1.0-B978-1-4377-0792-2..50033-X--cesec148>1325-1330</a>', 'K. SantaCruz', 'PedsNeuropath.ppt', 'lol', 'pdf'],
	['Degenerative Diseases of the Nervous System', '11/02 - T', '1:25 PM', '<a target=_blank href=http://www.expertconsultbook.com/expertconsult/b/linkTo?type=bookPage&isbn=978-1-4377-0792-2&eid=4-u1.0-B978-1-4377-0792-2..50033-X--cesec101>1313-1325</a>', 'K. SantaCruz', 'NeuroDegenDis.ppt', 'lol', 'pdf'],
	['Disorders of Myelin & Peripheral Nerve', '11/08 - M', '10:10 AM', '<a target=_blank href=http://www.expertconsultbook.com/expertconsult/b/linkTo?type=bookPage&isbn=978-1-4377-0792-2&eid=4-u1.0-B978-1-4377-0792-2..50032-8--cesec6>1261-1267</a>; <a target=_blank href=http://www.expertconsultbook.com/expertconsult/b/linkTo?type=bookPage&isbn=978-1-4377-0792-2&eid=4-u1.0-B978-1-4377-0792-2..50033-X--cesec92>1309-1313</a>', 'H. B. Clark', 'MyelinPeriphNerveDis.ppt', 'lol', 'pdf'],
    ['Infections of the Nervous System', '11/09 - T', '2:30 PM', '<a target=_blank href=http://www.expertconsultbook.com/expertconsult/b/linkTo?type=bookPage&isbn=978-1-4377-0792-2&eid=4-u1.0-B978-1-4377-0792-2..50033-X--cesec53>1299-1309</a>', 'H. B. Clark', 'InfectionsNVS.ppt', 'lol', 'pdf'],
	//['Diseases of the Joints', 'T 12.01','8:00am', '1303-1314', 'Benson', 'Arthritis PP handout 2009.pdf', 'http://www.meded.umn.edu/lectures/2011/LAMP6300_2008-11-25_08.wmv', 'Arthritis handout 2009.pdf'],
	['Bone Tumors', '11/11 - Th','1:25 PM', '<a target=_blank href=http://www.expertconsultbook.com/expertconsult/b/linkTo?type=bookPage&isbn=978-1-4377-0792-2&eid=4-u1.0-B978-1-4377-0792-2..50031-6--cesec46>1223-1235</a>', 'D. Aslan', 'BoneTumors.ppt', 'lol', 'BoneTumors_Outline.pdf'],
	['Soft Tissue Tumors', '11/11 - Th','2:30 PM', '<a target=_blank href=http://www.expertconsultbook.com/expertconsult/b/linkTo?type=bookPage&isbn=978-1-4377-0792-2&eid=4-u1.0-B978-1-4377-0792-2..50031-6--cesec114>1248-1255</a>', 'S. Pambuccian', 'SoftTissueTumors.ppt', 'lol', 'SoftTissueTumors_Outline.pdf'],
	['Tumors of the Nervous System', '11/22 - M', '10:10 AM', '<a target=_blank href=http://www.expertconsultbook.com/expertconsult/b/linkTo?type=bookPage&isbn=978-1-4377-0792-2&eid=4-u1.0-B978-1-4377-0792-2..50033-X--cesec19>1287-1290</a>; <a target=_blank href=http://www.expertconsultbook.com/expertconsult/b/linkTo?type=bookPage&isbn=978-1-4377-0792-2&eid=4-u1.0-B978-1-4377-0792-2..50033-X--cesec180>1330-1343</a>', 'H. B. Clark', 'TumorsNVS.ppt', 'lol', 'pdf'],
	['Basic Pathology of the Skin','12/02 - Th','2:30 PM', '<a target=_blank href=http://www.expertconsultbook.com/expertconsult/b/linkTo?type=bookPage&isbn=978-1-4377-0792-2&eid=4-u1.0-B978-1-4377-0792-2..50030-4--cesec4>1168-1202</a>', 'W. Goodman', 'BasicDermPath.ppt', 'lol', 'pdf'],
];

var lecs = pd2_lecs;

var pd2_videos =
[
	["flv", "year", "organ", "lab", "title", "presenter"]
];

var pd2_reviews =
[
 	["title", "file_extension", "filename_sansextension"]
];


// NEURO LAB 01 COMPONENTS

var neuro_lab01_intro =
[
    ['Slide02.jpg', 'H&E-stained section of reactive astrocytosis with prominent “gemistocytic” astrocytes with abundant eosinophilic cytoplasm.',],
    ['Slide03.jpg', 'A similar section stained with antibodies to glial fibrillary acidic protein (GFAP), a major cytoskeletal protein of astrocytes. In addition to the prominent staining of cell bodies (brown) there are numerous delicate immunoreactive (brown) processes in the background that are characteristic of the intracellular scarring associated with gliosis. This lesion is the margin of an infarct. Note loss of tissue in the upper right corner. Unlike what is seen in a myocardial infarct, there is no collagenous replacement of necrotic tissue in a cerebral infarct.',],
    ['Slide04.jpg', 'In some gliotic situations there primarily is hypertrophy of pre-existing astrocytes illustrated here with GFAP Immunohistochemistry.',],
    ['Slide05.jpg', 'In situations where there is relative preservation of the tissue architecture, such as in primary demyelination, the reactive astrocytes integrate into the normal anatomy, a process known as isomorphic gliosis. This figure is from a multiple sclerosis plaque.',],
    ['Slide06.jpg', 'Eosinophilic neuronal necrosis is characteristic of ischemic injury. The neurons become brightly eosinophilic and shrunken with condensation of the nuclear chromatin and nuclear pyknosis. Two normal-appearing neurons are in the lower left.',],
    ['Slide07.jpg', 'The black flame-shaped cytoplasmic inclusions in these pyramidal neurons are neurofibrillary tangles. This change is characteristic of Alzheimer’s disease but can be seen in several other neurodegenerative conditions.',],
    ['Slide08.jpg', 'The prominent eosinophilic body with a halo around it in the cytoplasm of this pigmented neuron is a Lewy body, characteristic of Parkinson’s disease.',],
    ['Slide09.jpg', 'The cytoplasm of this neuron from a patient with Tay-Sachs disease is greatly distended by an accumulation of pale foamy material because of the patient’s inability to fully metabolize gangliosides secondary to an enzymatic defect.',],
    ['Slide10.jpg', 'The neuron in the lower right (arrow) demonstrates simple atrophy in this section from the anterior horn of the spinal cord in a patient with amyotrophic lateral sclerosis. Several anterior horn neurons are normal in appearance with prominent basophilic Nissl substance in the cytoplasm.',],
    ['Slide11.jpg', 'The two neurons on the right have central chromatolysis while the one on the left has a normal appearance of an anterior horn neuron. The chromatolytic cells have loss of Nissl substance, a pale appearance to the cytoplasm and displacement of the nucleus to the periphery of the cell.',],
    ['Slide12.jpg', 'Wallerian degeneration in the right corticospinal tract shown at the level of the midbrain, pons and medulla. Changes such as this are secondary to a destructive lesion in that pathway more rostrally.',],
    ['Slide13.jpg', 'A section of spinal cord stained with a myelin stain demonstrating loss of myelinated axons in the ascending (gracile) sensory pathways in the posterior column of the spinal cord. This lesion is secondary to a spinal cord injury more caudal to this section and represents Wallerian degeneration of axons originating in the dorsal root ganglia.',],
    ['Slide14.jpg', 'Sections from a patient with ALS stained with a myelin stain demonstrating bilateral pallor of both corticospinal tracts at multiple levels. This change is due to dying-back atrophy of those fiber pathways and is eventually accompanied by eventual neuronal loss in the motor cortex.',],
    ['Slide15.jpg', 'Primary demyelination is characterized by loss of myelin and relative preservation of axons. Tract degenerations have an equal loss of both.',],
    ['Slide16.jpg', 'Microglia have a rod-like shape with small dendritic processes. Their morphology is best demonstrated by immunohistochemistry for leukocytes of monocyte/macrophage lineage. Microglia are repopulated by circulating monocytes.',],
    ['Slide17.jpg', 'As microglia become more reactive their rod-like morphology may be accentuated and their nuclei become highly elongated. In other situations where they have a phagocytic function, they aggregate into microglial nodules.',],
    ['Slide18.jpg', 'Microglia may attain the morphology of classical macrophages and frequently are the major source of phagocytes in smaller lesions. In larger lesions such as infarcts or multiple sclerosis plaques, many macrophages are derived directly from circulating monocytes.',],    
];

var neuro_lab01_case01 =
[
	['Slide20.jpg', 'Left carotid arteriogram demonstrating a saccular aneurysm in the left middle cerebral artery (arrowhead).',],
	['Slide21.jpg', 'Left lateral aspect of the cerebral hemisphere showing significant subarachnoid hemorrhage in the region of the Sylvian fissure.  This pattern of hemorrhage is suggestive of an aneurysm in the middle cerebral artery distribution on the left.',],
	['Slide22.jpg', 'The dissected circle of Willis in this patient as shown from below.  The probe on the right side shows a ruptured aneurysm in the left middle cerebral artery.  There is a second aneurysm in the anterior communicating artery which is not ruptured and also is indicated by a probe.',],
	['Slide23.jpg', 'Coronal section of the frontal lobe anterior to the Sylvian fissure showing a large hematoma in that region.  Note the extensive swelling of the left hemisphere compared to the right.',],
	['Slide24.jpg', 'Coronal section more posteriorly showing substantial blood in the Sylvian fissure on the left side again with significant brain swelling and left to right shift.',],
	['Slide25.jpg', 'Slightly more posteriorly with hemorrhage in the subarachnoid space, significant softening of the insular cortex with brain swelling and some left to right shift.',],
	['Slide26.jpg', 'Section through the brain stem showing secondary brain stem hemorrhages indicative of transtentorial herniation.',],
	['Slide27.jpg', 'Schematic of typical distribution of saccular aneurysms.  Approximately 90% occur in the anterior circulation with 10% in the posterior circulation.  The most common site in the posterior circulation is the basilar tip as indicated above but some of them are also on branches of the vertebral arteries, particularly the posterior inferior cerebellar artery (PICA).',],
	['Slide28.jpg', 'An elastin stain of a section of a cerebral saccular aneurysm.  Note the occurrence of the aneurysm at the site of a bifurcation of a vessel.  Also note the absence of the internal elastic lamina in the neck and sac of the aneurysm.',],
	['Slide29.jpg', 'Take home points.',]
	
];

var neuro_lab01_case02 =
[
	['Slide31.jpg', 'Transverse sections of the cerebellum and brain stem with a large hematoma in the dorsal aspect of the midpons.',],
	['Slide32.jpg', 'A section from the brain stem slightly caudal to #1 showing extension of the pontine hemorrhage.',],
	['Slide33.jpg', 'Two levels more rostral to the section shown in #1 showing extension of the pontine hemorrhage.  Notice the involvement of the rostral portion of the fourth ventricle.',],
	['Slide34.jpg', 'Coronal section at the level of the anterior commissure showing dilatation of the lateral ventricular system, secondary to the compression of the fourth ventricle and cerebral aqueduct from the hemorrhage.',],
	['Slide35.jpg', 'Similar coronal section at the level of the splenium of the corpus callosum again showing dilatation of the ventricular system.',],
	['Slide36.jpg', 'Hypertensive vascular changes predisposing to hemorrhage.',],
	['Slide37.jpg', 'Take Home Points',]
];

var neuro_lab01_case03 =
[
	['Slide39.jpg', 'CT scan without contrast showing hyperintensity in the right middle cerebral arterial territory indicative of acute hemorrhage into the infarct.',],
	['Slide40.jpg', 'MRI with FLAIR sequence showing high T2-intensity in the right middle cerebral arterial territory indicative of acute infarction.',],
	['Slide41.jpg', 'External appearance of the brain after fixation.  There is swelling that is most pronounced in the right cerebral hemisphere as well as some hemorrhagic disruption on the right side.',],
	['Slide42.jpg', 'The lateral right hemisphere of the brain after fixation showing significant softening and disruption with bloody discoloration of the subarachnoid space.',],
	['Slide43.jpg', 'Coronal section through the frontal lobe showing an area of hemorrhagic infarction in the distribution of the right middle cerebral artery. Much of the hemorrhage is confined to the cortical regions.  There is significant swelling of the right hemisphere when compared to the left.',],
	['Slide44.jpg', 'Close-up of the same region illustrating the features of hemorrhagic infarction.  Note the sharp distinction between the normal and abnormal white matter underlying the infarct.  Note that the hemorrhage is largely present within the gray matter with a perivascular, or petechial, appearance.  The reason for this is that the vascularity of the gray matter is approximately 5 times that of the white matter.',],
	['Slide45.jpg', 'Photomicrograph of the area of hemorrhagic infarction.  Note eosinophilic degeneration of neurons (ENN).  There also is focal hemorrhage in several areas.  The vacuolation is the result of tissue edema.  Inflammatory changes are not conspicuous in this area but the microscopic features are still compatible with an infarct of 4-5 days duration.',],
	['Slide46.jpg', 'Photomicrograph of the area of hemorrhagic infarction.  Note eosinophilic degeneration of neurons (ENN).  There also is focal hemorrhage in several areas.  The vacuolation is the result of tissue edema.  Inflammatory changes are not conspicuous in this area but the microscopic features are still compatible with an infarct of 4-5 days duration.',],
	['Slide47.jpg', 'Schematic of the vascular distribution zones showing that the area of the infarct in this case is exclusively within the region of the middle cerebral artery.',],
	['Slide48.jpg', 'Take Home Points',]
];

var neuro_lab01_case04 =
[
	['Slide50.jpg', 'Arteriography showing a right anterior-posterior projection of a selective right common carotid artery injection demonstrated an abrupt termination of the supraclinoid internal carotid artery. There is faint visualization of the proximal segments of the middle and anterior cerebral arteries (arrows), with a large area of avascularity. Some flow is visualized in the more distal middle cerebral artery branches (curved arrow).',],
	['Slide51.jpg', 'Coronal T2-weighted gradient-echo MRI of the brain. There is diffuse increased signal in the right middle cerebral artery territory, consistent with edema. Note the mass effect with right-to-left shift. A focal linear area of increased signal is present in the proximal right middle cerebral artery (arrow). This may represent recent sub-intimal hemorrhage in a segment of arterial dissection.',],
	['Slide52.jpg', 'Elastic stain of the right middle cerebral artery demonstrating extensive dissection through the intima with displacement and severe compression of the true lumen. Intracerebral arteries have only an internal elastic lamina (the black rim), which here outlines the true lumen. The arterial wall otherwise is normal with a relatively thin tunica media (greenish tan) and the thin adventitia (red) typical of intracranial arteries.',],
	['Slide53.jpg', 'Diagram of the major cerebral vessels in the neck. The internal carotid and vertebral arteries external to the cranium are more common sites of arterial dissection.',],
	['Slide54.jpg', 'Take Home Points',]
];

var neuro_lab01_case05 =
[
	['020105_001.jpg', 'MRI (T2 and T1 with contrast) of cerebellar medulloblastoma at the time of diagnosis.  There is hyperintensity on T2 as well as rim-enhancement on the T1 image, which is suggestive of a necrotic center.',],
	['020105_002.jpg', 'External appearance of the base of the brain at autopsy showing tumor in the region of the inferior vermis.  There is opacification of the leptomeninges in the inferior frontal and medial temporal regions suggestive of tumor infiltration.  The optic chiasm also is dilated.',],
	['020105_003.jpg', 'External appearance of the cerebellar region showing tumor in the inferior midline and over the leptomeninges.',],
	['020105_004.jpg', 'The anterior superior surface of the cerebellum showing tumor in the leptomeninges.',],
	['020105_005.jpg', 'Coronal section of the cerebellum and brain stem showing tumor in the midline of the cerebellum and involving the cerebellar leptomeninges.',],
	['020105_006.jpg', 'Transverse sections of the midbrain with overlying cerebellum showing tumor involvement of the leptomeninges and extension into the dorsal brainstem.',],
	['020105_007.jpg', 'Whole mount of a microscopic section of the cerebellum showing extensive infiltration of the leptomeninges by medulloblastoma.',],
	['020105_008.jpg', 'Higher power micrograph showing tumor in the subarachnoid space (SAS) with some infiltration of the molecular layer of the cortex.',],
	['020105_009.jpg', 'High power of the tumor showing undifferentiated small blue cells typical of medulloblastoma.',],
	['020105_010.jpg', 'Section of pons and cerebellum showing extensive tumor involvement of the leptomeninges of the cerebellum as well as apparent involvement of the ventricular system.',],
	['020105_011.jpg', 'Low magnification microscopic section showing extensive tumor involvement of the leptomeninges of the pons and cerebellum and apparent involvement of the floor of the fourth ventricle.',],
	['020105_012.jpg', 'Low magnification microscopic section of medulla with involvement of the subarachnoid space and the fourth ventricle by tumor.',],
	['020105_013.jpg', 'Coronal section of the cerebral hemisphere at the level of the hippocampus showing some neoplastic thickening of the leptomeninges in the region of the hippocampus, as well as tumor mass (T) in the third ventricle.',],
	['020105_014.jpg', 'Low magnification microscopic section of the hippocampus showing tumor involvement of the leptomeninges and extension into the brain parenchyma.',],
	['020105_015.jpg', 'External appearance of the spinal cord with tumor-thickened subarachnoid space and roots of the cauda equina.',],
	['020105_016.jpg', 'Tumor involvement of the leptomeninges and spinal cord with some invasion into the parenchyma.',],
	['020105_017.jpg', 'Tumor involvement of the optic chiasm.',],
	['020105_018.jpg', 'Take Home Points',]
];


// LAB 02 COMPONENTS

var neuro_lab02_case01 =
[
	['Slide03.jpg', 'Gross photo of the base of the brain showing extensive subarachnoid hemorrhage in the area around the brain stem and cerebellum.  This pattern of hemorrhage is suggestive of origin of the blood from within the ventricular system.',],
	['Slide04.jpg', 'Coronal section of cerebral hemisphere showing extensive intraventricular blood in both lateral ventricles and in the right temporal horn as well as the third ventricle.  This is the classical appearance of the intraventricular hemorrhages seen after hemorrhages into the subependymal germinal matrix in premature infants.',],
	['Slide05.jpg', 'Transverse sections through the brain stem and cerebellum showing extensive blood in the cerebral aqueduct and fourth ventricular lumen with extension through the ventricular foramina into the subarachnoid space.  Sections of midbrain and pons are oriented upside down.',],
	['Slide06.jpg', 'Left: The appearance of the subependymal germinal matrix in the wall of the lateral ventricle of a premature infant.  Right: Higher power of the same region.  Note the small undifferentiated cells.',],
	['Slide07.jpg', 'A small hemorrhage in the region of the subependymal germinal matrix.',],
	['Slide08.jpg', 'A higher power of the same lesion.  You can appreciate a small amount of blood extending onto the ventricular surface.  Hemorrhages in this area are the typical source of the large intraventricular hemorrhages seen in the premature infants.',],
	['Slide09.jpg', 'Gross appearance of a brain of an infant who survived an intraventricular hemorrhage and developed secondary sequelae.  Note the brownish discoloration and thickening of the leptomeninges at the base of the brain.',],
	['Slide10.jpg', 'These changes are accentuated in the higher power picture of the same region.',],
	['Slide11.jpg', 'Hydrocephalus with dilatation of the lateral and third ventricles and accentuation of the temporal horns of the lateral ventricle.',],
	['Slide12.jpg', 'Section of the midbrain, medulla and cerebellum from the same patient.  Note the dilatation of the cerebral aqueduct in the midbrain as well as the dilatation of the foramina of Luschka (FL) in the lateral aspects of the medulla.  There also is extensive thickening and discoloration of the leptomeninges in the base of the medulla.  This pattern is indicative of a communicating-type hydrocephalus, the blockage being distal in the flow of cerebrospinal fluid.  Hydrocephalus is a frequent complication of extensive intraventricular and subarachnoid hemorrhage with scarring of the leptomeninges with impairment of flow of the CSF to sites of resorption in the arachnoid granulations.',],
	['Slide13.jpg', 'Take Home Points',]
];

var neuro_lab02_case02 =
[
	['Slide15.jpg', 'Meningomyelocele at the lumbar level of the spinal cord.  Note the ulcerated sac of the meningomyelocele communicating with skin surface.',],
	['Slide16.jpg', 'Dissection of the meningomyelocele showing how the spinal cord terminates in the sac of the malformation.',],
	['Slide17.jpg', 'Microscopic appearance of the meningomyelocele.  There is ulcerated skin at the surface.  Below the surface are dermal elements that are intermingled with meningeal and neural elements.',],
	['Slide18.jpg', 'Higher power of interface between the neural and dermal elements.  There is dysplastic spinal cord with reactive gliosis on the right.',],
	['Slide19.jpg', 'Hydromyelia of the spinal cord above the meningomyelocele.  The central canal of the spinal cord is widely dilated.',],
	['Slide20.jpg', 'Photomicrograph of hydromyelia.  The central canal is dilated but maintains an intact ependymal lining.  Hydromyelia is the spinal cord equivalent of hydrocephalus.',],
	['Slide21.jpg', 'Cervical spinal cord exposed from posterior side in Arnold-Chiari.  Because of the downward displacement of the spinal cord the cervical roots must ascend to reach the spinal foramina.',],
	['Slide22.jpg', 'The posterior fossa abnormality in Arnold-Chiari syndrome is shown here.  The upper specimen is a sagittal section through the brainstem and cerebellum of a normal child.  The lower specimen is a similar section from a patient with Arnold-Chiari.  Note the elongation of the brainstem, the fourth ventricle and the herniation of the posterior cerebellar vermis and caudal brainstem into the spinal canal.  The level of the foramen magnum is labeled FM.',],
	['Slide23.jpg', 'Left:  Transverse section of the midbrain from a normal infant showing the normal colliculi and aqueduct.  Right:  Transverse section of the midbrain from a patient with Arnold-Chiari showing the \"beaked\" appearance of the tectum with fusion of the colliculi and the severe stenosis of the aqueduct.',],
	['Slide24.jpg', 'Microscopic appearance of the normal midbrain with a normal aqueduct.',],
	['Slide25.jpg', 'Microscopic appearance of the midbrain from a patient with Arnold-Chiari showing severe attenuation of the aqueductal lumen.',],
	['Slide26.jpg', 'Hydrocephalus in a newborn patient with Arnold-Chiari syndrome.  There is dilation of the lateral ventricles and temporal horns of the lateral ventricles.  The septum pellucidum is absent, as it often is in severe chronic hydrocephalus.',],
	['Slide27.jpg', 'Take Home Points',]
];

var neuro_lab02_case03 =
[
	['Slide29.jpg', 'Left:  Two transverse sections of the midbrain from a normal patient showing normal pigmentation of the substantia nigra.  Right:  Similar sections through the substantia nigra from a patient with Parkinson\'s disease.  Note the loss of black pigmentation with a brownish-tan discoloration in the region of the substantia nigra secondary to gliosis.',],
	['Slide30.jpg', 'Photomicrograph of the substantia nigra in Parkinson\'s disease showing loss of density of pigmented nuclei with scattered amounts of extracellular pigment within macrophages.  Occasional Lewy bodies are identified in surviving neurons.',],
	['Slide31.jpg', 'Substantia nigra from a patient with Parkinson\'s disease showing decreased density of pigmented neurons as well as a prominent Lewy body within the sole surviving neuron in this section.  A Lewy body is characterized by a bright eosinophilic amorphous appearance with a clear halo surrounding it.  These inclusions are composed largely of ubiquitinated alpha-synuclein and are present within the cytoplasm of neurons.',],
	['Slide32.jpg', 'Several pigmented neurons in a patient with Parkinson\'s disease, one of which contains two Lewy body inclusions.',],
	//['Slide33.jpg', 'A schematic of the striatum substantia nigra showing the biochemical anatomy of the transmitters involved.  The neurons containing dopamine in the substantia nigra are the principal neurons to be involved in Parkinson\'s disease.',],
	['Slide33.jpg', 'Table:  Parkinson\'s disease.',],
	['Slide34.jpg', 'Take Home Points',]
];

var neuro_lab02_case04 =
[
	['Slide36.jpg', 'Lateral view of the cerebral hemisphere in a patient with Alzheimer\'s disease.  Note the accentuation of the sulci suggesting gyral atrophy, particularly in the frontal and temporal lobes.',],
	['Slide37.jpg', 'Coronal section showing ventricular dilatation and pronounced cortical atrophy.  In particular, the region of the Sylvian fissure is heavily atrophic.',],
	['Slide38.jpg', 'Coronal section slightly posterior to #2, again with significant atrophy most pronounced in the temporal lobes.  The temporal horns are markedly enlarged with shrinkage of the anterior hippocampal formation (H).',],
	['Slide39.jpg', 'Photomicrograph of a Bielschowsky silver stain of the cerebral cortex in a patient with Alzheimer\'s disease showing numerous neurofibrillary tangles (NT) and occasional senile plaques (SP).',],
	['Slide40.jpg', 'A similar section showing a number of neurons containing neurofibrillary tangles(NFT).',],
	['Slide41.jpg', 'The electron micrographic appearance of neurofibrillary tangles showing paired helical filaments (PHF) with regular periodicity.',],
	['Slide42.jpg', 'A Bielschowsky silver stain of a number of senile plaques.  Several plaques have a dark brownish-orange core which is composed of amyloid.  Note the fine silver-positive (black) neuritic processes in the periphery of the plaque.',],
	['Slide43.jpg', 'The appearance of an amyloid-core plaque on hematoxylin and eosin stain.  Note the brightly eosinophilic amyloid core and occasional microglial cells in the periphery of the amyloid.',],
	['Slide44.jpg', 'Congo red stain showing amyloid involvement of numerous cerebral blood vessels.  Amyloid angiopathy is a frequent accompaniment of Alzheimer\'s disease and involves both meningeal and parenchymal vessels.',],
	['Slide45.jpg', 'H & E stain showing amyloid involvement of vessels penetrating the brain substance.',],
	['Slide46.jpg', 'Table on amyloid.',],
	['Slide47.jpg', 'Schematic diagram of the basal forebrain region marked in the bright white regions.  This is the source of much of the cholinergic innervation to the cerebral hemispheres.  The cells in this region frequently are atrophic or degenerated in patients with Alzheimer\'s disease.',],
	['Slide48.jpg', 'Take Home Points',]
];

var neuro_lab02_case05 =
[
	//['Slide50.jpg', 'Gross appearance of the spinal cord in a patient with ALS showing a white discoloration in the lateral columns (LC) of the spinal cord at three levels indicating degeneration of the corticospinal tracts.',],
	['Slide51.jpg', 'Low power micrograph of spinal cord from the lumbar, thoracic and cervical levels, respectively, stained with an immunostain for myelin basic protein showing pallor due to loss of myelinated fibers in the lateral columns.',],
	['Slide52.jpg', 'Low power micrograph of spinal cord from the lumbar, thoracic and cervical levels, respectively, stained with an immunostain for myelin basic protein showing pallor due to loss of myelinated fibers in the lateral columns.',],
	['Slide53.jpg', 'Low power micrograph of spinal cord from the lumbar, thoracic and cervical levels, respectively, stained with an immunostain for myelin basic protein showing pallor due to loss of myelinated fibers in the lateral columns.',],
	['Slide54.jpg', 'Similarly stained sections of the medulla showing pallor of the pyramids, again indicating loss of fibers in the corticospinal tracts.',],
	['Slide55.jpg', 'Myelin basic protein immunostain of the midbrain showing some pallor in the medial portion of the cerebral peduncles, bilaterally.  This area is the site of the corticospinal tracts (CST) within the peduncle.  The degree of tract degeneration is generally more pronounced distally than it is proximally and frequently is not evident proximal to the level of the cerebral peduncles.',],
	['Slide56.jpg', 'Holzer stain (a stain for reactive gliosis) of the motor cortex showing absence of large Betz cells with increased numbers of fibrillary glia suggesting significant loss of the upper motor neuron population.',],
	['Slide57.jpg', 'Section of the spinal cord showing the marked atrophy of the anterior roots below compared to the normal posterior roots above.',],
	['Slide58.jpg', 'Luxol fast blue-PAS stain of the anterior roots showing marked loss of blue myelinated fibers.  Normally the myelinated fibers are back-to-back.',],
	//['Slide59.jpg', 'Photomicrograph of the anterior horn of the lumbar cord showing significant loss of anterior horn cells (AHC) with reactive gliosis.',],
	['Slide59.jpg', 'Immunostain for glial fibrillary acidic protein from a similar region showing diminution of the anterior horn cell population with large numbers of GFAP-positive reactive astrocytes, the brown fibrillary cells.',],
	['Slide60.jpg', 'A GFAP immunostain of the hypoglossal nucleus also showing marked neuron loss and extensive reactive gliosis.',],
	['Slide61.jpg', 'A section of skeletal muscle showing classic neurogenic atrophy, characterized by atrophy of groups of muscle fibers and an angulated shrunken appearance to the degenerated fibers.',],
	['Slide62.jpg', 'Schematic of normal histochemical fiber typing where the fiber type is determined by the type of neuron which innervates the fiber.  The fibers are arranged in a random pattern.  For the sake of this discussion, the white fibers are type I and the dark fibers are type II.',],
	['Slide63.jpg', 'Schematic of the early stages of ALS in which a type II neuron has degenerated and the remaining type II muscle fibers have been reinnervated by sprouting from the surviving type I neuron which innervates fibers in the vicinity.  This reinnervation changes their fiber type to type I.  This phenomenon is noted as muscle type grouping.  This pattern is characteristic on muscle biopsies in patients with ALS.',],
	['Slide64.jpg', 'Schematic of the later stage of ALS in which the anterior horn cell of type I which had been innervating the large number of type I fibers now degenerates resulting in group atrophy of all of those fibers.',],
	['Slide65.jpg', 'Take Home Points',]
];


// LAB 03 COMPONENTS

var neuro_lab03_case01 =
[
	['Slide03.jpg', 'External appearance of the brain with clouding of the leptomeninges particularly in the areas of the sulci and cerebral veins.  These findings are typical of a purulent meningitis.',],
	['Slide04.jpg', 'Low power micrograph of the meningitis with inflammatory changes confined to the subarachnoid space (SAS).',],
	['Slide05.jpg', 'Higher power micrograph showing a dense inflammatory infiltrate in the leptomeninges.',],
	['Slide06.jpg', 'Higher power micrographs of the inflammatory infiltrate showing a mixed polymorphonuclear/mononuclear infiltrate, with neutrophils being the predominant cell type.',],
	['Slide07.jpg', 'Higher power micrographs of the inflammatory infiltrate showing a mixed polymorphonuclear/mononuclear infiltrate, with neutrophils being the predominant cell type.',],
	['Slide08.jpg', 'Gram stain of the leptomeningeal sections showing gram positive diplococci typical of Streptococcus pneumoniae.',],
	['Slide09.jpg', 'Take Home Points',]
];

var neuro_lab03_case02 =
[
	['Slide11.jpg', 'T2-weighted MRI from a patient with HSV encephalitis.  Note the hyperintensity in the right mesial temporal region.',],
	['Slide12.jpg', 'Softening, discoloration and focal hemorrhage in the medial frontal lobes, bilaterally.',],
	//['Slide13.jpg', 'Coronal section at the level of the genu of the corpus callosum with softening in the cingulate gyri, bilaterally.',],
	['Slide14.jpg', 'Coronal section slightly more posteriorly with similar softening and hemorrhage in the cingulate gyri as well as hemorrhagic discoloration in the right inferior frontal and insular cortices.',],
	//['Slide15.jpg', 'Section at the level of the anterior commissure showing softening and disruption of the right lateral temporal lobe with some hemorrhage.',],
	['Slide16.jpg', 'Coronal section at the level of the thalamus with hemorrhagic softening in the left medial temporal lobe and right lateral temporal lobe.',],
	//['Slide17.jpg', 'Gross softening and discoloration in the right inferior lateral parieto-temporal region.',],
	['Slide18.jpg', 'Photomicrograph showing lymphocytic perivascular cuffing typical of viral infection.',],
	['Slide19.jpg', 'Similar lymphocytic cuffing with some extension into the perivascular parenchyma.',],
	['Slide20.jpg', 'Photomicrograph of parenchymal inflammation with focal microglial nodules again typical of viral or Rickettsial inflammation.  There also is eosinophilic neuronal necrosis.',],
	['Slide21.jpg', 'Photomicrograph with extensive inflammation, necrosis and hemorrhage typical of herpes simplex encephalitis.  There frequently is a polymorphonuclear infiltrate, perhaps in response to the necrosis.',],
	['Slide22.jpg', 'Perivascular cuffing with cells in the parenchyma containing Cowdry type A inclusions, typical of HSV.',],
	['Slide23.jpg', 'High power of cells containing herpes simplex eosinophilic  intranuclear inclusions.',],
	['Slide24.jpg', 'Immunohistochemical stain (brown labeling) for herpes simplex virus (HSV) antigens labels the majority of cells in this field.',],
	['Slide25.jpg', 'Electron micrograph showing typical target-like HSV particles within the nucleus of an infected cell.',],
	['Slide26.jpg', 'Coronal section from a patient with resolved herpes simplex encephalitis with extensive damage to the temporal lobes bilaterally.',],
	['Slide27.jpg', 'Schematic of the typical areas of involvement by herpes simplex virus.  Note the propensity of involvement in the medial temporal lobes, the insular cortex and the cingulate cortex.',],
	['Slide28.jpg', 'Take Home Points',]
];

var neuro_lab03_case03 =
[
	['Slide30.jpg', 'MRI from a patient with multiple foci of aspergillus cerebritis.  The FLAIR image shows multiple areas of hyperintensity, while the T1 with contrast image shows faint contrast enhancement corresponding to some of the FLAIR lesions.',],
	['Slide31.jpg', 'Coronal section at the level of the hypothalamus showing a large area of hemorrhagic necrosis in the left basal ganglia.  There is a second smaller lesion in the left inferior frontal gyrus.',],
	['Slide32.jpg', 'Higher power of the same area showing an area of apparent hemorrhagic infarction in the basal ganglia with a smaller lesion in the lateral left inferior frontal gyrus.  The distribution of these lesions is not classical for infarction within a vascular distribution.  Given the patient\'s history, the gross appearance of these lesions is strongly suggestive of fungal infection, in particular aspergillus.',],
	['Slide33.jpg', 'Micrograph of the border area of the infarct with inflammatory infiltrates.',],
	['Slide34.jpg', 'Micrograph of the infarct containing hyphae with acute-angle branching.  There is an inflammatory infiltrate comprised predominantly of polymorphonuclear leukocytes.',],
	['Slide35.jpg', 'Extensive involvement of cerebral vessels by inflammatory response.  Hyphae are difficult to distinguish from the vascular wall by H&E staining.',],
	['Slide36.jpg', 'GMS (Grocott\'s methenamine silver) stain showing invasion of vessels by fungal hyphae.',],
	['Slide37.jpg', 'GMS stain at higher power showing uniform-caliber, septate hyphae with rare branches at acute angles, consistent with aspergillus',],
	['Slide38.jpg', 'H & E section of a similar area of vascular involvement leading to hemorrhagic infarction and destruction of the vascular wall.',],
	['Slide39.jpg', 'A section stained with H&E of the lung abscess from this patient.',],
	['Slide40.jpg', 'A GMS-stain of the same abscess showing involvement by aspergillus.',],
	['Slide41.jpg', 'Take Home Points',]
];

var neuro_lab03_case04 =
[
	['Slide43.jpg', 'MRI scans from a patient with MS.  The upper panels are from the same brain level and the lower levels are from the same brain level. Note that the T2/FLAIR bright lesions are more numerous but the T1-contrast lesions correspond to abnormalities on the T2/FLAIR.  The contrast-enhancing lesions typically are more active with breakdown of the blood-brain barrier due to inflammation.',],
	['Slide44.jpg', 'MRI scans from the same level in a patient with MS.  Note the greater sensitivity of the FLAIR technique over classical T2, particularly in the zones near the CSF-containing ventricles.  FLAIR suppresses the signal of the CSF and allows easier identification of periventricular lesions.',],
	['Slide45.jpg', 'FLAIR MRI image in the sagittal plane from a patient with MS.  Note the bright signal in the corpus callosum with radiations upward into the hemispheric white matter.',],
	['Slide46.jpg', 'MRI of the spine in a patient with an MS plaque.  Note the contrast enhancement and circumscribed pattern.',],
	['Slide47.jpg', 'Coronal section of the brain at the level of the hypothalamus with extensive plaque involvement of the region of the basal ganglia.  The internal capsule is entirely involved, bilaterally.  There is extensive involvement of the gray matter as well as the white matter.  There is a more classical white matter plaque with extension in the left periventricular region lateral and superficial to the caudate and putamen.  The amygdalae also appear to be involved, bilaterally.  Note the collapse of the internal capsules, suggesting axonal loss as well as demyelination.',],
	['Slide48.jpg', 'A section at the level of the mammillary bodies with similar bilateral plaque involvement, primarily in the region of the basal ganglia, with particular involvement of the left internal capsule.',],
	['Slide49.jpg', 'Low magnification microscopic section, stained with Luxol fast blue-PAS for myelin, showing extensive involvement of the right thalamus and hypothalamus, with considerable sparing of the internal capsule, but complete demyelination in the region of the globus pallidus and putamen.  The white matter beneath the insular cortex also is extensively demyelinated, as is the myelin within the insular cortex on the right.',],
	['Slide50.jpg', 'LFB-PAS-stained section of the internal capsule showing the edge of a chronic plaque, with a sharp border between the demyelinated area and the blue myelinated area.  There is dense isomorphic gliosis in the area of the plaque.',],
	['Slide51.jpg', 'Coronal section at the level of the thalamus and lateral geniculate bodies showing multifocal small plaques in the white matter of the periventricular and perithalamic regions.',],
	//['Slide52.jpg', 'Coronal section at the level of the splenium of the corpus callosum showing no significant involvement by plaques.',],
	['Slide53.jpg', 'LFB-PAS stain of frontal cortex showing a large periventricular plaque that is sharply circumscribed, typical of a chronic MS plaque.',],
	//['Slide54.jpg', 'A higher power photomicrograph of the same region showing the sharp border between the normally myelinated areas and the area of the plaque.',],
	//['Slide55.jpg', 'H & E appearance of the section adjacent to the section in slides #7-8.  In very chronic plaques, there is a large amount of fibrillary glial material but the number of glial nuclei no longer is accentuated.',],
	['Slide56.jpg', 'LFB-PAS section of the pons showing the abrupt loss of myelin in the transverse fibers in the region of the plaque.',],
	['Slide57.jpg', 'A section adjacent to #10 stained with a silver stain showing preservation of axons through the area of plaque involvement.',],
	['Slide58.jpg', 'An electron micrograph through a chronic plaque showing cross sections of numerous pale axons which are not enveloped by myelin sheaths and are surrounded by cross sections of smaller dense astrocytic processes packed with glial filaments.',],
	['Slide59.jpg', 'Coronal section through the brain stem and cerebellum of this patient showing almost complete demyelination of the midbrain with significant demyelination of the tegmentum of the pons.',],
	['Slide60.jpg', 'This section is in the region of the transition zone between central and peripheral myelin in the third cranial nerve.  In this Luxol fast blue-PAS stain, the centrally myelinated portion of the nerve root, shown above, has only a few fibers with the typical CNS type aqua-blue myelin sheaths.  Note that beyond the transition zone, the peripheral myelin, which has a purplish-blue color, is entirely intact.  Sparing of the PNS myelin generated by Schwann cells is typical of multiple sclerosis.',],
	['Slide61.jpg', 'Luxol fast blue-PAS stain of the third nerve nucleus of the brain stem showing complete demyelination in the region of the third nerve nuclei due to involvement by a plaque.',],
	['Slide62.jpg', 'Two levels of the spinal cord stained with LFB-PAS.  Note the extensive foci of demyelination.  Also note that the pattern of demyelination is not confined to discrete anatomic tracts.  This pattern distinguishes demyelinative lesions from axonal degenerations on myelin stains.',],
	['Slide63.jpg', 'Gross sections through the optic chiasm showing extensive involvement by MS plaques.',],
	['Slide64.jpg', 'Take Home Points',]
];

var neuro_lab03_case05 =
[
	['Slide66.jpg', 'Peripheral nerve stained with Luxol fast-blue from a patient with Guillain-Barre syndrome.  The areas of pallor are zones of demyelination.  There also is a mild chronic inflammatory infiltrate.',],
	['Slide67.jpg', 'An adjacent section of the same nerve shown in slide 1, now stained with a silver stain for axons.  There is no loss of axons in the area where myelin staining is lost.  This pattern of myelin loss with relative axonal preservation is characteristic of segmental demyelination.',],
	['Slide68.jpg', 'A section from a dorsal root ganglion in a patient with Guillain-Barre syndrome showing a lymphocytic infiltrate.',],
	['Slide69.jpg', 'A plastic-embedded section of peripheral nerve from a patient with Guillain-Barre syndrome.  The few normally myelinated fibers stand out but a number of larger axonal profiles are denuded of myelin.',],
	['Slide70.jpg', 'An electron micrograph of peripheral nerve from a patient with Guillain-Barre syndrome.  There is loss of the myelin sheath surrounding the axon in the center of the field.  As the disease process wanes, these fibers become remyelinated.',],
	['Slide71.jpg', 'An electron micrograph showing a macrophage, filled with membranous debris, that is stripping the myelin sheath from an axon in a patient with Guillain-Barre.',],
	['Slide72.jpg', 'Take Home Points',]
];


// LAB 04 COMPONENTS

var neuro_lab04_case01 =
[
	['Slide03.jpg', 'Brain at the time of autopsy after removal of the skull showing a massive amount of subdural blood overlying the left hemisphere.  The frontal lobes are at the top of the figure.',],
	['Slide04.jpg', 'External view of the brain from above showing indentation of the left frontal lobe.',],
	['Slide05.jpg', 'Coronal section through the frontotemporal region showing indentation and left to right shift of the brain with evidence of cingulate gyrus herniation.',],
	['Slide06.jpg', 'Base of the brain after transection of the brain stem at the midbrain.  Note the herniation of the left uncus with prominent notching and some hemorrhagic softening of that structure.  Note also the secondary brain stem (Duret) hemorrhages in the dorsal midbrain.  Also note the ragged destruction of the right cerebral peduncle (Kernohan\'s notch, KN) due to compression of the opposite peduncle against the free edge of the tentorium.  The occurrence of this lesion can result in a paradoxical paresis ipsilateral to the side of the mass lesion.',],
	['Slide07.jpg', 'Sections through the rostral brain stem showing secondary Duret hemorrhages.  These hemorrhages are the result of transtentorial herniation with rupture of penetrating vessels from the base of the brain due to the vessels remaining anchored while the brain stem shifts downward.',],
	['Slide08.jpg', '',],
    ['Slide09.jpg', 'Take Home Points',]
];

var neuro_lab04_case02 =
[
	['Slide10.jpg', 'Saggital Head motion.',],
	['Slide10a.jpg', 'Head motion.',],
	['Slide11.jpg', 'Coronal sections through the frontal lobes.  In the bottom section at the level of the thalamus note the thinning of the corpus callosum and some shrinkage of the hypothalamus around the third ventricle.  The hemispheric white matter has patchy dark discoloration.',],
	['Slide12.jpg', 'Coronal section at the level of the hypothalamus showing shrinkage of the hypothalami as well as enlargement of the third ventricle.  There is discoloration of the fornices (F) and mammillary bodies (MB).  Also note the discoloration of the parasagittal white matter.',],
	['Slide13.jpg', 'Coronal section at the level of the posterior thalamus with marked thinning of the corpus callosum.',],
	['Slide14.jpg', 'Coronal section at the level of the splenium of the corpus callosum.  Note the discoloration in the superior portion of the splenium indicative of an old hemorrhagic lesion.  The thinning of the corpus callosum and hemorrhagic lesions in the corpus callosum are suggestive of old diffuse axonal injury involving that structure.',],
	['Slide15.jpg', 'Transverse sections through the rostral brain stem showing atrophy in the dorsolateral aspects, particularly involving the midbrain and rostral pons.  Note the enlargement of the cerebral aqueduct and rostral portion of the fourth ventricle.  These areas are classical sites for involvement by shearing injury.',],
	['Slide16.jpg', 'Transverse sections through the more caudal aspects of the brain stem.  Note the shrinkage of the caudal basis pontis (top left) as well as shrinkage and discoloration of the pyramidal tracts in the medulla.  These changes also are due to diffuse axonal injury and account for this patient\'s paralytic symptoms.',],
	//['Slide17.jpg', 'A microscopic section through the pons showing a brightly eosinophilic axonal spheroid typical of the type of changes seen in diffuse axonal injury.  These spheroids may persist for many years after the traumatic event.  Hemosiderin is present in an adjacent macrophage.',],
	//['Slide18.jpg', 'Microscopic section through the corpus callosum near the ventricle.  Note the pale discoloration due to loss of myelinated fibers near the portion abutting upon the ventricle.',],
	['Slide19.jpg', 'A section through the hypothalamus near the mammillary body showing frequent axonal spheroids, indicative of diffuse axonal injury.',],
	['Slide20.jpg', 'Take Home Points',]
];

var neuro_lab04_case03 =
[
	['Slide22.jpg', 'MRI with FLAIR and T1 with contrast. There is a T2-FLAIR hyperintensity in the left temporal lobe corresponding to both the tumor and surrounding edema. The tumor is better defined in the T1 image with contrast, showing a rim-enhancing pattern. The T1-hypointensity adjacent to the tumor mass is due to edema.',],
	['Slide23.jpg', 'Coronal section of the brain at the level of the hypothalamus showing enlargement of the left hemisphere with an area of apparent gross necrosis (N). In the left temporal lobe, there also is swelling in the inferior portions of the frontal lobe.',],
	['Slide24.jpg', 'Similar involvement of the temporal and frontal lobes slightly posterior to #2. Note the mass effect on both 2 and 3 with shift from left to right.',],
	['Slide25.jpg', 'Coronal sections in the parietal and occipital regions with involvement by tumor in the left hemisphere. Characteristic features of a glial tumor are its infiltrating nature with distention of normal structures and some blurring of normal anatomic margins. Foci of gross necrosis are typical of glioblastoma multiforme.',],
	['Slide26.jpg', 'Coronal sections in the parietal and occipital regions with involvement by tumor in the left hemisphere. Characteristic features of a glial tumor are its infiltrating nature with distention of normal structures and some blurring of normal anatomic margins. Foci of gross necrosis are typical of glioblastoma multiforme.',],
	['Slide27.jpg', 'Photomicrograph of the tumor showing hypercellularity within an astrocytic neoplasm with occasional mitotic figures.',],
	['Slide28.jpg', 'Hypercellular glial neoplasm with occasional atypical giant cells indicating nuclear and cellular pleomorphism.',],
	['Slide29.jpg', 'Photomicrograph of the tumor with prominent vascular proliferation having glomeruloid features.',],
	['Slide30.jpg', 'necrosis',],
	['Slide31.jpg', 'Histologic features',],
	['Slide32.jpg', 'Take Home Points',]
];

var neuro_lab04_case04 =
[
	['Slide34.jpg', 'MRI (T2 and T1 with contrast) of cerebellar medulloblastoma at the time of diagnosis. There is hyperintensity on T2 as well as rim-enhancement on the T1 image, which is suggestive of a necrotic center.',],
	['Slide35.jpg', 'External appearance of the base of the brain at autopsy showing tumor in the region of the inferior vermis. There is opacification of the leptomeninges in the inferior frontal and medial temporal regions suggestive of tumor infiltration. The optic chiasm also is dilated.',],
	['Slide36.jpg', 'External appearance of the cerebellar region showing tumor in the inferior midline and over the leptomeninges.',],
	['Slide37.jpg', 'The anterior superior surface of the cerebellum showing tumor in the leptomeninges.',],
	['Slide38.jpg', 'Coronal section of the cerebellum and brain stem showing tumor in the midline of the cerebellum and involving the cerebellar leptomeninges.',],
	//['Slide39.jpg', 'Transverse sections of the midbrain with overlying cerebellum showing tumor involvement of the leptomeninges and extension into the dorsal brainstem.',],
	['Slide40.jpg', 'Whole mount of a microscopic section of the cerebellum showing extensive infiltration of the leptomeninges by medulloblastoma.',],
	['Slide41.jpg', 'Higher power micrograph showing tumor in the subarachnoid space (SAS) with some infiltration of the molecular layer of the cortex.',],
	['Slide42.jpg', 'High power of the tumor showing undifferentiated small blue cells typical of medulloblastoma.',],
	['Slide43.jpg', 'Section of pons and cerebellum showing extensive tumor involvement of the leptomeninges of the cerebellum as well as apparent involvement of the ventricular system.',],
	['Slide44.jpg', 'Low magnification microscopic section showing extensive tumor involvement of the leptomeninges of the pons and cerebellum and apparent involvement of the floor of the fourth ventricle.',],
	['Slide45.jpg', 'Low magnification microscopic section of medulla with involvement of the subarachnoid space and the fourth ventricle by tumor.',],
	['Slide46.jpg', 'Coronal section of the cerebral hemisphere at the level of the hippocampus showing some neoplastic thickening of the leptomeninges in the region of the hippocampus, as well as tumor mass (T) in the third ventricle.',],
	['Slide47.jpg', 'Low magnification microscopic section of the hippocampus showing tumor involvement of the leptomeninges and extension into the brain parenchyma.',],
	['Slide48.jpg', 'External appearance of the spinal cord with tumor-thickened subarachnoid space and roots of the cauda equina.',],
	['Slide49.jpg', 'Tumor involvement of the leptomeninges and spinal cord with some invasion into the parenchyma.',],
	['Slide50.jpg', 'Tumor involvement of the optic chiasm',],
    ['Slide51.jpg', 'Take Home Points',]
];

var neuro_lab04_case05 =
[
	['Slide53.jpg', 'MRI scan. The T2 seqeunces show a right frontal mass with T2 and FLAIR hyperintensity in the underlying brain secondary to edema. The tumor is isointense to brain on T2 and there is a thin bright band of signal between the brain and the mass due to a small amount of CSF. This bright band is suppressed on the FLAIR image.',],
	['Slide54.jpg', 'MRI scan. The T1 sequence before injection of gadolinium shows an isointense mass corresponding to the region seen in the previous figure. After injection of gadolinium there is diffuse enhancement of the mass with a thin “tail” of enhancement extending from the mass along the dura.',],
	['Slide55.jpg', 'Microscopic figure of meningioma with nests and whorls of meningothelial cells.',],
	['Slide56.jpg', 'Concentric calcifications (psammoma bodies) are present. Another common feature of meningothelial cells are clear areas within the nucleus known as pseudoinclusions which are formed by cytoplasmic invagination into the nucleus.',],
	['Slide57.jpg', 'Take Home Points',]
];

// BJS LAB 03 COMPONENTS

var minicase40 = 
[
	['Minicase40_01.jpg', 'Demonstrates the vascular supply to the metaphyseal end of bones where osteomyelitis commonly occurs by hematogenous spread to the microvasculature.'],
	['Minicase40_02.jpg', 'Acute osteomyelitis demonstrating acute suppuration and fragments of irregular scalloped necrotic bone (sequestrum).'],
	['Minicase40_03.jpg', 'X-ray of acute osteomyelitis demonstrating lytic lesion (x) with extension to cortex that has incited a periosteal thickening (arrow) and reaction (periostitis).'],
	//['Minicase40_04.jpg', 'X-ray of acute osteomyelitis demonstrating lytic areas and fragments of necrotic bone (sequestrum) having a sclerotic appearance.'],
	//['Minicase40_05.jpg', 'Bar graph demonstrating relative frequency of symptoms occurring with initial episode of osteomyelitis as compared to recurrence.'],
	['Minicase40_06.jpg', 'Draining sinus tracts to skin in diabetic patient with osteomyelitis in the ankle area.'],
	['Minicase40_07.jpg', 'Microscopic demonstration of sinus tract (from slide 6) showing sinus tract with thickened epidermis lining one margin, and chronic inflammation with granulation tissue opposite.'],
	//['Minicase40_08.jpg', 'Chronic osteomyelitis demonstrating replacement of acute suppuration by chronic inflammation and granulation tissue. Irregular trabeculae of reactive new bone formation (x) are present.'],
	['Minicase40_09.jpg', 'Chronic osteomyelitis demonstrating dense new bone formation (involucrum) that forms subperiosteally and tends to enclose the inflammatory focus.'],
	['Minicase40_09a.jpg', 'Chronic osteomyelitis demonstrating dense new bone formation (involucrum) that forms subperiosteally and tends to enclose the inflammatory focus.'],
	['Minicase40_10.jpg', 'X-ray of subperiosteal new bone formation (involucrum).'],
	['Minicase40_11.jpg', 'Chronic osteomyelitis with sclerotic pattern of new bone formation referred to as Garre\'s sclerosing osteomyelitis.'],
	['Minicase40_12.jpg', 'Specimen of resected right leg.  There is a mass-like swelling of soft tissues about the knee that was indurated.  The knee area has been partly dissected but residual sinus tracts are still evident.'],
	['Minicase40_13.jpg', 'Low magnification of squamous cell carcinoma (x) arising in a long-standing sinus tract. Residual squamous epithelial cell lining (arrow) is present in this slide.'],
	['Minicase40_14.jpg', 'Intermediate magnification of squamous cell carcinoma arising in a long-standing sinus tract.'],
	['Minicase40_15.jpg', 'Renal biopsy demonstrates early stage of amyloidosis with glomerular eosinophilic deposits in mesangium and along capillary basement membranes.'],
	['Minicase40_16.jpg', 'Jones silver preparation demonstrating amyloid deposits.'],
	['Minicase40_17.jpg', 'Congo red stain with polarization shows characteristic "apple green" birefringence of amyloid deposits.'],
	['Minicase40_18.jpg', 'Electron micrographs at low and high magnification demonstrating amyloid. At high magnification (slide 19) amyloid has characteristic haphazard filamentous deposition.'],
	['Minicase40_19.jpg', 'Electron micrographs at low and high magnification demonstrating amyloid. At high magnification (slide 19) amyloid has characteristic haphazard filamentous deposition.']
];

var minicase54 = 
[
	['Minicase54_01.jpg', 'Gross image of swollen joint'],
	['Minicase54_02.jpg', 'MSU crystal, brightfield illumination'],
	['Minicase54_03.jpg', 'MSU crystals, polarized light, 60x – showing strong birefringence'],
	//['Minicase54_04.jpg', 'MSU: Cytospin preparation with Wright’s stain, 60x, compensated polarized light']
];

var minicase55 = 
[
	['Minicase55_01.jpg', 'Chondrocalcinosis – calcification of cartillage within knee joint'],
	['Minicase55_02.jpg', 'CPPD crystal, brightfield illumination'],
	['Minicase55_03.jpg', 'CPPD crystals, Wright stain, 60x brightfield'],
	['Minicase55_04.jpg', ''],
	['Minicase55_05.jpg', 'CPPD crystals, Wright stain, 60x polarized – Weak birefringence'],
	//['Minicase55_06.jpg', 'MSU: Cytospin preparation with Wright’s stain, 640x, compensated polarized light'],
];


var micro223 =
[
	['Skin_Lab01_01.jpg', '2x - Nodules of crystals (x) develop in the subcutaneous collagen surrounded by cells reacting to the deposit of material foreign to the site (arrows).'],
	['Skin_Lab01_02.jpg', '4x - Lymphocytes, histiocytes, and multinucleate giant cells surround and contain the crystal deposits (x). The crystals actually dissolve in standard tissue processing but the delicate white needle shaped spaces are then seen where the crystals once were.'],
	['Skin_Lab01_03.jpg', '20x - Lymphocytes, histiocytes, and multinucleate giant cells surround and contain the crystal deposits (x). The crystals actually dissolve in standard tissue processing but the delicate white needle shaped spaces are then seen where the crystals once were.']
];

var micro224 =
[
	['Skin_Lab01_04.jpg', 'The hyperplastic synovium acquires a papillary morphology.'],
	['Skin_Lab01_05.jpg', '10x - Sheets of lymphocytes and plasma cells are present in the subsynovial connective tissue. 2 rice bodies, free floating aggregates of fibrin and inflammation, flank this inflamed synovium.'],
	['Skin_Lab01_06.jpg', '40x - Lymphocytes and plasma cells in the subsynovium.'],
	['Skin_Lab01_07.jpg', '20x - Synovial cells lining villi are hypertrophied and multilayered.']
];

var micro225 =
[
	['Skin_Lab01_08a.jpg', 'X-ray hands'],
	['Skin_Lab01_08.jpg', 'The articular cartilage of a joint in advanced rheumatoid arthritis is thinned and covered by fibrous pannus.'],
	['Skin_Lab01_09.jpg', 'The fibrous pannus has eroded through the articular cartilage and overlies subchondral bone.']
]

var micro226 =
[
	['Skin_Lab01_11.jpg', '4x - Low power photos of the irregular areas of necrobiosis (X) within the subcutaneous soft tissue.'],
	['Skin_Lab01_12.jpg', '4x - Low power photos of the irregular areas of necrobiosis (X) within the subcutaneous soft tissue.'],
	['Skin_Lab01_13.jpg', '10x - Central necrobiosis is surrounded by a well-developed palisade of elongate histiocytes admixed with other inflammatory cells.'],
	['Skin_Lab01_14.jpg', '40x - The central necrobiotic focus is homogeneous and eosinophilic.']
];

var micro350 = 
[
	['Skin_Lab01_15.jpg', '2x - The marrow space is replaced by fibrosis and an inflammatory infiltrate. Bone spicules appear thin.'],
	['Skin_Lab01_16.jpg', '10x - Neutrophils surround bone spicules which appear ragged due to irregular resorbtion. Osteocytes are not present in most lacunae ie: the bone is not viable.'],
	['Skin_Lab01_17.jpg', '40x - The inflammatory infiltrate is predominantly neutrophilic, with a few lymphocytes and cellular debris in the background.']
];

var micro351 =
[
	['Skin_Lab01_18.jpg', 'Center fibrosis 4x - Sheets of primitive mesenchymal cells and blood vessels are present in a recent fracture adjacent to necrotic material including bone shards.'],
	['Skin_Lab01_19.jpg', 'Center fibrosis 10x - Sheets of primitive mesenchymal cells ard blood vessels are present in a recent fracture adjacent to necrotic material including bone shards.'],
	['Skin_Lab01_20.jpg', 'Center fibrosis 20x - Sheets of primitive mesenchymal cells ard blood vessels are present in a recent fracture adjacent to necrotic material including bone shards.'],
	['Skin_Lab01_21.jpg', '4x osteoid - As the callus progresses, cellular hyaline cartialge and osteoid are deposited for stability. These materials will eventually be remodeled into lamellar bone.'],
	['Skin_Lab01_22.jpg', '10x procallus - Higher magnification of the osteoid (pink) and cartilage (blue) which are rapidly produced to stabilize the fracture.']
];

var micro352 =
[
	['Skin_Lab01_23a.jpg', 'X-ray of shoulder'],
	['Skin_Lab01_23.jpg', '2x, surface: The cartilage on the articular surface of the joint is irregular and fibrillated.'],
	['Skin_Lab01_24.jpg', '20x, surface: The cartilage on the articular surface of the joint is irregular and fibrillated.'],
	['Skin_Lab01_25.jpg', '20x, eburnation: with continued activity, the articular surface wears down completely so that the bone is polished smooth by the motion of the joint. This is eburnation.'],
	['Skin_Lab01_26.jpg', '40x_medulla: fibrous tissue from the subchondral area fills in spaces and attempts to resurface the joint.']
];

// BJS LAB 01 COMPONENTS

var minicase41 =
[
	['Minicase41_01.jpg', 'Medium power of Ewing\'s sarcoma (ES), showing a sheet of uniform, small, round-to-oval cells (X).'],
	['Minicase41_02.jpg', 'High-power view of ES.'],
	['Minicase41_03.jpg', 'Positive PAS stain in ES (without diastase).'],
	//['Minicase41_04.jpg', 'Small-cell lymphoma of bone.'],
	['Minicase41_05.jpg', 'Small-cell lymphoma of bone.'],
	['Minicase41_06.jpg', 'Neuroblastoma, metastatic to bone.'],
	['Minicase41_07.jpg', 'Embryonal rhabdomyosarcoma, which involved bone by direct extension from soft tissue. This tumor is also often PAS-positive.'],
	['Minicase41_08.jpg', 'Small-cell osteosarcoma (no osteoid seen in this field).'],
	['Minicase41_09.jpg', 'Mesenchymal chondrosarcoma, showing transition from ES-like area to one showing chondroid differentiation.'],
	['Minicase41_10.jpg', 'EM of ES. Note the presence of glycogen pools and appositional plaques at cell membranes. neurosecretory granules and thick/thin filament complexes are lacking in the cytoplasm of tumor cells, as is external basal lamina. These findings argue against diagnoses of neuroblastoma, and rhabdomyosarcoma, respectively.'],
	['Minicase41_11.jpg', 'EM of neuroblastoma, showing circular profile of a dendritic tumor cell extension. It contains dense-core and clear secretory granules (X). These are unique to neuroblastoma among small-cell tumors of bone.'],
	['Minicase41_12.jpg', 'EM of embryonal rhabdomyosarcoma. Thick/thin filament complexes are present in the cytoplasm of tumors cells, which show focal condensation into Z-band-like structures. These findings are pathognomonic of rhabdomyosarcoma.'],
	['Minicase41_13.jpg', 'Immunoperoxidase stain for CD99/mic 2. The brown staining represents reactivity for CD99. It is present on practically all tumor cells, whereas the intervening stromal cells are negative for CD 99.']
];

var micro200 =
[
	['Skin_Lab02_01a.jpg', 'X-ray bone.'],
	['Skin_Lab02_01.jpg', '4x - The new bone (osteoid) can be seen as pink and purple thin trabeculae (circled) within the cellular tumor.'],
	['Skin_Lab02_02.jpg', '10x - The osteoid (arrows) produced by the tumor in this field is purple because it is mineralized. Calcium contain tissue appears dense purple if it is not decalcified during tissue processing. The osteoid is produced directly by the malignant cells in the tumor.'],
	['Skin_Lab02_03.jpg', '40x - This high power photo demonstrates delicate osteoid (arrows) produced by the tumor cells.']
];

var micro353 =
[
	['Skin_Lab02_04.jpg', '4x - The tumor (X) is well circumscribed and surrounded by a rim of dense bone. (This is a characteristic finding in x-rays of this tumor. In this particular case the sclerotic rim is not well developed.)'],
	['Skin_Lab02_05.jpg', '2x - The tumor (X) is well circumscribed and surrounded by a rim of dense bone.'],
	['Skin_Lab02_06.jpg', '20x - Active osteoblasts are producing the new bone, referred to as osteoid. The vascular stroma is prominent.'],
	['Skin_Lab02_07.jpg', '40x - Active osteoblasts are producing the new bone, referred to as osteoid. The vascular stroma is prominent.']
];

var micro355 =
[
	['Skin_Lab02_08a.jpg', 'X-ray bone'],
	['Skin_Lab02_08.jpg', '10x - At low power, giant cells (arrows) appear evenly distributed throughout the tumor.'],
	['Skin_Lab02_09.jpg', '20x - Hemorrhage is also common and the blood may be localized, or evenly distributed.'],
	['Skin_Lab02_10.jpg', '40x - The background mononuclear cells have oval, irregular shaped nuclei similar to the nuclei within the multinucleated giant cells. The giant cells may contain as many as 100 nuclei but usually have 5-20 in the plane of section.']
];

var micro356 =
[
	['Skin_Lab02_11.jpg', '4x - The lobules of hyaline cartilage are surrounded by a thin rim of bone (arrows) produced by enchondral ossification of the cartilage.'],
	['Skin_Lab02_12.jpg', '10x - The enchondroma is hypocellular with abundant chondroid matrix between cells.'],
	['Skin_Lab02_13.jpg', '40x - Each chondrocyte is small with a single, dark nucleus. Nucleoli are not apparent.']
];

var micro357 =
[
	['Skin_Lab02_14.jpg', '10x: clusters of chondrocytes in a low grade chondrosarcoma'],
	['Skin_Lab02_15.jpg', '40x: clusters of chondrocytes in a low grade chondrosarcoma'],
	['Skin_Lab02_16.jpg', '10x: variation in nuclear size is apparent in a mid to high grade chondrosarcoma'],
	['Skin_Lab02_17.jpg', '10x: variation in nuclear size is apparent in a mid to high grade chondrosarcoma'],
	['Skin_Lab02_18.jpg', '20x: variation in nuclear size is apparent in a mid to high grade chondrosarcoma'],
	['Skin_Lab02_19.jpg', '20x binucleate: multiple binucleate chondrocytes are present in this chondrosarcoma'],
	['Skin_Lab02_20.jpg', '20x bone inv: chondrosarcoma invades the medullary cavity of the bone, surrounding trabeculae']
];

var micro365 =
[
	['Skin_Lab02_21.jpg', '10x - The tumor is pale due to the myxoid matrix and lipid content of the tumor. Thin, branching "chicken feet-like" blood vessels are present.'],
	['Skin_Lab02_22.jpg', '20x - Tumor cells with vacuolated cytoplasm surround the thin branching vessels.'],
	['Skin_Lab02_23.jpg', '40x - Cells may contain one or more vacuoles which indent the nucleus'],
	['Skin_Lab02_24.jpg', '40x - More cellular areas contain cells with less cytoplasm and round nuclei (round cell liposarcoma).']
];

var micro367 =
[
	['Skin_Lab02_25.jpg', '4x - Sheets of small blue cells separated by pink fibrous bands is the typical appearance of Ewing Sarcoma. Necrosis (top of photo - pink area) may be prominent.'],
	['Skin_Lab02_26.jpg', '10x - The cells are small and regularly shaped. The cytoplasm is scant and clear or pale pink.'],
	['Skin_Lab02_27.jpg', '40x - Smaller cells scattered throughout the tumor may be mitoses or pyknotic tumor cells.']
];

// BJS LAB 02 COMPONENTS

var micro156 =
[
	['Skin_Lab03_01.jpg', 'An ulcerated hyperkeratotic invasive squamous cell carcinoma on the helix of the ear.'],
	['Skin_Lab03_02.jpg', 'Low power (2x) of an invasive squamous cell carcinoma that presented on the skin as a raised nodule. At this power you can see some normal epidermis (on right, arrowed) being pushed up and undermined by cords and nests of cells (X) that on higher power are malignant but have retained features of squamous differentiation.'],
	['Skin_Lab03_03.jpg', '10x field of undermining squamous cell carcinoma. Even at this power the nests of cells have identifiable features of squamous differentiation, most notably abundant pink cytoplasm in the center of the nests.'],
	['Skin_Lab03_04.jpg', 'Invasive squamous cell carcinoma (SCCA) undermining normal epidermis (20x).'],
	['Skin_Lab03_05.jpg', 'Squamous cell carcinomas arise from the skin surface (presumably from actinic keratosis). The surface origin of this particular SCCA is not easily seen as the surface is heavily eroded (top of field). (20x)'],
	['Skin_Lab03_06.jpg', 'Invasive squamous nest (20x). Compare this with a nest of basal cell carcinoma. Although atypical, these nests are clearly squamous. However no distinct keratin pearls are present to confirm the diagnosis.'],
	['Skin_Lab03_07.jpg', 'A keratin pearl (X) a clear sign of squamous differentiationis noted in the lower left, compared with a basal cell carcinoma nest in upper right (60x).'],
	['Skin_Lab03_08.jpg', 'Another less well formed keratin pearl. (60x)'],
	['Skin_Lab03_09.jpg', 'This tumor is well differentiated (i.e. it deviates only minimally from the apperaance of normal squamous epithelium) but the frequent mitotic activity (as seen here, including a tri-polar atypical mitotic figure [circled]) and invasiveness prove that it is in fact malignant. (60x)']
];

var micro188 =
[
	['Skin_Lab03_10.jpg', 'Multiple brown warty papules with a “stuck on” appearance on this elderly women’s back. Close up in the upper right of a typical seborrheic keratosis. Very dark, irregular outline and greasy, slightly exophytic, papule. The variation in color and irregular outline brings a melanoma into the differential diagnosis. A shave biopsy will clearly separate these totally benign lesions from melanoma.'],
	['Skin_Lab03_11.jpg', 'Low power (2x) of a seborrheic keratosis. The lesion displays prominent papillomatosis, hyperkeratosis and numerous keratin pseudocysts (pseudo-horn cysts). These pseudocysts actually are just invaginations from the surface and not true cysts, and can be seen with a hand lens on clinical examination. At this power the lesion’s clear demarcation and exophytic appearance are best appreciated.'],
	['Skin_Lab03_12.jpg', 'A large pseudo horn cyst [X] (4x). The hyperkeratosis (without parakeratosis like that seen in the common wart), papillomatosis and epithelial hyperplasia are evident here. The epithelial proliferation has a reticular, or “net-like” quality often times seen in seborrheic keratoses.'],
	['Skin_Lab03_13.jpg', '4 High power view of a seborrheic keratosis pseudo-horn cyst (20x).'],
	['Skin_Lab03_14.jpg', 'Prominent hyperkeratosis, papillomatosis, epithelial hyperplasia and several horn cysts are present in this 10x field of a seborrheic keratosis. The proliferating neoplastic cells present here have a bland appearance, without atypia, and a small blue appearance like the basal cells of the normal epidermis.'],
	['Skin_Lab03_15.jpg', 'This field of a seborrheic keratosis demonstrates the prominent pigmentation [arrows]. These lesions are often darkly pigmented, they may clinically mimic a melanocytic lesion like a melanoma.'],
	['Skin_Lab03_16.jpg', 'Proliferation of basaloid small keratinocytes, hyperkeratosis (on the right) and a small pseudo-horn cyst.'],
	['Skin_Lab03_17.jpg', 'Prominent reticular epithelial hyperplasia in this pigmented seborrheic keratosis.']
];

var micro190 =
[
	['Skin_Lab03_18.jpg', 'All the macroscopic features of melanoma: Asymmetry, irregular borders, variegated colors, elevation of the central portion and large diameter (>1cm)'],
	['Skin_Lab03_19.jpg', 'Low power picture of melanoma with a primarily superficial spreading pattern. A proliferation of cells are present along the dermal-epidermal junction with a diffuse lymphocytic inflammatory response beneath them. (2x N83-8950)'],
	['Skin_Lab03_20.jpg', '4x field showing similar findings. (N83-8950).'],
	['Skin_Lab03_21.jpg', 'The proliferating cells in this 10x field are seen to have abundant cytoplasm and extend both into the dermis and upward into the epidermis. The cells have abundant cytoplasm and their atypia and pleomorphism can be appreciated even at this low power. (N83-8950, 10x)'],
	['Skin_Lab03_22.jpg', 'Atypical melanocytes demonstrating a typical malignant finding of trans-epidermal migration by individual tumor cells [circled].'],
	//['Skin_Lab03_23.jpg', ''],
	['Skin_Lab03_24.jpg', 'Atypical melanocytes. Significant nuclear pleomorphism, nuclear outline irregularities and prominent nucleoli, as well as scattered melanin pigment, are all typical findings in melanoma. (N83-8950, 60x)'],
	['Skin_Lab03_25.jpg', 'This is a low power view of a melanoma with a more nodular growth pattern (N83-11491, 2x)'],
	['Skin_Lab03_26.jpg', 'Slightly higher power view showing a dermal tumor mass composed of blue appearing cells with minimal amount of cytoplasm. (N83-11491, 4x)'],
	['Skin_Lab03_27.jpg', 'Higher power showing small minimal atypical malignant melanocytes. (20x N83-11491)'],
	['Skin_Lab03_28.jpg', 'The other side of the same melanoma shows more spindled and more atypical appearing malignant melanocytes. (N83-11491, 4x)'],
	['Skin_Lab03_29.jpg', 'Pleomorphic atypical nearly spindled melanoma cells (10x N83-11491)'],
	['Skin_Lab03_30.jpg', '20x field showing spindled atypical melanoma cells (N83-11491).'],
	['Skin_Lab03_31.jpg', 'Melanoma cells with marked atypia (N83-11491, 60x)'],
	['Skin_Lab03_32.jpg', 'Atypical melanocytes with a mitotic figure [circled] (60x N83-11491)'],
	['Skin_Lab03_33.jpg', 'Normal cerebral cortex overlying a cerebral melanoma metastasis'],
	['Skin_Lab03_34.jpg', 'Melanoma tumor nodule [X] in the white matter.'],
	['Skin_Lab03_35.jpg', 'The tumor is composed of loose cells, cluster and ribbons of pleomorphic malignant melanocytes with very prominent pigment (metastatic melanomas don’t always have associated pigment).'],
	['Skin_Lab03_36.jpg', 'Large, pleomorphic tumor cells with pigment, and intranuclear inclusions. This field has a mitotic figure.'],
	['Skin_Lab03_37.jpg', 'Similar high power picture with prominent pigment.']
];

var micro216 =
[
	['Skin_Lab03_38.jpg', 'Basal cell carcinoma: nodular type. A solitary, shiny, red nodule with large telangiectatic vessels.'],
	['Skin_Lab03_39.jpg', 'Superficial basal cell carcinoma. Bright red slightly elevated lesion with a rolled border.'],
	['Skin_Lab03_40.jpg', 'Basal cell carcinoma: sclerosing type. A large depressed area resembling a scar or morphea. The lateral margin is slightly raised, and small areas of telangiectasia are present.'],
	['Skin_Lab03_41.jpg', 'Low power (2x) showing a nodular type of basal cell carcinoma (BCC). Nests of blue basaloid cells extend from the base of the epidermis deep into and probably through the dermis to the subcutaneous fat.'],
	['Skin_Lab03_42.jpg', 'This low power picture demonstrates how this nodular BCC is pushing the overlying epidermis up. This explains the clinical appearance of a raised papule.'],
	['Skin_Lab03_43.jpg', 'The dermal nests of basaloid cells with peripheral palisading (4x).'],
	['Skin_Lab03_44.jpg', 'Basaloid nests growing down in islands and trabeculae (i.e. beams) into the dermis. The neoplastic basal cells have a similar appearance to the basal layer of the overlying normal epidermis. Also present in this picture is prominent peripheral palisading of the neoplastic basal cells on the periphery of the nodules (i.e. the cells long axis are arranged radially and parallel to their neighbors).(10x)'],
	['Skin_Lab03_45.jpg', 'Higher power of the same basal cell carcinoma nests [X]. Also notice the atypical features of these basal cells as compared to the normal basal cells [arrows] above that are in the epidermis.(20x)'],
	['Skin_Lab03_46.jpg', 'High power (60x) view of a basal cell carcinoma nest has all the characteristic features of BCC: Nested growth, atypical cells with basaloid features (scant cytoplasm, oval nuclei…), atypia and nuclear palisading at the nests edge.']
];

var N81124 =
[
	
	['Skin_Lab03_47.jpg', 'Herpes labialis. Grouped confluent vesicles with an erythematous rim on the lips.'],
	['Skin_Lab03_48.jpg', 'Herpetic whitlow. Painful, grouped, confluent vesicles on an erythematous edematous base on the distal finger.'],
	['Skin_Lab03_49.jpg', 'Low power appearance of a herpetic vesicle. The epidermis is split and filled `with fluid and acantholytic keratinocytes. The vesicle [X] is formed by so-called reticular (“net-like”) degeneration of the epidermis. The vesicle is filled with serous fluid and keratinocytes that have lost their inter-connections (acanthosis). Many of these acantholytic keratinocytes demonstrate viral cytopathic changes that are better seen on higher magnification.'],
	['Skin_Lab03_50.jpg', 'Higher power pictures demonstrate acantholytic keratinocytes with viral cytopathic effect. The cytopathic effect is classically described as nuclear margination of chromatin with a violet “ground glass” appearance. This change can be seen in keratinocytes with single nuclei, but the more conspicuous are those keratinocytes that demonstrate multinucleation and the nuclear changes. These multinucleated cells have been referred to as having a bag of marbles appearance.'],
	['Skin_Lab03_51.jpg', 'Higher power pictures demonstrate acantholytic keratinocytes with viral cytopathic effect. The cytopathic effect is classically described as nuclear margination of chromatin with a violet “ground glass” appearance. This change can be seen in keratinocytes with single nuclei, but the more conspicuous are those keratinocytes that demonstrate multinucleation and the nuclear changes. These multinucleated cells have been referred to as having a bag of marbles appearance.'],
	['Skin_Lab03_52.jpg', 'Higher power pictures demonstrate acantholytic keratinocytes with viral cytopathic effect. The cytopathic effect is classically described as nuclear margination of chromatin with a violet “ground glass” appearance. This change can be seen in keratinocytes with single nuclei, but the more conspicuous are those keratinocytes that demonstrate multinucleation and the nuclear changes. These multinucleated cells have been referred to as having a bag of marbles appearance.'],
	['Skin_Lab03_53.jpg', 'Higher power pictures demonstrate acantholytic keratinocytes with viral cytopathic effect. The cytopathic effect is classically described as nuclear margination of chromatin with a violet “ground glass” appearance. This change can be seen in keratinocytes with single nuclei, but the more conspicuous are those keratinocytes that demonstrate multinucleation and the nuclear changes. These multinucleated cells have been referred to as having a bag of marbles appearance.']
];

var N821526 =
[
	['Skin_Lab03_54.jpg', 'Verruca plana (flat warts). Flat topped, pink papules with sharp margination and minimal hyperkeratosis on the dorsum of the hands and fingers.'],
	['Skin_Lab03_55.jpg', 'Verruca vulgaris (common warts). Hyperkeratotic papules.'],
	['Skin_Lab03_56.jpg', 'Low power (2x) view of a typical verruca vulgaris. At this power the histologic triad typical of common warts is readily apparent. There is thickening of the epidermal spinous layer (acanthosis), with upward growth of epidermis and papillary dermis in spires (papillomatosis) and increase in the size of the stratum corneum (hyperkeratsosis). The typical finding of inward bending of the rete pegs toward the center is also prominent in this example.'],
	['Skin_Lab03_57.jpg', 'Medium power (4x) photo highlighting the spires of the papillomatosis [green arrows] and prominent hyperkeratosis [blue arrow].'],
	['Skin_Lab03_58.jpg', 'Higher power (10x) of the hyperkeratotic surface of the wart showing the tip of a papilla with overlying stack of parakeratosis [circled] (i.e. thickened stratum corneum with retained keratinocyte nuclei).'],
	['Skin_Lab03_59.jpg', 'High power (20x) of another papillary tip with prominent parakeratosis.'],
	['Skin_Lab03_60.jpg', 'Low power (4x) view of the base of the wart. The central bending of the rete pegs and the prominent coarse keratohyaline granules of the stratum granulosum are visible.'],
	['Skin_Lab03_61.jpg', 'Prominent keratohyaline granules [circled] (10x).'],
	['Skin_Lab03_62.jpg', 'Prominent keratohyaline granules (20x).']
];

var N831833 =
[
	['Skin_Lab03_63.jpg', 'Two benign nevi. The top, slightly elevated mole is a dermal nevus, the flat mole on the bottom histologically is junctional.'],
	['Skin_Lab03_64.jpg', 'Intradermal nevus at 2x. The nevus involves nearly the entire dermis.'],
	['Skin_Lab03_65.jpg', 'Edge of the intradermal nevus (4x).'],
	['Skin_Lab03_66.jpg', 'This 10x field shows the nevus to be composed of small cells with fine nuclear chromatin (i.e. no nucleoli, or clumpy chromatin), and focal dark brown pigment.'],
	['Skin_Lab03_67.jpg', 'Nest of nevus cells (60x). These nevus cells have a completely banal appearance (compare with the atypia seen in the melanoma slide cases). At the surface, as in this field, the nevus cell are plump with a moderate amount of cytoplasm. As they extend down into the dermis they “mature” (i.e. they get smaller and spindle up, starting to resemble nerve, so-called neuritization).'],
	['Skin_Lab03_68.jpg', 'Nevus cells extending down into the deep reticular dermis. Notice how the nests become less prominent as the cells “mature” into more small spindled forms. (10x)'],
	['Skin_Lab03_69.jpg', 'Higher power of nevus cells “maturing” at the base of the lesion. (20x)'],
	['Skin_Lab03_70.jpg', 'Small mature nevus cells at the base of the nevus (60x)']
]

var N8011882B =
[
	['Skin_Lab03_71.jpg', 'Large macule typically on the face with irregular borders and striking variegation of pigmentatoin (white, tan, brown, and black)'],
	['Skin_Lab03_72.jpg', 'A flat lesion with prominent dermal elastosis and a disruption along the dermal-epidermal junction. (2x N80-11882)'],
	['Skin_Lab03_73.jpg', 'Slightly higher power of lentigo maligna. (4x N80-11882)'],
	['Skin_Lab03_74.jpg', 'This field doesn’t show the melanocytic proliferation well but does show extensive solar elastosis of the dermis [X]. This change appears as blue discoloration of the dermal collagen. It is associated with chronic sun exposure and is frequently seen in pathology associated with chronic sun exposure, like actinic keratosis, squamous cell and basal carcinomas. (10x N80-11882)'],
	['Skin_Lab03_75.jpg', 'High power of the basophilic degeneration of collagen known as solar elastosis (60x N80-11882)'],
	['Skin_Lab03_76.jpg', 'Normal dermal collagen for comparison with solar elastosis.'],
	['Skin_Lab03_77.jpg', 'Subtle proliferation of atypical melanocytes along the dermal-epidermal junction, extending down the hair shaft. No invasive melanoma is present. (10x N80-11882)'],
	['Skin_Lab03_78.jpg', 'A single row of atypical melanocytes extending down along the hair shaft, a typical finding in lentigo maligna (20x N80-11882)'],
	['Skin_Lab03_79.jpg', 'Atypical melanocytes proliferating along the dermal-epidermal junction. (20x N80-11882)'],
	['Skin_Lab03_80.jpg', 'Higher power of the same (40x N80-11882)']
];

// LAB COLLECTIONS

var Neuro_Lab01 =
[
	['Intro', 'Introduction to Pathological Reactions', neuro_lab01_intro, neuro_lab01_dir, ],
    ['Case 01', 'SAH from ruptured LMCA aneurysm', neuro_lab01_case01, neuro_lab01_dir, ],
	['Case 02', 'Hypertensive pontine hemorrhage', neuro_lab01_case02, neuro_lab01_dir, ],
	['Case 03', 'Hemorrhagic infarct of the right middle cerebral artery', neuro_lab01_case03, neuro_lab01_dir, ],
	['Case 04', 'MCA dissection', neuro_lab01_case04, neuro_lab01_dir, ],
	// PRE-2010 CASES
    //['Case 04', 'Glioblastoma multiforme', neuro_lab01_case04, neuro_lab01_dir, '@2883'],
	//['Case 05', 'Medullablastoma', neuro_lab01_case05, neuro_lab01_dir, ]
	
];

var Neuro_Lab02 =
[
	['Case 01', 'Intraventricular Hemorrhage', neuro_lab02_case01, neuro_lab02_dir, ],
	['Case 02', 'Arnold-Chiari Syndrome', neuro_lab02_case02, neuro_lab02_dir, ],
	['Case 03', 'Parkinson\'s Disease', neuro_lab02_case03, neuro_lab02_dir, ],
	['Case 04', 'Alzheimer\'s Disease', neuro_lab02_case04, neuro_lab02_dir, '@2741'],
	['Case 05', 'ALS', neuro_lab02_case05, neuro_lab02_dir, ]
	
];

var Neuro_Lab03 =
[
	['Case 01', 'Suppurative Meningitis', neuro_lab03_case01, neuro_lab03_dir, ],
	['Case 02', 'Herpes Simplex Encephalitis', neuro_lab03_case02, neuro_lab03_dir, ],
	['Case 03', 'Aspergillosis', neuro_lab03_case03, neuro_lab03_dir, ],
	['Case 04', 'Multiple Sclerosis', neuro_lab03_case04, neuro_lab03_dir, '@2698'],
	['Case 05', 'Guillain-Barre Syndrome', neuro_lab03_case05, neuro_lab03_dir, ]
	
];

var Neuro_Lab04 =
[
	['Case 01', 'Subdural Hematoma', neuro_lab04_case01, neuro_lab04_dir, ],
	['Case 02', 'Diffuse Axonal Injury', neuro_lab04_case02, neuro_lab04_dir, ],
	['Case 03', 'Glioblastoma multiforme', neuro_lab04_case03, neuro_lab04_dir, '@2883'],
	['Case 04', 'Medullablastoma', neuro_lab04_case04, neuro_lab04_dir, ],
	['Case 05', 'Meningioma', neuro_lab04_case05, neuro_lab04_dir, ]
	
];

var BJS_Lab01 =
[
	['Case 01 (Minicase 41)', 'Ewings sarcoma', minicase41, bjs_lab01_dir,],
	['Case 02 (Micro 200)', 'Osteogenic Sarcoma', micro200, bjs_lab01_dir, '@2966'],
	['Case 03 (Micro 353)', 'Osteoid Osteoma', micro353, bjs_lab01_dir, '@2965'],
	['Case 04 (Micro 355)', 'Giant Cell Tumor of Bone', micro355, bjs_lab01_dir, '@2970'],
	['Case 05, Patient 1 (Micro 356)', 'Chondroma', micro356, bjs_lab01_dir, '@2972'],
	['Case 05, Patient 2 (Micro 357)', 'Chondrosarcoma', micro357, bjs_lab01_dir, '@2899'],
	['Case 06 (Micro 365)', 'Liposarcoma (Myxoid Type) of Mediastinum', micro365, bjs_lab01_dir, '@2985'],
	//['Case 07 (Micro 367)', 'Ewing\'s Sarcoma of Rib', micro367, bjs_lab01_dir, '@2988']
];

var BJS_Lab02 =
[
	['Case 01 (Micro 156)','Squamous Cell Carcinoma of the Skin', micro156, bjs_lab02_dir, '@2990'],
	['Case 02 (Slide 216)','Basal Cell Carcinoma of the Skin', micro216, bjs_lab02_dir, '@2884'],
	['Case 03 (Micro 188)','Slide 188: Seborrheic Keratosis, Skin', micro188, bjs_lab02_dir, '@2991'],
	['Case 04 (N81-124)','Herpes, Skin', N81124, bjs_lab02_dir, '@3004'],
	['Case 05 (N82-1526)','Verruca Vulgaris, Skin', N821526, bjs_lab02_dir, '@3005'],
	['Case 06 (N83-1833)','Benign Intradermal Nevus, Skin', N831833, bjs_lab02_dir, '@3007'],
	['Case 07 (N80-11882B)','Lentigo Maligna (Hutchinson Freckle)', N8011882B, bjs_lab02_dir, '@3009'],
	['Case 08 (Micro 190, N83-8950, N83-11491)','Malignant Melanoma of the Skin', micro190, bjs_lab02_dir, '@3000'],
];

var BJS_Lab03 =
[
	['Case 1 (Minicase 40)', 'Osteomyelitis', minicase40, bjs_lab03_dir,],
	['Case 1 (Micro 350', 'Acute Suppurative Osteomyelitis', micro350, bjs_lab03_dir, '@2942'],
	['Case 2 (Minicase 54)', 'Gout', minicase54, bjs_lab03_dir,],
	['Case 2 (Micro 223)', 'Gouty Tophus', micro223, bjs_lab03_dir, '@2913'],
	['Case 3 (Minicase 55)', 'Pseudogout', minicase55, bjs_lab03_dir,],
	['Case 4 (Micro 225)', 'Rheumatoid Arthritis, Joint', micro225, bjs_lab03_dir, '@2933'],
	['Case 4 (Micro 224)', 'Rheumatoid Synovitus', micro224, bjs_lab03_dir, '@2932'],
	['Case 4 (Micro 226)', 'Rheumatoid Nodule, Skin', micro226, bjs_lab03_dir, '@2936'],
	['Case 5 (Micro 351)', 'Healing Fracture', micro351, bjs_lab03_dir, '@2967'],
	['Case 6 (Micro 352)', 'Degenerative Osteoarthritis', micro352, bjs_lab03_dir, '@2902']
];


// HD2 PATHOLOGY COMPONENT LABS

var period2 =
[
	['Neuropath Lab 01', 'Neuro_Lab01', 'Cerebrovascular Disease and CNS', Neuro_Lab01],
	['Neuropath Lab 02', 'Neuro_Lab02', 'Pediatric and Degenerative Diseases', Neuro_Lab02],
	['Neuropath Lab 03', 'Neuro_Lab03', 'Infections and Myelin Disorders', Neuro_Lab03],
	['Neuropath Lab 04', 'Neuro_Lab04', 'Trauma and other Topics', Neuro_Lab04],
    ['Bone Joint & Skin Lab 01', 'BJS_Lab01', 'Soft Tissue Sacrcomas and Bone Tumors', BJS_Lab01],
	['Bone Joint & Skin Lab 02', 'BJS_Lab02', 'Pathology of the Skin: Benign vs. Malignant', BJS_Lab02],
	['Bone Joint & Skin Lab 03', 'BJS_Lab03', 'Osteomyelitis and Joint Pathology', BJS_Lab03],
];

