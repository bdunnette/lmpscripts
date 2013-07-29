//javascript document	
//Summer 2007 Lab Data

//initialize index values. These vars keep track of current viewing states and are called for navigation
var slide_index=0; //lab component (specimen group)
var image_index=0; //image within a specimen group

var list = "";

// info and lec_info are displayed at the bottom of lecture and lab index pages and supply instructions
var info = "<br><span class=\"info\"><span style=\'color:#000000'>INTSTRUCTIONS</span><br>Click on one of the thumbnails to view its full sized image and description. <br>Red Case links (<span style='color: #993333'>Case NNN</span>) lead to the first slide of the case. <br><br><img src='09_images/scope.gif' /> icon means there is a virtual slide available for a given specimen.  Click it to open the Spectrum web viewer.<br>When asked for login info, use:<br> user: lampstudent<br>pass: path0l0gy (p-a-t-h-'zero'-l-'zero'-g-y)<br> Note that you must be connected to the internet in order to view the virtual slides."; 
var lec_info = "<br><span class=\"info\"><span style=\'color:#000000'>INTSTRUCTIONS</span><br><br>Click on the <span style='color: #993333'>lecture title</span> to view its 'lectures online' page.<br>Click the PPT icon <img src='09_images/pps_ccc.gif /> to download the lecture presentation.";

//lab image directories.
var img = "_images/";
var thmb = "_images/";
var mkd = "_marked/";
//var lec_dir = "Lectures/";
//var rev_dir = "Reviews/";
var svs_dir ="http://images.pathology.umn.edu/";

//current lab directories relative to Content folder
var cardio_lab01_dir = "Labs/Cardio_Lab01/";
var cardio_lab02_dir = "Labs/Cardio_Lab02/";
var cardio_lab03_dir = "Labs/Cardio_Lab03/";
var resp_lab01_dir = "Labs/Resp_Lab01/";
var resp_lab02_dir = "Labs/Resp_Lab02/";

//powerpoint link icon
var link_ppt = "<img class='thumbs' src='09_images/ppt.png' />";

//PDF link icon
var link_pdf = "<img class='thumbs' src='09_images/pdf.png' />";

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

var pd1_lecs = 
[
	['Chronic Obstructive Lung Disease', 'Tues, 9/8', '11:15am', '712-713, 716-728', 'Ewing', 'Resp_Lec01_ObLuDis.ppt', 'lol', 'Resp_Lec01_ObLuDis.pdf'],
	['Lung Cancer', 'Tues, 9/8', '1:25pm', '757-766', 'Ewing', 'Resp_Lec04_Cancer.ppt', 'lol', 'Resp_Lec04_Cancer.pdf'],
	['Vascular and Cardiac Diseases I: Atherosclerosis and Ischemic Heart Disease', 'Thurs, 9/10', '1:25pm', '515-525, 571-587', 'D. Powell', 'CV_Lec01_ACA.ppt', 'lol', 'CV_Lec01_ACA.pdf'],
	['Vascular and Cardiac Diseases II: Aneurysms and Vasculitis', 'Fri, 9/11', '1:25pm', '529-553, 1366-1368', 'D. Powell', 'CV_Lec02_AorticDis.ppt', 'lol', 'CV_Lec02_AorticDis.pdf'],
	['Acute Respiratory Distress Syndrome (ARDS)', 'Tues, 9/15', '1:25pm', '714-716', 'Ewing', 'Resp_Lec03_ARDS.ppt', 'lol', 'Resp_Lec03_ARDS.pdf'],
	['Vascular and Cardiac Diseases III: Myocardial Disease and Tumors', 'Tues, 9/22', '1:25pm', '587, 601-615, 525-530', 'D. Powell', 'CV_Lec04_MCHTN.ppt', 'lol', 'CV_Lec04_MCHTN.pdf'],
	['Pulmonary Infections; CPC - Pathophysiology/Pathology', 'Thurs, 9/24', '1:25pm', '366-368, 381-393, 397-401, 747-757, 766-767', 'Ewing/Kempainen', 'Resp_Lec02_Infections.ppt', 'lol', 'Resp_Lec02_Infections.pdf'],
	['Interstitial Lung Disease', 'Mon, 9/28', '10:10am', '728-732, 737-741', 'Ewing', 'Resp_Lec05_ILD.ppt', 'lol', 'Resp_Lec05_ILD.pdf'],
	['Pneumoconiosis', 'Mon, 9/28', '1:25pm', '732-737, 768-770', 'Ewing', 'Resp_Lec06_Pneum.ppt', 'lol', 'Resp_Lec06_Pneum.pdf'],
	['Vascular and Cardiac Diseases IV: Hypertensive Cardiovascular Disease and Pulmonary Hypertension', 'Tues, 9/29', '1:25pm', '525-529, 587-588, 601-615', 'D. Powell', 'CV_Lec03_PulmHT.ppt', 'lol', 'CV_Lec03_PulmHT.pdf'],
    ['Lung Cancer; CPC - Pathophysiology/Pathology', 'Mon, 10/5', '10:10am', '757-766', 'Ewing/Kempainen', 'Resp_Lec04_Cancer.ppt', 'lol', 'Resp_Lec04_Cancer.pdf'],
    ['Congenital Cardiovascular Disease', 'Mon, 10/5', '11:15am', '564-571', 'Dexter', 'CV_Lec06_CHD.ppt', 'lol', 'CV_Lec06_CHD.pdf'],
	['Vascular and Cardiac Diseases V: Valvular Heart Disease', 'Mon, 10/5', '1:25pm', '588-601', 'D. Powell', 'CV_Lec05_VHD.ppt', 'lol', 'CV_Lec05_VHD.pdf'],	
];

var lecs = pd1_lecs;

var pd1_videos =
[
	["flv", "year", "organ", "lab", "title", "presenter"]
];

