//javascript document	

var period = HD4; //sets current period

//initialize index values
var slide_index=0;
var image_index=0;

var list = "";

var info = "<br><strong>INSTRUCTIONS</strong><br>Click on one of the thumbnails to view its full sized image and description. <br>Red Case links (<span style='color: #993333'>Case NNN</span>) lead to the first slide of the case. <br><br><img src='assets/img/scope.gif' /> icon means there is a virtual slide available for a given specimen.  Click it to open the Spectrum web viewer.<br>When asked for login info, use:<br> user: lampstudent<br>pass: path0l0gy (p-a-t-h-'zero'-l-'zero'-g-y)<br> Note that you must be connected to the internet in order to view the virtual slides.<br><br><a target='blank' class='img' href='http://images.pathology.umn.edu/'>Click here</a> for a full list of virtual slides available for period 5."; 
var lec_info = "<br><span class=\"info\"><span style=\'color:#000000'>INTSTRUCTIONS</span><br><br>Click on the <span style='color: #993333'>lecture title</span> to view its 'lectures online' page.<br>Click the PPT icon <img src='assets/img/ppt.png' /> to download the lecture presentation.";

//help page section separator
var line_sep = "<br><br><hr class=\"hr1\" /><br>";

//lab image directories
var img = "_images/";
var thmb = "_thumbs/";
var mkd = "_marked/";

// virtual slide and lecture directories
var lec_dir = "Lectures/";
var rev_dir = "Reviews/";
var svs_dir = "http://images.pathology.umn.edu/";

//current lab directories relative to Content folder
var blood_lab01_dir = "Labs/Blood_Lab01/";
var blood_lab02_dir = "Labs/Blood_Lab02/";
var blood_lab03_dir = "Labs/Blood_Lab03/";
var blood_lab04_dir = "Labs/Blood_Lab04/";
var blood_lab05_dir = "Labs/Blood_Lab05/";
var gi_lab01_dir = "Labs/GI_Lab01/";
var gi_lab02_dir = "Labs/GI_Lab02/";
var gi_lab03_dir = "Labs/GI_Lab03/";
var gi_lab04_dir = "Labs/GI_Lab04/";

//powerpoint link icon
var link_ppt = "<img class='thumbs' src='assets/img/ppt.png' />";

//PDF link icon
var link_pdf = "<img class='thumbs' src='assets/img/pdf.png' />";

//help icon
var link_help ="<a href='#' onclick='show_help()'>?</a>";


