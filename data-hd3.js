//javascript document	


//initialize index values
var slide_index=0;
var image_index=0;

var list = "";

var info = "<br><span class=\"info\"><span style=\'color:#000000'>INTSTRUCTIONS</span><br>Click on one of the thumbnails to view its full sized image and description. <br>Red Case links (<span style='color: #993333'>Case NNN</span>) lead to the first slide of the case. <br><br><img src='assets/img/scope.gif' /> icon means there is a virtual slide available for a given specimen.  Click it to open the Spectrum web viewer.<br>When asked for login info, use:<br> user: lampstudent<br>pass: path0l0gy (p-a-t-h-'zero'-l-'zero'-g-y)<br> Note that you must be connected to the internet in order to view the virtual slides.<br><br><a target='blank' class='img' href='http://images.pathology.umn.edu/'>Click here</a> for a full list of virtual slides available for HD3.</span>"; 
var lec_info = "<br><span class=\"info\"><span style=\'color:#000000'>INTSTRUCTIONS</span><br><br>Click on the <span style='color: #993333'>lecture title</span> to view its 'lectures online' page.<br>Click the PPT icon <img src='09_images/pps_ccc.gif /> to download the lecture presentation.";

//help page section separator
var line_sep = "<br><br><hr class=\"hr1\" /><br>";

//lab image directories
var img = "_images/";
var thmb = "_thumbs/";
var mkd = "_marked/";
var lec_dir = "Lectures/";
var HD3_svs_dir ="http://images.pathology.umn.edu/";

var period = HD3; //sets current period
var svs_dir = HD3_svs_dir; //assigns the virtual slide url for the current period

//current lab directories relative to Content folder
var endo_lab_dir = "Labs/Endo_Lab/";
var renal_lab01_dir = "Labs/Renal_Lab01/";
var renal_lab02_dir = "Labs/Renal_Lab02/";
var renal_lab03_dir = "Labs/Renal_Lab03/";
var repro_lab01_dir = "Labs/Repro_Lab01/";
var repro_lab02_dir = "Labs/Repro_Lab02/";
var repro_lab03_dir = "Labs/Repro_Lab03/";
var minicase42_dir = "Labs/Minicase42/";

//powerpoint link icon
var link_ppt = "<img class='thumbs' src='assets/img/ppt.png' />";

//PDF link icon
var link_pdf = "<img class='thumbs' src='assets/img/pdf.png' />";

//help icon
var link_help ="<a href='#' onclick='show_help()'>?</a>";


//	Lectures ['date', 'time', 'title', 'pages', 'instructor', 'ppt', 'lol']

var HD3_lecs = 
[
	['Introduction to Renal Pathology', '01/03', '8:00 A.M.', '', 'Crosson / Manske', 'Introduction_to_Renal_Pathology.ppt', 'http://www.meded.umn.edu/lectures/2011/INMD6408_2009-01-05_08.mp4', 'pdf'],
	['Pathology of the Thyroid and Adrenal ', '01/10', '11:15 A.M.', '<a href="http://www.expertconsultbook.com/expertconsult/b/book.do?method=display&type=bookPage&decorator=none&eid=4-u1.0-B978-1-4377-0792-2..50029-8--cesec15&isbn=978-1-4377-0792-2" target=_blank>1108-1126</a>, <a href="http://www.expertconsultbook.com/expertconsult/b/book.do?method=display&type=bookPage&decorator=none&eid=4-u1.0-B978-1-4377-0792-2..50029-8--cesec135&isbn=978-1-4377-0792-2" target=_blank>1148-1161</a>', 'Pambuccian', 'Thyroid_Adrenal.ppt', 'http://www.meded.umn.edu/lectures/2011/LAMP6300_2009-01-05_13.mp4', 'Thyroid_Adrenal.pdf'],
	['Pathology of the Pituitary and Parathyroid', '01/11', '11:15 A.M.', '<a target="_blank" href="http://www.expertconsultbook.com/expertconsult/b/book.do?method=display&type=bookPage&decorator=none&eid=4-u1.0-B978-1-4377-0792-2..50029-8--cesec1&isbn=978-1-4377-0792-2">1098-1107</a>, <a target="_blank" href="http://www.expertconsultbook.com/expertconsult/b/linkTo?type=bookPage&isbn=978-1-4377-0792-2&eid=4-u1.0-B978-1-4377-0792-2..50029-8--cesec80">1126-1130</a>, <a href="http://www.expertconsultbook.com/expertconsult/b/linkTo?type=bookPage&isbn=978-1-4377-0792-2&eid=4-u1.0-B978-1-4377-0792-2..50029-8--cesec164" target="_blank">1161-1163</a>', 'Schmechel', 'Pituitary_Parathyroid.ppt', 'http://www.meded.umn.edu/lectures/2011/LAMP6300_2009-01-05_14.mp4', 'Pituitary_Parathyroid.pdf'],
	['Review - Normal Renal Histology', '01/13', '12:20 PM', '', 'Crosson', 'NormRenalHisto.ppt', 'lol', 'pdf'],
	['Cystic Disorders/Pyelonephritis/Reflux Nephropathy', '01/13', '1:25 P.M.', '<a target="_blank" href="http://www.expertconsultbook.com/expertconsult/b/book.do?method=display&type=bookPage&decorator=none&eid=4-u1.0-B978-1-4377-0792-2..50025-0--cesec91&isbn=978-1-4377-0792-2">935-948</a>, <a target="_blank" href="http://www.expertconsultbook.com/expertconsult/b/book.do?method=display&type=bookPage&decorator=none&eid=4-u1.0-B978-1-4377-0792-2..50025-0--cesec155&isbn=978-1-4377-0792-2#lpState=open&lpTab=contentsTab&content=4-u1.0-B978-1-4377-0792-2..50025-0--cesec155%3Bfrom%3Dtoc%3Btype%3DbookPage%3Bisbn%3D978-1-4377-0792-2">955-960</a>', 'Crary', 'CysticPyeloRefluxNeph.ppt', 'http://www.meded.umn.edu/lectures/2011/LAMP6300_2009-01-15_13.mp4', 'CysticPyeloRefluxNeph.pdf'],
	['Renal Neoplasias/Lower UT', '01/13', '2:30 P.M.', '972-982', 'Manivel', 'NeoplasiaLowerUT.ppt', 'http://www.meded.umn.edu/lectures/2011/LAMP6300_2009-01-16_13.mp4', 'NeoplasiaLowerUT.pdf'],
	['Glomerulonephritis', '01/24', '11:15 A.M.', '907-935', 'Crary', 'Glomerulonephritis.ppt', 'http://www.meded.umn.edu/lectures/2011/LAMP6300_2009-01-29_14.mp4', 'Glomerulonephritis.pdf'],
    ['Nephrotic Syndrome', '01/27', '3:35 P.M.', '907-929', 'Crosson', 'NephroticSyndrome.ppt', 'http://www.meded.umn.edu/lectures/2010/LAMP6303_2008-01-29_13.wmv', 'NephroticSyndrome.pdf'],
	['Vascular Diseases of the Kidney', '01/28', '9:05 A.M.', '949-955', 'Crosson', 'VascularDiseasesoftheKidney.ppt', 'http://www.meded.umn.edu/lectures/2010/LAMP6303_2008-01-28_10.wmv', 'VascularDiseasesoftheKidney.pdf'],
    ['Tubulointerstitial Disease', '01/28', '11:15 A.M.', '938-948', 'Crosson', 'TINephropathy.ppt', 'http://www.meded.umn.edu/lectures/2011/LAMP6300_2009-01-27_09.mp4', 'TINephropathy.pdf'],
	['CPC - Pathology, Lab Medicine, Pathophysiology', '02/01', '9:05 A.M.', '', 'Crosson / Abraham', 'CPC.ppt', 'lol', 'pdf'],
	['Introduction to Reproductive Pathology', '02/03', '3:35 P.M.', '', 'Powell', 'ppt', 'lol', 'pdf'],
	['Male Reproductive Pathology I', '02/04', '11:15 A.M.', '982-1002', 'Schmechel', 'Testis.ppt', 'http://www.meded.umn.edu/lectures/2011/LAMP6300_2009-01-13_13.mp4', 'Testis.pdf'],
	['Male Reproductive Pathology II', '02/08', '9:05 A.M.', '982-1002', 'Schmechel', 'Testis.ppt', 'http://www.meded.umn.edu/lectures/2011/LAMP6300_2009-01-13_13.mp4', 'Testis.pdf'],
	['Pathology of the Vulva and Cervix (note: powerpoint contains Vulva/Cervix and Uterus)', '02/08', '10:10 A.M.', '1006-1024', 'Truskinovsky', 'VulvaVaginaUterus.ppt', 'http://www.meded.umn.edu/lectures/2010/LAMP6303_2008-02-04_13.wmv', 'pdf'],
	['Pathology in Pregnancy', '02/10', '3:35 P.M.', '1052-1061', 'Powell', 'Placenta.ppt', 'http://www.meded.umn.edu/lectures/2010/LAMP6303_2008-02-08_09.wmv', 'Placenta.pdf'],
	['Pathology of the Breast I', '02/10', '1:25 P.M.', '1066-1094', 'Gulbahce', 'Breast.ppt', 'lol', 'Breast.pdf'],
    ['Pathology of the Breast II', '02/10', '2:30 P.M.', '1066-1094', 'Gulbahce', 'Breast.ppt', 'lol', 'Breast.pdf'],
    ['Pathology of the Uterus (note: see Vulva/Cervix for powerpoint)', '02/11', '10:10 A.M.', '1024-1038', 'Truskinovsky', 'ppt', 'http://www.meded.umn.edu/lectures/2010/LAMP6303_2008-02-05_08.wmv', 'pdf'],
	['Pathology of the Ovary', '02/11', '11:15 A.M.', '1038-1052', 'Truskinovsky', 'Ovary.ppt', 'http://www.meded.umn.edu/lectures/2010/LAMP6303_2008-02-05_09.wmv', 'Ovary.pdf'],
	['CPC - Pathology, Pathophysiology', '02/18', '10:10 A.M.', '', 'Crosson / Manske', 'CPC2.ppt', 'http://www.meded.umn.edu/lectures/2010/LAMP6303_2008-02-14_10.wmv', 'pdf']	
];

var lecs = HD3_lecs; // assigns a lecture array to $lecs, used in list_lecs()

/* Templates

var specimen =
[
	['filename.jpg', 'description'],
];

var lab =
[
	['specimen_name', 'description', specimen, lab_dir, 'svs_file'],
]

var period =
[
	['lab_title', 'lab', 'description'],
]

*/


// ENDO LAB 01 COMPONENTS