var pd1_reviews =
[
 	["title", "file_extension", "filename_sansextension"]
];








// CARDIO LAB 01 COMPONENTS

var cardio_specimen1 =
[
	['Slide01.jpg', 'This is the external appearance of a normal heart. The epicardial surface is smooth and glistening. The amount of epicardial fat is usual. The left anterior descending coronary artery extends down from the aortic root to the apex.', ],
	['Slide02.jpg', 'The aortic valve shows three thin and delicate cusps. The coronary artery orifices can be seen just above.The endocardium is smooth, beneath which can be seen a red-brown myocardium. The aorta above the valve displays a smooth intima with no atherosclerosis.', 1],
	['Slide03.jpg', 'This is the tricuspid valve. The leaflets are thin and delicate. Just like the mitral valve, the leaflets have thin chordae tendineae that attach the leaflet margins to the papillary muscles of the ventricular wall below.', ],
	['Slide04.jpg', 'This is a normal coronary artery. The lumen is large, without any narrowing by atheromatous plaque. The muscular arterial wall is of normal proportion.', ],
	['Slide05.jpg', 'This is the normal appearance of myocardial fibers in longitudinal section. Note the central nuclei and the syncytial arrangement of the fibers, some of which have pale pink intercalated disks.', ]
];

var cardio_case1 =
[
	['Slide06.jpg', 'Common sites of coronary artery disease, and the distribution of myocardial necrosis with blockage of each respective vessel (listed in order of frequency, with the top being most frequent). Distribution of infarction is determined by distribution of occluded vessel:<ul><li>LAD-- Anterior LV, apex, and anterior 2/3 of interventricular septum<li>Circumflex--Small portion of lateral left ventricle<li>RCA-- Posterior LV wall, posterior 1/3 of interventricular septum</ul>', ],
	['Slide07.jpg', 'Cardiac enzymes after onset of myocardial infarction.', ],
	['Slide08.jpg', 'The coronary artery shown here has narrowing of the lumen due to build up of atherosclerotic plaque. Severe narrowing can lead to angina, ischemia, and infarction.', ],
	['Slide09.jpg', 'Coronary artery with occluded lumen.', ],
	['Slide10.jpg', 'Cross section of infarcted myocardium.', ],
	['Slide11.jpg', 'Micrograph of infarcted myocardium undergoing early organization with granulation tissue, and early fibroblastic proliferation. All the dead myocardium has not been removed, the necrotic myocardium here shows the typical hyper-eosinophilia, loss of cross striations and absence of nuclei that is associated with coagulative necrosis.', ],
	['Slide12.jpg', 'Gross: Thrombus in apex of left ventricle.', 1],
	['Slide13.jpg', 'Micro: Thrombus in apex of left ventricle.', 1],
	['Slide15.jpg', 'Ischemic infarct (arrow) involving renal cortex.', 1],
	['Slide16.jpg', 'Passive congestion of the liver, the so-called “nut-meg” liver that can be seen grossly. This is a manifestation of right heart failure, which is often seen after left heart failure associated with acute MI (top). The passively congested liver shows retained hepatic architecture with a distended central vein (arrow) and adjacent sinusoids congested with red blood cells (bottom).', ],
	['Slide17.jpg', 'This patient had a stroke secondary to his MI.', ]
];

var cardio_case2 =
[
	['Slide26.jpg', 'Diagram of left ventricular free wall rupture, which usually occurs 4-7 days after an acute MI when the wall is weakest. Often having catastrophic results by causing bleeding into the pericardial space (hemopericardium) resulting in cardiac tamponade.', ],
	['Slide27.jpg', 'Gross photo of a left ventricular free wall rupture (pericardium has been removed). This anterior location is typical for ruptures as it is for aneurysms, for this reason anterior wall MI’s in general have a worse prognosis', ],
	['Slide28.jpg', 'Hemopericardium occurs most commonly with ventricular wall rupture a few days after an MI, or following external aortic rupture of a proximal extension of an aortic dissection.', ]
];

var cardio_case3 =
[
['Slide30.jpg', 'The typical appearance of abdominal aortic aneurysm. The shape is usually fusiform (circumferential), and located between the renal arteries and the iliac bifurcation.', ],
	['Slide31.jpg', 'Here is an example of an atherosclerotic aneurysm of the aorta in which a large "bulge" appears just above the aortic bifurcation.Such aneurysms are prone to rupture when they reach about 6 to 7 cm in size. They may be felt on physical examination as a pulsatile mass in the abdomen.Most such aneurysms are conveniently located below the renal arteries so that surgical resection can be performed with placement of a dacron graft.', ]
];

var cardio_case4 =
[
	['Slide20.jpg', 'Cardiac aneurysms often cause left heart failure, as the ventricle, even with good force, isn’t able to put out the same volume of blood due to unloading into the aneurysmal wall. Another common complication shown here is mural thrombus formation which gives potential for thromboembolisation. Only rarely will an aneurysm rupture.', ],
	['Slide21.jpg', 'Mural thrombus formation is often seen after myocardial infarctions, especially when a ventricular aneurysm has formed. Parts of this thrombus may embolize and cause ischemic damage, most commonly going to the brain, kidney, spleen, and the extremities. ', 1],
	['Slide22.jpg', 'Aneurysmal dilitation of left ventricle. Note the thinness of the wall.', ],
	['Slide23.jpg', 'There has been a previous extensive transmural myocardial infarction involving the free wall of the left ventricle. Note that the thickness of the myocardial wall is normal superiorly, but inferiorly is only a thin fibrous wall. The infarction was so extensive that, after healing, the ventricular wall was replaced by a thin band of collagen, forming an aneurysm. Such an aneurysm represents non-contractile tissue that reduces stroke volume and strains the remaining myocardium. The stasis of blood in the aneurysm predisposes to mural thrombosis.', 1],
	['Slide24.jpg', 'A cross section through the heart reveals a ventricular aneurysm with a very thin wall at the arrow. Note how the aneurysm bulges out. The stasis in this aneurysm allows mural thrombus, which is present here, to form within the aneurysm.', 1],
	['Slide25.jpg', 'Gross photo of a chronic left ventricular aneurysm (arrow), which is located in the anterior wall (typical location). This aneurysm appears fibrotic and thus would likely not have the paradoxical systolic out pouching seen with aneurysm walls with more viable ( and thus stretchable) myocardium. ', 1]
];