/* Templates

var pdX_lecs =
[
	Lectures ['title', 'date', 'time', 'pages', 'instructor', 'ppt', 'lol']
];

var period_lab01_case01 =
[
	['filename.jpg', 'description', 1 => annotation file exists],
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

//Lecture list
var HD4_lecs = 
[
	['Acute and Chronic Hepatocellular Disease', '03.05', '10:10 AM', 'Portal hypertension p883 - 885<br/>Hemochromatosis and Wilson\'s disease p908 - 911<br/>Impaired blood flow and venous outflow obstruction p918 - 920<br/>Nodules and Tumors p 922 - 927', 'D. Snover', 'Liver.ppt', 'https://www.meded.umn.edu/lectures/2012/LAMP6304_2010-03-01_08.mp4', 'Liver.pdf'],
	['Anemia', '03.08', '1:25 PM', 'pp 639-665', 'T. Singleton', 'Anemia.ppt', 'https://www.meded.umn.edu/lectures/2012/LAMP6305_2010-03-30_13.mp4', 'Anemia.pdf'],
    ['Pathology of the Esophagus and Stomach', '03.13', '1:25 PM', 'pp. 798-805, 810-827', 'J. Jessurun', 'EsophagusStomach.ppt', 'https://www.meded.umn.edu/lectures/2012/LAMP6304_2010-03-04_13.mp4', 'EsophagusStomach.pdf'],
    ['Biliary Tract & Pancreatic Disease', '03.15', '1:25 PM', 'Biliary Tract: pp. 927-935<br/>Pancreas: pp. 939-952', 'J. Jessurun', 'Pancreas.ppt', 'https://www.meded.umn.edu/lectures/2012/LAMP6304_2010-03-11_11.mp4', 'Pancreas.pdf'],
	['Transfusion Medicine', '03.20', '1:25 PM', '', 'S. Shaikh', 'TransfusionMedicine.ppt', 'https://www.meded.umn.edu/lectures/2012/LAMP6305_2010-04-05_13.mp4', 'TransfusionMedicine.pdf'],
    ['Reactive and Neoplastic Disorders of Myeloid Cells Part 1', '03.27', '10:10 AM', '<em>Robbins</em> pp.589-598, 620-632<br/><em>Hoffbrand</em> pp173-190', 'A. Cioc and E. Warlick', 'MyeloproliferativeDisorders.ppt', 'https://www.meded.umn.edu/lectures/2012/LAMP6305_2010-04-12_13.mp4', 'ClonalMyeloidDisorders.pdf'],
    ['Reactive and Neoplastic Disorders of Myeloid Cells Part 2', '03.27', '11:15 AM', '<em>Robbins</em> pp.589-598, 620-632<br/><em>Hoffbrand</em> pp173-190', 'A. Cioc and E. Warlick', 'AML_and_MDS_Part_I.ppt', 'https://www.meded.umn.edu/lectures/2012/LAMP6305_2010-04-12_13.mp4', 'ClonalMyeloidDisorders.pdf'],
    ['Reactive and Neoplastic Disorders of Myeloid Cells Part 3', '03.27', '--', '<em>Robbins</em> pp.589-598, 620-632<br/><em>Hoffbrand</em> pp173-190', 'A. Cioc and E. Warlick', 'AML_and_MDS_Part_II.ppt', 'https://www.meded.umn.edu/lectures/2012/LAMP6305_2010-04-12_13.mp4', 'ClonalMyeloidDisorders.pdf'],
    ['Pathology of the Small and Large Intestine', '03.29', '1:25 PM', 'pp. 828-851, 862-866', 'J. Jessurun', 'SmallBowelColon.ppt', 'https://www.meded.umn.edu/lectures/2012/LAMP6304_2010-03-11_10.mp4', 'SmallBowelColon.pdf'],
	['Reactive and Neoplastic Disorders of Lymphocytes and Plasma Cells Part 1', '03.30', '10:10 AM', '<em>Robbins</em> pp.589-594, 596-605, 609-612<br/><em>Hoffbrand</em> pp.162-173, 191-198, 215-226', 'M. Linden and V. Bachanova', 'Reactive-and-Neoplastic-Disorders-of-Lymphocytes.ppt', 'https://www.meded.umn.edu/lectures/2012/LAMP6305_2010-04-13_13.mp4', 'LymphoidDisorders.pdf'],
	['Reactive and Neoplastic Disorders of Lymphocytes and Plasma Cells Part 2', '04.03', '1:25 PM', '<em>Robbins</em> pp.589-594, 596-605, 609-612<br/><em>Hoffbrand</em> pp.162-173, 191-198, 215-226', 'M. Linden and V. Bachanova', 'Reactive-and-Neoplastic-Disorders-of-Plasma-Cells.pptx', 'https://www.meded.umn.edu/lectures/2012/LAMP6305_2010-04-13_13.mp4', 'LymphoidDisorders.pdf'],
	['Lymph Nodes and Lymphoma', '04.07', '1:25 PM', '<em>Robbins</em> pp.595-600, 605-608, 612-620<br/><em>Hoffbrand</em> pp.197-216', 'S. Yohe and A. Blaes', 'Lymphoma.ppt', 'https://www.meded.umn.edu/lectures/2012/LAMP6305_2010-04-20_11.mp4', 'Lymphoma_Myeloma.pdf'],
];

var lecs = HD4_lecs;// assigns a lecture array to $lecs, used in list_lecs()

var videos =
[
];

//["Title of File", "file type", "file name w/o extension"]
var reviews =
[
];

// HEME LAB 01 COMPONENTS

var micro1 =
[
	['Slide3.jpg', 'Illustrates normal red cells with about 1/3 diameter central pallor and normochromasia (color).  A lymphocyte is in the field.'],
	['Slide4.jpg','This composite photograph shows a lymphocyte, neutrophil, eosinophil, monocyte, and basophil']
];

var micro44 =
[
	['Slide6.jpg', 'Stages of neutrophil maturation are shown from myelocyte to segmented forms.  Also present are a lymphocyte and an erythroblast.'],
        ['Slide7.jpg','Erythroblasts are shown at various stages of maturation from basophilic to normochromic.  Other cell types are present including granulocytes.'],
        ['Slide8.jpg','Two megakaryocytes.']
];

var micro554 =
[
	['Slide10.jpg', 'Normal marrow cellularity'],
	['Slide11.jpg', 'Normal trilineage hematopoiesis']
];

var micro46311 =
[
	['Slide13.jpg', 'The slide shows erythrocyte anisocytosis, occasional elliptocytes, and hypochromic microcytes'],
        ['Slide14.jpg', 'The slide shows hypochromic erythrocytes, occasional elliptocytes and target cells']
];

var micro4749 =
[
	['Slide16.jpg', 'Frequent target cells.  Rare basophilic stippling (upper left)'],
	['Slide17.jpg', 'Frequent target cells.  Rare basophilic stippling (upper right)']	
];

var heinz_body_anemia =
[
    ['Heinz1.jpg', 'Bite cells, increased polychromasia, leukoerythroblastosis'],
	['Heinz2.jpg', 'Bite cells, increased polychromasia, leukoerythroblastosis']	
];

var micro534253bm =
[
	['Slide23.jpg', 'Blood with oval macrocytes'],
	['Slide24.jpg', 'Blood.  Hypersegmented neutrophil.'],
	['Slide25.jpg', 'Blood.  Hypersegmented neutrophil.'],
        ['Slide26.jpg','Bone marrow.  Megaloblastic neutrophil band and polychromatophilic erythroblast.'],
        ['Slide27.jpg','Bone marrow.  Megaloblastic neutrophil metamyelocyte and band.  Abnormal nuclear shape in late stage erythroid precursors.'],
        ['Slide28.jpg','Bone marrow.  Megaloblastic erythroid precursors including polychromatophilic form.  Megaloblastic neutrophil metamyelocyte.'],
        ['Slide29.jpg','Abnormal nuclear shape in late polychromatophilic erythroblasts']
];

var micro6 =
[
	['Slide31.jpg', 'Microspherocytes.'],
	['Slide32.jpg', 'Microspherocytes.']
];

var micro51 =
[
	['Slide34.jpg', 'Microspherocytes, polychromatophilic erythrocytes.'],
	['Slide35.jpg', 'Microspherocytes, polychromatophilic erythrocytes.']
];

var micro9 =
[
	['Slide37.jpg', 'Sickle cells.  Howell-Jolly body (lower right).'],
	['Slide38.jpg', 'Sickle cells.  Target cell (bottom).  Howell-Jolly body (lower left).']
];

var micro50 =
[
	['Slide40.jpg', 'Erythrocyte fragments (schistocytes) including keratocyte (horn cell), helmet cell, triangulocyte.  Nucleated red blood cell.'],
	['Slide41.jpg', 'Erythrocyte fragments (schistocytes).  Neutrophils and myelocyte.']
];

// HEME LAB 02 COMPONENTS


// HEME LAB 03 COMPONENTS

var aplastic_anemia =
[
    ['AplasticAnemia1.jpg', 'Trephine biopsy showing acellular marrow'],
    ['AplasticAnemia2.jpg', 'Trephine biopsy showing acellular marrow'],
];

var micro35 =
[
	['Slide3.jpg', 'There is a marked leukocytosis with granulocytes at all stages of maturation.'],
	['Slide4.jpg', 'Neutrophils at various stages of maturation.  Basophils.  Eosinophils.'],
	['Slide5.jpg', 'Two blasts.  Neutrophils at various stages of maturation.  Basophils.  Eosinophils.']
];

var micro52 =
[
	['Slide7.jpg', 'The platelet and red cell counts are decreased.  Circulating blasts.'],
	['Slide8.jpg', 'There is a myeloblast with a prominent Auer rod in this field.'],
	['Slide9.jpg', 'Myeloblast with several Auer rods.']
];

var micro97 =
[
	['Slide11.jpg', 'The leucocyte count is markedly elevated. Most of the leucocytes have azurophilic granulation and are at the neutrophil promyelocyte or myeloblast stage of maturation. The platelet and red cell counts are decreased.'],
	['Slide12.jpg', 'Leukocytes have predominance of blasts.  No Auer rods.'],
	['Slide13.jpg', 'Blasts and promyelocytes.  Rare dysplastic neutrophils with agranular cytoplasm.']
];

var micro310 =
[
	['Slide15.jpg', 'The leukocyte count is markedly increased with predominantly mature lymphocytes.  Some damaged lymphocytes ("smudged cells") are present.'],
	['Slide16.jpg', 'Small mature lymphocytes and smudged cells.'],
	['Slide17.jpg', 'Small mature lymphocytes and smudged cells.']
];

var micro41 =
[
	['Slide19.jpg', 'There is a moderate leukocytosis.  Nearly all of the leukocytes are either blasts or normal lymphocytes.  There is a marked decrease of all of the normal cell lines.'],
	['Slide20.jpg', 'Rare larger blasts may have granular chromatin pattern.'],
	['Slide21.jpg', 'Most blasts have homogeneously dense chromatin and irregular nuclear contours.']
];

var micro555 =
[
	['Slide23.jpg', 'Neutrophils'],
	['Slide24.jpg', 'Neutrophils with toxic granules and Dohle bodies (lower left, upper right).  Neutrophil metamyelocyte.'],
	['Slide25.jpg', 'Neutrophils.  Nucleated red blood cell.']
];

var micro17 =
[
	['Slide27.jpg', 'Reactive lymphocytes with peripheral cytoplasmic basophilia and a coarse or moderately coarse chromatin pattern.'],
	['Slide28.jpg', 'Reactive lymphocyte with basophilic cytoplasm and coarse chromatin pattern.']
];


// HEME LAB 04 COMPONENTS

var micro369 =
[
	['Slide3.jpg', 'Low power of the lesion, showing the abundance of collagen forming wide bands that separate nodules of lymphoid tissue.'],
	['Slide4.jpg', 'Dense fibrous tissue between nodules of lymphoid cells.'],
	['Slide5.jpg', 'Lacunar cells, small lymphocytes, and histocytes.'],
	['Slide6.jpg', 'Lacunar cells and small lymphocytes.'],
	['Slide7.jpg', 'Classical Reed-Sternberg cells photographed from a different case.  Classical Reed-Sternberg cells may be rare in nodular sclerosis Hodgkin lymphoma.']
];

var micro346 =
[
	['Slide9.jpg', 'Diffuse effacement of nodal architecture.  Scattered pseudofollicles (proliferation centers).'],
	['Slide10.jpg', 'Pseudofollicle contains prolymphocytes and paraimmunoblasts.'],
	['Slide11.jpg', 'Small lymphocytes and a few histocytes (left and lower left).']
];

var micro370 =
[
	['Slide13.jpg', 'Follicles vary in size and shape.  Mantle zone.'],
	['Slide14.jpg', 'Sharp boundary between follicle and mantle zone.  Tingible body macrophages.'],
	['Slide15.jpg', 'Reactive follicle (germinal center) may show polarization (pale and dark areas).'],
	['Slide16.jpg', 'Follicle center cells (centrocytes and centroblasts) in reactive follicle.  Tingible body macrophage (upper middle).  Mitotic figures (left middle and lower right).']
];

var micro347 =
[
	['Slide18.jpg', 'Neoplastic follicles have uniform size and shape.  Retraction artifact may be seen around neoplastic follicles, but this finding is not specific.'],
	['Slide19.jpg', 'Neoplastic follicles (middle of field) often have an ill-defined edge.  Tingible body macrophages are rare to absent in this low-grade follicular lymphoma.'],
	['Slide20.jpg', 'Numerous centrocytes.  Binuclear follicular dendritic cell in center.']
];

var micro348 =
[
	['Slide22.jpg', 'This shows the diffuse pattern of this neoplasia.'],
	['Slide23.jpg', 'Predominance of large neoplastic cells.  Mitotic figure (right).'],
	['Slide24.jpg', 'Neoplastic large cells.  Intermingled small reactive T cells.  Antibody stains would be needed to determine whether the large neoplastic cells are B- or T-lineage.']
];

var micro29 =
[
	['Slide26.jpg', 'There is marked rouleaux formation.'],
	['Slide27.jpg', 'Dysplastic plasma cells have a prominent nucleolus.'],
	['Slide28.jpg', 'Neoplastic plasma cells with different morphologic features.']
];

var lymphoplasmacytic_lymphoma =
[
    ['LymphoplasmacyticLymphoma1.jpg', 'Small mature lymphocytes and plasma cells '],
    ['LymphoplasmacyticLymphoma2.jpg', 'Small mature lymphocytes and plasma cells '],
    ['LymphoplasmacyticLymphoma3.jpg', 'Marrow replaced by neoplasm '],
    ['LymphoplasmacyticLymphoma4.jpg', 'Small mature lymphocytes and plasma cells '],
];

// GI LAB 01 COMPONENTS

var gi_lab01_case01 =
[
	['GI_Lab1_01.jpg', 'Cirrhosis is a diffuse alteration if the hepatic structure charaterized by widespread fibrosis and the formation of regenerative nodules.'],
	['GI_Lab1_02.jpg', 'The nodules seen here are less than 3mm in diameter, thus fulfilling the criterion for micronodular cirrhosis.'],
	['GI_Lab1_03.jpg', 'The nodules seen here are less than 3mm in diameter, thus fulfilling the criterion for micronodular cirrhosis.'],
	['GI_Lab1_04.jpg', 'Reticulin stain emphasizes fibrous bands and outlines regenerative nodules.', 1],
	['GI_Lab1_05.jpg', 'H and E sections of micronodular cirrhosis.', 1],
	['GI_Lab1_06.jpg', 'H and E sections of micronodular cirrhosis.', 1]
];

var gi_lab01_case02 =
[
	['GI_Lab1_07.jpg', 'The vast majority of nodules are more than 3 mm in diameter.'],
	['GI_Lab1_08.jpg', 'The vast majority of nodules are more than 3 mm in diameter.'],
	['GI_Lab1_09.jpg', 'Mixed micro-macronodular cirrhosis having a reasonably equal mix of large an small nodules.']
];

var gi_lab01_case03 =
[
	['GI_Lab1_10.jpg', 'Hepatoma arising in the setting of macronodular cirrosis.', 1],
	['GI_Lab1_11.jpg', 'The white tumor nodules of hepatoma are typically multicentric.', 1],
	['GI_Lab1_12.jpg', 'Multicentric hepatoma arising in micronodular cirrhosis. ', 1],
	['GI_Lab1_13.jpg', 'Large tumor thrombus in portal vein. ', 1],
	['GI_Lab1_14.jpg', 'Hepoatoma arising in non-cirrhotic liver. This patient was a chronic carrier of hepatitis B virus. The green color in some of the tumor nodules is evidence of bile production by this hepatoma.'],
	['GI_Lab1_15.jpg', 'Hepatomas may retain many of the structural and functional characteristics of normal liver. Note that this tumor is growing in cords as does normal liver, but these cords are much thicker than normal. Several bile plugs (arrows) can be seen among tumor cells in lower left. ', 1],
	['GI_Lab1_16.jpg', 'Hepatoma on upper-left, Normal liver on lower-right.'],
	['GI_Lab1_17.jpg', 'Compare the normal hepatocytes to the malignant ones at the edge of this tumor.', 1],
	['GI_Lab1_18.jpg', 'Note the atypical nuclear features in hepatoma (enlargement, high N/C ratio, prominent nucleoli, etc.)']
];

var gi_lab01_case04 =
[
	['GI_Lab1_19.jpg', 'Steatosis. The liver in alcoholic liver disease may show changes ranging from simple fatty change to cirrhosis. The earliest and most common manifestation is reversible fatty change. This may develop within 3 to 7 days of alcoholic consumption. Following cessation of drinking, fat may persist for a few days to 6 weeks, depending on the severity of the changes and intensity of consumption. The presence of fatty change alone in a liver is usually asymptomatic with or without hepatomegaly, but may occasionally be associated with cholestasis or even hepatic failure. This liver is greatly enlarged by fatty change. Note how uniformly pale it is. One of the most common causes of fatty liver is alcohol abuse. This young man died in an auto accident during a drinking binge.'],
	['GI_Lab1_20.jpg', 'Steatosis. Virtually every hepatocyte is filled with fat in the form of trigycerides.'],
	['GI_Lab1_21.jpg', 'Alcoholic hepatitis is characterized by neutrophils, fatty change, and centrilobular mallory hyaline (arrows). Centrilobular fibrosis, which portends cirrhosis, may be present as well.', 1],
	['GI_Lab1_22.jpg', 'Close-up of Mallory hylain. Mallory hyalin is eosinophilic, irregular, "rope-like cytoplamic material that is sharply demarcated from the surrounding cytoplasm. THe cells containing the Mallory hyalin have cleared cytoplasm, suggesting ballooning degeneration ( cell swelling).', 1],
	['GI_Lab1_23.jpg', 'Centrilobular fibrosis in alcoholic liver disease, best seen with trichrome stain. The firbrosis extends out from the centribular areas into the parenchyma in a stellate, pericllular fashion.'],
	['GI_Lab1_24.jpg', 'Centrilobular fibrosis in alcoholic liver disease, best seen with trichrome stain. The firbrosis extends out from the centrilobular areas into the parenchyma in a stellate, pericllular fashion.', 1]
];

var gi_lab01_case05 =
[
	['GI_Lab1_25.jpg', 'At low magnification, cirrohsis is evident. There is also a lymphocytic infiltrate that also outlines the regenerative nodules.', 1],
	['GI_Lab1_26.jpg', 'At low magnification, cirrohsis is evident. There is also a lymphocytic infiltrate that also outlines the regenerative nodules.'],
	['GI_Lab1_27.jpg', 'The lymphocytes spill out past the limiting plate and surround individual hepatocytes. Because these hepatocytes are not frankly necrotic and there is no ballooning degeneration, this cannot be called chronic "active " hepatitis. Nevertheless, it is an aggressive disease, probably viral in origin, that resulted in cirrhosis.', 1],
	['GI_Lab1_28.jpg', 'The lymphocytes spill out past the limiting plate and surround individual hepatocytes. Because these hepatocytes are not frankly necrotic and there is no ballooning degeneration, this cannot be called chronic "active " hepatitis. Nevertheless, it is an aggressive disease, probably viral in origin, that resulted in cirrhosis.', 1]
];

var gi_lab01_case06 =
[
	['GI_Lab1_29.jpg', 'This is a tumor that occurs almost exclusively in the first three years of life. Many examples are large and occupy most of the liver.'],
	['GI_Lab1_30.jpg', 'The cells of hepatoblastoma are typically smaller than those of the adjacent liver. This is in contrast to a hepatocellular carcinoma in which the cells are typically larger than non-neoplastic hepatocytes.'],
	['GI_Lab1_31.jpg', 'The cells of hepatoblastoma are typically smaller than those of the adjacent liver. This is in contrast to a hepatocellular carcinoma in which the cells are typically larger than non-neoplastic hepatocytes.']
];

var gi_lab01_case07 =
[
	['GI_Lab1_32.jpg', 'Cholelithiasis and chronic cholecystitis. The wall of the gallbladder is thickened due to chronic inflammation. The gallbladder and cystic duct are filled with gallstones.'],
	['GI_Lab1_33.jpg', 'Choledocholithiasis. Stones in the common bile duct have obstructed the flow of bile, which is a serious medical problem. ', 1],
	['GI_Lab1_34.jpg', 'Choledocholithiasis. Stones in the common bile duct have obstructed the flow of bile, which is a serious medical problem. '],
	['GI_Lab1_35.jpg', 'Gallstones may also arise in bile ducts within the liver. The single stone and dilated biliary tree are apparent. This young man suffered bouts of cholangitis. One of the complications of stones in the biliary tree is secondary bacterial infections. The stone is thought to serve as nidus for bacterial growth. In this patient, the recurrent infections necessitated partial hepatectomy.']
];

var gi_lab01_case08 =
[
	['GI_Lab1_36.jpg', 'A malignant tumor in the liver is much more likely to be a metastasis than a primay tumor. This patient had adenocarcinoma of the colon. There are several discrete tumor nodules.'],
	['GI_Lab1_37.jpg', 'Diffuse metastases from small cell carcinoma of the lung.'],
	['GI_Lab1_38.jpg', 'Diffuse metastases from small cell carcinoma of the lung.']
];

var gi_lab01_case09 =
[
	['GI_Lab1_39.jpg', 'Esophageal varices are one of the more serious complications of cirrhosis and its attendant portal hypertension. For this photo, the esophagus and stomach have been turned inside out. ', 1],
	['GI_Lab1_40.jpg', 'Esophageal varices are one of the more serious complications of cirrhosis and its attendant portal hypertension. For this photo, the esophagus and stomach have been turned inside out. ', 1],
	['GI_Lab1_41.jpg', 'Punctate bleeding point of exophageal varix.', 1],
	['GI_Lab1_42.jpg', 'Ruptured esophageal varix.', 1]
];

// GI LAB 2 COMPONENTS

var gi_lab02_case01 =
[
	['GI_Lab2_01.jpg', ''],
	['GI_Lab2_02.jpg', 'Reflux esophagitis is characterized by basal cell hyperplasia, elongation of the dermal papillae and eosinophils within the epithelium.', 1],
	['GI_Lab2_03.jpg', '', 1],
	['GI_Lab2_04.jpg', '"Barrett\'s esophagus": replacement of the squamous epithelium with intestinal type glandular epithelium. ']
];

var gi_lab02_case02 =
[
	['GI_Lab2_05.jpg', 'Esophagus', 1],
	['GI_Lab2_06.jpg', 'Esophagus']
];

var gi_lab02_case03 =
[
	['GI_Lab2_07.jpg', ''],
	['GI_Lab2_08.jpg', 'Fig. 8']
];

var gi_lab02_case04_old =
[
	['GI_Lab2_09.jpg', 'Duodenal mucosa with edematous villi stained with mucin stain, showing areas of mucin depletion.'],
	['GI_Lab2_10.jpg', 'High power of duodenal mucosa with active duodenitis. Notice the PMN\'s within the epithelium. Numerous H. pylori organisms can be seen (arrows).', 1],
	['GI_Lab2_11.jpg', 'H. pylori organisms on mucosal surface.']
];

var duodenal_ulcer =
[
    ['stomach H&E 4X.jpg', 'H&E stain of ulcer, low power'],
    ['stomach H&E 10X.jpg','H&D stain of ulcer, medium power'],
    ['stomach H.pylori immunostain 10X.jpg','Immunostain of H. Pylori, 10x'],
    ['stomach H.pylori immunostain 20X.jpg','Immunostain of H. Pylori, 20x'],
    ['stomach H.pylori immunostain 40X.jpg','Immunostain of H. Pylori, 40x'],
];

var gi_lab02_case05 =
[
	['GI_Lab2_12.jpg', 'Diffuse infiltration of the gastric wall by neoplasm results in a thickened "leather bottle" appearance to the stomach.', 1],
	['GI_Lab2_13.jpg', 'Diffuse infiltration of the gastric wall by neoplasm results in a thickened "leather bottle" appearance to the stomach.', 1],
	['GI_Lab2_14.jpg', 'Cross sections of the thickened wall of linitis plastica (lower) with the normal stomach (upper). '],
	['GI_Lab2_15.jpg', 'Mucin-positive signet ring cells (red staining) within the lamina propria of the gastric mucosa. ', 1],
	['GI_Lab2_16.jpg', 'Mucin-positive signet ring cells individually invading the muscular wall of the stomach account for the cassic thickening of the gastric wall. Approximately 5% of all gastric carcinomas are of this morphologic type and have a worse prognosis.', 1],
	['GI_Lab2_17.jpg', 'Photos taken from the demonstration case show diffuse infiltration of gastric smooth muscle by malignant cells. No gland formation is present.'],
	['GI_Lab2_18.jpg', 'Photos taken from the demonstration case show diffuse infiltration of gastric smooth muscle by malignant cells. No gland formation is present.'],
	['GI_Lab2_19.jpg', 'Photos taken from the demonstration case show diffuse infiltration of gastric smooth muscle by malignant cells. No gland formation is present.']
];

var gi_lab02_case06 =
[
	['GI_Lab2_20.jpg', 'Asen face view of the ulcer. The pyloric margin is to the left. The ulcer is on the lesser curvature.'],
	['GI_Lab2_21.jpg', 'This is a longitudinal section cut in the plane of the lesser curvature. The pylorus is to the left. Note several prominent nodes of the lesser omentum; these contained metastatic cancer.', 1],
	//['GI_Lab2_22.jpg', 'This is a longitudinal section cut in the plane of the lesser curvature. The pylorus is to the left. Note several prominent nodes of the lesser omentum; these contained metastatic cancer.'],
	['GI_Lab2_23.jpg', 'Adenocarcinoma (left) arising in a stomach with chronic gastritis with intestinal metaplasia (right). Gastric carcinoma of the intestinal type is the type moist often seen in endemic areas, i.e. Japan, where chronic gastritis with intestinal metaplasia is common. Because of the high incedence of gastric carcinoma in Japan, mass screening by gastroscopy has been employed, resulting in detection of increased numbers of early gastric cancers (defined as carcinoma conmfined to the mucosa or mucosa and submucosa, regardless of the presence of lymph node metastasis). At the present time, 30% of all gastric carcinomas in Japan are of the early gastric type and have a 5-year survival rate of 95%.'],
	['GI_Lab2_24.jpg', 'Photos taken from the demonstration case showing a gland-forming adenocarcinoma that has undermined the adjacent normal fundic mucosa. Invasion of the submucosa and muscularis propria is depicted.', 1]
];

var gi_lab02_case07 =
[
	['GI_Lab2_25.jpg', 'Illeal carcinoid. Polyploid intramural tumor having a pale yellow color on cut surface. Note the characteristically intact overlying mucosa.'],
	['GI_Lab2_26.jpg', 'Illeal carcinoid. Polyploid intramural tumor having a pale yellow color on cut surface. Note the characteristically intact overlying mucosa.'],
	['GI_Lab2_27.jpg', 'Carcinoid is centered in the submucosa. This example has an intact mucosal surface. ', 1],
	['GI_Lab2_28.jpg', 'Solid nests of monotonous-appearing cells with small uniform nuclei.'],
	['GI_Lab2_29.jpg', 'Some nests contain gland-like structures. Carcinoids may arise anywhere in the G.I. tract, but most frequently occur in the appendix, small intestine, and rectum. Carcinoids of the small bowel generally occur in adults and present with symptoms of partial obstruction and/or the carcinoid syndrome. Illeal carcinoids have metastatic potential, but are indolent and often permit long survival even with distant meatastases. Multipule lesions are found in almost 25% of the cases. Those arising in the stomach, small intestine, or colon are associated with regional or distand metastess in 50-70% of the cases. In contrast, appendiceal carcinoids are benign 99% of the time.']
];

var gi_lab02_case08 =
[
	['GI_Lab2_30.jpg', 'White exudate over congested serosal surface.', 1],
	['GI_Lab2_31.jpg', '6-year-old girl with cystic fibrosis has an appendix distended by thick mucus, which has led to perforation of the tip and subsequent periappendiceal abcess and acute appendicitis. Most cases of acute appendicitis have no such obvious cause.']
];

var gi_lab02_case09 =
[
	['GI_Lab2_32.jpg', 'Trichobezoar from a 27-year-old woman (UH77-2727). Hair ball cast of stomach. The result of trichtillomania. Trichobezoars produce abdominal pain, nausea, and weight loss, and may obstruct as in this case.']
];

// GI LAB 3 COMPONENTS

var gi_lab03_case01 =
[
	['GI_Lab3_01.jpg', '', 1],
	['GI_Lab3_02.jpg', 'Typical saw-toothed or serrated appearance of the glandular epithelium.']
];

var gi_lab03_case02 =
[
	['GI_Lab3_03.jpg', 'Typical pendunculated mylberry appearance. Most adenomatous polyps are less than 1 cm. in diameter, and malignant transformation occurs in about 5% of the cases.'],
	['GI_Lab3_04.jpg', 'Head of polyp is composed of small branching glands. The stalk of the pedunculated polyp is composed of normal colonic mucosa and submucosa.']
];

var gi_lab03_case03 =
[
	['GI_Lab3_05.jpg', 'Villous adenomas are generally sessile, usually larger than 2 cm., and have a 40% incidence of malignant transformation.'],
	['GI_Lab3_06.jpg', 'Sessile polyp with characteristic finger-like papillary projections.'],
	['GI_Lab3_07.jpg', 'Adenoncarcinoma arising in a villous adenoma of the rectum. The central ulcer in the large sessile villous adenoma corresponds to the invasive carcinoma. The index of suspicion for malignant transformation should be high in villous adenomas of this size. The ulcer particularly combined with fixation of the underlying tissue is indicative of malignant transformation. Several small hyperplavstic polyps are adjacent to the tumor.'],
	['GI_Lab3_08.jpg', 'Adenocarcinoma arising in villous adenoma. Frond-like projections of villous adenoma ( right) contrast with complex branching, small neoplastic glands of adenocarcinoma (left).', 1]
];

var gi_lab03_case04 =
[
	['GI_Lab3_09.jpg', 'Ulcerating tumor with an adjacent adenomatous polyp and several small hyper plastic polyps.'],
	['GI_Lab3_10.jpg', 'Polypoid or fungating cancer in the colon with melanosis coli. Melanosis coli is caused by the chronic consumption of purgatives of anthracene group resulting in a black or brown discoloration of colonic mucosa. Adenomas and carcinomas arising in the affected colon are free of pigment. The pigment is present in macrophages of the lamina propria.'],
	['GI_Lab3_11.jpg', 'Adenocarcinoma of the colon invading through the muscularis propria into the pericolic fat. The prognosis for carcinoma of the colon is dependent on the level of invasion and the presence or absence of metastases. The 5-year survival rate for cancer confined to the bowel wall is 90%, through the wall is 60%, and with lymph node metastases is about 25%.', 1],
	['GI_Lab3_12.jpg', 'Mucinous adenocarcinoma of the rectum. Large gelatinous polypoid mass. The rectum is the most common site for mucinous adenocarcinoma, which may be associated with villous adenomas, chronic ulcerative colitis, or prior radiation therapy. Mucinous carcinomas generally have a poorer 5-year survival than non-mucinous tumors.'],
	['GI_Lab3_13.jpg', 'Mucinous adenocarcinoma. Nests of nouplastic cells with gland formation suspended in abundant extracellular mucin.'],
	['GI_Lab3_14.jpg', 'Linitis plastica of the colon. Carcinoma diffusely infiltrates the bowel wall resulting in stenosis of the lumen. Like the linitis plastica of the stomach, this tumor has a worse prognosis than the better differentiated colonic adenocarcinomas.'],
	['GI_Lab3_15.jpg', 'Linitis plastica of the colon. Single cells, some of which are signet ring cells, invade bowel wall. Mucin is predominantly intracellular.', 1]
];

var gi_lab03_case05 =
[
	['GI_Lab3_16.jpg', 'This is a hereditary disorder transmitted as autosomal dominant trait and defined as more than 100 adenomas in the colon. The ususally appear in the second or third decades of life. The average number of adenomas is about 1000. In addition to the colon, polyps may also be foundin the stomach. If left untreated, familial polyposis inevitably results in colon cander. Total proctocolectomy is the treatment of choice.'],
	['GI_Lab3_17.jpg', 'Three pedunculated adenomatous polyps.']
];

var gi_lab03_case06 =
[
	['GI_Lab3_18.jpg', 'Multiple juvenile polyposis. hereditary disorder transmitted as an autosomal dominant trait, characterized by hamartomatous or retention polyps located primarily in the colon but also in the stomach and small intestine. Usually diagnosed in infancy or childhood because of bleeding, anemia, hypoproteinemia, of malnutrition. Malignant transformation may rarely occur.'],
	['GI_Lab3_19.jpg', 'Juvenile retention poly has ulcerated surface epithelium and irregular gland proliferation with cystic dilatation in a loose edematious fibrovascular stroma. Juvenile retention polyps may occur as an isolated sporadic finding in the rectosigmoid of children with rectal bleeding.']
];

var gi_lab03_case07 =
[
	['GI_Lab3_20.jpg', 'The disease invariably begins in the rectum and spreads proximally in a continuity to involve the rest of the colon, but the changes are nearly always more chronic and severe in the distal portion of the colon.'],
	['GI_Lab3_21.jpg', 'Normal colonic mucosa for comparison with the next slides.'],
	['GI_Lab3_22.jpg', 'Active stage of the disease charaterized by granular, hemorrhagic friable mucosa with an edematous velvety texture.'],
	['GI_Lab3_23.jpg', 'Granular, friable, ulcerated mucosa.'],
	['GI_Lab3_24.jpg', 'Pseudopolyps are the result of ulceration of the mucosa with undermining of the adjacent intact mucosa, which becomes elevated and polypoid.'],
	['GI_Lab3_25.jpg', 'Toxic megacolon is a complication of ulceratiuve colitis occuring in apporximately 10% of the patients, almost invariably involving the transverse colon with acute inflammation, dialation, and frequently perforation resulting in life-threatening peritonitis. Emergency surgery is required. Toxic megacolon may also occur in Crohn\'s colitis'],
	['GI_Lab3_26.jpg', 'Active ulcerative colitis is charaterized by ulceration of the mucosa and granulation tissue. Ulcerative colitis is primarily a mucosal disease.'],
	['GI_Lab3_27.jpg', 'Crypt abcesses are collections of neutrophils in glands with goblet cell depletion. They are charateristic of ulcerative colitis, although not specific.', 1],
	['GI_Lab3_28.jpg', 'Inflammatory pseudopolyp is compsed of polypoid, edematous mucosa with areas of granulation tissue.']
];

var gi_lab03_case08 =
[
	['GI_Lab3_29.jpg', '"Hose pipe" stricture of terminal ileum and discontinuous involvement (skip areas) of colon with serpiginous ulcers. Crohn\'s disease may appear at any age, but th peak incedence is 20-30 years. Any portion of the GI tract may be involved, but most commonly the terminal ileum and right side of colon. Anal lesions are present in 75% of patients at some time during the course of the disease.', 1],
	['GI_Lab3_30.jpg', 'Early lesions consisting of shallow pinpoint ulcers.', 1],
	['GI_Lab3_31.jpg', 'Serpigenous linear ulcers with cobbelstone appearance.', 1],
	['GI_Lab3_32.jpg', 'Cobblestoning is present in 25% of cases and is the result of intercommunicating ulcers and fissures with interspersed islands of intact mucosa that are elevated bt inflammation and edema.'],
	['GI_Lab3_33.jpg', 'Ileum demonstrating intestinal obstruction and "creeping" fat. The latter is due to serosal infalmmation which causes adhesions between serosa and mesenteric fat.'],
	['GI_Lab3_34.jpg', 'Comparison of pseudo polyps of ulcerative colitis (left) with cobblestoning od Crohn\'s disease (right).'],
	['GI_Lab3_35.jpg', 'Charateristic "transmural" inflammation of Crohn\'s disease with focal ulceration of mucosa, submucosal edema, fibrosis and lymphoid aggregates in submucosa and suberosa.'],
	['GI_Lab3_36.jpg', 'Fissure lined by granulaton tissue extending into muscularis propria. Fissures may result in fistulas between segments of bowel, or to bladder, skin, etc.'],
	['GI_Lab3_37.jpg', 'Noncaseating granuloma with giant cells is a diagnostic feature of Crohn\'s disease found in half of the cases.', 1]
];


var acute_pancreatitis = 
[
    ['Slide03.jpg', 'This image is meant to schematically show how the pancreas can get focally injured when excess alcohol consumption can lead to focal inflammation. The inflammation is cause by release of excess pancreatic enzymes, which are released in an effort to break down the alcohol, consumed and are released into the blood and abdominal cavity.'],
    ['Slide04.jpg', 'This image shows what happens when acute pancreatitis is caused by the blockage of the common bile duct by gallstones. When pancreatic enzymes are released after the ingestion of food they are blocked by the gallstones that are blocking the pancreatic duct and then the enzymes begin to breakdown the pancreas parenchyma and mesenteric fat leading to inflammation and pain.'],
    ['Slide05.jpg', 'Gross photograph of a normal pancreas, divided longitudinally.'],
    ['Slide06.jpg', 'Initially in acute pancreatitis the pancreas is edematous and hyperemic. Shortly thereafter foci develop where the parenchyma breaks down and the parenchyma can become friable and hemorrhagic. It is important at this point to deal with the insulting agent in order to avoid irreversible injury to the pancreas.'],
    ['Slide07.jpg', 'This gross photograph shows what can happen if the insulting agent has not been removed and the pancreas parenchyma has gone on to develop hemorrhagic fat necrosis.'],
    ['Slide08.jpg', 'The fat necrosis can develop within the pancreas and if the enzymes have been released into the abdominal cavity, into the adjacent mesentery and omentum. These areas of omental fat become firmer and more chalk-like as more calcium and magnesium soaps are produced, Thus the term “saponification” which reflects the interaction of cations with free fatty acids released by the action of activated lipase on triglycerides in fat cells; as a result, the level of blood calcium may be depressed.'],
    ['Slide09.jpg', 'This CT scan shows an enlarged pancreas but you can still see normal pancreatic lobulation (blue arrow). The red arrow is pointing to peripancreatic fluid and the black arrow is pointing to mesenteric fat that is being broken down by pancreatic enzymes.'],
    ['Slide10.jpg', 'This CT scan shows a diffusely enlarged and edematous pancreas with loss of normal pancreatic lobulation.'],
    ['Slide11.jpg', 'Normal pancreas with normal fat cells'],
    ['Slide12.jpg', 'Acute pancreatitis with fat necrosis (low magnification)'],
    ['Slide13.jpg', 'Acute pancreatitis with fat necrosis (low magnification)'],
    ['Slide14.jpg', 'Acute pancreatitis with fat necrosis (medium magnification)'],
    ['Slide15.jpg', 'This high-power photomicrograph shows the acute inflammatory cells that have infiltrated the pancreatic parenchyma and have attached the acini, dusts and islets and have left necrotic debris. The proteolytic enzyme digestion of the tissue damages the blood vessels resulting in interstitial hemorrhage and edema.'],
];

var chronic_pancreatitis = 
[
    ['Slide17.jpg','This image shows a pancreas that has been cross-sectioned and it is shrunken and fibrotic. The main duct is dilated and within the lumen you see that it is filled with calcifications that are pointed to by the arrows.'],
    ['Slide18.jpg','Another gross photograph of a cross section of pancreas showing chronic pancreatitis with multifocal fat necrosis and fibrosis'],
    ['Slide19.jpg','In this photomicrograph you see the progression that happens in chronic pancreatitis with a normal cross section on the left, mid-stage interstitial fibrosis in the middle, and end-stage interstitial fibrosis on the right.'],
    ['Slide20.jpg','Fat necrosis on left; normal fat on right (pancreas above and below)'],
    ['Slide21.jpg','Photomicrograph of chronic pancreatitis with exocrine glands replaced by fibrous tissue, leaving only islets of Langerhans'],
    ['Slide22.jpg','In this plain X-ray of the abdomen you see the arrowheads pointing to multiple scattered foci of calcification within a pancreas.'],
    ['Slide23.jpg','This gross photograph shows a pancreatic pseudocyst (following recurrent episodes of pancreatitis)'],
    ['Slide24.jpg','Gross photograph of the pseudocyst contents (fat rendered essentially into soap by actions of release pancreatic enzymes) in the previous gross photo'],
    ['Slide25.jpg','In this CT scan you can see a pseudocyst (as the patient from the case has) outlined by the arrowheads.'],
    ['Slide26.jpg','On this low powered photo micrograph that could be from a patient as in this case you can see interstitial fibroses and a pseudocyst.'],
    ['Slide27.jpg','In this composite of H & E images you see in (a) the wall of a pseudocyst showing an outer layer composed of connective tissue and an inner layer consisting of granulation of granulation tissue surrounding fat necrosis. In the B image you see an interlobular inflammatory infiltrate consisting of macrophages, myofibroblasts, and some lymphocytes. In the C image you see inter and intra lobular fibrosis surrounding an unaffected islet. In the D image you see an interlobular duct that contains a calculus with an inflammatory reaction in the adjacent area.'],
];

var pancreatic_adenocarcinoma = 
[
    ['Slide29.jpg','Pancreatic cancer has been brought to the forefront by the diagnoses of several prominent figures including actors Patrick Swayze, Michael Landon, singers Aretha Franklin and Luciano Pavarotti, Scott LeDoux, and Apple cofounder and CEO Steve Jobs, who has undergone a liver transplant for metastatic disease, and who recently announced he was having recurrent issues, and US Supreme Court Justice Ruth Bader Ginsburg, whose cancer was found early and incidentally. Pancreatic cancer ranks as the fourth deadliest cancer and equally affects men and women.'],
    ['Slide30.jpg','Pancreatic cancer is called a “silent” disease because usually symptoms do not present themselves in the early stages. As the cancer grows, pain often develops in the upper abdomen as is did in the case, and sometimes spreads to the back. Other symptoms may include jaundice, scleral icterus as seen in this photograph, nausea, loss of appetite and weight loss as in this case, fatigue, weakness, and depression.'],
    ['Slide32.jpg','To help make the diagnosis, imaging tests are performed, such as an ultrasound or CT scan. The green regions shown in this colorized CT scan show the cancer in the pancreas and liver. The definitive diagnosis comes from a biopsy.'],
    ['Slide31.jpg','Gross photograph of pancreatic adenocarcinoma, head of pancreas'], 
    ['Slide33.jpg','Pancreatic adenocarcinoma, tail of pancreas (as in this case study)'], 
    ['Slide34.jpg','Pancreatic adenocarcinoma in tail of spleen and invading the spleen'], 
    ['Slide35.jpg','Gross photo of pancreatic adenocarcinoma that has metastasized to the liver'],
    ['Slide36.jpg','Photomicrograph of pancreatic adenocarcinoma (low power)'],
    ['Slide37.jpg','Photomicrograph of pancreatic adenocarcinoma (high power)'],
];

var sclerosing_cholangitis = 
[
    ['Slide43.jpg','This image shows the normal bile ducts at the top and the inflammation and scar tissue that destroys the intralobular bile ducts in the lower image.'],
    ['Slide44.jpg','PSC is a chronic fibrosing inflammatory process that eventually obliterates the biliary system and eventually causes biliary cirrhosis. The structures are located in both the intra- and extra-hepatic bile ducts. This image diagrammatically shows how the process progresses with the corresponding ERCP cholangiogram shown in the lower right.'],
    ['Slide45.jpg','PSC, low power'],
    ['Slide46.jpg','This medium-power H&E image shows the detail of a portal tract with a moderately dense inflammatory infiltrate present that consists of lymphocytes and eosinophils. There is also periductal fibrosis (“onion-skinning”) around the interlobular duct that is in the center.'],
    ['Slide47.jpg','PSC, high power – concentric fibrosis with periductal fibrosis (“onion-skinning”)'],
    ['Slide48.jpg','This H&E image shows a lower-power view of the process with a relatively normal portion of the liver noted to the left of the image. Especially in the early stages the process can be “piecemeal”, meaning that the scarring is focal and is another reason that the process usually takes years before it becomes symptomatic.'],
    ['Slide49.jpg','This duct shows the narrowing that results from the periductal fibrosis. '],
    ['Slide50.jpg','This image shows a H&E photomicrograph of a cholangiocarcinoma which the patient in the case study developed. The incidence of cholangiocarcinomas developing in cases of PSC is unfortunately high. Cholangiocarcinomas arise from the intrahepatic bile duct epithelium. This example is a well-differentiated tubular adenocarcinoma.'],
];

var biliary_cirrhosis = 
[
    ['Slide54.jpg','In this photograph of the exterior of a liver, you can see the long-term effects of PBC with scarring, fibrosis, and cirrhosis.'],
    ['Slide55.jpg','In this photograph of a cut section of liver you also see scarring, fibrosis and cirrhosis.'],
    ['Slide56.jpg','On this CT scan you can see the mixed micro- and macronodular cirrhosis in a patient with end-stage PBC.'],
    ['Slide57.jpg','Florid duct lesion (low power) '],
    ['Slide58.jpg','Inflammation centered on duct (arrow pointing to florid duct lesion – a later stage)'], 
    ['Slide59.jpg','In this high-power H&E view of a interlobular bile duct you see a granulomatous cholangitis with a surrounding dense lymphoplasmacytic infiltrate. You can see that there is focal rupture of the lining of the duct.'],
    ['Slide60.jpg','In this low-power H&E photomicrograph you can see the interstitial hepatic fibrosis around a hepatic triad. '],
    ['Slide61.jpg','PBC, low power of fibrosis formation'],
    ['Slide62.jpg','In this image, you see relatively normal hepatic parenchyma on the left and fibrosis and inflammatory infiltrate on the right'],	
    ['Slide63.jpg','In this H&E photomicrograph you can see two well-formed nodules of relatively unaffected hepatic parenchyma surrounded by fibrosis'],
    ['Slide64.jpg','In this final high-power photomicrograph you see the marked bilirubin (bilirubin stain) in hepatocytes, canaliculi, and Kupffer cells.'],
];

var porcelain_gallbladder =
[
    ['Slide71.jpg','X-ray revealing well-outlined porcelain gallbladder'],
    ['Slide72.jpg','Cross section of gallbladder showing diffuse calcification of gallbladder wall']
];

var celiac_disease =
[
    ['Slide46.jpg','Celiac disease is considered an autoimmune disease and a disease of malabsorption. A patient with the disease develops a reaction to products with gluten and eventually the villi in the small intestine are damaged or destroyed so that nutrients from food cannot be absorbed into the bloodstream. This first image shows how the small intestine mucosa eventually becomes atrophied.'],
    ['Slide47.jpg','Photomicrograph of the normal small intestine'],
    ['Slide48.jpg','In this photomicrograph you can see a marked contrast to the normal small intestine mucosa with marked villous atrophy and inflammation'], 
    ['Slide49.jpg','This high-power photomicrograph further shows plasma cells in the lamina propria and the infiltration of the absorptive epithelium.'], 
    ['Slide50.jpg','This image shows an endoscopy of the normal small intestine mucosa.'], 
    ['Slide51.jpg','Image showing endoscopy of the small intestine mucosa in celiac disease. Notice the loss of normal mucosal folding. The inset shows the scalloping of the mucosal folds characteristic of the disease.'], 
    ['Slide52.jpg','This is an algorithm that is used to evaluate a patient suspected of having celiac disease.'], 
    ['Slide53.jpg','Here is a table of serologic tests that can be performed for a patient suspected of having celiac disease.'],
];


// LAB COLLECTIONS

var blood_lab01 =
[
	['Micro 1', 'Normal Adult Female', micro1, blood_lab01_dir, ],
	['Micro 44', 'Normal Bone Marrow Aspirate', micro44, blood_lab01_dir, ],
	['Micro 554','Normal Bone Marrow Section',micro554,blood_lab01_dir,],
	['Micro 46 & 311', 'Microcytic Hypochromic Anemia from Iron Deficiency', micro46311, blood_lab01_dir, '@14030'],
	['Micro 47 & 49', 'Microcytic Hypochromic Anemia from Beta Thalassemia Minor Blood Smear', micro4749, blood_lab01_dir, '@14033'],
    ['Heinz-Body Anemia', 'Heinz-Body Hemolytic Anemia', heinz_body_anemia, blood_lab01_dir,],
	['Micro 5342 & 53BM', 'Megaloblastic Anemia', micro534253bm, blood_lab01_dir, '@14037'],
	['Micro 6', 'Hereditary Spherocytosis', micro6, blood_lab01_dir, '@14041'],
	['Micro 51', 'Autoimmune Hemolytic Anemia', micro51, blood_lab01_dir, '@14040'],
	['Micro 9', 'Sickle Cell Anemia', micro9, blood_lab01_dir, '@14042'],
	['Micro 50', 'Microangiopathic Hemolytic Anemia', micro50, blood_lab01_dir, '@14035']
];

var blood_lab02 =
[
];

var blood_lab03 =
[
    ['Micro 1', 'Normal Adult Female', micro1, blood_lab01_dir, ],
	['Micro 44', 'Normal Bone Marrow Aspirate', micro44, blood_lab01_dir, ],
	['Micro 554','Normal Bone Marrow Section',micro554,blood_lab01_dir,],
    ['Aplastic Anemia', 'Aplastic Anemia', aplastic_anemia, blood_lab03_dir,],
    ['Micro 555', 'Reactive Neutrophilia', micro555, blood_lab03_dir, '@14039'],
	['Micro 35', 'Chronic Myelogenous Leukemia', micro35, blood_lab03_dir, '@14031'],
	['Micro 52', 'Acute Myeloid Leukemia', micro52, blood_lab03_dir, '@14036'],
	['Micro 97', 'Acute Myeloid Leukemia', micro97, blood_lab03_dir, '@14043'],
];

var blood_lab04 =
[
	['Micro 1', 'Normal Adult Female', micro1, blood_lab01_dir, ],
	['Micro 44', 'Normal Bone Marrow Aspirate', micro44, blood_lab01_dir, ],
	['Micro 554','Normal Bone Marrow Section',micro554,blood_lab01_dir,],
    ['Micro 17', 'Reactive Lymphocytosis', micro17, blood_lab03_dir, '@14024'],
    ['Micro 310', 'Chronic Lymphocytic Leukemia', micro310, blood_lab03_dir, '@14029'],
	['Micro 41', 'Acute Lymphoblastic Leukemia', micro41, blood_lab03_dir, '@14032'],
    ['Micro 29', 'Multiple Myeloma', micro29, blood_lab04_dir, '@14025'],
    ['Lymphoplasmacytic Lymphoma', 'Lymphoplasmacytic Lymphoma (Waldenstrom Macroglobulinemia)', lymphoplasmacytic_lymphoma, blood_lab04_dir,],	
];

var blood_lab05 =
[
    ['Micro 370', 'Lymph Node; Reactive Follicular Hyperplasia', micro370, blood_lab04_dir, ],
	['Micro 347', 'Lymph Node; Non-Hodgkin Lymphoma, Follicular Lymphoma, Grade 1', micro347, blood_lab04_dir, ],
    ['Micro 346', 'Lymph Node; Non-Hodgkin Lymphoma Small Lymphocytic Lymhoma, Chronic Lymphocytic Leukemia, B-cell', micro346, blood_lab04_dir, ],
    ['Micro 348', 'Lymph Node; Non-Hodgkin Lymphoma, Diffuse Large B-Cell', micro348, blood_lab04_dir, ],
    ['Micro 369', 'Lymph Node; Hodgkin Lymphoma, Nodular Sclerosis', micro369, blood_lab04_dir, ],
];

var gi_lab01 =
[
	['Case 01', 'Micronodular Cirrhosis - gross 600, micro 1001', gi_lab01_case01, gi_lab01_dir, ],
	['Case 02', 'Macronodular Cirrhosis - gross 601', gi_lab01_case02, gi_lab01_dir, ],
	['Case 03', 'Hepatocellular Carcinoma (Hepatoma) - gross 602, micro 1002', gi_lab01_case03, gi_lab01_dir, '@4220'],
	['Case 04', 'Alcoholic Hepatitis - micro 162', gi_lab01_case04, gi_lab01_dir, '@4219'],
	['Case 05', 'Cirrhosis with Chronic Hepatitis - gross 622, micro 182', gi_lab01_case05, gi_lab01_dir, '@4218'],
	['Case 06', 'Hepatoblastoma - gross 603, micro 1003', gi_lab01_case06, gi_lab01_dir, '@4221'],
	['Case 07', 'Metastatic Carcinoma of the Liver - gross 605', gi_lab01_case08, gi_lab01_dir, ],
];

var gi_lab02 =
[
	['Case 01', 'Reflux Esophagitis', gi_lab02_case01, gi_lab02_dir, ],
	['Case 02', 'SCC of the Esophagus', gi_lab02_case02, gi_lab02_dir, ],
	['Case 03', 'Adenocarcinoma of the Esophagus', gi_lab02_case03, gi_lab02_dir, ],
	['Case 04', 'Duodenal Ulcer', duodenal_ulcer, gi_lab02_dir, '@4226'],
	['Case 05', 'Linitis Plastica', gi_lab02_case05, gi_lab02_dir, '@4225'],
	['Case 06', 'Intestinal Gastric Adenocarcinoma', gi_lab02_case06, gi_lab02_dir, '@4224'],
	['Case 07', 'Esphageal Varices', gi_lab01_case09, gi_lab01_dir, ],
    ['Case 08', 'Trichobezoar', gi_lab02_case09, gi_lab02_dir, ],
];

var gi_lab03 =
[
    ['Case 01', 'Acute Pancreatitis', acute_pancreatitis, gi_lab03_dir,],
    ['Case 02', 'Chronic Pancreatitis', chronic_pancreatitis, gi_lab03_dir,],
    ['Case 03', 'Adenocarcinoma of the Pancreas', pancreatic_adenocarcinoma, gi_lab03_dir,],
    ['Case 04', 'Primary Sclerosing Cholangitis', sclerosing_cholangitis, gi_lab03_dir,],
    ['Case 05', 'Primary Biliary Cirrhosis', biliary_cirrhosis, gi_lab03_dir,],
    ['Case 06', 'Gallstones', gi_lab01_case07, gi_lab01_dir, ],
    ['Case 07', 'Porcelain Gallbladder', porcelain_gallbladder, gi_lab03_dir,],
];

var gi_lab04 =
[
	['Case 01', 'Hyperplastic Polyp - gross 627, micro 1007', gi_lab03_case01, gi_lab04_dir, ],
	['Case 02', 'Adenomatous Polyp - gross 620, micro 192', gi_lab03_case02, gi_lab04_dir, '@4238'],
	//['Case 03', 'Villous Adenoma - gross 626, micro 219', gi_lab03_case03, gi_lab04_dir, '@4237'],
	['Case 03', 'Adenocarcinoma of the Colon - gross 621, micro 191', gi_lab03_case04, gi_lab04_dir, '@4235'],
	['Case 04', 'Carcinoid of the Small Intestine', gi_lab02_case07, gi_lab02_dir, '@4223'],
	['Case 05', 'Familial Polyposis Coli - gross 622, micro 1008', gi_lab03_case05, gi_lab04_dir, '@4234'],
	//['Case 06', 'Juvenile Polyposis - gross 623, micro 1009', gi_lab03_case06, gi_lab04_dir, '@4233'],
	['Case 06', 'Ulcerative Colitis - gross 624, micro 221', gi_lab03_case07, gi_lab04_dir, '@4232'],
	['Case 07', 'Crohn\'s Disease - gross 625, micro 231', gi_lab03_case08, gi_lab04_dir, '@4227'],
    ['Case 08', 'Celiac Disease', celiac_disease, gi_lab04_dir,],
    ['Case 09', 'Acute Appendicitis', gi_lab02_case08, gi_lab02_dir, '@4222'],
];

var HD4 =
[
	//['Blood Lab 01', 'blood_lab01', 'Anemia', blood_lab01],
	//['Blood Lab 02', 'blood_lab02', 'Transfusion Medicine', blood_lab02],
    //['Blood Lab 03', 'blood_lab03', 'Reactive and Neoplastic Disorders of Myeloid Cells', blood_lab03],
    //['Blood Lab 04', 'blood_lab04', 'Acute and Chronic Leukemias; Reactive Leukocytosis', blood_lab04],
    //['Blood Lab 05', 'blood_lab05', 'Lymph Node Disorders', blood_lab05],
	['GI Lab 01', 'gi_lab01', 'Liver Diseases', gi_lab01],
    ['GI Lab 02', 'gi_lab02', 'Esophagus and Stomach', gi_lab02],
	['GI Lab 03', 'gi_lab03', 'Biliary Tract and Pancreas', gi_lab03],
    ['GI Lab 04', 'gi_lab04', 'Upper and Lower Gastrointestinal Tract', gi_lab04],
];