var minicase50 = 
[
	['Endo_Lab1_01.jpg', 'Clinical examination of the thyroid gland.'],
	['Endo_Lab1_02.jpg', 'Radio-isotope scan of thyroid showing a cold nodule.'],
	['Endo_Lab1_03.jpg', 'Illustration of a needle aspirate.'],
	['Endo_Lab1_06.jpg', 'Needle aspirate of papillary carcinoma showing nuclear clearing.'],
	['Endo_Lab1_07.jpg', 'Needle aspirate of papillary carcinoma showing marked nuclear grooving.'],
	

	['Endo_Lab1_11.jpg', 'Medium power demonstrates a nuclear pseudoinclusion and subtle nuclear grooves.'],
	
];

var micro151 =
[
	//['Endo_Lab1_15.jpg', 'Cretinism in three African girls.'],
	['Endo_Lab1_16.jpg', 'Gross presentation of Hashimoto\'s thyroiditis.'],
	['Endo_Lab1_17.jpg', 'Lymphoid infiltrates, both diffuse and nodular, are interspersed throughout thyroid parenchyma.'],
	['Endo_Lab1_18.jpg', 'Higher magnification illustrates lymphoid infiltrates around atrophic follicles with little colloid and showing transformation of the follicular epithelium to typical HŸrthle cells. Note the pink / eosinophilic cytoplasm of the HŸrthle cells.'],
	['Endo_Lab1_19.jpg', 'Lymphoid nodule containing germinal center is adjacent to atrophic follicles.']	
];

var micro157 =
[
	//['Endo_Lab1_20.jpg', 'Photograph of a man with a goiter.'],
	['Endo_Lab1_21.jpg', 'Thyroid markedly deformed and replaced by multinodular goiter showing areas of hemorrhage, fibrosis, and cystic degeneration.'],
	['Endo_Lab1_22.jpg', 'Fairly discrete colloid nodule is present together with areas of hemorrhagic degeneration. Follicles vary greatly in size and contain abundant colloid.'],
	['Endo_Lab1_23.jpg', 'Degenerative changes of fibrosis and cystic change are present. Follicles vary considerably in size.'],
	['Endo_Lab1_24.jpg', 'Extensive hyalinization interspersed between follicles.'],
	['Endo_Lab1_26.jpg', 'Although iodine therapy results in involution of hyperplasia, Kodachromes 1 and 2 show residual hyperplastic changes characterized by proliferative follicular epithelium that forms papillary folds protruding into follicles.'],
	['Endo_Lab1_27.jpg', 'High magnification demonstrates that hyperplastic epithelium is tall, columnar, and may show areas of nuclear crowding. Note the nuclear features are different from papillary carcinoma.'],
];

var micro339 =
[
	['Endo_Lab1_25.jpg', 'Although iodine therapy results in involution of hyperplasia, Kodachromes 1 and 2 show residual hyperplastic changes characterized by proliferative follicular epithelium that forms papillary folds protruding into follicles.'],
	['Endo_Lab1_28.jpg', 'Follicles showing extensive involution. Only evidence of previous hyperplasia are a few blunted intrafollicular papillae.'],
	['Endo_Lab1_29.jpg', 'Higher magnification of involution changes illustrates that follicular epithelium has returned to flattened or low cuboidal type.']
];

var micro340 =
[
	//['Endo_Lab1_30.jpg', 'Autoradiograph of follicular adenoma of the thyroid. These can also show as cold nodules and must be differentiated from carcinoma by FNA (see minicase 50).'],
	['Endo_Lab1_31.jpg', 'Gross appearance of typical adenoma disclosing well encapsulated fleshy tumor; frequently pale yellow or tan and moderately firm.'],
	//['Endo_Lab1_32.jpg', 'Gross appearance of another adenoma showing how firm and well-demarcated it is from the rest of the thyroid parenchyma.'],
	['Endo_Lab1_33.jpg', 'Typical histologic appearance demonstrating an encompassing fibrous capsule. The architecture of the adenomatous portion is distinctly different from the surrounding normal thyroid parenchyma. This field shows the tumor to be comprised primarily of solid cords and occasional microfollicles.'],
	['Endo_Lab1_34.jpg', 'Higher magnification demonstrating solid trabeculae of microfollicles.']
];

var micro197 = 
[
	//['Endo_Lab1_36.jpg', 'Papillary thyroid carcinoma demonstrating unencapsulated sclerotic area. Papillary carcinomas are usually unencapsulated and have an infiltrative appearance. They may also be multifocal.'],
	['Endo_Lab1_08.jpg', 'Gross picture of papillary carcinoma. The non-neoplastic thyroid has a dark orange-brown color while the carcinoma is light tan.'],
	['Endo_Lab1_38.jpg', 'Low power photomicrograph showing areas of papillary carcinoma with dense fibrous stroma. Normal follicles are present for comparison along one margin.'],
	['Endo_Lab1_09.jpg', 'Low power view of papillary carcinoma showing papillae with fibrovascular cores lined by neoplastic cells.'],
	['Endo_Lab1_10.jpg', 'Medium power demonstrates cleared nuclei and nuclear overlapping.'],	
	['Endo_Lab1_13.jpg', 'Comparison of papillary carcinoma and normal thyroid. Note the differences in the nuclei.'],	
	['Endo_Lab1_43.jpg', 'Pseudonuclear inclusion of papillary carcinoma.'],
	['Endo_Lab1_05.jpg', 'High power view of needle aspirate showing a cell with a nuclear pseudoinclusion. Some nuclei also appear grooved.'],
	['Endo_Lab1_37.jpg', 'Fine-needle aspiration (FNA) of papillary thyroid carcinoma showing grooved nuclei in a "coffee bean" configuration.'],
	['Endo_Lab1_04.jpg', 'Low power view of a needle aspirate of a papillary carcinoma of the thyroid. Note the overall papillary structure with a vascular core visible on one side.'],
	//['Endo_Lab1_39.jpg', 'Arborizing complex papillae typical of papillary carcinoma. Papillae comprised of fibrovascular cores lined by malignant epithelial cells. There is extensive edema of some papillae.'],
	['Endo_Lab1_12.jpg', 'Psammoma bodies.'],
	['Endo_Lab1_14.jpg', 'Metastatic carcinoma in a lymph node.']
	//['Endo_Lab1_40.jpg', 'Higher magnification demonstrating papillae that are usually lined by single layer of epithelial cells.'],
	//['Endo_Lab1_41.jpg', 'High magnification demonstrating fairly uniform epithelial cells lining fibrovascular stalks. Mitoses are absent. Some nuclei have "optically clear" or "ground glass" nuclei.'],
	//['Endo_Lab1_42.jpg', 'These clear nuclei resemble "orphan annie eyes."'],
	//['Endo_Lab1_44.jpg', 'Psammoma bodies seen in papillary carcinoma.']
];

var micro341 =
[
	['Endo_Lab1_45.jpg', 'Low power photomicrograph shows nests of tumor cells interspersed between follicles and infiltrating within a dense fibrous stroma.'],
	['Endo_Lab1_46.jpg', 'Tumor cells are quite uniform, nuclei are bland, Mitoses are rare, and tumor cells in this Kodachrome are polyglonal.'],
	['Endo_Lab1_47.jpg', 'Kodachrome of tumor shows infiltrative nests of cells interspersed within dense fibrous stroma.'],
	['Endo_Lab1_48.jpg', 'Kodachrome of tumor shows infiltrative nests of cells interspersed within dense fibrous stroma.'],
	['Endo_Lab1_49.jpg', 'High power electron micrograph shows numerous typical dense-core granules (neurosecretary granules).'],
	//['Endo_Lab1_50.jpg', 'Electron micrograph showing characteristic haphazard deposits of amyloid fibrils.']
];

var minicase51 =
[	
	['Endo_Lab1_51.jpg', 'Gross picture of a parathyroid adenoma, quite large, and orange-brown in color. The gland is soft because of a relative paucity of stroma.'],
	['Endo_Lab1_52.jpg', 'Low magnification picture of a parathyroid adenoma and the immediately adjacent normal parathyroid gland from which the adenoma evolved. If frozen section of the tumor during surgery demonstrates the normal gland adjacent to the tumor, this is good evidence that adequate surgery has been performed because multiple adenomas are a rarity. This also excludes diffuse hyperplasia.'],
	['Endo_Lab1_53.jpg', 'High power magnification of the adenoma. Note significant pleomorphism of tumor cell nuclei. Such pleomorphism is common in endocrine adenomas and does not indicate malignancy.']
];

var lab01em =
[	
	['Endo_Lab1_54.jpg', 'Low power EM demonstrates chief cells in various stages of parathormone synthesis. Resting cells (RC) contain fairly abundant glycogen (G) and scant endoplasmic reticulum. An adjacent synthesizing cell (SC) demonstrates increased endoplasmic reticulum frequently forming parallel arrays (*). A portion of a chief cell in the secretory phase (SP) demonstrates numerous secretory granules (arrows) that have marginated along the cell periphery.'],
	['Endo_Lab1_55.jpg', 'A chief cell in the parathormone synthesizing stage contains prominent dilated endoplasmic reticulum (arrows) containing finely granular material indicative of protein synthesis. A few secretory granules (S) are also present. Cell nucleus (N).'],
	['Endo_Lab1_56.jpg', 'Electron micrograph at relatively low magnification demonstrates a cellular aggregate of fairly uniform tumor cells. Nuclei (N) demonstrates clumped chromatin, invaginations, and occasional prominent nucleoli (*). Arrows indicate small neurosecretory granules. A focus of extracellular filamentous material probably represents a small deposit of amyloid (A).'],
	['Endo_Lab1_57.jpg', 'Electron micrograph at high magnification demonstrates a portion of a tumor cell in which membrane bound neurosecretory granules (arrows) are numerous. Although not a specific diagnostic feature, it has been shown that cisternae of RER are frequently wrapped around mitochondria (M). Granular deposits of glycogen (G).']
];

var micro155 =
[
	['Endo_Lab2_21.jpg', 'Adrenal cortical adenoma showing well delineated golden yellow nodule with a compressed rim of cortex at periphery. The adenoma itself suggests multinodularity in areas. Cortical nodules exceeding 1 cm. in size are considered to be true adenomas, whereas smaller cortical nodules are frequently encountered, often multiple, and usually represent foci of nodular hyperplasia.'],
	['Endo_Lab2_22.jpg', 'Low power magnification showing the discrete tumor mass arising off of the adrenal cortex.'],
	['Endo_Lab2_23.jpg', 'Low and intermediate magnification of adrenal cortical adenoma shows characteristic compressed rim of normal adrenal cortex at the periphery.'],
	['Endo_Lab2_24.jpg', 'Low and intermediate magnification of adrenal cortical adenoma shows characteristic compressed rim of normal adrenal cortex at the periphery.'],
	['Endo_Lab2_25.jpg', 'Demonstrates the comparison between the histoarchitecture of the adenoma (bottom) and the bordering adrenal cortex (top). The latter shows preservation of the repetitive perpendicularly arranged trabeculae of the zona fasciculata. The adenomatous portion by contrast has no trabeculae, and there is variation in nuclear size. Tumor cells are also extensively vacuolated indicative of cytoplasmic lipid (steroids).'],
	['Endo_Lab2_26.jpg', 'Tumor cells are extensively vacuolated due to lipid and form small clusters subdivided by fairly extensive capillary network. A moderate degree of nuclear atypia is present, a feature common to adenomas of other endocrine organs as well, and is not indicative of malignancy.'],
	['Endo_Lab2_27.jpg', 'Electron Micrograph #5 - Tumor cell has abundant smooth endoplasmic reticulum (ser) and mitochondria (m) with tubular cristae. Lipid granules (L) are also present.']
];