var cardio_specimen2 =
[
	['Slide29.jpg', 'Septal rupture after an MI may be fatal, but not in all cases - it depends on the size of the defect.', ],	
	['Slide18.jpg', 'Most often only part of the papillary muscle ruptures causing insufficiency, but if the entire muscle trunk tears (as shown in this diagram) sudden death results.', ],
	['Slide19.jpg', 'Partial tear of a papillary muscle after infarction. Partial tears will result in mitral insufficiency and produce a mid-late systolic click due to prolapse of the valve. ', 1]
];











// CARDIO LAB 02 COMPONENTS


var cardio_case7 =
[
	['Slide01.jpg', 'Diagram of the anatomic abnormalities and typical shunt of tetralogy of Fallot. Notice the RV hypertrophy, large VSD, over-riding aorta and the pulmonary stenosis. The shunt is a result of the large VSD (which serves to equalize pressures between the right and left ventricles) and the pulmonic stenosis which directs more blood to the systemic circulation.', ],
	['Slide02.jpg', 'Gross example of tetralogy of Fallot. The interior of the right ventricle is exposed showing a large perimembranous VSD (D) and an aorta (A) straddling (ie over-riding) the VSD. A probe (arrow) is positioned inside the stenotic subpulmonary infundibulum.', 1],
	['Slide03.jpg', 'This is an example of tetralogy of Fallot opened sagittally. The aorta and its valve (A, V) clearly straddle the VSD (D) such that the aorta appears to arise equally from each ventricle. The right ventricular (RV) is clearly hypertrophic as it is nearly as thick as left ventricle (LV).', 1],
	['Slide04.jpg', 'The “boot-shaped” heart is an x-ray finding associated with tetralogy of Fallot (arrow at the “toe end” of the boot). A right sided aorta is present in ~1/3 of tetralogy patients and when seen on chest films is virtually diagnostic of tetralogy.', ]
];

var cardio_case8 =
[
	['Slide05.jpg', 'Diagrammatic representation of transposition of great vessels, with two shunts; a patent ductus arteriosus (A), and a large VSD (B). The presence of two shunts, particularly the stable VSD shunt will portend a better prognosis as there is better mixing of blood and less systemic hypoxia. Despite having two shunts the patient with this abnormality would still require prompt surgery to correct the defect.', ],
	['Slide06.jpg', 'An anterior view of the heart and lungs of a 2 month-old infant with transposition of the great vessels. The aorta and pulmonary trunk are easily seen to be reversed here, with the aorta arising from the right ventricle and the pulmonary trunk from the left. Also notice the widely patent ductus arteriosus (arrow) acting as an unstable shunt to allow some oxygenated blood to get from the pulmonary artery to the systemic circulation.', ],
	['Slide07.jpg', 'A sagittal section through the ventricles of a heart with complete transposition of the great vessels. The anatomic switch of the aorta (A) and the pulmonary trunk (PT) is clearly evident. Also seen here is the damage done to the ventricles as a result of the altered demands placed on them. The RV has hypertrophied in response to its role in supplying the systemic circulation. The left ventricle in contrast has a very thin atrophic appearance. A patent ductus arteriosus (arrow) is present, and appears to be the sole supplier of oxygenated blood to the systemic circulation.', ]
];

var cardio_case9 =
[
	['Slide08.jpg', 'Diagram of a VSD. An isolated VSD will primarily cause a left to right shunting of blood and thus will not cause cyanosis initially. This defect is hardly benign as the high pressure of blood shunted into the pulmonary artery has deleterious effects on the pulmonary vasculature. The development of pulmonary vascular disease increases pulmonary vascular resistance and the shunt may reverse direction (Eisenmenger shunt).', ],
	['Slide09.jpg', '90% of ventricular septal defects (VSD) occur in the membranous septum as in this case. (T.V. -> tricuspid valve, P.V. ->  Pulmonary valve)', ]
];

var cardio_case10 =
[
	['Slide10.jpg', 'Diagram of an atrial septal defect. Notice well oxygenated blood shunting into the right atrium. From this diagram it is easy to see why people with an ASD may only present later in life.', ],
	['Slide11.jpg', 'This is an atrial septal defect (D).', ]
];

var cardio_case11 =
[
	['Slide12.jpg', 'Hemorrhoidal-like appearance of closed floppy mitral valve when viewed from left atrium.', ],
	['Slide13.jpg', 'Floppy mitral valve in Marfan\'s syndrome (left). Late stage of floppy mitral valve showing significant focal cuspal thickening (right).', ],
	['Slide14.jpg', 'Endocardial friction lesion (arrow) due to rubbing by elongated chordae of a floppy mitral valve.', 1],
	['Slide15.jpg', 'Floppy mitral valve: gaps in fibrosa (pink) are filled by spongiosal acid mucopolysaccharide (blue).', ]
];