var micro212 =
[
	['Endo_Lab2_28.jpg', 'Cross-section of a 500g pheochromocytoma showing hemorrhage, necrosis, and cystic changes. This patient presented with headaches, hypertension, and a left-sided stroke with resultant right hemiparesis.'],
	['Endo_Lab2_29.jpg', 'Low power magnification demonstrating a well defined fibrous capsule separating the tumor (top) from the overlying compressed rim of adrenal cortex (bottom).'],
	['Endo_Lab2_30.jpg', 'Low power magnification demonstrating a well defined fibrous capsule separating the tumor (top) from the overlying compressed rim of adrenal cortex (bottom).'],
	['Endo_Lab2_31.jpg', 'In some areas the tumor has completely replaced the normal adrenal cortex.'],
	['Endo_Lab2_32.jpg', 'Microscopic field demonstrating "nesting" of cells, fibrovascular stroma, and marked cellular variation. Pheochromocytomas are derived from the adrenal medulla, and as shown in this intermediate magnification, tend to form small nests or clusters that are subdivided by fibrous stroma that is well vascularized, like all endocrine tumors. '],
	['Endo_Lab2_33.jpg', 'Tumor giant cells are common and may be multinucleated. Cell cytoplasm is fairly abundant and with special stains, demonstrates chromaffin granules and secretory granules by electron microscopy. Since marked cellular variation may be seen in both benign and malignant tumors, the only absolute criterion for malignancy is the presence of metastases.']
];

var micro338 =
[
	['Endo_Lab2_34.jpg', 'Brain imaging shows a solitary pituitary mass.'],
	['Endo_Lab2_35.jpg', 'The surgical approach (sub-sphenoid) for resecting this tumor is not for the faint of heart.'],
	['Endo_Lab2_36.jpg', 'Low magnification shows sheets and nests of uniform cells with a papillary architecture which is another common pattern seen in pituitary adenomas.'],
	['Endo_Lab2_37.jpg', 'Low magnification shows sheets and nests of uniform cells with a papillary architecture which is another common pattern seen in pituitary adenomas.'],
	['Endo_Lab2_38.jpg', 'Higher magnification demonstrating nuclear pleomorphism which commonly occurs in adenomas of endocrine origin. Identification of specific cell type requires special stains, immunoperoxidase, or electron microscopy.']
];

var endo_lab =
[
	//['Minicase 50', 'Papillary Carcinoma of the Thyroid', minicase50, endo_lab_dir,],
	['Case 1', 'Hashimoto\'s Thyroiditis', micro151, endo_lab_dir, "@3857"],
	['Case 2', 'Multinodular or Adenomatous Goiter, Thyroid', micro157, endo_lab_dir, "@3859"],
	//['Micro 339', 'Thyroid Hyperplasia Modified by Iodine Therapy', micro339, endo_lab_dir, "@3860"],
	['Case 3', 'Follicular Adenoma of the Thyroid', micro340, endo_lab_dir, "@3861"],
	['Case 4', 'Papillary Carcinoma of Thyroid', micro197, endo_lab_dir, "@3862"],
    ['Case 5', 'Adrenal Gland, Cortical Adenoma', micro155, endo_lab_dir, "@3905"],
	['Case 6', 'Hyperparathyroidism', minicase51, endo_lab_dir,],
	['Slide Review 341', 'Medullary Carcinoma of Thyroid', micro341, endo_lab_dir, "@3892"],
	['Slide Review 212', 'Pheochromocytoma of the Adrenal', micro212, endo_lab_dir, "@3904"],
	['Slide Review 338', 'Pituitary Adenoma', micro338, endo_lab_dir, "@3907"],
	//['Electron Micrographs', 'Parathyroid hyperplasia - figures 1,2', lab01em, endo_lab_dir,],
];

// RENAL LAB 01 COMPONENTS

var renal_lab01_case01 =
[
	['Renal_Lab1_02.jpg', 'The microscopic features of this clear cell renal cell carcinoma are solid to cord-like growth of cells with abundant clear cytoplasm. The clear cells are lipid containing and glycogen containing cells. Upon fixation, this material washes out and gives the classic clear cell appearance.'],
	['Renal_Lab1_03.jpg', 'Higher power of renal clear cell carcinoma.'],
	['Renal_Lab1_01.jpg', 'This gross photo shows a very well circumscribed yellow cortical tumor with two distinct areas: solid tumor (right) and necrosis (left). The patient had bacterial endocarditis with secondary embolic infarcts of the renal cortex.'],
	//['Renal_Lab1_04.jpg', 'This gross photo shows a bisected kidney with a very well circumscribed hemorrhagic cortical tumor that pushes the renal capsule into surrounding adipose tissue. It is a papillary renal cell carcinoma. Notice it lacks the more typical golden yellow appearance of a clear cell RCC.'],
	//['Renal_Lab1_05.jpg', 'The microscopic features of this papillary renal cell carcinoma are cuboidal or low columnar cells arranged in papillary formations around fibrovascular cores. These cells contain pigment which give the tumor a hemorrhagic appearance grossly. Occasional psammoma bodies may be seen (as in any papillary structure in which microinfarcts of the distal papillary tips become infracted and secondary dystrophic calcification occurs). There are also scattered foamy cells identified within the fibrovascular cores.'],
	//['Renal_Lab1_06.jpg', 'Higher power of the tip of a papillae in the papillary RCC. Note the prominent nucleoli and dark cytoplasmic pigmentation.'],
	//['Renal_Lab1_06b.jpg', 'Low power of a papillary renal cell carcinoma without prominent pigmentation.']
];

var renal_lab01_case02 =
[
	['Renal_Lab1_07.jpg', 'Wilms tumor usually presents as an abdominal mass. This gross photo of classic Wilms tumor shows the large tumor which is enclosed within a thin rim of cortex and capsule. Upon cut section, the tumor is typically multilobated, myxomatous, and often described as yeloow-white "fish flesh" like.'],
	['Renal_Lab1_08.jpg', 'Microscopically, Wilms tumor has 3 components:<br><br>1) Blastema<br>2) Mesenchymal tissue<br>3) Epithelial<br><br>When all three components are found, this is called a triphasic or classic Wilm\'s tumor. However, monomorphous forms of this tumor have also been described. The mesenchymal tissue consists of spindled cell fibroblastic-like tissue which may have cartilaginous differentiation. Epithelial structures resemble the metanephros and consist of primitive tubules and glomerular-like structures (three early glomerular structures may be seen beginning to form). The blastemal tissue (seen in this microscopic photo) is sheets of undifferentiated small blue cells. '],
	['Renal_Lab1_09.jpg', 'Higher power of blastema, showing prominent mitotic activity.'],
	['Renal_Lab1_10.jpg', 'Anaplasia, an unfavorable feature is characterized by nuclear enlargement, hyperchromaticity and abnormal (multipolar) mitoses.'],
	['Renal_Lab1_11.jpg', 'Necrosis (in the center of the photo) and cyst formation (not in this photo) may also be seen in these tumors.'],
	['Renal_Lab1_12.jpg', 'Higher power of necrosis (pink discoloration denotes necrotic cellular debris, in contrast to the darker blue viable tumor cells at the bottom of the picture).'],
	['Renal_Lab1_13.jpg', 'Glomeruloid bodies (epithelial) becoming apparent in the tumor.'],
	['Renal_Lab1_14.jpg', 'Tubules are also apparent within the blastemal tumor.'],
	['Renal_Lab1_15.jpg', 'Higher power of one of these tubules.'],
	['Renal_Lab1_16.jpg', 'The mesenchymal tissue consists of spindled cell fibroblastic-like tissue, which may have cartilaginous differentiation (though not seen in this photo). It is the lighter colored spindle cells in the center of the picture.'],
	['Renal_Lab1_17.jpg', 'Higher power the mesenchymal component of the tumor.']
];



var renal_lab01_case03 =
[
	//['Renal_Lab1_32.jpg', 'Gross photo of urothelial carcinoma of the renal pelvis. In this photo a solid pale pink mass is arising within the proximal portion of the urinary collection system. These may lead to urinary obstruction and secondary hydronephrosis. These tumor may arise anywhere transitional epithelium resides.'],
	//['Renal_Lab1_33.jpg', 'Gross photo of urothelial carcinoma of the bladder invading through the posterior wall of the bladder and involving the uterus.'],
	//['Renal_Lab1_34.jpg', 'Higher power of the previous picture showing the light tan tumor invading into the uterus. The slightly lighter coloration denotes the spread of the malignant tumor.'],
	//['Renal_Lab1_35.jpg', 'Well differentiated urothelial carcinoma. These used to be called transitional cell carcinomas (TCC). Urothelial carcinomas are graded I-III, based of the degree of differentiation. This photo shows a well differentiated urothelial carcinoma (grade I). The cells are arranged in a papillary appearance around a fibrovascular core. These cells closely resemble normal transitional cells. There may be significant increase in the number of layers, with only slight loss of polarity. Mitoses are rare.'],
	//['Renal_Lab1_36.jpg', 'Higher power of well differentiated urothelial carcinoma (grade I).'],
	['Renal_Lab1_37.jpg', 'Moderately differentiated urothelial carcinoma (grade II). The cells retain their papillary appearance around central fibrovascular cores. The number of cell layers is increased, as is the number of mitoses. There is greater loss of polarity of the cells. Greater variability in cell size, shape, and chromatin density is present.'],
	['Renal_Lab1_38.jpg', 'Higher power of moderately differentiated urothelial carcinoma (grade II).'],
	['Renal_Lab1_39.jpg', 'Poorly differentiated urothelial carcinoma (grade III). The cells lose their papillary appearance and now appear as solid sheets. There is loss of polarity of the cells with marked pleomorphism and disarray. Occasional giant cells may be identified (not seen in this photo).'],
	['Renal_Lab1_40.jpg', 'Higher power of poorly differentiated urothelial carcinoma (grade III). Note mitotic figure in the center of the photo.'],
	['Renal_Lab1_31.jpg', 'Gross photo of urothelial carcinoma of the bladder. This appears as an exophytic hemorrhagic-colored polypoid mass. Blood in the urine of an older individual may lead to the clinical suspicion of one of these tumors.'],
	['Renal_Lab1_40A.jpg', 'Low magnification of the posterior wall of the bladder in the area of the trigone. The urothelium has been sloughed off and only deep infiltrating neoplastic cells are seen going deep into the tissue.'],
	['Renal_Lab1_40B.jpg', 'Medium power showing carcinoma extending between smooth muscle bundles of the muscularis propria (detrusor muscle).'],
	['Renal_Lab1_40C.jpg', 'High power of tumor extending deep into the bladder wall by infiltrating between bundles of smooth muscle.  The neoplastic cells show high grade cytologic features including large size, hyperchromtic nuclei, high nuclear/chromatin, and irregular nuclear contours.'],
	['Renal_Lab1_40D.jpg', 'High power of an invasive squamous cell carcinoma of the bladder. Clues that makes this carcinoma a squamous cell carcinoma as opposed to a urothelial cell carcinoma include intercellular bridges, dyskerotic cells (necrotic keratinocytes) and keratinocyte “whorls.”'],
	];

	var renal_lab01_case04 =
[
	['Renal_Lab1_41.jpg', 'This gross photo of autosomal recessive polycystic kidney disease shows the small radially arranged cysts which are perpendicular to the surface of the kidney.'],
	['Renal_Lab1_42.jpg', 'This photomicrograph of ARPKD shows the numerous cysts located in a radial fashion perpendicular to the surface of the kidney.'],
	['Renal_Lab1_43.jpg', 'This photomicrograph of ARPKD shows the numerous cysts located in a radial fashion perpendicular to the surface of the kidney. Note that normal glomerular and tubular structures are identified between the cysts.'],
	['Renal_Lab1_44.jpg', 'Congenital hepatic fibrosis is identified in the vast majority of patients with autosomal recessive polycystic kidney disease. It is much more severe and prominent in patients who are older and have less renal involvement. This photomicrograph of a H&E stained section of liver shows normal lobules of hepatocytes (marked with H) and intervening blue stained connective tissue representing periportal fibrosis.'],
	['Renal_Lab1_45.jpg', 'Trichrome stained section of liver shows normal lobules of hepatocytes with the intervening periportal fibrosis staining turquoise blue. Also apparent in this section are multiple small cysts within the periportal connective tissue.']
];

var renal_lab01_case05 =
[
	['Renal_Lab1_46.jpg', 'This slide shows the gross pathology of autosomal dominant polycystic kidney disease. These kidneys can become quite large and cysts virtually replace the entire parenchyma. These cysts are of variable size and some contain areas of hemorrhage.'],
	['Renal_Lab1_47.jpg', 'Upon cutting the kidney, these clear serous fluid-filled cysts virtually replace the normal renal parenchyma.'],
	['Renal_Lab1_48.jpg', 'This photomicrograph of an H & E stained section of autosomal dominant polycystic kidney disease shows a multiple cysts replacing the normal renal parenchyma.'],
	['Renal_Lab1_49.jpg', 'This photomicrograph of an H & E stained section of autosomal dominant polycystic kidney disease shows portions of multiple cysts lined by a thin, simple cuboidal epithelium. The surrounding renal parenchyma is remarkable for severe interstitial fibrosis and tubular atrophy, which is secondary to compression by these cysts.'],
	['Renal_Lab1_50.jpg', 'Higher power of autosomal dominant polycystic kidney disease showing the severe interstitial fibrosis and tubular atrophy.']
];

var renal_lab01_case06 =
[
	['Renal_Lab1_51.jpg', 'This gross photo shows hydronephrosis secondary to urolithiasis (renal stone). In contrast to polycystic kidney disease (both autosomal dominant and autosomal recessive), the obstruction causes mechanical blockage to the outflow of urine. The resultant back pressure causes expansion of the collecting system, and subsequent destruction and thinning of the renal parenchyma. Notice only a thin rim of cortical tissue remains. The stone is present in this photo.']
];

var renal_lab01 =
[
	['Case 01', 'Hydronephrosis from Urolithiasis', renal_lab01_case06, renal_lab01_dir, ],
	['Case 02', 'Clear Cell / Papillary RCC', renal_lab01_case01, renal_lab01_dir, "@3849"],
	['Case 03', 'Wilm\'s Tumor', renal_lab01_case02, renal_lab01_dir, "@3850"],
	['Case 04', 'Urothelial CA', renal_lab01_case03, renal_lab01_dir, "@3855"],
	['Case 05', 'Autosomal Dominant PCKD', renal_lab01_case05, renal_lab01_dir, ],
	['Case 06', 'Autosomal Recessive PCKD', renal_lab01_case04, renal_lab01_dir, ],
];


// RENAL LAB 02 COMPONENTS

var renal_lab02_nephritis =
[
	['Renal_Lab2_01.jpg', 'Nephritic syndrome'],
	['Renal_Lab2_02.jpg', 'Glomerulonephritis'],
	['Renal_Lab2_03.jpg', 'Glomerulonephritis'],
	['Renal_Lab2_04.jpg', 'Hematuria following upper respiratory tract infection']
];

var renal_lab02_case01 =
[
	['Renal_Lab2_05.jpg', 'Post-streptococcal glomerulonephritis'],
	['Renal_Lab2_06.jpg', 'Post-streptococcal glomerulonephritis'],
	['Renal_Lab2_07.jpg', 'This is an H & E stained section of a glomerulus representing post-infectious glomerulonephritis. The glomerulus is hypercellular with proliferation of endogenous glomerular cells and infiltrating inflammatory cells. No patent capillary loops are identified. The glomerulus fills the entire Bowman\'s space.'],
	['Renal_Lab2_08.jpg', 'This is a PAS-stained section of glomerulus showing marked hypercellularity in the exudative process within the glomerulus.'],
	['Renal_Lab2_09.jpg', 'This slide represents an immunofluorescence microscopic study of acute post-streptococcal glomerulonephritis with large, granular deposits identified along the glomerular capillary loops (anti-C3).'],
	['Renal_Lab2_10.jpg', 'This diagram depicts an acute proliferative glomerulonephritis with subepithelial deposits, cellular proliferation, and exudation, as would be seen in post-streptococcal glomerulonephritis.'],
	['Renal_Lab2_11.jpg', 'This electron micrograph shows a case of acute post streptococcal glomerulonephritis with a large subepithelial electron dense deposit (D). EP = visceral epithelial cell; PMN = polymorphonuclear leukocyte.']
];

var renal_lab02_case02 =
[
     ['Renal_Lab2_14.jpg', 'Renal Biopsy, low power, H&E stained section shows prominent segmental necrosis involving two of three glomeruli. One of the involved glomeruli shows a partial ÒcrescentÓ about area of necrosis.'],
     ['Renal_Lab2_12.jpg', 'Although segmental, the necrotizing extracapillary lesion can be larger and involve a higher percentage of glomeruli.'],
    ['Renal_Lab2_13.jpg', 'The simultaneous presence in the same biopsy of active and sclerotic lesions is the expression of repeated necrotizing extracapillary damage.'],
    ['Renal_Lab2_15.jpg', 'Renal biopsy, medium power, JonesÕ Silver stained section shows a ÒcrescentÓ including necrotic debris filling BowmanÕs space with partial collapse of glomerular tuft.'],
    ['Renal_Lab2_16.jpg', 'This direct immunofluorescent endpoint with antibodies to fibrinogen shows strong staining within the ÒcrescentÓ.  No staining occurred with anti-C3 and IgG.  These data are consistent with crescentic or rapidly progressive glomerulonephritis.'],
];

var renal_lab02_case03 =
[
	['Renal_Lab2_19.jpg', 'Rapidly Progressive Glomerulonephritis'],
	['Renal_Lab2_20.jpg', 'This diagram depicts a periglomerular cellular crescent as seen in RPGN.'],
	['Renal_Lab2_21.jpg', 'This H & E stained slide represents the histologic features of an acute necrotizing and crescentic glomerulonephritis. The crescent consists of epithelial cell proliferation surrounding the glomerular capillary tuft. There is fibrinoid necrosis within the glomerular tuft.'],
	['Renal_Lab2_22.jpg', 'This PAS-stained slide shows an acute necrotizing and crescentic glomerulonephritis. Note the disruption of the glomerular capillary walls.'],
	['Renal_Lab2_23.jpg', 'This Jones\' silver-stained section reveals the histologic features of a crescentic and necrotizing glomerulonephritis. The cellular crescent fills Bowman\'s space. The glomerular capillary tuft appears collapsed and there is disruption of the glomerular capillary walls.'],
	//['Renal_Lab2_24.jpg', 'This slide demonstrates the immunofluorescent microscopic features of a crescentic glomerulonephritis. The periglomerular crescent stains positive with antibodies to fibrinogen.'],
	['Renal_Lab2_26.jpg', 'Anti-GBM antibody disease'],
	['Renal_Lab2_27.jpg', 'This electron micrograph reveals the ultrastructural features of fibrin. Fibrin is identified both within the glomerular capillary lumen and within Bowman\'s space. The fibrin is electron dense and string-like.'],
	['Renal_Lab2_25.jpg', 'This immunofluorescent microscopic slide shows linear IgG identified along the glomerular basement membrane.']
];

var renal_lab02_case04 =
[
	['Renal_Lab2_32.jpg', 'Lupus nephritis - ISN/RPS 2003 classification'],
	['Renal_Lab2_33.jpg', 'Active and chronic glomerular lesions - lupus nephritis'],
	['Renal_Lab2_34.jpg', 'Active and chronic glomerular lesions - lupus nephritis'],
	//['Renal_Lab2_34b.jpg', 'This H&E stained section of a glomerulus shows thickening of the capillary loops, one early KW lesion, and hyalinosis of an arteriole.'],
    ['Renal_Lab2_35.jpg', 'This Jones\' silver stained section of a portion of a glomerulus reveals deep pink subendothelial immune complexes, which correspond to "wireloop" lesions.'],
	['Renal_Lab2_36.jpg', ''],
	['Renal_Lab2_37.jpg', 'This PAS-stained section reveals proliferative lupus nephritis with endocapillary proliferation.'],
	['Renal_Lab2_38.jpg', 'This immunofluorescence microscopic slide reveals glomerular capillary wall immune deposits. Lupus nephritis typically reveals a "full-house" pattern of immunofluorescence microscopy with deposits staining with antibodies to IgG, IgA, IgM, C3 and C1q.']
];

var renal_lab02_case05 =
[
	['Renal_Lab2_28.jpg', 'IgA nephropathy'],
	['Renal_Lab2_29.jpg', 'This PAS-stained section reveals a mesangioproliferative glomerulonephritis. Note the increase in the number of mesangial cells as well as a mild increase in mesangial matrix material. One definition of mesangial proliferation is four or more mesangial cells per centrilobular area.'],
	['Renal_Lab2_30.jpg', 'This immunofluorescence microscopic slide shows positive mesangial immunoreactivity with antibodies to IgA. Most glomerular capillary loops do not show evidence of immune deposits.'],
	['Renal_Lab2_31.jpg', 'This electron micrograph reveals electron dense immune-type deposits identified within a mesangial area.']
];