var cardio_case12 =
[
	['Slide32.jpg', 'Diagrammatic representation of different etiologies of arterial aneurysm.', ],
	['Slide33.jpg', 'There is a tear (arrow) located 7 cm above the aortic valve and proximal to the great vessels in this aorta with marked atherosclerosis. This is an aortic dissection.', 1],
	['Slide34.jpg', 'Dissecting aortic aneurysm (aortic dissection). This gross picture highlights a 6cm wide aortic intimal and partial medial tear just above the aortic valve. Most dissections start with an initial tear in the first 10cm of the aorta. Through this tear, blood enters and dissects down the laminar plain of the media. It often will re-enter the vessel lumen in the abdominal aorta or even lower (iliac or femoral arteries).', 1],
	['Slide35.jpg', 'This aorta has been opened longitudinally to reveal an area of fairly limited dissection that is organizing. The red-brown thrombus can be seen on both sides of the section as it extends around the aorta. The intimal tear would have been at the left. This creates a "double lumen" to the aorta. This aorta shows severe atherosclerosis which, along with cystic medial necrosis and hypertension, is a risk factor for dissection.', ],
	['Slide36.jpg', 'Dissecting aortic aneurysm. This is a segment of the abdominal aorta showing the two separated walls of the dissecting aneurysm (the blood has been removed). The media is separated easily, like two pages of a book.', ],
	['Slide37.jpg', 'Syphilitic aneurysm of ascending aorta. This diagram shows how such an aneurysm may cause a hoarse voice by stretching the recurrent laryngeal nerve.', ],
	['Slide38.jpg', 'Syphilitic aortitis with aortic dilatation limited to the ascending aorta. The damage to the vessel wall often extends into the aortic valve ring, causing severe aortic valve insufficiency. ', 1]
];

var cardio_unknown1 = 
[
	['Unknown1-1.jpg', 'Case details will be available in lab between cardio lab 2 and cardio lab 3.',],
	['Unknown1-2.jpg', 'Case details will be available in lab between cardio lab 2 and cardio lab 3.',],
	['Unknown1-3.jpg', 'Case details will be available in lab between cardio lab 2 and cardio lab 3.',],
	['Unknown1-4.jpg', 'Case details will be available in lab between cardio lab 2 and cardio lab 3.',],
	['Unknown1-5.jpg', 'Case details will be available in lab between cardio lab 2 and cardio lab 3.',]
]














// CARDIO LAB 03 COMPONENTS

var cardio_case13 =
[
	['Slide01.jpg', 'Diagram of different types of cardiomyopathy.', ],
	['Slide02.jpg', 'Gross example of four chamber dilatation, giving the heart a globular configuration. The arrow points to the division between the right and left ventricles, highlighting the fact that both ventricles are enlarged. The hearts in dilated cardiomyopathy are extremely heavy (2-3x normal weight). Normal heart weight: men 300-350 gm, women 250-300 gm.', 1],
	['Slide03.jpg', 'Left ventricular dilatation, the contour of the wall is rounded, the wall thickness is thin here, but may also be normal or thick with dilated cardiomyopathy. Dilated ventricles often contain mural thrombi that are absent in this case.', ],
	['Slide04.jpg', 'Cross section of a normal heart, with right and left ventricles (R & L) having normal myocardial thickness and chamber size. Ventricles of normal thickness LV 1.3-1.5 cm; RV 0.3-0.5 cm (top). Dilated cardiomyopathy (cross section), with dilated both right and left ventricular chambers. The myocardium appears to be normal or slightly thin in this case (bottom).', ]
];

var cardio_case14 =
[
	['Slide10.jpg', 'Diagram shows the distinctive pattern of asymmetric hypertrophy that is seen in IHSS. The microscopic drawing on the right shows the typical microscopic finding in this disease, that of myocyte disarray. This microscopic change is not entirely specific to IHSS, as it can be seen in ischemic heart and hypertrophy associated with HTN, but nearly all cases of IHSS show widespread myofiber disarray.', ],
	['Slide11.jpg', 'A gross example of HCM (left) with prominent asymmetric septal hypertrophy. The anterior leaflet of the mitral valve is held in the clamp; you can imagine how the high pressure flow through the outflow tract might pull this leaflet down (Venturi effect) further compromising the LV outflow. The micro photo on the right shows the myocyte disarray and large amounts of interstitial collagenous fibrosis (blue material) typical of HCM (trichrome stain).', 1]
];

var cardio_case15 =
[
	['Slide33.jpg', 'Left ventricular assist device. The slide shows the inflow and outflow cannulae and the electric power-line connected to the pump casing.', ],
	['Slide34.jpg', 'Dilated cardiomyopathy. This view of the patient\'s surgically removed heart shows dilated cardiac chambers with stasis thrombi in the left ventricle.', 1],
	['Slide35.jpg', 'Donor heart biopsy at 3 weeks. The slide shows mild (grade 1A) acute rejection as evidenced by scanty interstitial lymphocytes in the right ventricular endomyocardial sample that was obtained by a bioptome inserted via catheter into the right ventricle.', ],
	['Slide36.jpg', 'Donor heart biopsy at 18 months. The slide shows a florid interstitial lymphocytic infiltration consistent with severe acute (cellular) rejection (grade 3B). Myocyte necrosis was evident elsewhere in the sample.', ],
	['Slide37.jpg', 'Donor heart biopsy at 2 years. The slide shows more than half of the endomyocardial sample to be composed of mature fibrous tissue. Serial sections excluded obliquely sectioned endocardium as a possible cause of this appearance. Biopsy was read as strongly suggestive of graft arteriopathy (chronic rejection).', ],
	['Slide38.jpg', 'Graft arteriopathy: donor heart appearance at autopsy. The donor heart shows diffuse myocardial fibrosis and large apical, organizing stasis thrombi are seen in both ventricles. Major epicardial coronary arteries appear thick walled.', 1],
	['Slide39.jpg', 'Graft arteriopathy: Donor major coronary arterial histiology. Slide shows a section of the left anterior descending coronary artery in which the intima shows marked intimal fibrosis, the internal elastic lamina may still be discerned and there is fibrous replacement of the media. Some mononuclear cells are present in the thickened intima. Adventitial fibrosis merges with the fibrosed media.', 1],
	['Slide40.jpg', 'Graft arteriopathy: Donor intramyocardial coronary artery histology. Severe luminal narrowing of intramyocardial coronary artery due to chronic rejection. Note the severe intimal thickening due to smooth cell proliferation and collagen deposition. Scanty lymphocytes are also present.', ],
	['Slide41.jpg', 'Anastomosis lines in Aorta (Slide 41) left atrium (Slide 42) pulmonary artery (Slide 43) and right atrium (Slide 44) of an autopsied donor heart from another patient. Arrows indicate surgical suture lines.', 1],
	['Slide42.jpg', 'Anastomosis lines in Aorta (Slide 41) left atrium (Slide 42) pulmonary artery (Slide 43) and right atrium (Slide 44) of an autopsied donor heart from another patient. Arrows indicate surgical suture lines.', 1],
	['Slide43.jpg', 'Anastomosis lines in Aorta (Slide 41) left atrium (Slide 42) pulmonary artery (Slide 43) and right atrium (Slide 44) of an autopsied donor heart from another patient. Arrows indicate surgical suture lines.', 1],
	['Slide44.jpg', 'Anastomosis lines in Aorta (Slide 41) left atrium (Slide 42) pulmonary artery (Slide 43) and right atrium (Slide 44) of an autopsied donor heart from another patient. Arrows indicate surgical suture lines.', 1]
];