var renal_lab02 =
[
	['General', 'Nephritis', renal_lab02_nephritis, renal_lab02_dir, "@3838"],
	['Case 01', 'Post-streptococcal glomerulonephritis', renal_lab02_case01, renal_lab02_dir, "@3839"],
    ['Case 02', 'Wegener\'s granulomatosis', renal_lab02_case02, renal_lab02_dir, ],
	['Case 03', 'Rapidly progressive glomerulonephritis', renal_lab02_case03, renal_lab02_dir, "@3840"],
	['Case 04', 'Lupus nephritis', renal_lab02_case04, renal_lab02_dir,],
	['Case 05', 'Mesangial proliferative glomerulonephropathy', renal_lab02_case05, renal_lab02_dir, ]
];


// RENAL LAB 03 COMPONENTS

var renal_lab03_case00 =
[
	['Renal_Lab3_01.jpg', 'Nephrotic syndrome'],
	['Renal_Lab3_02.jpg', 'Nephrotic syndrome'],
	['Renal_Lab3_03.jpg', 'Nephrotic syndrome'],
	['Renal_Lab3_04.jpg', 'Nephrotic syndrome']
];

var renal_lab03_case01 =
[
	['Renal_Lab3_05.jpg', 'This Jones\' silver-stained section is from a case of minimal change disease. The glomerulus appears histologically normal.'],
	['Renal_Lab3_06.jpg', 'This electron micrograph of minimal change disease reveals diffuse effacement of the visceral epithelial foot processes.'],
	['Renal_Lab3_07.jpg', 'This H & E stained section shows the histologic lesion of focal and segmental glomerulosclerosis.'],
	['Renal_Lab3_08.jpg', 'This Trichrome-stained slide shows the histologic features of focal and segmental glomerulosclerosis.']
];

var renal_lab03_case02 =
[
	['Renal_Lab3_09.jpg', 'Membranoproliferative glomerulonephritis'],
	['Renal_Lab3_10.jpg', 'Membranoproliferative glomerulonephritis'],
	['Renal_Lab3_11.jpg', 'Membranoproliferative glomerulonephritis'],
	['Renal_Lab3_12.jpg', 'This H & E stained section shows the histologic features of membranoproliferative glomerulonephritis. The glomerulus is hypercellular without open capillary loops. There is somewhat of a lobular appearance.'],
	['Renal_Lab3_13.jpg', 'This Jones\' silver-stained slide reveals basement membrane thickening and focal splitting. Other features of membranoproliferative glomerulonephritis include mesangial cell proliferation, increased mesangial matrix, endothelial cell swelling, and endothelial cell proliferation. The splitting or Òdouble-contourÓ is caused by duplication of basement membrane material as a result of new basement membrane synthesis.'],
	['Renal_Lab3_14.jpg', 'This immunofluorescence microscopic slide shows granular deposits identified along the glomerular capillary walls. This pattern would be seen typically with antibodies to IgG and C3.'],
	['Renal_Lab3_15.jpg', 'This electron micrograph reveals subendothelial electron dense immune deposits. Mesangial and occasional subepithelial deposits may also be identified. Note the marked thickening of the glomerulocapillary loops. This electron micrograph would correspond to a Òdouble contourÓ by light microscopy.'],
	['Renal_Lab3_16.jpg', 'This electron micrograph reveals the ultrastructural features of dense-deposit disease (type II MPGN). This is a rare entity. The lamina densa shows ribbon-like electron dense material. The composition of this material is unknown.']
];

var renal_lab03_case03 =
[
	['Renal_Lab3_17.jpg', 'This H & E stained slide reveals the histologic features of membranous nephropathy. Note the regular thickening of the glomerulocapillary walls. There is no evidence of cellular proliferation.'],
	['Renal_Lab3_18.jpg', 'This silver-stained section reveals the subepithelial deposits of membranous nephropathy with intervening silver-positive basement membrane ñspikesî.'],
	['Renal_Lab3_19.jpg', 'This composite picture reveals features of membranous nephropathy. The immunofluorescence microscopy reveals a diffuse granular pattern along the glomerulocapillary walls with antibodies to IgG and C3 (Figure B). The electron micrograph reveals the subepithelial electron dense deposits (*). The capillary lumen is designated as (C). The visceral epithelial cell or podocyte is designated as (B). The arrow points to an endothelial cell.'],
	['Renal_Lab3_20.jpg', 'This electron micrograph shows the subepithelial and intramembranous electron-dense deposits. Note the intervening basement membrane material. Visceral epithelial cells show diffuse foot process effacement.']
];

var renal_lab03_case04 =
[
	['Renal_Lab3_21.jpg', 'This H & E stained slide shows features typical of amyloidosis. Note the glomerular architecture is obliterated by massive deposition of amyloid material.'],
	['Renal_Lab3_22.jpg', 'The histologic diagnosis of amyloid depends upon its staining characteristics. This Congo Red stained slide reveals the pink-red color of amyloid. Note amyloid is identified within the glomeruli as well as vessels and interstitium.'],
	['Renal_Lab3_23.jpg', 'Under polarized light, the Congo Red stained amyloid shows a green birefringence. This pattern of staining is due to the cross-beta-pleated sheet structure of amyloid.'],
	['Renal_Lab3_24.jpg', 'This silver stained section of amyloid reveals silver-negative amyloid material identified within mesangial areas and within glomerulocapillary walls.'],
	['Renal_Lab3_25.jpg', 'These electron micrographs show the ultrastructural features of amyloid fibrils. The fibrils are non-branching with a diameter of approximately 7 to10 nm.'],
	['Renal_Lab3_26.jpg', 'These electron micrographs show the ultrastructural features of amyloid fibrils. The fibrils are non-branching with a diameter of approximately 7 to10 nm.']
];

var renal_lab03_case05 =
[
	['Renal_Lab3_27.jpg', 'This H & E stained slide shows a Kimmelstiel-Wilson nodule. This lesion is seen in nodular diabetic glomerulosclerosis and consists of laminated mesangial matrix material.'],
	['Renal_Lab3_28.jpg', 'This H & E stained slide shows the Kimmelstiel-Wilson nodule as well as marked arteriolar hyalinosis of both afferent and efferent arterioles.'],
	['Renal_Lab3_29.jpg', 'This electron micrograph reveals the ultrastructural features of diabetic nephropathy. There is marked, diffuse, and usually fairly uniform thickening of the lamina dense. This basement membrane thickening would also be seen in capillaries of the skin, skeletal muscle, and the retina.']
];

var renal_lab03 =
[
	['General', 'Nephrotic Syndrome', renal_lab03_case00, renal_lab03_dir, ],
	['Case 01', 'Minimal change disease, Foc/Seg Glomerulosclerosisi [micro 311, EM 5&6]', renal_lab03_case01, renal_lab03_dir, "@3841"],
	['Case 02', 'Membranoproliferative glomerulonephritis [micro 314, IF 5&6, EM 7&8]', renal_lab03_case02, renal_lab03_dir, "@3842"],
	['Case 03', 'Membranous glomerulonephritis[micro 313, IF 7, EM 9]', renal_lab03_case03, renal_lab03_dir, ],
	['Case 04', 'Amyloidosis [micro 316, EM 10] ', renal_lab03_case04, renal_lab03_dir, "@3846"],
	['Case 05', 'Diabetic glomerulosclerosis [micro 317, EM 11]', renal_lab03_case05, renal_lab03_dir, "@3847"]
];

// REPRO LAB 01 COMPONENTS

var micro154 =
[
	['Endo_Lab2_01.jpg', 'The first two kodachromes show normal seminiferous tubules with Leydig cells in the intervening stroma. The tubules are packed with germ cells that mature into spermatozoa as they grow from the basement membrane to the lumen. The mature sperm have tiny triangular nuclei. In addition to the germ cells, there are Sertoli cells, but it is difficult to distinguish them from the germ cells on a cell by cell basis.'],
	['Endo_Lab2_02.jpg', 'The first two kodachromes show normal seminiferous tubules with Leydig cells in the intervening stroma. The tubules are packed with germ cells that mature into spermatozoa as they grow from the basement membrane to the lumen. The mature sperm have tiny triangular nuclei. In addition to the germ cells, there are Sertoli cells, but it is difficult to distinguish them from the germ cells on a cell by cell basis.'],
	['Endo_Lab2_03.jpg', 'The next kodachrome shows very atrophic seminiferous tubules. Note the absence of cells inside them, and the thickening of the basement membrane. The Leydig cells in the interstitium become more prominent because the tubules atrophy.']
];

var micro146 =
[
	['Endo_Lab2_04.jpg', 'Gross examination shows a large homogenous light tan tumor mass replacing the normal testicular tissue.'],
	['Endo_Lab2_05.jpg', 'Low magnification showing extensive replacement of the testis with seminoma. Note also the extensive necrosis. No remaining normal testis is evident.'],
	['Endo_Lab2_06.jpg', 'Low magnification demonstrates extensive tumor necrosis.'],
	['Endo_Lab2_07.jpg', 'Low magnification demonstrates extensive tumor necrosis.'],
	//['Endo_Lab2_08.jpg', 'Typical histoarchitecture of seminoma comprised of germ cells that form sheets and nests of fairly uniform cells that are subdivided by delicate fibrous connective tissue septa.'],
	['Endo_Lab2_09.jpg', 'Typical histoarchitecture of seminoma comprised of germ cells that form sheets and nests of fairly uniform cells that are subdivided by delicate fibrous connective tissue septa.'],
	['Endo_Lab2_10.jpg', 'Higher magnification demonstrates well defined lobules of seminoma cells subdivided by fibrous septa that are commonly infiltrated by lymphocytes.'],
	//['Endo_Lab2_11.jpg', 'Higher magnification. Though not prevalent here, seminomas may also have foci of granulomatous inflammation and scattered giant cells resembling syncytiotrophoblasts. What hormone do syncytiotrophoblasts make?'],
	['Endo_Lab2_12.jpg', 'Seminoma cells at high magnification derived from primary germ cells. Tumor cells are moderately large, round to polyhedral, and cytoplasm is commonly vacuolated or water-clear. Nuclei are irregular, hyperchromatic, and usually contain prominent nucleoli.'],
	['Endo_Lab2_13.jpg', 'These nuclear features are apparent on high power']
];

var micro149 =
[
	['Endo_Lab2_14.jpg', 'Low magnification demonstrates fairly sharp transition between uninvolved seminiferous tubules at periphery and diffusely infiltrating malignant lymphoma.'],
	['Endo_Lab2_15.jpg', 'Much of the testis is replaced by lymphoma. This kodachrome demonstrates several residual tubules separated by lymphomatous infiltrate. Characteristically, lymphoma first infiltrates the interstitium of an organ, and only secondarily the epithelial component (tubules).'],
	['Endo_Lab2_16.jpg', 'Higher magnification demonstrates that this lymphoma is comprised of uniform appearing lymphocytes that are small to intermediate in size.']
];