var cardio_case16 =
[
	['Slide16.jpg', 'Diagram of congenital bicuspid aortic valve.', ],
	['Slide17.jpg', 'Calcified congenital bicuspid aortic valve. Stenosis is due to the immobile leaflets. Unlike rheumatic aortic stenosis the commissures (arrow) are not fused.', 1],
	['Slide18.jpg', 'Gross appearance (left) of calcified congenital bicuspid aortic valve. Arrow indicates the low raphe that does not reach the free margin of the conjoined cusp. Histology (right) shows prominent dystrophic calcification within a cusp.', 1],
	['Slide19.jpg', 'Concentric left ventricular hypertrophy, seen with overload of the left ventricle. This is common with HTN and aortic stenosis.', ]
];

var cardio_case17 =
[
	['Slide20.jpg', 'Infective endocarditis of a floppy mitral valve.', ],
	['Slide21.jpg', 'Bacterial vegetations on an aortic valve.', 1],
	['Slide22.jpg', 'Infective vegetations superimposed on a mitral valve previously damaged by rheumatic heart disease.', 1],
	['Slide23.jpg', 'Acute bacterial endocarditis due to a virulent organism has produced perforation of a normal aortic valve cusp.', 1],
	['Slide24.jpg', 'Infection of a St Jude Medical aortic bileaflet mechanical prosthesis.', ],
	['Slide25.jpg', 'Infective bacterial endocarditis involving the mitral valve. There was a hole in the valve at the center of the vegetation causing insufficiency.', ],
	['Slide26.jpg', 'Friable pieces of infectious material can break off a valve vegetation and embolize to other organs. In this case, there were multiple abscesses found in the spleen.', 1],
	['Slide27.jpg', 'Additional picture of splenic abscess.', 1],
	['Slide28.jpg', 'Additional picture of splenic abscess.', 1]
];

var cardio_case18 =
[
	['Slide29.jpg', 'Mitral stenosis.', 1],
	['Slide30.jpg', 'Mitral stenosis: marked chordal fusion and cuspal thickening is seen.', 1],
	['Slide31.jpg', 'Fish mouth orifice in a case of mitral stenosis viewed from the left atrium. The lumen of the valve is reduced to a slit. The yellow irregularities on the valve are due to secondary calcification that prevents a valvotomy being performed (valve replacement is indicated). Rheumatic heart disease is by far the most common cause of mitral stenosis.', ]
];

var cardio_case19 =
[
	['Slide32.jpg', 'Heart with large myxoma in the artium.', ],
	['Slide32b.jpg', 'Myxoma with arrow at pedicle (site of attachment to atrial wall).', ],
	['Slide32c.jpg', 'Notice the loose hypocellular nature of the tumor, with the characteristic "myxoid" bluish-grey background. The few cells present are stellate (star-like) in appearance. No atypia or mitoses are seen.', ],
	['Slide32d.jpg', 'Higher Power', ]
];

var resp_unknown1 = 
[
	['Unknown2-1.jpg', 'Case details will be available in lab between cardio lab 3 and respiratory lab 1.',],
	['Unknown2-2.jpg', 'Case details will be available in lab between cardio lab 3 and respiratory lab 1.',],
	['Unknown2-3.jpg', 'Case details will be available in lab between cardio lab 3 and respiratory lab 1.',],
	['Unknown2-4.jpg', 'Case details will be available in lab between cardio lab 3 and respiratory lab 1.',],
	['Unknown2-5.jpg', 'Case details will be available in lab between cardio lab 3 and respiratory lab 1.',],
	['Unknown2-6.jpg', 'Case details will be available in lab between cardio lab 3 and respiratory lab 1.',],
	['Unknown2-7.jpg', 'Case details will be available in lab between cardio lab 3 and respiratory lab 1.',],
	['Unknown2-8.jpg', 'Case details will be available in lab between cardio lab 3 and respiratory lab 1.',],
	['Unknown2-9.jpg', 'Case details will be available in lab between cardio lab 3 and respiratory lab 1.',],
	['Unknown2-10.jpg', 'Case details will be available in lab between cardio lab 3 and respiratory lab 1.',]
]










// RESPIRATORY LAB 01

var resp_case1 = [
	['Picture1.jpg', 'This is a photomicrograph of an airway with abundant luminal mucus admixed with inflammatory cells', ],
	['Picture2.jpg', 'Typical findings in asthma include thickening of the basement membrane, increased vascularity and increase in number of goblet cells.',],
	['Picture3.jpg', 'The bronchiolar wall is heavily infiltrated by eosinophils.',],
	['Picture4.jpg', 'Examination of the sputum may reveal Curschmann spirals (left panel) which are spiral shaped mucus plugs. Notice that the spiral are admixed with inflammatory cells, including numerous eosinophils. As a result of the eosinophil-rich inflammatory infiltrate Charcot-leyden crystals (right panel) may also be present in the sputum.  These crystalloid structures are made up of galectin-10, an eosinophil lysophospholipase binding protein.',]
];
var resp_case2 = [
	['Picture5.jpg','Hemorrhagic, diffusely consolidated pulmonary parenchyma.',],
	['Picture6.jpg','Diffuse Alveolar Damage –ARDS. Hyaline membranes are lining the alveolar ducts and alveolar septa.',],
	['Picture7.jpg','Micro: Diffuse Alveolar Damage – ARDS. On higher power, the hyaline membranes are evident.',],
	['Picture8.jpg','X-Ray and autopsy specimen showing extensive interstitial fibrosis.',],
	['Picture9.jpg','The hyaline membranes and alveolar exudate is invaded by fibroblasts that deposit collagen which becomes incorporated into the interstitium.  Notice the massive proliferation of fibroblasts.',]
];
var resp_case3 = [
	['Picture10.jpg','Bronchopneumonia. Note patchy consolidation.',],
	['Picture11.jpg','Micro: Bronchopneumonia. The cellular infiltrate of bacterial bronchopneumonia consists predominantly of polymorphonuclear leukocytes centered on the alveoli around the respiratory bronchioles.',],
	['Picture12.jpg','Bronchopneumonia: Gray Hepatization. Bronchopneumonia in the gray hepatization stage - gross  (left), micro (right). The change in color is secondary to breakdown  of the red blood cells in the alveolar spaces leaving the neutrophils  behind.',],
	['Picture13.jpg','Schematic representation and Xray of a patient with lobar pneumonia.  There is diffuse consolidation of the right lower lobe.',],
	['Picture14.jpg','Gross appearance of lobar pneumonia showing diffuse consolidation of the lower lobes at the stage of gray hepatization (fresh, left; formalin fixed, right).',],
	['Picture15.jpg','',]
];
var resp_case4 = [
	['Picture16.jpg','Lung Abscess. Abscess formed by destruction of lung parenchyma with  purulent material within the cavity.',]
];
var resp_case5 = [
	['Picture17.jpg','Pulmonary Infarct due to Aspergillus. Shows nodular or wedge-shaped infarcts (white necrotic areas surrounded by red hemorrhagic rims).',],
	['Picture18.jpg','H&E: Aspergillus in wall of bronchus and wall of pulmonary artery. Occlusion of pulmonary artery caused by thrombus.',],
	['Picture19.jpg','GMS Stain: Aspergillus in wall of artery. Branching, septated fungal hyphae.',]
];
var resp_case6 = [
	['Picture20.jpg','CMV Interstitial Pneumonia. CMV inclusion - Enlarged cell with large eosinophilic intranuclear inclusion surrounded by a halo. Notice the presence of hyaline membranes.  CMV infection is a cause of diffuse alveolar damage.',],
	['Picture21.jpg','In addition to CMV infection (upper half), there is an intraalveolar pink, foamy, granular exudate which is characteristic of infection by the fungus Pneumocystis jiroveci (previously known as Pneumocystis carinii). A GMS stain (right panel) confirms the presence of organisms.',],
	['Picture22.jpg','Adenovirus pneumonia. A focus of intraalveolar hemorrhage and parenchymal necrosis is observed.',],
	['Picture23.jpg','Adenovirus pneumonia.  The bronchiolar epithelium shows a squamoid appearance and numerous nuclei with a “smudged” chromatin pattern.',],
	['Picture24.jpg','Adenovirus pneumonia:  Immunoperoxidase reaction using antibodies vs adenovirus.  Notice the presence of numerous infected cells.',]
];
var resp_case7 = [
	['Picture25.jpg','Gohn nodule: rounded area of gray-white consolidation, usually located in the lower part of the upper lobe or upper part of the lower lobe.   Frequently there is central caseous necrosis.',],
	['Picture26.jpg','Multiple white rounded lesions representing granulomas are present in both specimens.  Large cavities are seen in the upper lobes.',],
	['Picture27.jpg','Pulmonary tuberculosis: Caseating granulomas with central necrosis surrounded by epithelioid histiocytes.  Langhans cells, which are frequently seen in tuberculosis, are differentiated from other cells by the peripheral location of the nuclei.  The lower incert shows typical acid fast rods representing Mycobacterium tuberculosis (Fite stain).',],
	['Picture28.jpg','Miliary tuberculosis:  Numerous small granulomas  (1 to 3 mm in size) are distributed throughout both lung as shown in the X-ray and in the gross specimen.',]
];
var resp_case8 = [
	['Picture29.jpg','Gross: Sarcoidosis. This shows patchy interstitial fibrosis (white areas) in a case of burned-out sarcoidosis.',],
	['Picture30.jpg','Multiple non-necrotizing granulomas are present.',],
	['Picture31.jpg','Sarcoidosis.  High power showing non-necrotizing epithelioid granulomas.',],
	['Picture32.jpg','Sarcoidosis: Advanced pulmonary fibrosis.',],
	['Picture33.jpg','Sarcoidosis: advanced pulmonary fibrosis.  Some peribronchiolar granulomas are identified.',]
];
var resp_case9 = [
	['Picture34.jpg','Pulmonary embolus:  Occlusion of the pulmonary artery by an embolus.',],
	['Picture35.jpg','Embolus: Upper left: Drawing showing a saddle embolus occluding the pulmonary artery and  its branches.  This is a fatal event. Right panel: An embolus with a pleural based wedge-shaped infarct. Lower left: Ischemic necrosis of the lung.',]
];