var micro214 =
[
	['Endo_Lab2_17.jpg', 'Choriocarcinoma, both primary and metastatic, is characteristically extensively hemorrhagic and necrotic.'],
	['Endo_Lab2_18.jpg', 'On higher power, the predominant cell pattern is ribbons and small aggregates of syncytiotrophoblasts which are large bizarre cells with multiple nuclei and abundant eosinophilic cytoplasm.'],
	//['Endo_Lab2_19.jpg', 'On higher power, the predominant cell pattern is ribbons and small aggregates of syncytiotrophoblasts which are large bizarre cells with multiple nuclei and abundant eosinophilic cytoplasm.'],
	['Endo_Lab2_20.jpg', 'The diagnostic hallmark of choriocarcinoma is demonstrated in this kodachrome and is the bimorphic population comprised of multinucleated syncytiotrophoblasts and cytotrophoblasts. The latter are individual cells containing a single nucleus and having distinct cell membranes and rather clear cytoplasm. ']
];

var repro_lab01_case01 =
[
	['Renal_Lab1_18.jpg', 'Benign prostatic hyperplasia. This gross photomicrograph shows a greatly enlarged prostate which has been hemisected. Note the nodularity, which also shows an increase in prostatic tissue size (the normal prostate is 3-4 cm in cross-section by comparison).'],
	['Renal_Lab1_19.jpg', 'This H & E stained section of prostate demonstrates nodular hyperplasia showing both an increase in glands and stromal tissue.'],
	['Renal_Lab1_20.jpg', 'Upon higher power examination, large glands are lined by tall, columnar epithelial cells. Some of these glands have a saw-toothed appearance. A distinct basement membrane is identified. The fibromuscular stroma surrounds the acini. This high-powered micrograph shows prostatic glandular hyperplasia with uniform nuclei. Each acinus is surrounded by basement membrane. The glands are sometimes found in a back to back orientation.']
];

var repro_lab01_case02 =
[
	['Renal_Lab1_21.jpg', 'On gross examination, adenocarcinoma of the prostate is difficult to see. It can on occasion be identified as firm yellowish, poorly defined areas (as in the lower left and right of this prostate gland). Multiple tumor foci are common. It is often stated that the majority of prostatic carcinomas arise in the posterior lobe. A more important point is the fact that prostatic cancers arise in the periphery of the gland.'],
	['Renal_Lab1_22.jpg', 'The diagrammatic chart describes the histologic grading of adenocarcinomas of the prostate according to Dr. D.F. Gleason and the Veteran\'s Administration Cooperation Urologic Research Group. The histologic grades are numbers 1-5, with 1 being the low grade prostatic carcinoma, and 5 being the high grade prostatic carcinoma. This is the most widely used prostate cancer grading system, which was developed by Dr. Gleason while he was at the VAMC in Minneapolis, MN.'],
	['Renal_Lab1_23.jpg', 'This H&E stained section depicts a well differentiated prostatic adenocarcinoma (Gleeson grade 3). It loses its myoepithelial layer (apparent in the larger normal gland near the top of the photo). Each gland is separate from its neighbor, and a line could be drawn around each malignant gland.'],
	['Renal_Lab1_24.jpg', 'Higher power of the well differentiated prostatic adenocarcinoma (Gleeson grade 3). The upper right cormer shows normal prostate gland with its characteristic double layer of cells. The darker cells are the myoepithelial cells which are lost upon malignant transformation. The malignant cells (lower left) are composed of glands exhibiting a single uniform layer of cuboidal or low-columnar epithelium. Mitotic figures are extremely uncommon, and there is some variation in nuclear size and shape.'],
	['Renal_Lab1_25.jpg', 'This H&E stained section depicts a moderately differentiated prostatic adenocarcinoma (Gleeson grade 4). The glands have begun fusing with their neighbor, and a line can not be drawn around each malignant gland.'],
	['Renal_Lab1_26.jpg', 'Another photo of moderately differentiated prostatic adenocarcinoma (Gleeson grade 4), with a cribiform appearance to the fused malignant glands.'],
	['Renal_Lab1_27.jpg', 'This H&E stained section depicts a poorly differentiated prostatic adenocarcinoma (Gleeson grade 5). The glands have lost their glandular shape, and now can be seen as a solid sheet, or as single cells trailing off into the prostatic stromal tissue.'],
	['Renal_Lab1_28.jpg', 'Higher power of the poorly differentiated adenocarcinoma (Gleeson grade 5). No real glandular differentiation is identified. This would be a high grade prostatic adenocarcinoma.'],
	['Renal_Lab1_29.jpg', 'Perineural invasion by this moderately differentiated prostatic adenocarcinoma (Gleeson grade 4). The nerve is the lighter colored pink spindle cells arranged in a fascicle in the center of the photo. The malignant glands are surrounding it. The is also perineural invasion of three other nerves (cut on cross-section) in the photo.'],
	['Renal_Lab1_30.jpg', 'Higher power of perineural invasion by this moderately differentiated prostatic adenocarcinoma (Gleeson grade 4). Note the fusing of the malignant glands with one another.']
];

var repro_lab01 =
[
    ['Case 1', 'Benign Prostatic Hypertrophy', repro_lab01_case01, repro_lab01_dir, "@3852"],
	['Case 2', 'Prostatic Adenocarcinoma', repro_lab01_case02, repro_lab01_dir, "@3854"],	
	['Case 3', 'Testicular Atrophy', micro154, repro_lab01_dir, "@3895"],
	['Case 4', 'Seminoma of the Testis', micro146, repro_lab01_dir, "@3897"],
	//['Micro 149', 'Lymphoma of the Testis', micro149, repro_lab01_dir, "@3898"],
	['Case 5', 'Choriocarcinoma of the Testis, metastatic to the Lung', micro214, repro_lab01_dir, "@3899"],
];


// REPRO LAB 02 COMPONENTS

var minicase42 =
[
	['Slide001.jpg', 'Graph of breast masses by age group.'],
	['Slide003.jpg', 'Photomicrograph of FA. The tumor is composed of a loose hypocellular stroma ("fibro"), and bland compressed glands ("adino") lined with benign epithelium.'],
	['Slide004.jpg', 'Age curve of breast cancer frequency.'],
	
	
	
	['Slide009.jpg', 'Photomicrograph of proliferative FCC. Higher power of the ductal elements showing ductal hyperplasia without atypia. Notice the irregular "slit-like spaces" within the hyperplastic glands. This is a sign of its benign nature.'],
	['Slide011.jpg', 'Table of breast cancer risk factors.'],
	
	['Slide013.jpg', 'Photo of ultrasound of a cyst. Notice the dark sounded hypoechoic mass.'],
	
	
	['Slide017.jpg', 'Survival curves by stage.'],
	
	
];

var micro111 =
[
	['Slide012.jpg', 'Photomicrograph of FNA with breast cancer. Cytology specimen showing a cohesive group of glandular cells showing features of malignancy: high nuclear to cytoplasmic ratio, marked variation of nuclear size and shape, irregular nuclear contours, prominent nucleoli, nuclear overlapping and abnormal clumping.'],
	['Slide014.jpg', 'Gross photograph of breast cancer. Notice the irregular white fibrous stellate mass.'],
	['Repro_Lab2_01.jpg', 'Low magnification of cancer and normal breast.'],
	['Repro_Lab2_02.jpg', 'Low magnification of cancer and normal breast.'],
	//['Repro_Lab2_03.jpg', 'Low magnification of cancer and normal breast.'],
	['Repro_Lab2_04.jpg', 'High magnification of breast cancer cells.'],
	//['Repro_Lab2_05.jpg', 'High magnification of breast cancer cells.'],
	['Repro_Lab2_06.jpg', 'High magnification of breast cancer cells juxtaposed to normal breast duct cells.'],
	['Repro_Lab2_07.jpg', 'High magnification of breast cancer cells juxtaposed to normal breast duct cells.'],
	['Slide015.jpg', 'Histology of ductal carcinoma. Notice the infiltrating glands lined by pleomorphic, malignant cells with numerous mitosis.'],
	['Slide016.jpg', 'Histology of ductal carcinoma. Higher power of pleomorphic malignant cells with numerous mitosis in a glandular pattern.'],
	['Slide018.jpg', 'Histology of lobular carcinoma. Contrast these malignant cells of lobular carcinoma to ductal carcinoma. These malignant cells are small and infiltrating in a characteristic "single file" pattern.'],
	['Slide019.jpg', 'Histology of lobular carcinoma. Higher power of "single file" infiltrating malignant cells with mild pleomorphism.'],
	['Slide020.jpg', 'Bone scan positive for metastases.']
];

var micro361 =
[
	['Slide002.jpg', 'Gross of fibroadenoma. Notice how the tumor is white, fleshy (from the "fibro" component) and well circumscribed.'],
	['Slide004.jpg', ''],
	['Repro_Lab2_08.jpg', 'Low magnification of fibroadenoma.'],
	['Repro_Lab2_09.jpg', 'Low magnification of fibroadenoma.'],
	['Repro_Lab2_10.jpg', 'Intermediate magnification of fibroadenoma.'],
	['Repro_Lab2_11.jpg', 'High magnification of fibroadenoma.'],
	//['Repro_Lab2_12.jpg', 'Focus of adenosis in fibroadenoma.'],
	//['Repro_Lab2_13.jpg', 'Focus of adenosis in fibroadenoma.'],
	//['Repro_Lab2_14.jpg', 'Focus of adenosis in fibroadenoma.']
];

var micro362 =
[
	['Slide005.jpg', 'Gross photograph of FCC. Notice the white fibrous areas combined with cystic spaces.'],
	['Slide006.jpg', 'Photomicrograph of non-proliferative FCC. The majority of the cystic spaces are lined by bland 2-4 layers of glandular cells.'],
	['Repro_Lab2_15.jpg', 'Low magnification of fibrocystic change.'],
	['Repro_Lab2_16.jpg', 'Intermediate magnification of fibrocystic change.'],
	['Repro_Lab2_17.jpg', 'High magnification of fibrocystic change with mild duct epithelial hyperplasia.'],
	['Slide007.jpg', 'Photomicrograph of non-proliferative FCC with dilated cystic glands. The intensely pink glandular cells are indicative of "apocrine metaplasia", a benign finding in FCC.'],
	['Repro_Lab2_18.jpg', 'High magnification of apocrine metaplasia of cyst lining.'],
	['Repro_Lab2_19.jpg', 'Low magnification of proliferative fibrocystic change.'],
	['Repro_Lab2_20.jpg', 'Low magnification of marked ductal hyperplasia in proliferative fibrocystic change.'],
	['Repro_Lab2_21.jpg', 'High magnification of marked ductal hyperplasia in proliferative fibrocystic change.'],
	['Repro_Lab2_22.jpg', 'High magnification of marked ductal hyperplasia in proliferative fibrocystic change.'],
	//['Repro_Lab2_23.jpg', 'High magnification of marked ductal hyperplasia in proliferative fibrocystic change.'],
	['Repro_Lab2_24.jpg', 'Low and high magnification of focus of adenosis in proliferative fibrocystic change.'],
	['Repro_Lab2_25.jpg', 'Low and high magnification of focus of adenosis in proliferative fibrocystic change.'],
	['Slide008.jpg', 'Photomicrograph of proliferative FCC. Notice how the majority of the ductal elements show epithelial hyperplasia with >4 layers of glandular cells. The cells themselves are bland and do not show dysplastic / atypical features.'],
	['Slide010.jpg', 'Photo of atypical hyperplasia. The ductal elements are hyperplastic and filling the duct space. The cells look atypical. Notice the circular "punched out", "cookie-cutter" holes within the duct.'],

];

var micro363 =
[
	
	
	//['Repro_Lab2_26.jpg', 'Low magnification of fibroadenoma change in fibrocystic background.']
];

var micro372 =
[
	['Repro_Lab2_27.jpg', 'Low magnification of gynecomastia. Note the presence of ductal elements only, no lubules as in the female breast.'],
	['Repro_Lab2_28.jpg', 'Low magnification of gynecomastia.'],
	['Repro_Lab2_29.jpg', 'Intermediate magnification of gynecomastia.'],
	//['Repro_Lab2_30.jpg', 'High magnification of epithelial hyperplasia of gynecomastia.']
];

var uh95_6791 =
[
	['Repro_Lab2_31.jpg', 'Low magnification of multiple terminal duct lobular units.'],
	['Repro_Lab2_32.jpg', 'High magnification of single terminal duct lobular unit.']
];

var uh95_7205 =
[
	['Repro_Lab2_33.jpg', 'Low magnification of atrophic breast.'],
	['Repro_Lab2_34.jpg', 'High magnification of atrophic breast.']
];

var uh95_6977 =
[
	['Repro_Lab2_35.jpg', 'Low magnification of ductal carcinoma in-situ.'],
	['Repro_Lab2_36.jpg', 'Intermediate magnification of ductal carcinoma in-situ.'],
	['Repro_Lab2_37.jpg', 'High magnification of ductal carcinoma in-situ.']
];

var uh95_7098 =
[
	['Repro_Lab2_38.jpg', 'Low magnification of node with metastatic ductal carcinoma.'],
	['Repro_Lab2_39.jpg', 'High magnification of node with metastatic ductal carcinoma.']
];

var uh95_6945 =
[
	['Repro_Lab2_40.jpg', 'Low magnification of immunohistochemical stain for estrogen receptor protein in breast carcinoma. The nuclei stain a dark brown, which is showing ER receptor positivity.'],
	['Repro_Lab2_41.jpg', 'High magnification of breast cancer with strong positive staining for estrogen receptor protein by immunohistochemistry.']
];

var repro_lab02 =
[
	//['Minicase 42', 'Breast Cancer', minicase42, minicase42_dir, ],
	['Case 1', 'Fibroadenoma', micro361, repro_lab02_dir, "@8367"],
	['Case 2', 'Fibrocystic Change', micro362, repro_lab02_dir, "@3835"],
	['Case 3', 'Infiltrating Ductal Carcinoma of the Breast', micro111, repro_lab02_dir, "@8363"],
	//['Case 2', 'Proliferative Fibrocystic Change', micro363, repro_lab02_dir, "@3836"],
	['Case 4', 'Gynecomastia', micro372, repro_lab02_dir, "@8366"],
	['Demo UH95-6791', 'Normal Adult Breast Tissue', uh95_6791, repro_lab02_dir, "@8361"],
	['Demo UH95-7205', 'Atrophic Breast', uh95_7205, repro_lab02_dir, ],
	['Demo UH95-6977', 'Ductal Carcinoma In-situ', uh95_6977, repro_lab02_dir, ],
	['Demo UH95-7098', 'Lymph Node with Metastatic Breast Carcinoma', uh95_7098, repro_lab02_dir, ],
	//['Demo UH95-6945', 'Immunohistochemical Stain for Estrogen Receptor Protein in Ductal Carcinoma', uh95_6945, repro_lab02_dir, ]
];

// REPRO LAB 03 COMPONENTS

var minicase48 =
[
	['Repro_Lab1_01.jpg', 'Huge gobs of mucin debulked by the bucketfuls from the peritoneal cavity.'],
	['Repro_Lab1_02.jpg', 'Firm and nodular greater omentum.'],
	['Repro_Lab1_03.jpg', 'Cut surface of omentum. Note small and large cysts containing clear viscid mucin. White tissue between cysts is fibrosis.'],
	['Repro_Lab1_04.jpg', 'Outer view of huge left ovarian cystic tumor. Note smooth surface, suggesting lack of penetration of tumor through serosa, ordinarily a sign of benign ovarian tumor. It is often a surgical feat to remove such a huge cystic lesion intact, without peritoneal spill.'],
	['Repro_Lab1_05.jpg', 'Cut surface of mucinous tumor. Note cysts of all sizes filled with mucin. Only a few solid areas can be seen.'],
	['Repro_Lab1_06.jpg', 'Medium magnification of a solid area of the mucinous tumor. The lining is a very orderly single layer of cells and some papillary infoldings are produced by cell growth of the neoplasm. Connective tissue surrounding the cysts is a fibrous (desmoplastic) reaction to the tumor as it invades the ovarian stroma.'],
	['Repro_Lab1_07.jpg', 'High magnification. Note orderly lining up of a single layer of tall columnar cells with basal nuclei and mucinous cytoplasm facing cyst lumen. The cells are cytologically identical to cells of endocervical mucosa (deceptively benign-appearing).'],
	['Repro_Lab1_08.jpg', 'Low power of greater omentum replaced by metastatic mucinous adenocarcinoma. Note broad areas of fibrosis and free mucin replacing omental fat. A single epithelium-lined cyst is present.'],
	['Repro_Lab1_09.jpg', 'The epithelium-lined cyst defines "pseudomyxoma peritonei" and the fact that the process is malignant with poor prognosis.']
];

var micro330 =
[
	['Repro_Lab1_10.jpg', 'The majority of benign teratomas are unilateral, usually cystic and unilocular, and usually 10 cm. or less in size. As shown in this kodachrome they typically have a smooth glistening serosa and a doughy, resilient consistency.'],
	['Repro_Lab1_11.jpg', 'Sectioning reveals the cystic nature of these tumors and this kodachrome demonstrates that they are typically filled with hair and greasy sebaceous material.'],
	//['Repro_Lab1_12.jpg', 'Gross of cystic teratoma. There is one area to the side that appears more solid, sometimes referred to as Rokitansky\'s tubercle. Histologic sections through such foci have the greatest yield of various types of tissues from the 3 germ layers.'],
	['Repro_Lab1_13.jpg', 'Histologic sections disclose well differentiated tissues from various germ layers. Epidermis with skin appendages is invariably present. Sebaceous glands are numerous (arrows), and keratin production is usually abundant as demonstrated in this kodachrome.'],
	['Repro_Lab1_14.jpg', 'Histologic sections disclose well differentiated tissues from various germ layers. Epidermis with skin appendages is invariably present. Sebaceous glands are numerous, and keratin production is usually abundant as demonstrated in this kodachrome.'],
	['Repro_Lab1_15.jpg', 'Histologic sections disclose well differentiated tissues from various germ layers. Epidermis with skin appendages is invariably present. Sebaceous glands are numerous, and keratin production is usually abundant as demonstrated in this kodachrome.'],
	['Repro_Lab1_16.jpg', 'Section shows well differentiated columnar goblet cells, suggestive of intestinal differentiation.'],
	['Repro_Lab1_17.jpg', 'Section demonstrates a nest of well differentiated cartilage and sweat glands embedded in adipose tissue.'],
	['Repro_Lab1_18.jpg', 'There is well-differentiated neuroglial tissue present attempting (pretty successfully) to recapitulate normal cerebellum.'],
	['Repro_Lab1_19.jpg', 'There is well-differentiated neuroglial tissue present attempting (pretty successfully) to recapitulate normal cerebellum.']
];

var micro331 =
[
	['Repro_Lab1_20.jpg', 'Immature teratomas of the ovary are rare and predominantly a tumor of children and adolescents. They are usually bulky and may be solid throughout, predominantly cystic, or mixed with both solid and cystic areas. Hemorrhage and necrosis may also be present. This kodachrome shows predominantly a solid tumor interspersed with cysts of varying size.'],
	['Repro_Lab1_21.jpg', 'The histoarchitecture consists predominantly of immature tissue with numerous foci of immature neuroepithelium mixed with loose undifferentiated mesenchymal tissue and primitive tubules.'],
	['Repro_Lab1_22.jpg', 'Low and high power demonstrates predominantly primitive neuroepithelium with foci of primitive tubules.'],
	['Repro_Lab1_23.jpg', 'Low and high power demonstrates predominantly primitive neuroepithelium with foci of primitive tubules.'],
	['Repro_Lab1_24.jpg', 'Immature teratomas frequently contain other mixed germ cell components. These kodachromes demonstrate embryonal carcinoma characterized by solid sheets and cords of undifferentiated cells alternating with sinusoidal areas containing red cells and cellular debris.'],
	['Repro_Lab1_25.jpg', 'Immature teratomas frequently contain other mixed germ cell components. These kodachromes demonstrate embryonal carcinoma characterized by solid sheets and cords of undifferentiated cells alternating with sinusoidal areas containing red cells and cellular debris.']
];

var micro332 =
[
	['Repro_Lab1_26.jpg', 'Gross photograph of fairly solid, well demarcated yellow and white, firm thecoma. Note corpus luteum in uninvolved portion of ovary.'],
	//['Repro_Lab1_27.jpg', 'Thecomas are well encapsulated tumors, unilateral, almost always benign, and usually solid but may have cystic areas. As shown in this Kodachrome, they frequently have a yellow color due to increased lipid content. Foci of hemorrhage are also seen.'],
	['Repro_Lab1_28.jpg', 'Low and intermediate magnifications show that the tumor is solid and cellular comprised of spindled cells having an interlacing pattern. Areas of stromal collagen and hyalinization may also be present.'],
	//['Repro_Lab1_29.jpg', 'Low and intermediate magnifications show that the tumor is solid and cellular comprised of spindled cells having an interlacing pattern. Areas of stromal collagen and hyalinization may also be present.'],
	['Repro_Lab1_30.jpg', 'Theca cells may be lipid-rich as shown in this oil-red-0 preparation (Kodachrome is not from student set). Oil red-O stains lipids red.']
];