// RESPIRATORY LAB 2

var resp2_case1 = [
	['Picture1.jpg','A: Normal lung B: Centrilobular emphysema.',],
	['Picture2.jpg','A. Normal acinus.  B.  Centrilobular emphysema with dilatation that initially affects the respiratory bronchioles.  C. Panacinar emphysema with intiail distention of the alveolus and alveolar ducts.',],
	['Picture3.jpg','Drawing representing A. Centrilobular emphysema, B. Panacinar emphysema.',],
	['Picture4.jpg','Left panel: normal lung.  Right panel: centrilobular emphysema.',],
	['Picture5.jpg','Centrilobular emphysema.',],
	['Picture6.jpg','Emphysema showing rupture of septs and hyperdistention of alveolar sacs.  “Simplification” of the pulmonary parenchyma.',]
];
var resp2_case2 = [
	['Picture7.jpg','Central Squamous Cell Carcinoma. This is a squamous cell carcinoma of the lung that is arising centrally in the lung (as most squamous cell carcinomas do). It is obstructing the right main bronchus. The neoplasm is very firm and has a pale white to tan cut surface. Histologic appearance of squamous cell carcinoma showing solid growth pattern and keratinization.',],
	['Picture8.jpg','Squamous cell carcinoma in a patient with centrilobular emphysema. Notice cavitation seen in the CT scan and resected specimen.',],
	['Picture9.jpg','Squamous cell carcinoma with keratinization and central necrosis leading to cavitation.',],
	['Picture10.jpg','Squamous Cell Carcinoma. Another feature of squamous cell carcinoma is intracellular bridging reminiscent of the desmosomes in the stratum spinosum of the epidermis. Also note the mitotic activity.',]
];
var resp2_case3 = [
	['Picture11.jpg','Peripheral mass without cavitation in the right lung.',],
	['Picture12.jpg','An adenocarcinoma is identified by the formation of glands or the secretion of mucus by the neoplastic cells (or both).',],
	['Picture13.jpg','Another example of adenocarcinoma.  Notice the marked nuclear atypia.',],
	['Picture14.jpg','Immunohistochemical studies are of help in identifying a tumor as a primary neoplasm rather than a metastasis.  As shown in this case most pulmonary adenocarcinomas are positive for CEA and cytokeratin 7 as well as express thyroid transcription factor 1.  A metastatic adenocarcinoma of the colon would be CK20 positive and CK7 and TTF-1 negative.',],
	['Picture15.jpg','Lymphangitis spread: Upper panels: CT scan and cross section of the lung. Lower panels: Pleural surface and micro showing tumor within lymphatics.',],
	['Picture16.jpg','Bronchioloalveolar Carcinoma. CT scan showing a peripheral nodule indistinguishable from conventional adenocarcinomal. In this picture it resembles pneumonia. The characteristic of this tumor is that the neoplastic cells grow along pre-existing alveolar septa without invasion',],
	['Picture17.jpg','There are two types of bronchioloalveolar carcinoma:  Non mucinous (left panel).  This type usually presents as a peripheral nodule amendable to surgical resection with an excellent survival.  The mucinous (right panel) tends to spread aerogenously forming satellite nodules or produce the consolidation of the entire lobe.',]
];
var resp2_case4 = [
	['Picture18.jpg','Small Cell Carcinoma. Central tumor which usually has spread to mediastinal lymph nodes (and throughout body) by the time of its diagnosis. The photo on the right shows additional detail of the central tumor.',],
	['Picture19.jpg','Small Cell Carcinoma. Small cells with very little cytoplasm. The nuclei do not have nucleoli. These cells are very fragile and frequently break.  The nucleic acids derived from the broken nuclei produce the basophilic smearing in vascular structures that is illustrated in the insert (Azzopardi’s phenomenon).',],
	['Picture20.jpg','Another example of small cell carcinoma.',],
	['Picture21.jpg','This tumor type expresses neuroendocrine markers such as synaptophysin and chromogranin.  A cytokeratin stain, which is always positive, is frequently performed to differentiate this tumor from other neoplasms with a small round cell morphology such as lymphomas.',]
];
var resp2_case5 = [
	['Picture22.jpg','Chondroid Hamartoma. Rubbery, lobulated mass with cartilaginous appearance.',],
	['Picture23.jpg','Histoplasma Granuloma. Round, laminated nodule with necrotic, fibrotic, or calcified center and fibrotic outer rim.',],
	['Picture24.jpg','Chondroid Hamartoma. Composed of cartilage, fat cells, and fibrous tissue.',],
	['Picture25.jpg','Histoplasma Granuloma. This histoplasma granuloma has a fibrotic center with a chronic inflammatory infiltrate at its periphery adjacent to uninvolved lung (right).',],
	['Picture26.jpg','Granulomas at the periphery of the area of necrosis.',],
	['Picture27.jpg','Histoplasmosis.  The organisms are easily seen on silver stains (GMS).',]
];
var resp2_case6 = [
	['Picture28.jpg','Asbestosis. Diffuse interstitial fibrosis with honeycombing. Nothing specific about gross pathology to distinguish asbestosis from other causes of diffuse interstitial fibrosis with honeycombing.',],
	['Picture29.jpg','Asbestos Body. Asbestos body - dumbbell shaped iron-encrusted clear asbestos fiber. Note the histiocytes in the central panel attempting to engulf the asbestos fiber.',],
	['Picture30.jpg','Xray showing peripheral pleural plaque.  Gross : Pleural Plaque in patient exposed to Asbestos Pleural plaque on diaphragm. Symmetrical bilateral pleural plaques are usually caused by asbestos exposure.',],
	['Picture31.jpg','Malignant Mesothelioma. CT scan: peripheral irregular thickening of the pleura encasing the lung. Malignant mesothelioma is a malignant tumor arising from the parietal pleura which is usually caused by asbestos exposure. The tumor thickens the entire pleura and extends down the lobar fissures.',],
	['Picture32.jpg','Mesothelioma: tubular and papillary growth pattern.  The cells are cuboidal and have eosinophilic cytoplasm.',],
	['Picture33.jpg','Mesothelioma.  Immunohistochemistry is frequently use to differentiate mesothelioma from metastatic carcinomas involving the pleura.  Most mesotheliomas express cytokeratins 5,6 and 7 and are negative for cytokeratin 20.  The protein calretinin is expressed in 90% of mesotheliomas.  By contrast CEA, which is frequently expressed in adenocarcinomas, is negative.',],
	['Picture34.jpg','Mesothelioma.  This is a variant called desmoplastic mesothelioma in which the neoplastic cells resemble fibroblasts.  A dense desmoplastic (fibrotic) reaction is typical of this variety.',],
	['Picture35.jpg','Desmoplastic mesothelioma.  High-power view.',]
];













// LAB COLLECTIONS

var Cardio_Lab01 =
[
	['Specimen 1', 'Normal Heart', cardio_specimen1, cardio_lab01_dir, ],
	['Case 1', 'Acute Myocardial Infarct', cardio_case1, cardio_lab01_dir, ],
	['Case 2', 'Rupture, Free Wall Left ventricle', cardio_case2, cardio_lab01_dir, ],
	['Case 3', 'Abdominal Aortic Aneurysm ', cardio_case3, cardio_lab01_dir, ],
	['Case 4', 'LV Aneurysm', cardio_case4, cardio_lab01_dir, ],
	['Specimen 2', 'Acquired VSD from MI', cardio_specimen2, cardio_lab01_dir, ]
];

var Cardio_Lab02 =
[
	['Case 1', 'Dilated Cardiomyopathy', cardio_case13, cardio_lab02_dir, ],
	['Case 2', 'Hypertrophic Cardiomyopathy', cardio_case14, cardio_lab02_dir, ],
	['Case 3', 'End Stage Heart Failure Transplantation', cardio_case15, cardio_lab02_dir, ],
	['Case 4', 'Bicuspid Aortic Valve', cardio_case16, cardio_lab02_dir, ],
	['Case 5', 'Infective Endocarditis', cardio_case17, cardio_lab02_dir, ],
	['Case 6', 'Mitral Stenosis', cardio_case18, cardio_lab02_dir, ],
	['Unknown Cardio Case 1', 'Unknown Cardio Case 1', cardio_unknown1, cardio_lab02_dir, ]
];

var Cardio_Lab03 =
[
	['Case 1', 'Ventricular Septal Defect', cardio_case9, cardio_lab03_dir, ],
	['Case 2', 'Atrial Septal Defect with Pulmonary HTN', cardio_case10, cardio_lab03_dir, ],
	['Case 3', 'Transposition of Great Arteries', cardio_case8, cardio_lab03_dir, ],
	['Case 4', 'Tetralogy of Fallot', cardio_case7, cardio_lab03_dir, ],
	['Case 5', 'Mitral Valve Prolapse', cardio_case11, cardio_lab03_dir, ],
	['Case 6', 'Aortic Dissection', cardio_case12, cardio_lab03_dir, ]
];


var Resp_Lab01 =
[
	['Case 1', 'Emphysema', resp2_case1, resp_lab01_dir, ],
	['Case 2', 'Squamous Cell Carcinoma', resp2_case2, resp_lab01_dir, ],
	['Case 3', 'Adenocarcinoma', resp2_case3, resp_lab01_dir, '@2488'],
	['Case 4', 'Small Cell Carcinoma', resp2_case4, resp_lab01_dir, '@2490'],
	['Case 5', 'Chondroid Hamartoma', resp2_case5, resp_lab01_dir, '@2529'],
	['Case 6', 'Asbestos Related Diseases', resp2_case6, resp_lab01_dir, '@2609']
];


var Resp_Lab02 =
[
	['Case 1', 'Asthma', resp_case1, resp_lab02_dir, ],
	['Case 2', 'Acute Respiratory Distress Syndrome (ARDS)', resp_case2, resp_lab02_dir, '@2533'],
	['Case 3', 'Pneumonia', resp_case3, resp_lab02_dir, '@2325'],
	['Case 4', 'Pulmonary Abscess', resp_case4, resp_lab02_dir, '@2326'],
	['Case 5', 'Pulmonary Infarct - Aspergillus', resp_case5, resp_lab02_dir, '@2330'],
	['Case 6', 'Cytomegalovirus and Adenovirus', resp_case6, resp_lab02_dir, ],
	['Case 7', 'Pulmonary TB', resp_case7, resp_lab02_dir, '@2337'],
	['Case 8', 'Sarcoidosis', resp_case8, resp_lab02_dir, '@2611'],
	['Case 9', 'Pulmonary Infarct - Embolus', resp_case9, resp_lab02_dir, '@2537']
];

// YEAR II PERIOD I COMPONENT LABS

var period1 =
[
	['Lab 01- Cardio', 'Cardio_Lab01', 'Coronary Artery Disease', Cardio_Lab01],
	['Lab 02- Resp', 'Resp_Lab01', 'COPD and Lung Cancer', Resp_Lab01],
	['Lab 03- Cardio', 'Cardio_Lab02', 'Valve and Muscle Disease', Cardio_Lab02],
	['Lab 04- Resp', 'Resp_Lab02', 'Interstitial Lung Disease and Infection', Resp_Lab02],
	['Lab 05- Cardio', 'Cardio_Lab03', 'Congenital Heart Disease', Cardio_Lab03]
];