var micro333 =
[
	['Repro_Lab1_31.jpg', 'A young girl with a granulosa cell tumor. Shows precocious puberty with breast bud development.'],
	['Repro_Lab1_32.jpg', 'Granulosa cell tumors are usually unilateral (10% bilateral), have a well defined capsule, and may be solid or have combined solid and cystic areas. Tumor size is quite variable with tumors as large as 30 cm. being reported. These tumors are frequently endocrinologically active, secreting large amounts of estrogen.'],
	//['Repro_Lab1_33.jpg', 'Granulosa cell tumor of predominantly cystic type with solid white areas.'],
	['Repro_Lab1_34.jpg', 'The histoarchitectural spectrum of granulosa cell tumors is quite broad and includes such patterns as follicles, anastomosing cords, solid sheets, and blending with theca cell elements. The tumor in this kodachrome has a solid monotonous appearance comprised of uniform granulosa cells.'],
	['Repro_Lab1_35.jpg', 'Higher magnification discloses occasional small cavities referred to as Cal-Exner bodies. These may contain acidophilic secretions.'],
	['Repro_Lab1_36.jpg', 'Higher magnification of granulosa cells demonstrating diagnostic nuclear grooves and folds, giving them their characteristic "coffee bean" shape.']
];

var micro334 =
[
	['Repro_Lab1_37.jpg', 'Serous tumors of the ovary are frequently bilateral and up to 2/3rds of malignant tumors may involve both ovaries. They may be quite large as shown in this kodachrome. The capsule shows extensive vascularization and delicate tubo-ovarian adhesions are present. The distal portion of the tube is dilated.'],
	['Repro_Lab1_38.jpg', 'Serous tumors are commonly cystic and often multilocular. More malignant forms as shown in these kodachromes tend to be solid. Cut sections show extensive papillations.'],
	['Repro_Lab1_39.jpg', 'Serous tumors are commonly cystic and often multilocular. More malignant forms as shown in these kodachromes tend to be solid. Cut sections show extensive papillations.'],
	//['Repro_Lab1_40.jpg', 'Low, intermediate and high magnifications demonstrate the papillary nature of the tumor with delicate fibrovascular cores supporting piled-up multilayered serous cells. Cellular pleomorphism and mitoses are present.'],
	['Repro_Lab1_41.jpg', 'Low, intermediate and high magnifications demonstrate the papillary nature of the tumor with delicate fibrovascular cores supporting piled-up multilayered serous cells. Cellular pleomorphism and mitoses are present.'],
	['Repro_Lab1_42.jpg', 'Low, intermediate and high magnifications demonstrate the papillary nature of the tumor with delicate fibrovascular cores supporting piled-up multilayered serous cells. Cellular pleomorphism and mitoses are present.'],
	['Repro_Lab1_43.jpg', 'Low, intermediate and high magnifications demonstrate the papillary nature of the tumor with delicate fibrovascular cores supporting piled-up multilayered serous cells. Cellular pleomorphism and mitoses are present.'],
	['Repro_Lab1_44.jpg', 'About 1/3rd of serous tumors, benign or malignant, contain psammoma bodies.'],
	//['Repro_Lab1_45.jpg', 'Intermediate and high magnifications showing solid areas of tumor in which malignant cytologic features are present; i.e., cellular pleomorphism, numerous atypical mitoses.'],
	//['Repro_Lab1_46.jpg', 'Intermediate and high magnifications showing solid areas of tumor in which malignant cytologic features are present; i.e., cellular pleomorphism, numerous atypical mitoses.'],
	['Repro_Lab1_47.jpg', 'Low magnification demonstrating another criterion of malignancy - ovarian stromal infiltration by tumor.']
];

var micro335 =
[
	//['Repro_Lab1_48.jpg', 'Tubal pregnancy is usually secondary to chronic inflammation leading to partial obstruction and retention of the fertilized ovum. Complications frequently include tubal rupture as seen in this kodachrome due to destruction of the tubal wall by trophoblastic tissue. This may result in extensive intra-abdominal hemorrhage.'],
	['Repro_Lab1_49.jpg', 'In most instances, tubal pregnancies are characterized by an expanded tubal lumen containing clotted blood in which placental tissue may be recognized. Fetal tissue may be inconspicuous or absent. This kodachrome demonstrates a less frequent finding of a well formed fetus of unusually advanced maturity. Rarely, tubal pregnancies may go to term.'],
	['Repro_Lab1_50.jpg', 'Typical histology of a tubal pregnancy demonstrating a lumen filled with clotted blood and chorionic villi.'],
	['Repro_Lab1_51.jpg', 'Typical histology of a tubal pregnancy demonstrating a lumen filled with clotted blood and chorionic villi.'],
	['Repro_Lab1_52.jpg', 'Higher magnification of villus showing both syncytial and cytotrophoblastic tissue.'],
	//['Repro_Lab1_53.jpg', 'Higher magnification of villus showing both syncytial and cytotrophoblastic tissue.'],
	//['Repro_Lab1_54.jpg', 'Higher magnification of villus showing both syncytial and cytotrophoblastic tissue.'],
	//['Repro_Lab1_55.jpg', 'Decidual reaction interspersed within muscular layer of a fallopian tube.'],
	['Repro_Lab1_56.jpg', 'Decidual reaction interspersed within muscular layer of a fallopian tube.']
];

var micro336 =
[
	['Repro_Lab1_57.jpg', 'Kodachromes demonstrate consequence of severe salpingitis and secondary tubo-ovarian abscess. The fallopian tube is dilated and adherent to a deformed bulbous ovary.'],
	//['Repro_Lab1_58.jpg', 'Kodachromes demonstrate consequence of severe salpingitis and secondary tubo-ovarian abscess. The fallopian tube is dilated and adherent to a deformed bulbous ovary.'],
	['Repro_Lab1_59.jpg', 'The fallopian tube on opening is dilated, partly filled with blood, and its wall is thickened. The adherent ovary shows areas of cystic degeneration representing abscess.'],
	['Repro_Lab1_60.jpg', 'Normal fallopian tube demonstrating complex mucosal arborization and papillation.'],
	['Repro_Lab1_61.jpg', 'Tubal abscess showing destruction of normal mucosal folds and lumen filled with polymorphs.'],
	//['Repro_Lab1_62.jpg', 'Tubal abscess showing destruction of normal mucosal folds and lumen filled with polymorphs.'],
	['Repro_Lab1_63.jpg', 'Tubal abscess showing destruction of normal mucosal folds and lumen filled with polymorphs.'],
	//['Repro_Lab1_64.jpg', 'Tubal abscess showing destruction of normal mucosal folds and lumen filled with polymorphs.'],
	//['Repro_Lab1_65.jpg', 'Ovary illustrating abscesses (necrosis and acute inflammation).']
];

var micro337 =
[
	['Repro_Lab1_66.jpg', 'Polycystic ovaries (sclerocystic ovaries) are bilateral and enlarged, and as seen in this kodachrome are characterized by capsular thickening (arrows)and multiple subcapsular cysts (X) that are frequently fairly uniform in size. These may be associated with the Stein-Leventhal syndrome or simply amenorrhea.'],
	//['Repro_Lab1_67.jpg', 'Gross specimen showing the uterus and both ovaries (fixed) again demonstrating the gross appearance of cystic ovaries (arrows).'],
	['Repro_Lab1_68.jpg', 'Low magnification demonstrating the fibrous thickening of the ovarian cortex and multiple superficial follicle cysts.'],
	['Repro_Lab1_69.jpg', 'High magnification of fibrous thickening of ovarian cortex.'],
	['Repro_Lab1_70.jpg', 'Intermediate magnification of one of the cysts.'],
	//['Repro_Lab1_71.jpg', 'High magnifications of cyst lining demonstrates an inner granulosa cell layer next to a layer of luteinized theca interna.'],
	['Repro_Lab1_72.jpg', 'High magnifications of cyst lining demonstrates an inner granulosa cell layer next to a layer of luteinized theca interna.'],
	['Repro_Lab1_73.jpg', 'High magnifications of cyst lining demonstrates an inner granulosa cell layer next to a layer of luteinized theca interna.']
];

var uterine_leiomyoma =
[
	['Repro_Lab1_74.jpg', ''],
	['Repro_Lab1_75.jpg', ''],
	['Repro_Lab1_76.jpg', ''],
	['Repro_Lab1_77.jpg', ''],
];

var endometrial_hyperplasia =
[
	['Repro_Lab1_78.jpg', ''],
	['Repro_Lab1_79.jpg', ''],
	['Repro_Lab1_80.jpg', ''],
];

var endometrial_adenocarcinoma =
[
	['Repro_Lab1_81.jpg', ''],
	['Repro_Lab1_82.jpg', ''],
	['Repro_Lab1_84.jpg', ''],
	['Repro_Lab1_85.jpg', ''],
	['Repro_Lab1_86.jpg', ''],
];

var papillary_serous_tumor =
[
	['Repro_Lab1_87.jpg', ''],
	['Repro_Lab1_88.jpg', ''],
	['Repro_Lab1_89.jpg', ''],
	['Repro_Lab1_90.jpg', ''],
];


var repro_lab03 =
[
	['Case 1', 'Uterine Leiomyoma and Endometrial Polyp', uterine_leiomyoma, repro_lab03_dir, ],
	['Case 2', 'Complex Endometrial Hyperplasia with Atypia', endometrial_hyperplasia, repro_lab03_dir, ],
	['Case 3', 'Invasive Endometrial Adenocarcinoma and Adenomyosis', endometrial_adenocarcinoma, repro_lab03_dir, ],
	['Case 4', 'Papillary Serous Sumor of Low Malignant Potential', papillary_serous_tumor, repro_lab03_dir, ],
	['Micro 330', 'Mature (Benign) Teratoma of the Ovary', micro330, repro_lab03_dir, "@3794"],
	//['Micro 331', 'Immature (Malignant) Teratoma', micro331, repro_lab03_dir, "@3796"],
	['Micro 332', 'Thecoma of the Ovary', micro332, repro_lab03_dir, "@3834"],
	['Micro 333', 'Granulosa Cell Tumor of the Ovary', micro333, repro_lab03_dir, "@3825"],
	['Micro 334', 'Papillary Serous Cystadenocarcinoma of the Ovary', micro334, repro_lab03_dir, "@3828"],
	['Micro 335', 'Ectopic Tubal Pregnancy', micro335, repro_lab03_dir, "@3831"],
	['Micro 336', 'Tubal and Tubo-ovarian Abscess', micro336, repro_lab03_dir, "@3832"],
	['Micro 337', 'Polycystic Ovary', micro337, repro_lab03_dir, "@3833"]
];

var HD3 =
[
	['Endocrine Lab', 'endo_lab', 'Thyroid, Parathyroid, Pituitary, and Adrenal', endo_lab],
	['Renal Lab 01', 'renal_lab01', 'Renal Neoplasia, Renal Malformation, Cystic Disorders, Lower UT Neoplasia', renal_lab01],
	['Renal Lab 02', 'renal_lab02', 'Acute Nephritic Syndromes, Rapidly Progressive Glomerulonephritis, Hematuria', renal_lab02],
	['Renal Lab 03', 'renal_lab03', 'Nephrotic Syndrome', renal_lab03],
    ['Repro Lab 01', 'repro_lab01', 'Testis and Prostate', repro_lab01],
	['Repro Lab 02', 'repro_lab02', 'Breast', repro_lab02],
    ['Repro Lab 03', 'repro_lab03', 'Ovary and Uterus', repro_lab03],
];
