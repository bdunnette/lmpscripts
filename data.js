//current lab directories relative to Content folder
var summer_lab01_dir = "Labs/Summer_Lab01/";
var summer_lab02_dir = "Labs/Summer_Lab02/";
var summer_lab03_dir = "Labs/Summer_Lab03/";
var summer_lab04_dir = "Labs/Summer_Lab04/";
var summer_lab05_dir = "Labs/Summer_Lab05/";
var summer_lab06_dir = "Labs/Summer_Lab06/";
var summer_lab07_dir = "Labs/Summer_Lab07/";
var summer_lab08_dir = "Labs/Summer_Lab08/";
var summer_lab09_dir = "Labs/Summer_Lab09/";
var summer_lab10_dir = "Labs/Summer_Lab10/";
var summer_lab11_dir = "Labs/Summer_Lab11/";
var summer_lab12_dir = "Labs/Summer_Lab12/";
var cardio_lab01_dir = "Labs/Cardio_Lab01/";
var cardio_lab02_dir = "Labs/Cardio_Lab02/";
var cardio_lab03_dir = "Labs/Cardio_Lab03/";
var resp_lab01_dir = "Labs/Resp_Lab01/";
var resp_lab02_dir = "Labs/Resp_Lab02/";
var neuro_lab01_dir = "Labs/Neuro_Lab01/";
var neuro_lab02_dir = "Labs/Neuro_Lab02/";
var neuro_lab03_dir = "Labs/Neuro_Lab03/";
var neuro_lab04_dir = "Labs/Neuro_Lab04/";
var bjs_lab01_dir = "Labs/BJS_Lab01/";
var bjs_lab02_dir = "Labs/BJS_Lab02/";
var bjs_lab03_dir = "Labs/BJS_Lab03/";
var mc40_dir = "Labs/MiniCase_40/";
var mc41_dir = "Labs/Minicase_41/";
var endo_lab_dir = "Labs/Endo_Lab/";
var renal_lab01_dir = "Labs/Renal_Lab01/";
var renal_lab02_dir = "Labs/Renal_Lab02/";
var renal_lab03_dir = "Labs/Renal_Lab03/";
var repro_lab01_dir = "Labs/Repro_Lab01/";
var repro_lab02_dir = "Labs/Repro_Lab02/";
var repro_lab03_dir = "Labs/Repro_Lab03/";
var minicase42_dir = "Labs/Minicase42/";
var blood_lab01_dir = "Labs/Blood_Lab01/";
var blood_lab02_dir = "Labs/Blood_Lab02/";
var blood_lab03_dir = "Labs/Blood_Lab03/";
var blood_lab04_dir = "Labs/Blood_Lab04/";
var blood_lab05_dir = "Labs/Blood_Lab05/";
var gi_lab01_dir = "Labs/GI_Lab01/";
var gi_lab02_dir = "Labs/GI_Lab02/";
var gi_lab03_dir = "Labs/GI_Lab03/";
var gi_lab04_dir = "Labs/GI_Lab04/";

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
	['Slide16.jpg', 'Passive congestion of the liver, the so-called ?nut-meg? liver that can be seen grossly. This is a manifestation of right heart failure, which is often seen after left heart failure associated with acute MI (top). The passively congested liver shows retained hepatic architecture with a distended central vein (arrow) and adjacent sinusoids congested with red blood cells (bottom).', ],
	['Slide17.jpg', 'This patient had a stroke secondary to his MI.', ]
];

var cardio_case2 =
[
	['Slide26.jpg', 'Diagram of left ventricular free wall rupture, which usually occurs 4-7 days after an acute MI when the wall is weakest. Often having catastrophic results by causing bleeding into the pericardial space (hemopericardium) resulting in cardiac tamponade.', ],
	['Slide27.jpg', 'Gross photo of a left ventricular free wall rupture (pericardium has been removed). This anterior location is typical for ruptures as it is for aneurysms, for this reason anterior wall MI?s in general have a worse prognosis', ],
	['Slide28.jpg', 'Hemopericardium occurs most commonly with ventricular wall rupture a few days after an MI, or following external aortic rupture of a proximal extension of an aortic dissection.', ]
];

var cardio_case3 =
[
['Slide30.jpg', 'The typical appearance of abdominal aortic aneurysm. The shape is usually fusiform (circumferential), and located between the renal arteries and the iliac bifurcation.', ],
	['Slide31.jpg', 'Here is an example of an atherosclerotic aneurysm of the aorta in which a large "bulge" appears just above the aortic bifurcation.Such aneurysms are prone to rupture when they reach about 6 to 7 cm in size. They may be felt on physical examination as a pulsatile mass in the abdomen.Most such aneurysms are conveniently located below the renal arteries so that surgical resection can be performed with placement of a dacron graft.', ]
];

var cardio_case4 =
[
	['Slide20.jpg', 'Cardiac aneurysms often cause left heart failure, as the ventricle, even with good force, isn?t able to put out the same volume of blood due to unloading into the aneurysmal wall. Another common complication shown here is mural thrombus formation which gives potential for thromboembolisation. Only rarely will an aneurysm rupture.', ],
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
	['Slide04.jpg', 'The ?boot-shaped? heart is an x-ray finding associated with tetralogy of Fallot (arrow at the ?toe end? of the boot). A right sided aorta is present in ~1/3 of tetralogy patients and when seen on chest films is virtually diagnostic of tetralogy.', ]
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
	['Picture6.jpg','Diffuse Alveolar Damage ?ARDS. Hyaline membranes are lining the alveolar ducts and alveolar septa.',],
	['Picture7.jpg','Micro: Diffuse Alveolar Damage ? ARDS. On higher power, the hyaline membranes are evident.',],
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
	['Picture23.jpg','Adenovirus pneumonia.  The bronchiolar epithelium shows a squamoid appearance and numerous nuclei with a ?smudged? chromatin pattern.',],
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
	['Picture6.jpg','Emphysema showing rupture of septs and hyperdistention of alveolar sacs.  ?Simplification? of the pulmonary parenchyma.',]
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
	['Picture19.jpg','Small Cell Carcinoma. Small cells with very little cytoplasm. The nuclei do not have nucleoli. These cells are very fragile and frequently break.  The nucleic acids derived from the broken nuclei produce the basophilic smearing in vascular structures that is illustrated in the insert (Azzopardi?s phenomenon).',],
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

var cardio =
[
	['Lab 01- Cardio', 'Cardio_Lab01', 'Coronary Artery Disease', Cardio_Lab01],
	['Lab 03- Cardio', 'Cardio_Lab02', 'Valve and Muscle Disease', Cardio_Lab02],
	['Lab 05- Cardio', 'Cardio_Lab03', 'Congenital Heart Disease', Cardio_Lab03]
];

var resp =
[
	['Lab 02- Resp', 'Resp_Lab01', 'COPD and Lung Cancer', Resp_Lab01],
	['Lab 04- Resp', 'Resp_Lab02', 'Interstitial Lung Disease and Infection', Resp_Lab02],
];



// NEURO LAB 01 COMPONENTS

var neuro_lab01_intro =
[
    ['Slide02.jpg', 'H&E-stained section of reactive astrocytosis with prominent ìgemistocyticî astrocytes with abundant eosinophilic cytoplasm.',],
    ['Slide03.jpg', 'A similar section stained with antibodies to glial fibrillary acidic protein (GFAP), a major cytoskeletal protein of astrocytes. In addition to the prominent staining of cell bodies (brown) there are numerous delicate immunoreactive (brown) processes in the background that are characteristic of the intracellular scarring associated with gliosis. This lesion is the margin of an infarct. Note loss of tissue in the upper right corner. Unlike what is seen in a myocardial infarct, there is no collagenous replacement of necrotic tissue in a cerebral infarct.',],
    ['Slide04.jpg', 'In some gliotic situations there primarily is hypertrophy of pre-existing astrocytes illustrated here with GFAP Immunohistochemistry.',],
    ['Slide05.jpg', 'In situations where there is relative preservation of the tissue architecture, such as in primary demyelination, the reactive astrocytes integrate into the normal anatomy, a process known as isomorphic gliosis. This figure is from a multiple sclerosis plaque.',],
    ['Slide06.jpg', 'Eosinophilic neuronal necrosis is characteristic of ischemic injury. The neurons become brightly eosinophilic and shrunken with condensation of the nuclear chromatin and nuclear pyknosis. Two normal-appearing neurons are in the lower left.',],
    ['Slide07.jpg', 'The black flame-shaped cytoplasmic inclusions in these pyramidal neurons are neurofibrillary tangles. This change is characteristic of Alzheimerís disease but can be seen in several other neurodegenerative conditions.',],
    ['Slide08.jpg', 'The prominent eosinophilic body with a halo around it in the cytoplasm of this pigmented neuron is a Lewy body, characteristic of Parkinsonís disease.',],
    ['Slide09.jpg', 'The cytoplasm of this neuron from a patient with Tay-Sachs disease is greatly distended by an accumulation of pale foamy material because of the patientís inability to fully metabolize gangliosides secondary to an enzymatic defect.',],
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
	['Slide54.jpg', 'MRI scan. The T1 sequence before injection of gadolinium shows an isointense mass corresponding to the region seen in the previous figure. After injection of gadolinium there is diffuse enhancement of the mass with a thin ìtailî of enhancement extending from the mass along the dura.',],
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
	['Minicase54_03.jpg', 'MSU crystals, polarized light, 60x ñ showing strong birefringence'],
	//['Minicase54_04.jpg', 'MSU: Cytospin preparation with Wrightís stain, 60x, compensated polarized light']
];

var minicase55 =
[
	['Minicase55_01.jpg', 'Chondrocalcinosis ñ calcification of cartillage within knee joint'],
	['Minicase55_02.jpg', 'CPPD crystal, brightfield illumination'],
	['Minicase55_03.jpg', 'CPPD crystals, Wright stain, 60x brightfield'],
	['Minicase55_04.jpg', ''],
	['Minicase55_05.jpg', 'CPPD crystals, Wright stain, 60x polarized ñ Weak birefringence'],
	//['Minicase55_06.jpg', 'MSU: Cytospin preparation with Wrightís stain, 640x, compensated polarized light'],
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
	['Skin_Lab03_10.jpg', 'Multiple brown warty papules with a ìstuck onî appearance on this elderly womenís back. Close up in the upper right of a typical seborrheic keratosis. Very dark, irregular outline and greasy, slightly exophytic, papule. The variation in color and irregular outline brings a melanoma into the differential diagnosis. A shave biopsy will clearly separate these totally benign lesions from melanoma.'],
	['Skin_Lab03_11.jpg', 'Low power (2x) of a seborrheic keratosis. The lesion displays prominent papillomatosis, hyperkeratosis and numerous keratin pseudocysts (pseudo-horn cysts). These pseudocysts actually are just invaginations from the surface and not true cysts, and can be seen with a hand lens on clinical examination. At this power the lesionís clear demarcation and exophytic appearance are best appreciated.'],
	['Skin_Lab03_12.jpg', 'A large pseudo horn cyst [X] (4x). The hyperkeratosis (without parakeratosis like that seen in the common wart), papillomatosis and epithelial hyperplasia are evident here. The epithelial proliferation has a reticular, or ìnet-likeî quality often times seen in seborrheic keratoses.'],
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
	['Skin_Lab03_35.jpg', 'The tumor is composed of loose cells, cluster and ribbons of pleomorphic malignant melanocytes with very prominent pigment (metastatic melanomas donít always have associated pigment).'],
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
	['Skin_Lab03_46.jpg', 'High power (60x) view of a basal cell carcinoma nest has all the characteristic features of BCC: Nested growth, atypical cells with basaloid features (scant cytoplasm, oval nucleiÖ), atypia and nuclear palisading at the nests edge.']
];

var N81124 =
[

	['Skin_Lab03_47.jpg', 'Herpes labialis. Grouped confluent vesicles with an erythematous rim on the lips.'],
	['Skin_Lab03_48.jpg', 'Herpetic whitlow. Painful, grouped, confluent vesicles on an erythematous edematous base on the distal finger.'],
	['Skin_Lab03_49.jpg', 'Low power appearance of a herpetic vesicle. The epidermis is split and filled `with fluid and acantholytic keratinocytes. The vesicle [X] is formed by so-called reticular (ìnet-likeî) degeneration of the epidermis. The vesicle is filled with serous fluid and keratinocytes that have lost their inter-connections (acanthosis). Many of these acantholytic keratinocytes demonstrate viral cytopathic changes that are better seen on higher magnification.'],
	['Skin_Lab03_50.jpg', 'Higher power pictures demonstrate acantholytic keratinocytes with viral cytopathic effect. The cytopathic effect is classically described as nuclear margination of chromatin with a violet ìground glassî appearance. This change can be seen in keratinocytes with single nuclei, but the more conspicuous are those keratinocytes that demonstrate multinucleation and the nuclear changes. These multinucleated cells have been referred to as having a bag of marbles appearance.'],
	['Skin_Lab03_51.jpg', 'Higher power pictures demonstrate acantholytic keratinocytes with viral cytopathic effect. The cytopathic effect is classically described as nuclear margination of chromatin with a violet ìground glassî appearance. This change can be seen in keratinocytes with single nuclei, but the more conspicuous are those keratinocytes that demonstrate multinucleation and the nuclear changes. These multinucleated cells have been referred to as having a bag of marbles appearance.'],
	['Skin_Lab03_52.jpg', 'Higher power pictures demonstrate acantholytic keratinocytes with viral cytopathic effect. The cytopathic effect is classically described as nuclear margination of chromatin with a violet ìground glassî appearance. This change can be seen in keratinocytes with single nuclei, but the more conspicuous are those keratinocytes that demonstrate multinucleation and the nuclear changes. These multinucleated cells have been referred to as having a bag of marbles appearance.'],
	['Skin_Lab03_53.jpg', 'Higher power pictures demonstrate acantholytic keratinocytes with viral cytopathic effect. The cytopathic effect is classically described as nuclear margination of chromatin with a violet ìground glassî appearance. This change can be seen in keratinocytes with single nuclei, but the more conspicuous are those keratinocytes that demonstrate multinucleation and the nuclear changes. These multinucleated cells have been referred to as having a bag of marbles appearance.']
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
	['Skin_Lab03_67.jpg', 'Nest of nevus cells (60x). These nevus cells have a completely banal appearance (compare with the atypia seen in the melanoma slide cases). At the surface, as in this field, the nevus cell are plump with a moderate amount of cytoplasm. As they extend down into the dermis they ìmatureî (i.e. they get smaller and spindle up, starting to resemble nerve, so-called neuritization).'],
	['Skin_Lab03_68.jpg', 'Nevus cells extending down into the deep reticular dermis. Notice how the nests become less prominent as the cells ìmatureî into more small spindled forms. (10x)'],
	['Skin_Lab03_69.jpg', 'Higher power of nevus cells ìmaturingî at the base of the lesion. (20x)'],
	['Skin_Lab03_70.jpg', 'Small mature nevus cells at the base of the nevus (60x)']
]

var N8011882B =
[
	['Skin_Lab03_71.jpg', 'Large macule typically on the face with irregular borders and striking variegation of pigmentatoin (white, tan, brown, and black)'],
	['Skin_Lab03_72.jpg', 'A flat lesion with prominent dermal elastosis and a disruption along the dermal-epidermal junction. (2x N80-11882)'],
	['Skin_Lab03_73.jpg', 'Slightly higher power of lentigo maligna. (4x N80-11882)'],
	['Skin_Lab03_74.jpg', 'This field doesnít show the melanocytic proliferation well but does show extensive solar elastosis of the dermis [X]. This change appears as blue discoloration of the dermal collagen. It is associated with chronic sun exposure and is frequently seen in pathology associated with chronic sun exposure, like actinic keratosis, squamous cell and basal carcinomas. (10x N80-11882)'],
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

var neuro =
[
	['Neuropath Lab 01', 'Neuro_Lab01', 'Cerebrovascular Disease and CNS', Neuro_Lab01],
	['Neuropath Lab 02', 'Neuro_Lab02', 'Pediatric and Degenerative Diseases', Neuro_Lab02],
	['Neuropath Lab 03', 'Neuro_Lab03', 'Infections and Myelin Disorders', Neuro_Lab03],
	['Neuropath Lab 04', 'Neuro_Lab04', 'Trauma and other Topics', Neuro_Lab04]
];

var bjs =
[
    ['Bone Joint & Skin Lab 01', 'BJS_Lab01', 'Soft Tissue Sacrcomas and Bone Tumors', BJS_Lab01],
	['Bone Joint & Skin Lab 02', 'BJS_Lab02', 'Pathology of the Skin: Benign vs. Malignant', BJS_Lab02],
	['Bone Joint & Skin Lab 03', 'BJS_Lab03', 'Osteomyelitis and Joint Pathology', BJS_Lab03],
];

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
	['Endo_Lab1_18.jpg', 'Higher magnification illustrates lymphoid infiltrates around atrophic follicles with little colloid and showing transformation of the follicular epithelium to typical Hürthle cells. Note the pink / eosinophilic cytoplasm of the Hürthle cells.'],
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
	['Renal_Lab1_40D.jpg', 'High power of an invasive squamous cell carcinoma of the bladder. Clues that makes this carcinoma a squamous cell carcinoma as opposed to a urothelial cell carcinoma include intercellular bridges, dyskerotic cells (necrotic keratinocytes) and keratinocyte ìwhorls.î'],
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
     ['Renal_Lab2_14.jpg', 'Renal Biopsy, low power, H&E stained section shows prominent segmental necrosis involving two of three glomeruli. One of the involved glomeruli shows a partial “crescent” about area of necrosis.'],
     ['Renal_Lab2_12.jpg', 'Although segmental, the necrotizing extracapillary lesion can be larger and involve a higher percentage of glomeruli.'],
    ['Renal_Lab2_13.jpg', 'The simultaneous presence in the same biopsy of active and sclerotic lesions is the expression of repeated necrotizing extracapillary damage.'],
    ['Renal_Lab2_15.jpg', 'Renal biopsy, medium power, Jones’ Silver stained section shows a “crescent” including necrotic debris filling Bowman’s space with partial collapse of glomerular tuft.'],
    ['Renal_Lab2_16.jpg', 'This direct immunofluorescent endpoint with antibodies to fibrinogen shows strong staining within the “crescent”.  No staining occurred with anti-C3 and IgG.  These data are consistent with crescentic or rapidly progressive glomerulonephritis.'],
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
	['Renal_Lab3_13.jpg', 'This Jones\' silver-stained slide reveals basement membrane thickening and focal splitting. Other features of membranoproliferative glomerulonephritis include mesangial cell proliferation, increased mesangial matrix, endothelial cell swelling, and endothelial cell proliferation. The splitting or “double-contour” is caused by duplication of basement membrane material as a result of new basement membrane synthesis.'],
	['Renal_Lab3_14.jpg', 'This immunofluorescence microscopic slide shows granular deposits identified along the glomerular capillary walls. This pattern would be seen typically with antibodies to IgG and C3.'],
	['Renal_Lab3_15.jpg', 'This electron micrograph reveals subendothelial electron dense immune deposits. Mesangial and occasional subepithelial deposits may also be identified. Note the marked thickening of the glomerulocapillary loops. This electron micrograph would correspond to a “double contour” by light microscopy.'],
	['Renal_Lab3_16.jpg', 'This electron micrograph reveals the ultrastructural features of dense-deposit disease (type II MPGN). This is a rare entity. The lamina densa shows ribbon-like electron dense material. The composition of this material is unknown.']
];

var renal_lab03_case03 =
[
	['Renal_Lab3_17.jpg', 'This H & E stained slide reveals the histologic features of membranous nephropathy. Note the regular thickening of the glomerulocapillary walls. There is no evidence of cellular proliferation.'],
	['Renal_Lab3_18.jpg', 'This silver-stained section reveals the subepithelial deposits of membranous nephropathy with intervening silver-positive basement membrane ÒspikesÓ.'],
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

var endo =
[
	['Endocrine Lab', 'endo_lab', 'Thyroid, Parathyroid, Pituitary, and Adrenal', endo_lab],
];

var renal =
[
	['Renal Lab 01', 'renal_lab01', 'Renal Neoplasia, Renal Malformation, Cystic Disorders, Lower UT Neoplasia', renal_lab01],
	['Renal Lab 02', 'renal_lab02', 'Acute Nephritic Syndromes, Rapidly Progressive Glomerulonephritis, Hematuria', renal_lab02],
	['Renal Lab 03', 'renal_lab03', 'Nephrotic Syndrome', renal_lab03],
];

var repro =
[
   ['Repro Lab 01', 'repro_lab01', 'Testis and Prostate', repro_lab01],
	['Repro Lab 02', 'repro_lab02', 'Breast', repro_lab02],
    ['Repro Lab 03', 'repro_lab03', 'Ovary and Uterus', repro_lab03],
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
    ['LymphoplasmacyticLymphoma1.jpg', 'Small mature lymphocytes and plasma cells'],
    ['LymphoplasmacyticLymphoma2.jpg', 'Small mature lymphocytes and plasma cells'],
    ['LymphoplasmacyticLymphoma3.jpg', 'Marrow replaced by neoplasm'],
    ['LymphoplasmacyticLymphoma4.jpg', 'Small mature lymphocytes and plasma cells'],
];

// HEME LAB COLLECTIONS

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

var heme =
[
	['Blood Lab 01', 'blood_lab01', 'Anemia', blood_lab01],
	['Blood Lab 02', 'blood_lab02', 'Transfusion Medicine', blood_lab02],
    ['Blood Lab 03', 'blood_lab03', 'Reactive and Neoplastic Disorders of Myeloid Cells', blood_lab03],
    ['Blood Lab 04', 'blood_lab04', 'Acute and Chronic Leukemias; Reactive Leukocytosis', blood_lab04],
    ['Blood Lab 05', 'blood_lab05', 'Lymph Node Disorders', blood_lab05],
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
    ['Slide08.jpg', 'The fat necrosis can develop within the pancreas and if the enzymes have been released into the abdominal cavity, into the adjacent mesentery and omentum. These areas of omental fat become firmer and more chalk-like as more calcium and magnesium soaps are produced, Thus the term ‚Äúsaponification‚Äù which reflects the interaction of cations with free fatty acids released by the action of activated lipase on triglycerides in fat cells; as a result, the level of blood calcium may be depressed.'],
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
    ['Slide30.jpg','Pancreatic cancer is called a ‚Äúsilent‚Äù disease because usually symptoms do not present themselves in the early stages. As the cancer grows, pain often develops in the upper abdomen as is did in the case, and sometimes spreads to the back. Other symptoms may include jaundice, scleral icterus as seen in this photograph, nausea, loss of appetite and weight loss as in this case, fatigue, weakness, and depression.'],
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
    ['Slide46.jpg','This medium-power H&E image shows the detail of a portal tract with a moderately dense inflammatory infiltrate present that consists of lymphocytes and eosinophils. There is also periductal fibrosis (‚Äúonion-skinning‚Äù) around the interlobular duct that is in the center.'],
    ['Slide47.jpg','PSC, high power ‚Äì concentric fibrosis with periductal fibrosis (‚Äúonion-skinning‚Äù)'],
    ['Slide48.jpg','This H&E image shows a lower-power view of the process with a relatively normal portion of the liver noted to the left of the image. Especially in the early stages the process can be ‚Äúpiecemeal‚Äù, meaning that the scarring is focal and is another reason that the process usually takes years before it becomes symptomatic.'],
    ['Slide49.jpg','This duct shows the narrowing that results from the periductal fibrosis. '],
    ['Slide50.jpg','This image shows a H&E photomicrograph of a cholangiocarcinoma which the patient in the case study developed. The incidence of cholangiocarcinomas developing in cases of PSC is unfortunately high. Cholangiocarcinomas arise from the intrahepatic bile duct epithelium. This example is a well-differentiated tubular adenocarcinoma.'],
];

var biliary_cirrhosis =
[
    ['Slide54.jpg','In this photograph of the exterior of a liver, you can see the long-term effects of PBC with scarring, fibrosis, and cirrhosis.'],
    ['Slide55.jpg','In this photograph of a cut section of liver you also see scarring, fibrosis and cirrhosis.'],
    ['Slide56.jpg','On this CT scan you can see the mixed micro- and macronodular cirrhosis in a patient with end-stage PBC.'],
    ['Slide57.jpg','Florid duct lesion (low power) '],
    ['Slide58.jpg','Inflammation centered on duct (arrow pointing to florid duct lesion ‚Äì a later stage)'],
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

var gi =
[
	['GI Lab 01', 'gi_lab01', 'Liver Diseases', gi_lab01],
    ['GI Lab 02', 'gi_lab02', 'Esophagus and Stomach', gi_lab02],
	['GI Lab 03', 'gi_lab03', 'Biliary Tract and Pancreas', gi_lab03],
    ['GI Lab 04', 'gi_lab04', 'Upper and Lower Gastrointestinal Tract', gi_lab04],
];

// LAB 01 COMPONENTS

var summer_em =
[
	['01_fig01.jpg', 'Sources and consequences of increased cytosolic calcium in cell injury.'],
	['02_fig02.jpg', 'Diagram of a sarcomere in the relaxed state (above) and the contracted state (below). The sarcomere is composed of two portions of I band (composed of thin actin filaments) located on either side of the darker A band (containing thick myosin filaments). The A band includes a lighter central portion, the H zone, which is centered by the M line'],
	['03_em01A.jpg', 'This is a section of normal myocardium. The slide shows sarcomeres in normal relationships, that is, they are IN REGISTER and the muscle fibers are parallel. Features we should note here are:<br><ol><li>The nucleus with normal and homogeneously distributed chromatin.<li>The nuclear membrane is intact with no long breaks (not over 20 nm).<li>Many small glycogen granules are seen surrounding the nucleus and also between mitochondria and fibers.<li>The mitochondria are uniform in size and shape and demonstrate uniform organization of the cristae.<li>Occasional small granules called matrix granules are seen.</ol>', 1],
	['04_em02A.jpg', 'This myocyte has been ischemic for about 40 minutes. Note the change in the chromatin. It migrates to the periphery of the nuclear membrane (may be reversible to some degree). The glycogen is quickly utilized in anaerobic glycolysis, and therefore the glycogen granules are gone (this change is, by itself, reversible). The mitochondria are different. The cristae are less organized and some dark blobs have developed. These are amorphous matrix densities and are lipid or phospholipid.', 1],
	['05_fig03.jpg', 'Diagram demonstrating aerobic versus anaerobic production of ATP. Oxidative phosphorylation is much more efficient than glycolysis.'],
	['06_em02B.jpg', 'Photo shows mitochondria from myocardium ischemic for 40 minutes. Note the arrows showing defect in the plasma membranes (an irreversible change). These holes are greater than the limit of normal of 20 nm. Mitochondria are swollen and have breaks in their membranes. The cristae are disorganized and indistinct. Matrix densities are obvious.'],
	['07_em03.jpg', 'Heart after 24 hours of ischemia (no reperfusion). These changes are just beginning to be visible by light microscopy as early coagulation necrosis. Note the membrane blebs, breaks, and the Z bands totally out of register. N bands (pathologic) are seen within the Z bands. Mitochondria are pale and swollen (circled green) and matrix densities are very prominent. The nuclear changes are very striking. Note the coarse clumping of the chromatin (blue arrows). Additional changes that you would encounter in the nucleus at the light microscopic level are karyorrhexis and pyknosis.', 1],
	['08_em04.jpg', 'Heart after 40 minutes of ischemia and 20 minutes of reperfusion. We see here total chaos. The changes are mainly the effects of the massive influx of calcium during reperfusion. The sarcomeres have virtually disappeared, and have been replaced by large, dark contraction bands. The nucleus is undergoing marked chromatin clumping. Mitochondria (circled green) are swollen and there are also dark bodies which on close examination are found to be granular. These are granular matrix densities and are made up of calcium pyrophosphate crystals. In contrast to the amorphous densities which are lipid and leave no ash, these do leave an ash residue on incineration.', 1],
	['09_em09.jpg', 'This is not in your syllabus but an exhibit only. It shows the crystalline structure of the granular densities.'],
	['10_em91.jpg', '(Not in the syllabus) Note the plasma membrane lifting off of the sarcomere and the membrane defects.'],
	['11_fig04.jpg', 'Schematic representation of a normal cell (A) and the ultrastructural changes in reversible (B) and irreversible (C) cell injury.']
];

var minicase27 =
[
	['mc27_01.jpg', ''],
	['mc27_02.jpg', '']
];

var micro161 =
[
	['161_01.jpg', 'Gross: hemorrhage on epicardial surface at apex betrays underlying transmural infarct.', 1],
	['161_02.jpg', 'Gross: thinning, mottling, and pallor of left ventricular wall and septum.', 1],
	['161_03.jpg', 'Gross: higher magnification of infarct. ', 1],
	['161_04.jpg', 'Gross: cross-sections of coronary artery that supplied involved region of myocardium. Note occlusion by hemorrhagic atherosclerotic plaque.'],
	['161_05.jpg', 'Schematic representation of the progression of myocardial necrosis after coronary artery occlusion. Necrosis begins in a small zone of the myocardium beneath the endocardial surface in the center of the iscemic zone. This entire region of myocardium (dashed outline) depends on the occluded vessel for perfusion and is the area at risk. Note that a very narrow zone of myocardium immediately beneath the endocardium is spared from necrosis because it can be oxygenated by diffusion from the ventricle.'],
	['161_06.jpg', 'Wavy or shattered appearing fibers may be seen early in acute MI.', 1],
	['161_07.jpg', 'Hypereosinophilic myocytes with contraction bands are seen in acute MI.', 1],
	['161_08.jpg', 'Acute infarcted myocardium that lacks nuclei and has intercellular hemorrhage. Why is there hemorrhage?'],
	['161_09.jpg', 'High magnification. Infarcted myocytes become smudgy looking and lose nuclear staining.'],
	['161_10.jpg', 'Acute infarct with influx of neutrophils. Neutrophils begin to infiltrate the infarct at 12 to 18 hours after onset.', 1],
	['161_11.jpg', 'Cardiac myocytes within a mm or so of the endocardial surface are usually spared. Why?', 1]
];

var micro163 =
[
	['163_01.jpg', 'Gross: transmural infarct (pale areas) involving almost the entire left ventricle (LV) and septum.', 1],
	['163_02.jpg', 'Gross: transmural infarcts.', 1],
	['163_03.jpg', 'Gross: transmural scar. Note marked decrease in thickness of LV wall in region of scar, due to loss of myocardial cells. This may lead to a ventricular aneurysm.', 1],
	['163_04.jpg', 'Low power magnification of subendocardial healed MI. Note patchy replacement of myocytes by fibrous tissue. (Fibrous tissue can be identified by its pallor when compared to the myocardium in this picture)', 1],
	['163_05.jpg', 'Medium power of Slide 4.', 1],
	['163_06.jpg', 'Medium power of Slide 4.', 1],
	['163_07.jpg', 'Fibrous tissue replaces many myocytes in this healed infarct.', 1],
	['163_08.jpg', 'High Power of Slide 7.']
];

var UH86_6206 =
[
	['UH86-6206_01.jpg', 'Necrotic myocardium has almost completely disappeared. In its place are mononuclear inflammatory cells (lymphocytes, histiocytes). Note spared myocytes (arrow).', 1],
	['UH86-6206_02.jpg', 'Higher magnification revealing hemosedrin pigment in some of the histiocytes. Note spared myocytes (arrow).', 1],
	['UH86-6206_03.jpg', 'Mononuclear cells engulfing necrotic myocardium.', 1],
	['UH86-6206_04.jpg', 'Influx of spindle cells into the inflammation. The spindle cells are fibroblasts and endothelial cells. This is granulation tissue.', 1],
	['UH86-6206_05.jpg', 'Higher power.'],
	['UH86-6206_06.jpg', 'Graph showing temporal relationships among all of the phases of myocardial infarct.']
];


//LAB 02 COMPONENTS

var micro138 =
[
	['138_01.jpg', 'Gross: irregular mottling of renal surface reflecting extensive cortical infarction. This is an uncommon catastrophic event that occurs most frequently following abruptio placentae, septic shock or extensive surgery.', 1],
	['138_02.jpg', 'Gross: Cut surface of kidney, showing mottling of cortex, with sparing of renal papillae.', 1],
	['138_03.jpg', 'Viable medullary tubules. Note well-preserved tubular structures with distinct nuclear staining.'],
	['138_04.jpg', 'Coagulation necrosis with focal hemorrhage, exquisitely confined to cortex.', 1],
	['138_05.jpg', 'Coagulation necrosis with focal hemorrhage, exquisitely confined to cortex.', 1],
	['138_06.jpg', 'Higher Magnification. Note "ghost" outlines of necrotic tubules.', 1],
	['138_07.jpg', 'Higher magnification. Note sparing of superficial cortex, which possess a collateral blood supply from vessels in Glisson\'s capsule (stripped away in this photo).', 1],
	['138_08.jpg', 'Higher magnification. Note sparing of superficial cortex, which possess a collateral blood supply from vessels in Glisson\'s capsule (stripped away in this photo).'],
	['138_09.jpg', 'Higher Magnification. Necrotic tubules and glomeruli.', 1],
	['138_10.jpg', 'The viable-appearing tubules near the edge of the infarct contain casts of sloughed dead tubular epithelial cells.', 1]
];

var micro140 =
[
	['140_01.jpg', 'Gross: Cut surface of kidney bulges above plane of section and exudes fluid, because it is edematous.', 1],
	['140_02.jpg', 'No abnormality is apparent at low magnification; not even edema, which is an important feature of ATN, because it is drained out of the specimen during the dehydration steps that are required for paraffin-embedding.', 1],
	['140_03.jpg', 'No abnormality is apparent at low magnification; not even edema, which is an important feature of ATN, because it is drained out of the specimen during the dehydration steps that are required for paraffin-embedding.'],
	['140_04.jpg', 'Tubules, the element of the kidney most sensitive to ischemic damage, are necrotic whereas glomeruli are spared.', 1],
	['140_05.jpg', 'Tubules, the element of the kidney most sensitive to ischemic damage, are necrotic whereas glomeruli are spared.', 1],
	['140_06.jpg', 'Higher magnification.', 1],
	['140_07.jpg', 'Higher magnification.', 1]
]

var A63_100 =
[
	['A63-100_01.jpg', 'Gross: normal pancreas. Observe normal pancreatic tail on the right. The pancreas is tan and arranged in many small lobules. There is hemorrhage to the left.'],
	['A63-100_02.jpg', 'Gross: pancreatic fat necrosis. Irregularly shaped chalky yellow-white foci represent calcium deposition in areas of enzymatic fat necrosis.'],
	['A63-100_03.jpg', 'Foci of fat necrosis with saponification in the mesentery. The areas of white chalky deposits represent calcium soap formation at sites of lipid breakdown.', 1],
	['A63-100_04.jpg', 'Low magnification. Potent pancreatic enzymes have leaked out of damaged acini and caused the adjacent fat to dissolve.', 1],
	['A63-100_05.jpg', 'High magnification inflamed and damaged acini.', 1],
	['A63-100_06.jpg', 'Higher magnification. Note: viable fat at top right with necrotic fat on mid-left.', 1],
	['A63-100_07.jpg', 'Highest magnification. Triglycerides within necrotic fat cells are digested to glycerol and free fatty acids, which complex with calcium ions to form insoluble salts.']
]

var N83_2135 =
[
	['N83-2135_01.jpg', 'Gross: gangrene of hand resulting in black discoloration. This resulted from a motor vehicle accident that compromised the vasculature to the distal extremity. Amputation was required.'],
	['N83-2135_02.jpg', 'Cells of the epidermis have undergone coagulation necrosis as a result of severe ischemia.'],
	['N83-2135_03.jpg', 'Cells of the epidermis have undergone coagulation necrosis as a result of severe ischemia.'],
	['N83-2135_04.jpg', 'Note ghost outline of necrotic keratinocytes. Also note the neutrophils migrating towards the epidermis to dispose of the dead tissue.']
]

var A66_45 =
[
	['A66-45_01.jpg', 'Gross: sharply demarcated yellow-white focus of cheesy necrotic tissue in lung.', 1],
	['A66-45_02.jpg', 'Low power. Numerous granulomas with centeral pink necrosis. Granulomas without this type of necrosis are non-specific and may be a reaction to fungus, foreign material, autoimmune disease, etc.', 1],
	['A66-45_03.jpg', 'Center of necrotic focus is acellular. Epithelioid histocytes and mutinucleated giant cells are present at the edge. This histology is most compatible with tuberculosis.', 1],
	['A66-45_04.jpg', 'Necrotic granuloma is seen in lower left corner with vaguely formed granuloma (not yet necrotic) to right of center. Note scattered giant cells.', 1],
	['A66-45_05.jpg', 'Higher power. Multinucleated giant cell amid adjacent epithelioid histocytes.', 1]
]

var liquenec =
[
	['LiqueNec_01.jpg', 'There is softening and anatomical disruption of the inferior portion of the cerebellum due to ischemic necrosis.', 1],
	['LiqueNec_02.jpg', 'At high magnification, liquefactive necrosis of the brain demonstrates many macrophages at the right which are cleaning up the necrotic cellular debris. The job description of a macrophage includes janitorial services such as this, particularly when there is lipid.']
]


//LAB 03 COMPONENTS

var micro112 =
[
	['112_01.jpg', 'Blood pressure and plasma colloid osmotic forces in normal and inflamed microcirculation.<br><br>A: Normal hydrostatic pressure (red arrows) is about 32 mm Hg at the arterial end of the capillary bed and 12 mm Hg at the venous end; the mean colloid osmotic pressure of plasma is approximately 25 mm Hg (green arrows), which is equal to the mean capillary pressure. Although fluid tends to leave the precapillary arteriole, it is returned on equal amounts via the postcapillary venule, so that the net flow (black arrows) in or out is zero.<br><br>B: Acute inflammation. Arteriole pressure is increased to 50 mm Hg, the mean capillary pressure is increased because of arteriole dialation, and the venous pressure increases to approximately 30 mm Hg. At the same time, osmotic pressure is reduced (averaging 20 mm Hg) because of protein leakage across the venule. The net result is and excess of extravasated fluid.'],
	['112_02.jpg', 'This low power view shows the histology of the lung to be essentially normal except for small dilated congested vessels near the middle of the field. The alveolar spaces look empty.'],
	['112_03.jpg', 'Looking a little closer, we again see the congested and dilated vessels. Alveolar spaces now appear to have small numbers of cells in them. This is the earliest indication of acute inflammation.'],
	['112_04.jpg', 'At a still higher power, next to a congested venule, the alveolar spaces contain a few strands of fibrin with small clumps of neutrophils (PMNs), occasional lymphocytes, macrophages, and erythrocytes.'],
	['112_05.jpg', 'An Alveolar space contains a faint precipitate of proteinaceous fluid with an occasional red cell and leukocyte. Why does edema occur in acute inflammation? Is it considered active or passive?']
]

var micro113 =
[
	['113_01.jpg', 'Gross: stage of red hepatization. Gross cut section of lung is beefy red and solid rather than spongy in consistency.'],
	['113_02.jpg', 'Low power of red hepatization stage. Note extravasation of serous fluid and numerous red blood cells into alveolar spaces.'],
	['113_03.jpg', 'Mid power of Slide 2.'],
	['113_04.jpg', 'Transition to gray hepatization stage, dominated by neutrophils in the bronchioles and alveoli.'],
	['113_05.jpg', 'High power. Note neutrophils, red cells, edema fluid in alveoli.']
]

var micro114 =
[
	['114_01.jpg', 'Gross: stage of gray hepatization. Gross cut section of lung has confluent, solid, raised white areas that represent foci of intense inflammation, full of PMNs.'],
	['114_02.jpg', 'Under this low-power view, about half of the alveolar spaces are filled with pink serous fluid and gray, clumped masses of inflammatory cells. The alveolar capillaries stand out as thin, red lines due to their congestion.'],
	['114_03.jpg', 'At this much higher magnification, the alveolar capillaries are obviouly distended and congested. The alveolar spaces contain finely granular precipitated fluid along with many PMNs and extravasated red cells.'],
	['114_04.jpg', 'A still higher power view reveals the character of the exudate and the congestion of the alveolar capillaries.'],
	['114_05.jpg', 'Acute bronchopneumonia with darkly stained colonies of bacteria. Such bacterial overgrowth is common in autopsy cases. After the death of the host, the bacteria continue to multiply in a perfect culture medium (before the body is thoroughly chilled) unchecked by the host\'s immune response.', 1]
]

var micro159 =
[
	['159_01.jpg', 'Gross: example of acute meningitis. Note opaque meninges over convexity of cerebral cortex.'],
	['159_02.jpg', 'On low power, the subarachnoid distribution of the process can be appreciated.', 1 ],
	['159_03.jpg', 'Neutrophils fill the subarachnoid space, above the pia mater (a thin membrane applied directly onto the cortical surface) and below the arachnoid membrane. Surface vessels are seen within this space', 1],
	['159_04.jpg', 'Here, the pia mater has lifted off the surface of the brain which is at lower left.', 1],
	['159_05.jpg', 'Numerous neutrophils in the subarachnoid space, recognizable by their multilobated nuclei.'],
	['159_06.jpg', 'Here we see a vein lying within a cortical sulcus surrounded by numerous inflammatory cells. This represents extension of the pia and the concomitant inflammation down along vessels without involvement of the brain substance itself. Meningitis rarely leads to a brain abscess.', 1]
]

var micro165 =
[
	['165_01.jpg', 'Gross: example of fibrinous pericarditis. Note granular surface of heart.'],
	['165_02.jpg', 'Gross: an example of 5-10 day old fibrinous pericarditis.'],
	['165_03.jpg', 'This low power view is part of the wall of the left ventricle. At the top is the epicardial surface, which has ragged fibrinous exudate.', 1],
	['165_04.jpg', 'Fibrinous pericardial exudate sits above the epicardial fat.', 1],
	['165_05.jpg', 'High power of the same.', 1],
	['165_06.jpg', 'Neutrophils are enmeshed within stands of fibrin.']
]

var micro167 =
[
	['167_01.jpg', 'Gross: example of acute appendicitis. The appendix is swollen, discolored and coated with a fibrinous exudate. It is perforated at its mid-portion.', 1],
	['167_02.jpg', 'Gross: the previous example fas been longitudinally bisected.', 1],
	['167_03.jpg', 'Low power view of appendix showing dilated lumen and dark inflammatory exudate on serosal surface (at top).', 1],
	['167_04.jpg', 'Neutrophils have migrated out of serosal vessels in response to inflammatory and chemoactic factory.'],
	['167_05.jpg', 'Neutrophils infiltrating muscular wall of appendix.', 1],
	['167_06.jpg', 'Higher power view of Slide 5.', 1]
]

var micro177 =
[
	['177_01.jpg', 'Outcome of acute inflammation.'],
	['177_02.jpg', 'Gross: Photograph of cut surface of lung reveals a large cavitating lesion that has a shaggy, cream-colored lining. The adjacent lung is not grossly remarkable, nor is the pleura, which is smooth, shiny, and translucent.'],
	['177_03.jpg', 'Low power view of lung with abscess cavity toward lower right . Note area of lung consolidation, representing pneumonia, adjacent to shaggy lining of abscess.', 1],
	['177_04.jpg', 'Higher power view. Note neutrophils and fibrin filling alveolar spaces in lung to left and at top.', 1],
	['177_05.jpg', 'Edge of abscess cavity, with lung to lower left and abscess cavity to upper right. The latter contains neutrophils and dark staining bacterial colonies.'],
	['177_06.jpg', 'Higher power view of flourishing bacterial colonies. This example illustrates why systemic antibiotic therapy might not effectively combat bacteria in an abscess, because the capillaries carrying the antibiotic scarcely reach them.', 1]
]

var N82_12985 =
[
	['N82-12985_01.jpg', 'Gross of crusted furuncle.'],
	['N82-12985_02.jpg', 'The skin furuncle appears as an ulcerated papule with edema and patchy perivascular inflammatory infiltrate in superficial and deep dermis. The furuncle, or boil, results usually from a staphylococcal infection of the pilosebaceous unit.'],
	['N82-12985_03.jpg', 'Higher magnification reveals layer of fibrin covering ulcerated surface, and acute and chronic inflammation around congested vessels of superficial dermis.', 1],
	['N82-12985_04.jpg', 'Microabscesses in deep dermis are characterized by dense collections of inflammatory cells with destruction of dermal connective tissue.', 1],
	['N82-12985_05.jpg', 'Mixed inflammatory infiltrate includes neutrophils, histiocytes, and multinucleated giant cells that appear to be phagocytizing lipid (perhaps sebum from ruptured hair-follicle/sebaceous gland unit).', 1]
]

var N70_7090B =
[
	['N70-7090B_01.jpg', 'Low Power of small bowel is normal except for serosal infiltrate at bottom of picture.', 1],
	['N70-7090B_02.jpg', 'Higher power view shows dilated serosal vessels and edematous serosa.', 1],
	['N70-7090B_03.jpg', 'Neutrophils marginate along endothelial surface of vessel (adhesion), and then squeeze through vessel walls (transmigration) into the serosal tissue.'],
	['N70-7090B_04.jpg', 'High power of Slide 3.']
]

var A65_180 =
[
	['A65-180_01.jpg', 'Gross: an example of multiple liver abscesses.'],
	['A65-180_02.jpg', 'Note fresh (?septic) thrombus of portal vein branch in center, with small abscess directly left of this. The source of this abscess appears to be hematogenous rather than ascending from cholangitis, as the bile ductules are not involved.', 1],
	['A65-180_03.jpg', 'This abscess contains distinct zones: smudgy purple of bacterial colonies and necrotic cellular debris at center of abscess, followed by ring of neutrophils, then layers of necrotic hepatocytes. Viable hepatocytes are present at edge of photograph.'],
	['A65-180_04.jpg', 'High magnification of bacterial colonies, dying hepatocytes, and neutrophils in center of abscess.']
]


//LAB 04 COMPONENTS

var minicase52 =
[
	['mc52_01.jpg', 'Chest x-ray shows opacification in the left lung field.', 1],
	['mc52_02.jpg', 'Left lung with patchy areas and an area of consolidation characteristic of bronchopneumonia.'],
	['mc52_03.jpg', 'Left lung with consolidation of the left lower lobe on CT scan.', 1],
	['mc52_04.jpg', 'Photomicrograph of lung tissue demonstrating multiple granulomas which have focal central necrosis.', 1]
]

var minicase28 =
[
	['mc28_01.jpg', 'description'],
	['mc28_02.jpg', 'description', 1],
	['mc28_03.jpg', 'description', 1],
	['mc28_04.jpg', 'description', 1],
	['mc28_05.jpg', 'description'],
	['mc28_06.jpg', 'description'],
	['mc28_07.jpg', 'description']
]

var micro115 =
[
	['115_01.jpg', 'Interface between relatively normal lung at top and organizing pneumonia below, characterized by granulation tissue widening septae and filling alveolar spaces. Imagine the difficulty in gas exchange with the latter!', 1],
	['115_02.jpg', 'Higher power of Slide 1.', 1],
	['115_03.jpg', 'High power view of spindle-shaped fibroblasts forming granulation tissue plug filling alveolar space. The surrounding lung tissue contains monocyte/macrophages, lymphocytes and plasma cells.', 1],
	['115_04.jpg', 'Higher power.'],
	['115_05.jpg', 'High power. Note congested vessels, edema, and inflammatory cells (predominantly monocyte/macrophages and lymphocytes).']
]

var micro166 =
[
	['166_01.jpg', 'Dense fibrin deposit is adherent to the epicardium and appears as a white patch.', 1],
	['166_02.jpg', 'Dense fibrin deposit is adherent to the epicardium and appears as a white patch.'],
	['166_03.jpg', 'Note three zones. The top zone is a layer of fibrin and inflammatory cells representing the fibrinous pericarditis. The middle zone is composed of proliferating fibrous tissue (organization) which is adherent to the lowest zone, or epicardium', 1],
	['166_04.jpg', 'Higher power view of middle zone. This zone of organization is similar to granulation tissue seen in subacute MI or wound healing.'],
	['166_05.jpg', 'Higher power. Newly formed capillaries grow into the zone of organization from the existing vasculature of the epicardial surface.', 1],
	['166_06.jpg', 'High power. Note congested vessels. Edema, and inflammatory cells (predominantly monocyte/macrophages and lymphocytes).']
]

var micro168 =
[
	['168_01.jpg', 'Gross: of active pulmonary tuberculosis showing coalescing white nodules (some cavitated) that are the granulomas. The black pigment next to the white nodules represents anthracotic pigment from cigarette smoking, coal mining, or just from living in a smoggy city.'],
	['168_02.jpg', 'Gross: closer view of active pulmonary tuberculosis.'],
	['168_03.jpg', 'Low power view of lung showing confluent caseating tubercles with smudgy pink necrotic centers. Rimming the tubercles are darker staining bands composed of lymphocytes, epithelioid histiocytes, and compressed lung parenchyma.'],
	['168_04.jpg', 'On higher power, numerous giant cells can be seen.'],
	['168_05.jpg', 'The necrotic centers of tubercles (as seen at bottom) are devoid of cell structures.'],
	['168_06.jpg', 'Junction of the caseous center (not seen here) and the edge of the granuloma. There are collections of epithelioid histiocytes, one multinucleated giant cell, and an assortment of macrophages and lymphocytes.']
]

var micro169 =
[
	['169_01.jpg', 'Gross: Multiple small white foci throughout a cut section of lung. The miliary character of the necrotic granulomas is quite characteristic. The multiple tubercles are supposed to simulate the scattering of small seeds hence the name miliary. The parenchyma in this area appears relatively spared.'],
	['169_02.jpg', 'Low power view showing multiple small tubercles, all of similar size.'],
	['169_03.jpg', 'Low power view showing multiple small tubercles, all of similar size.'],
	['169_04.jpg', 'Higher power view showing typical lamellar structure of granuloma: a necrotic center, surrounded by rim of "palisading" (lined up) histiocytes, with an outer layer of lymphocytes (not so numerous here) and compressed lung.'],
	['169_05.jpg', 'The larger tubercle at upper left has well-developed central caseous necrosis while the smaller tubercle at lower right is just beginning to accumulate this necrotic debris.'],
	['169_06.jpg', 'A proliferating mass of epithelioid histiocytes centered on a multinucleated Langhans type giant cell. Most of these miliary lesions when subjected to the acid fast stain would reveal organisms of microbacterium tuberculosis.']
]

var N73_9001 =
[
	['N73-9001_01.jpg', 'At low magnification, some fragments are composed of glands and stroma, but the largest piece consists almost entirely of confluent granulomas.'],
	['N73-9001_02.jpg', 'At higher magnification these granulomas contain multinucleated giant cells and are essentially non-caseating at present, although as they become more confluent, they will eventually develop caseating centers.']
]

var N64_3649 =
[
	['N64-3649_01.jpg', 'Low power photograph of subcutaneous inflammatory process evoked by foreign body materials.'],
	['N64-3649_02.jpg', 'A multinucleated giant cell is seen trying to phagocytize this material (wood splinter). The other components of the granulomatous inflammation are epithelioid histocytes and small lymphocytes.']
]

var N71_583 =
[
	['N71-583_01.jpg', 'Young granulation tissue is characterized by marked edema, chronic inflammatory cells, and a proliferation of capillaries and fibroblasts. The capillaries are often arranged in parallel, and if an ulcerated surface is nearby, they usually approach it from a right angle.'],
	['N71-583_02.jpg', 'Higher magnifications emphasize marked vascularity of granulation tissue, which clinically looks very red.'],
	['N71-583_03.jpg', 'Higher magnifications emphasize marked vascularity of granulation tissue, which clinically looks very red.']
]

/*
//LAB 05 COMPONENTS

var minicase27 =
[
	['01.jpg', 'description']
]


//LAB 06 COMPONENTS

var minicase27 =
[
	['01.jpg', 'description']
]
*/


//LAB 07 COMPONENTS

var minicase18 =
[
	['mc18_01.jpg', 'Diagram of a normal blood vessel (left) contrasted with one that has a thrombus occluding it (right)'],
	['mc18_02.jpg', 'Ultrasound technician looking for a DVT in a patient.'],
	['mc18_03.jpg', 'Diagramatic representation of Doppler ultrasound and DVT'],
	['mc18_04.jpg', 'Normal Doppler ultrasound.  Notice the patent lumen of the vein (flow shown in blue).'],
	['mc18_05.jpg', 'Doppler ultrasound of a deep venous thrombosis (DVT).  The artery (right) is patent with blood flow shown in red.  Adjacent is a vein (blood flow shown in blue) with a thrombus obstructing blood flow (arrow).'],
	['mc18_06.jpg', 'Gross depiction of pulmonary thrombosis.'],
	['mc18_07.jpg', 'Early organizing thrombus with fibrin and acute inflammation.'],
	['mc18_08.jpg', 'Leg veins with extensive areas of thrombus are outlined after injection of Technetium macroaggregated albumin into the veins of the foot. The patient had deep calf pain. The picture has dark irregular areas that are areas of blood flow. The radioisotope in the albumin that is flowing through the partially thrombosed vessel creates the dark areas observed on the film. The picture shows thrombus as clear areas (no isotope present) in this nuclear medicine technique.'],
	['mc18_09.jpg', 'This picture shows that the patient\'s lungs were apparently \"normal\"  at the time of the initial Technetium labeled albumin injection shown in the previous picture.'],
	['mc18_10.jpg', 'This picture is a repeat scan 7 days post-operatively when the patient developed signs and symptoms of pulmonary emboli. The thrombi shown in slide #18-8 have embolized (thromboembolic) to the lungs.  Note the irregular filling defects as compared to the previous slide.'],
	['mc18_11.jpg', 'Thrombus formation is the same in veins and arteries. However, high blood flow and turbulence in the arterial system tends to wash red cells out of thrombi. This gives thrombi in the arterial tree a "white" appearance, the so-called "White Thrombus" in contrast to the "Red Thrombus" on the Low Flow Venous System. The key point is not that it is arterial or venous, but the degree of blood flow through the vessel and the degree of obstruction created by the thrombus. This frequently leads to thrombi that are mixed with areas of "White Thrombus" and other zones of thrombus with trapped red blood cells. The "White" lines in such thrombi are called "Lines of Zahn".']
]

var micro222 =
[
	['222_01.jpg', 'Gross:  two pale areas of renal cortex are roughly wedge-shaped, recent infarcts.'],
	['222_02.jpg', 'Gross:  contracted old, white scar at pole of formalin fixed kidney.'],
	['222_03.jpg', 'Fresh anemic infarct of the kidney.  Notice that the full thickness of the cortex has undergone coagulation necrosis.  To the left is an island of surviving renal cortex rimmed by hemorrhage.  Why do you suppose there is hemorrhage at the interface between viable and necrotic renal parenchyma?'],
	['222_04.jpg', 'Closer view of the same.'],
	['222_05.jpg', 'Closer view of the hemorrhagic junction between necrotic kidney and the surviving but degenerating renal parenchyma to the left.  In the case of an anemic or arterial infarct, coagulation necrosis is the cardinal feature, with little hemorrhage.  In a venous infarct of the kidney (Slide #137), the most striking feature is the intense generalized congestion and hemorrhage.']
]

var micro137 =
[
	['137_01.jpg', 'Gross:  cut surface of kidney has marked congestion of the cortex.  The medulla is hemorrhagic, and the markings above the pyramids are obliterated.  The tips of the renal pyramids are recognizable, although the tissue is compromised by the obstructed venous outflow.  Extending upward is a dilated ureter which has been cut open.'],
	['137_02.jpg', 'Low power magnification of the renal parenchyma reveals that the architecture is almost completely obscured by congestion and hemorrhagic necrosis.  There are still faint pink outlines of the necrotic tubules near the apex of the renal medulla.'],
	['137_03.jpg', 'Closer view of the cortex reveals a few surviving, ischemic renal glomeruli.  There is marked hemorrhage into the renal interstitium.  Most of the tubules have been obliterated by the hemorrhage and necrosis.  There are only remnants of tubular epithelium.']
]

var micro152 =
[
	['152_01.jpg', 'Gross:  recent thrombi distend veins in and around the prostate.'],
	['152_02.jpg', 'Vein wall to your left.  The thrombus is a layered mass of clumped red cells, leukocytes, and platelets and paler amorphous fibrin.  The layering, or lines of Zahn, may be visible upon gross inspection of thrombi.  This is a fresh thrombus because there is no evidence of fibrous organization at the periphery of the thrombus.']
]

var micro186 =
[
	['186_01.jpg', 'Gross:  the pulmonary trunk has been opened to show that the main pulmonary arteries are occluded by large emboli.  This is a cause of sudden death.  What pathology would you expect to find in the lungs?'],
	['186_02.jpg', 'Gross:  hemorrhagic infarct of lung.  Infarct is triangular, resting against pleura.  Note occluded vessels at apex of infarct.'],
	['186_03.jpg', 'Gross:  hemorrhagic infarct of lung.  Infarct is triangular, resting against pleura.  Note occluded vessels at apex of infarct.'],
	['186_04.jpg', 'X-Ray:  pulmonary infarct seen on chest plain film.'],
	['186_05.jpg', 'Organizing thromboembolus in a small branch of the pulmonary artery.  An embolus lodged itself in this arterial branch and started to organize.  Notice that the lumen of the vessel is occluded by fibrin, red cells, leukocytes, and platelets.  The periphery of the the thromboembolus has become intimately attached to the vessel wall.'],
	['186_06.jpg', 'Under higher magnification the laminations of the thrombus are fairly distinct.  The edge of the thromboembolus is pressed against a damaged intima where early organization is proceeding.'],
	['186_07.jpg', 'Micro:  at this highest power the fibrin of the thromboembolus alternates with remnants of leukocytes and degenerating red cells.  To your right, where the thromboembolus and the intima join, fibroblasts are proliferating (early organization).  The thromboembolus will eventually become fibrotic and recanalized by new capillary channels.  This completes the process of organization of the thrombus.']
]

var A82_191L =
[
	['A82-191L_01.jpg', 'Gross:  splenic infarct.'],
	['A82-191L_02.jpg', 'Edge of infarct within spleen is composed of a zone of hemorrhage resulting from leaky, necrotic vessels supplied by blood from the dilated vessels of the adjacent viable parenchyma.  Note the sharp band of necrosis of red and white pulp and vessels.  The necrosis is nearly devoid of red cells - an anemic or pale infarct.'],
	['A82-191L_03.jpg', 'Edge of infarct within spleen is composed of a zone of hemorrhage resulting from leaky, necrotic vessels supplied by blood from the dilated vessels of the adjacent viable parenchyma.  Note the sharp band of necrosis of red and white pulp and vessels.  The necrosis is nearly devoid of red cells - an anemic or pale infarct.']
]

var A82_44A =
[
	['A82-44A_01.jpg', 'Center of infarct is markedly hemorrhagic and has lost the architectural detail that would identify it as lung.'],
	['A82-44A_02.jpg', 'Center of infarct is markedly hemorrhagic and has lost the architectural detail that would identify it as lung.']
]

var A78_181 =
[
	['A78-181_01.jpg', 'Large, unorganized thrombus is present in hepatic vein radical.  Note lines of Zahn.'],
	['A78-181_02.jpg', 'The consequence of hepatic vein thrombosis is centrilobular congestion and necrosis.']
]


//LAB 08 COMPONENTS

var minicase21 =
[
	['mc21_01.jpg', '1968 film with early pulmonary fibrosis, left lung. Also pleural thickening.'],
	['mc21_02.jpg', '1982 film with extension of fibrosis to both lower lobes. Note pleural fluid right and increased radiolucency left lung (compensatory emphysema).'],
	['mc21_03.jpg', 'Close up of 1982 film to show calcification of parietal pleura.'],
	['mc21_04.jpg', 'Routine cytology staining of bronchial washing sediment demonstrating asbestos body engulfed by multinucleated giant cells.'],
	['mc21_05.jpg', 'Prussian blue reaction applied to bronchial washing to demonstrate numerous asbestos bodies.'],
	['mc21_06.jpg', 'Prussian Blue applied to asbestos bodies to demonstrate non-heme core.'],
	['mc21_07.jpg', 'Representative high magnification views of narrowed small pulmonary arteries due to intimal proliferation.'],
	['mc21_08.jpg', 'Representative high magnification views of narrowed small pulmonary arteries due to intimal proliferation.'],
	['mc21_09.jpg', 'Gross picture of transected heart showing right ventricular hypertrophy.']
]

var minicase24 =
[
	['mc24_01.jpg', 'This blood smear shows a microcytic, hypochromic anemia. The red blood cells are too far apart, too small, and have an increased area of central pallor.'],
	['mc24_02.jpg', 'A close up view of a blood smear showing basophilic stippling.'],
	['mc24_03.jpg', 'Older house paint can contain lead (as can older water pipes).'],
	['mc24_04.jpg', 'Care must be taken to prevent lead paint from falling into the wrong hands'],
	['mc24_05.jpg', 'Children are susceptible to lead poisoning. This x-ray of a young childís wrist demonstrates how lead is deposited in the bone, predominantly seen in the epiphysis.'],
	['mc24_06.jpg', 'These two x-rays demonstrate how difficult it is sometimes to see these lead lines in actual practice. They are virtually indistinguishable on the left and only are apparent after decreasing the exposure as shown on the right side.']
]

var minicase53 =
[
	['mc53_01.jpg', 'This photo shows a defensive stab wound on the arm of a victim. These types of wounds can be found on the underside of the forearms, as the victim crosses their arms in front of them to defend against an attacker.'],
	['mc53_02.jpg', 'In this photo, the knife has inflicted a stab wound (incision) in the victim. The knife was driven with enough force to leave an impression of the hilt to the left of the wound. These types identifying marks can be useful to the forensic pathologist.'],
	['mc53_03.jpg', 'This man has a laceration to his scalp. Notice the flap of skin that has been torn away as a result of the trauma.'],
	['mc53_04.jpg', 'The injury that caused the laceration to the inferior skin of the eye is obviously uneven. There is a free flap of skin, and the edges of the wound cannot be reapproximated.'],
	['mc53_05.jpg', 'Here is an example of a contusion around an eye (an example of a ìblack eyeî). The face has an abundant blood supply, and blood can easily pool in the soft tissue under an eye socket.'],
	['mc53_06.jpg', 'Here we have evolution of a contusion (bruise) over a four day period (from top left to bottom right). Notice that over time the redness is replaced by a lighter yellow coloration. This corresponds to the breakdown of hemoglobin in the red blood cells to bilirubin.'],
	['mc53_07.jpg', 'This personís forearm shows a typical example of an abrasion (a.k.a. ìroad rashî). The epidermis has been traumatically removed, and directionality can be established by determining which edge has remanants of rolled up epidermis still present (the injury is towards this edge).'],
	['mc53_08.jpg', 'Diagram of an incision (top).  Notice the proximity of one edge to the other.  A stitch (lower left) helps approximate the edges and allows clotted blood to stabilize the wound until granulation tissue and later collagen can later fill in the area under the epidermis.  Eventually, the basal cells will proliferate and deposit basement membrane (lower right).'],
	['mc53_09.jpg', 'Diagram of an abrasion (A). The epidermis has been traumatically removed, and the wound edges are relatively far apart. Myofibroblasts will proliferate in the dermis (B). These specialized cells have both collagen producing and smooth muscle function, and can cause contraction of the wound, and decrease the amount of reepithelialization that must occur (C). The intact skin will have a residual collagenous scar underlying the epidermis (D).']
]

var A79_180EK =
[
	['A79-180_01.jpg', 'High power view of an alveolar space packed with macrophages and the brown asbestos bodies. A few reactive pneumocytes are seen lining the alveoli. Chronic inflammatory cells are present in the thickened interstitium.'],
	['A79-180_02.jpg', 'High power view of an alveolar space packed with macrophages and the brown asbestos bodies. A few reactive pneumocytes are seen lining the alveoli. Chronic inflammatory cells are present in the thickened interstitium.'],
	['A79-180_03.jpg', 'The section shows a large airway lined by respiratory epithelium and a neighboring large artery.  Giant cells are present in fibrotic tissue.  The alveoli on the edge of the section are filled with inflammatory cells, consistent with bronchopneumonia.'],
	['A79-180_04.jpg', 'A closer view of the multi-nucleated giant cells trying to ingest and degrade multiple asbestos bodies.  Note the pale pink fibrotic tissue surrounding the giant cells, signs that this is a chronic inflammatory process, with attempted healing by fibrosis.'],
	['A79-180_05.jpg', 'This slide shows bronchopneumonia, with outlines of intact alveoli seen focally, but in other areas a near solid sheet of neutrophils is present due to disruption of the alveolar septa.'],
	['A79-180_06.jpg', 'A closer view of the neutrophils, occasional macrophages, and rare red blood cells filling alveolar spaces in bronchopneumonia.'],
	['A79-180_07.jpg', 'A pleural plaque composed of acellular hyalinized tissue, characteristic of asbestos exposure.']
]

var A79_282 =
[
	['A79-282_01.jpg', 'Sections show alveolar spaces with numerous macrophages (cells with pink, foamy cytoplasm) some of which are seen engulfing elongated, sometimes dumb-bell shaped brown structures ñ the asbestos bodies.'],
	['A79-282_02.jpg', 'Sections show alveolar spaces with numerous macrophages (cells with pink, foamy cytoplasm) some of which are seen engulfing elongated, sometimes dumb-bell shaped brown structures ñ the asbestos bodies.'],
	['A79-282_03.jpg', 'Sections show alveolar spaces with numerous macrophages (cells with pink, foamy cytoplasm) some of which are seen engulfing elongated, sometimes dumb-bell shaped brown structures ñ the asbestos bodies.'],
	['A79-282_04.jpg', 'Sections show alveolar spaces with numerous macrophages (cells with pink, foamy cytoplasm) some of which are seen engulfing elongated, sometimes dumb-bell shaped brown structures ñ the asbestos bodies.'],
	['A79-282_05.jpg', 'Note the thickened, fibrotic interstitium between alveolar air spaces.'],
	['A79-282_06.jpg', 'Combined fibrosis (upper portion of slide) and emphysematous changes (mid-portion of slide) is seen.  The dilated air spaces are consistent with emphysema.'],
	['A79-282_07.jpg', 'Lung with an abnormal structure:  thickened fibrotic septae between alveoli give the impression of nearly solid tissue.  Remember, the lung should be mostly air spaces!']
]

var N65_374A =
[
	['N65-374A_01.jpg', 'Foreign material is present as refractile gray-blue granules.  Numerous multi-nucleate giant cells surround the foreign material in an attempt to either destroy it, or to wall it off from normal tissue.  Dense fibrosis surrounds the giant cell reaction, testifying to the chronicity of the process.'],
	['N65-374A_02.jpg', 'Foreign material is present as refractile gray-blue granules.  Numerous multi-nucleate giant cells surround the foreign material in an attempt to either destroy it, or to wall it off from normal tissue.  Dense fibrosis surrounds the giant cell reaction, testifying to the chronicity of the process.'],
	['N65-374A_03.jpg', 'Foreign material is present as refractile gray-blue granules.  Numerous multi-nucleate giant cells surround the foreign material in an attempt to either destroy it, or to wall it off from normal tissue.  Dense fibrosis surrounds the giant cell reaction, testifying to the chronicity of the process.']
]

var N78_5717B =
[
	['N78-5717_01.jpg', 'Vaginal biopsy showing the normal stratified squamous epithelium and underlying stroma, with abnormal random gland formation.'],
	['N78-5717_02.jpg', 'Vaginal biopsy showing the normal stratified squamous epithelium and underlying stroma, with abnormal random gland formation.'],
	['N78-5717_03.jpg', 'Vaginal biopsy showing the normal stratified squamous epithelium and underlying stroma, with abnormal random gland formation.'],
	['N78-5717_04.jpg', 'Normal squamous epithelium of the vagina.  The squamous cells are polygonal with abundant cytoplasm and easily identified intercellular bridges (desmosomes).'],
	['N78-5717_05.jpg', 'Normal squamous epithelium of the vagina.  The squamous cells are polygonal with abundant cytoplasm and easily identified intercellular bridges (desmosomes).'],
	['N78-5717_06.jpg', 'Endocervical-type glandular epithelium with tall columnar cells that have basilar nuclei and apical mucin.  These cells are not normally found in the vagina, and represent benign vaginal adenosis.'],
	['N78-5717_07.jpg', 'Endocervical-type glandular epithelium with tall columnar cells that have basilar nuclei and apical mucin.  These cells are not normally found in the vagina, and represent benign vaginal adenosis.']
]

var N79_7514 =
[
	['N79-7514_01.jpg', 'Low power view of a needle biopsy of the liver.  Portal tracts are seen, and no bile duct proliferation is identified.'],
	['N79-7514_02.jpg', 'Higher power view of hepatocytes and cholestasis.  Normal hepatocytes are cells with abundant eosinophilic cytoplasm and round nuclei (occasional binucleation).  The bile is yellow-brown and is seen plugging bile canaliculi.  Rare chronic inflammatory cells are present.'],
	['N79-7514_03.jpg', 'Higher power view of hepatocytes and cholestasis.  Normal hepatocytes are cells with abundant eosinophilic cytoplasm and round nuclei (occasional binucleation).  The bile is yellow-brown and is seen plugging bile canaliculi.  Rare chronic inflammatory cells are present.'],
	['N79-7514_04.jpg', 'A portal tract with normal bile duct epithelium, normal hepatic artery and vein.  Minimal chronic inflammatory cells are present.']
]

var A71_102 =
[
	['A71-102_01.jpg', 'Low magnification of a clean surgical wound covered by scab (dehydrated clot of fibrin and red blood cells).'],
	['A71-102_02.jpg', 'This slide shows an early stage of wound repair that usually takes place during the first two days after the wound occurs: neutrophils appear at the margins of the incision, attracted by the fibrin clot.'],
	['A71-102_03.jpg', 'Deep aspect of the wound features hemorrhage and acute inflammation in subcutaneous fat.']
]


//LAB 09 COMPONENTS

var minicase1 =
[
	['mc01_01.jpg', 'description'],
	['mc01_02.jpg', 'description'],
	['mc01_03.jpg', 'description'],
	['mc01_04.jpg', 'Pneumoperitoneum "free air in the abdomen" secondary to duodenal ulcer perforation. In an upright film, the air collects under the diaphragm.'],
	['mc01_05.jpg', 'description'],
	['mc01_06.jpg', 'description'],
	['mc01_07.jpg', 'Note the transmural inflammation of the small bowel wall.'],
	['mc01_08.jpg', 'Acute arteritis and fibrinoid necrosis of the blood vessel wall. Notice the smudged, hyalinized (pink) appearance.'],
	['mc01_09.jpg', 'Note occluded vessels at the corticomedullary junction, and smaller vessels involved at the cortex appearing as white nodules (arrows).'],
	['mc01_10.jpg', 'Note occluded vessels at the corticomedullary junction, and smaller vessels involved at the cortex appearing as white nodules.'],
	['mc01_11.jpg', 'Scattered vascular lesions in renal cortex.'],
	['mc01_12.jpg', 'Higher power of scattered vascular lesions in renal cortex.'],
	['mc01_13.jpg', 'Fibrinoid necrosis of the glomerular capillary loops.'],
	['mc01_14.jpg', 'description'],
	['mc01_15.jpg', 'Vasculitis between brachial plexus nerve bundles.'],
	['mc01_16.jpg', 'Higher power of vasculitis between brachial plexus nerve bundles.'],
	['mc01_17.jpg', 'Vasculitis of the intramyocardial vessels.'],
	['mc01_18.jpg', 'Vasculitis of the intramyocardial vessels.'],
	['mc01_19.jpg', 'Arteritis of small intramyocardial vessels.'],
	['mc01_20.jpg', 'Note small areas of organization of myocardial necrosis.'],
	['mc01_21.jpg', 'Spinal cord showing vasculitis.']
]

var micro136 =
[
	['136_01.jpg', 'This photomicrograph of the periadrenal tissue demonstrates two arteries iwth varying degrees of fibrinoid necrosis and some degree of destruction of the arterial wall.  One of the vessels is adjacent to a nerve.  The surrounding tissue contains lymphocytes, plasma cells, and several eosinophils.'],
	['136_02.jpg', 'This low power photomicrograph of an adrenal gland demonstrates several periadrenal vessels with some degree of fibrinoid necrosis in the vessel wall.  Surrounding the involved vessels are areas of inflammatory cells within the periadrenal fat.  Some areas of hemorrhage are seen both within the periadrenal fat and also within the adrenal gland.  The adrenal gland is a good place to look for vasculitis.'],
	['136_03.jpg', 'This high power photomicrograph shows a periadrenal artery with vasculitis.  This is characterized by fibrinoid necrosis of portions of the vessel wall, occasional infiltration with inflammatory cells on the wall, and some disruption of the integrity of the vessel wall.  Inflammatory reaction is also seen in the tissue surrounding the artery, particularly in the area of disruption of the artery wall.'],
	['136_04.jpg', 'This photomicrograph demonstrates the periadrenal tissue with a large artery showing evidence of vasculitis.  This is characterized by fibrinoid necrosis of a large portion of the wall.  The lower left-hand corner of the wall shows normal smooth muscle but the rest of the wall of the artery is destroyed by the necrotizing process.  Within the areas of fibrinoid necrosis are inflammatory cells, many of which are degenerating.  Inflammatory infiltrate and hemorrhage are seen in the tissue surrounding this artery.  Several small arteries with evidence of necrosis of the wall are also evident.']
]

var A69_164J =
[
	['A69-164J_01.jpg', 'A glomerulus with segmental necrosis of a major portion of the glomerular tuft is evident in the right-hand portion of this field.  There is some cellular proliferation around the area of necrosis producing a small crescent.  Some capillary loops appear well preserved.  Tubules and interstitium appear normal in this field.  Two other glomeruli are also present, neither one of which shows very extensive necrosis.  There is some inflammatory infiltrate around one of the glomeruli.'],
	['A69-164J_02.jpg', 'This intermediate power photomicrograph shows two glomeruli.  The glomerulus in the upper left-hand corner shows extensive segmental necrotizing glomerulonephritis.  The other glomerulus does not show obvious necrosis, however there is some cellular proliferation around the glomerular tuft forming a small crescent.'],
	['A69-164J_03.jpg', 'This intermediate power photomicrograph shows the entire interlobular artery with extensive fibrinoid necrosis throughout the wall of the artery.  This is accompanied by numerous polymorphonuclear leukocytes within the wall of the vessel.  A heavy perivascular inflammatory infiltrate can be noted.'],
	['A69-164J_04.jpg', 'This higher power photomicrograph shows a glomerulus with segmental necrosis involving about two-thirds of the glomerular tuft.  The segmental necrosis is characterized by the very red eosinophilic staining in the central portion of the glomerular tuft.  Mononuclear cells and polymorphonuclear leukocytes are seen in the interstitium surrounding the glomerulus.  Several tubules show some sloughing of tubular epithelial cells.'],
	['A69-164J_05.jpg', 'This high power photomicrograph of an intralobular artery shows extensive fibrinoid necrosis of the wall of the artery accompanied by extensive polymorphonuclear leukocytic infiltration into the wall.  The integrity of portions of the wall is disrupted.'],
	['A69-164J_06.jpg', 'This is a high power photomicrograph of the edge of a large intralobular artery.  This artery shows extensive transmural arteritis with numerous mononuclear cells and polymorphonuclear leukocytes infiltrating through most of the wall of the artery.  There is accompanying fibrinoid necrosis in many areas.  Large portions of the wall of the artery appear markedly disrupted.  There is an inflammatory process surrounding this artery.']
]

var rheumaticHD =
[
	['RheumHD_01.jpg', 'The pathogenic sequence and key morphologic features of acute rheumatic heart disease.'],
	['RheumHD_02.jpg', 'Microscopic  appearance of an Aschoff body in a patient with acute rheumatic carditis.  The myocardial interstitium has a circumscribed collection of mononuclear  inflammatory cells, including some large histiocytes with prominent nucleoli  and central necrosis.'],
	['RheumHD_03.jpg', 'Acute  and chronic rheumatic heart disease.<ol><li>Acute rheumatic mitral valvulitis  superimposed on chronic rheumatic heart disease. Small vegetations  (verrucae) are visible along the line  of closure of the mitral valve leaflet (arrowheads). Previous episodes  of rheumatic valvulitis have caused fibrous thickening and fusion of  the tendinous cords.<li>Aschoff body<li>Mitral stenosis with diffuse fibrous thickening and  distortion of the valve leaflets, commissural fusion (arrow in C),  and thickening  and shortening  of the tendinous cords. Marked dilation of the left atrium is noted  in the left atrial view (C).<li>Opened valve. Note the neovascularization  of the anterior mitral leaflet (arrow).</ol>']
]

var hemolyticAnemia =
[
	['HemoAnemia_01.jpg', 'Diagrammatic  representation of Autoimmune Hemolytic Anemia. IgG coats the outer portion  of the cells, and enables the reticuloendothelial system (RES) to take  bites out of the membrane as they pass through the spleen. The red cells  lose membrane and as a result turn into small spherocytes (the most efficient  shape to conserve intracellular volume).'],
	['HemoAnemia_02.jpg', 'An Indirect Coombís test mixes the patientís SERUM with normal cells and  anti-Ig (usually from a rabbit). If the normal red cells become coated  by circulating immunoglobulin (Ig) from the patient, the rabbit anti-Ig  will cause them to agglutinate. If there is no circulating immunoglobulin  in the patientís serum, then the red cells will not be coated (and  will not stick together), resulting in a negative test.'],
	['HemoAnemia_03.jpg', 'A Direct Coombís test mixes the patientís red blood cells with anti-Ig (again from a rabbit). If the patientís red cells are already coated  by immunoglobulin (i.e. the patient is forming antibody in vivo), the rabbit anti-Ig will cause them to agglutinate. This is either caused by IgG or  IgM. If there is no immunoglobulin coating the patientís red blood  cells, then they will not stick together, and you will get a negative result.'],
	['HemoAnemia_04.jpg', 'This blood smear shows two populations of red cells. The cells affected by the autoimmune hemolytic anemia are smaller and darker red. This is because  they have formed spherocytes, and the cells have lost the normal zone of central pallor.  The larger, bluish cells are immature red cells (reticulocytes) that are  being pushed out of the bone marrow before they have a chance to fully mature. This is the bodyís attempt to deal with the anemia.']
]

var rheumatoidDZ =
[
	['RheumDisease_01.jpg', 'Diagrammatic representation depicting the pathophysiology of rheumatoid arthritis.  Notice how complicated the interaction is between the different cells.'],
	['RheumDisease_02.jpg', 'Diagram of a normal knee joint.'],
	['RheumDisease_03.jpg', 'Diagram of a knee affected by rheumatoid arthritis.  There is joint swelling with inflammation.  The synovial membrane proliferates forming a pannus, which grows over and erodes the bone.  This results in a worn down and narrowed joint space.'],
	['RheumDisease_04.jpg', 'Low magnification of rheumatoid arthritis showing pannus formation covering the bones in a joint.'],
	['RheumDisease_05.jpg', 'At higher magnification, the pannus is a fibrocellular mass of synovium and synovial stroma consisting of inflammatory cells, granulomatous inflammation, and fibroblasts, which causes erosion of the underlying cartilage.  In time, after the cartilage has been destroyed, the pannus bridges the apposing bones forming a fibrous union which may eventually ossify.'],
	['RheumDisease_06.jpg', 'Gross photograph of the hands of a person with rheumatoid arthritis.  Notice the ulnar deviation of the fingers.'],
	['RheumDisease_07.jpg', 'Low magnification of rheumatoid synovitis showing marked synovial hypertrophy with formation of villi.'],
	['RheumDisease_08.jpg', 'At higher magnification, subsynovial tissue containing a dense lymphoid aggregates is seen.'],
	['RheumDisease_09.jpg', 'Gross photograph of multiple firm rheumatoid nodules in the fingers of a patient.'],
	['RheumDisease_10.jpg', 'This photomicrograph shows a subcutaneous rheumatoid nodule with an area of central necrosis surrounded by a palisade of macrophages and scattered chronic inflammatory cells.']
]

var MS =
[
	['MS_01.jpg', 'There is much debate over the exact pathogenesis of multiple sclerosis. Both T-cells and macrophages are thought to induce oligodendrocyte injury in this demyelinating disease. At some point, the body becomes sensitized to a component of the myelin sheath, thus activating the immune system.'],
	['MS_02.jpg', 'This diagram shows T-cells damaging the myelin sheath of a nerve fiber in multiple  sclerosis.'],
	['MS_03.jpg', 'This diagram contrasts a normal myelinated nerve fiber (top) with a nerve fiber  in multiple sclerosis (bottom). The myelin has been damaged by T-cells, thus exposing the underlying nerve fiber. You can see how the electrical  potential generated by the nerve would not travel efficiently down this  ragged fiber.'],
	['MS_04.jpg', 'The arrow denotes a well-demarcated plaque in the white matter of the cerebellum.']
]

var SLE =
[
	['SLE_01.jpg', 'The mechanism of damage in systemic lupus erythematosus. Immune complexes are formed which activate complement. Inflammatory mediators are released, causing edema and inflammation.'],
	['SLE_02.jpg', 'The kidney is commonly affected in SLE. The immune complexes that cause the inflammatory reaction are laid down in the glomerulus, and progressively  damage the poor kidneys. This is an example of lupus nephritis, diffuse  proliferative type. Note the marked increase in cellularity throughout  the glomerulus.'],
	['SLE_03.jpg', 'Immunofluorescence is helpful in the diagnosis of SLE. By using a fluorescently labeled anti-IgG we can see the mesangial and capillary wall deposits of immune complexes.'],
	['SLE_04.jpg', 'This photo shows the typical malar distribution of the facial rash that appears in a ìbutterflyî pattern in SLE.']
]


//LAB 10 COMPONENTS

var minicase22 =
[
	['mc22_01.jpg', 'Colposcopic view of a normal cervix.  An IUD string is protruding from the cervical os (center of photo), which contains mucus and air bubbles.  Note that the surface of the cervix is quite regular with a smooth contour and uniform color.  There is a light reflex at 6:00 below the IUD string.  The squamocolumnar junction in this case is within the endocervical canal and is not easily seen.'],
	['mc22_02.jpg', 'Flat "leukokeratotic" (white, plaque-like) condylomata of the cervix, with dysplastic histology.'],
	['mc22_03.jpg', 'Colposcopic view of cervical eversion (synonyms:  erosion, ectropion).  The velvety, brown tissue emanating from the cervical os is endocervical-type columnar epithelium.  The squamocolumnar junction is visible in its entirety, except where it passes off the slide at 4-6:00.  There is a small white rim on the posterior lip that represents squamous metaplasia of the ectropion.  Note the numerous folds and crypts which frequently accompany columnar epithelium.'],
	['mc22_04.jpg', 'Colposcopic view of cervical eversion with focal squamous meta-plasia.  The cervical os is transverse in the lower portion of the photo.  The squamocolumnar junction is prominent on the anterior lip, and fingerlike projection of metaplastic epithelium is present just to the right of 12:00.'],
	['mc22_05.jpg', 'Serial photos illustrating development of squamous metaplasia from basal reserve cells of endocervix.'],
	['mc22_06.jpg', 'Serial photos illustrating development of squamous metaplasia from basal reserve cells of endocervix.'],
	['mc22_07.jpg', 'Serial photos illustrating development of squamous metaplasia from basal reserve cells of endocervix.'],
	['mc22_08.jpg', 'Colposcopic view of severe dysplasia.  The cervical os is transverse and in the center of the photo.  A prominent area of white epithelium is present on the posterior lip from 4-6:00, extending to 9:00 at the brim of the os.'],
	['mc22_09.jpg', 'Microscopic view of severe dysplasia.'],
	['mc22_10.jpg', 'Colposcopic view of mosaicism (severe dysplasia/carcinoma-in-situ).  This photo of the anterior lip of the cervix demonstrates a mosaic pattern commonly associated with either severe dysplasia or carcinoma-in-situ.'],
	['mc22_11.jpg', 'Gross photo of large, fungating cervical carcinoma centered on cervical os.'],
	['mc22_12.jpg', 'Gross photo of large, fungating cervical carcinoma centered on cervical os.'],
	['mc22_13.jpg', 'Microscopic view of invasive squamous cell carcinoma of cervix.']
]

var UH83_6741N =
[
	['UH83-6741N_01.jpg', 'Normal endocervix covered by columnar mucous cells that also line the glands.'],
	['UH83-6741N_02.jpg', 'Surface has been replaced by squamous metaplasia.  This process extends down the necks of glands in this example.'],
	['UH83-6741N_03.jpg', 'Higher magnification of involved glands demonstrates that the metaplastic process develops from reserve cells located underneath the columnar mucous cells, and as it develops, the squamous epithelium lifts the mucous epithelium into the gland lumen.']
]

var UH83_3417 =
[
	['UH83-3417_01.jpg', 'Histology of cervix shows normal squamous epithelium.  Note the maturation and lack of koilocytes'],
	['UH83-3417_02.jpg', 'Dysplastic epithelium to the left with in contrast to normal squamous epithelium on the right.'],
	['UH83-3417_03.jpg', 'Dysplastic epithelium to the left with in contrast to normal squamous epithelium on the right.  Note the nuclear hyperchromasia with formation of koilocytes in the dysplastic epithelium.'],
	['UH83-3417_04.jpg', 'High power or cervical epithelium.  Low grade squamous intraepithelial lesion (mild dysplasia/CIN I) on the right, and normal epithelium on the left.'],
	['UH83-3417_05.jpg', 'Low power of severe dysplasia (CIN III). Note the hyperchromatic nuclei, mitotic figures can be seen throughout the dysplastic epithelium.'],
	['UH83-3417_06.jpg', 'Higher power view of CIN III showing hyperchromatic crowded nuclei.']
]

var pap_neg =
[
	['Paps_01.jpg', 'Normal cervical vaginal smear showing squamous cells.  No nuclear enlargement is noted.'],
	['Paps_02.jpg', 'Higher power of normal squamous cells.']
]

var pap_dys =
[
	['Paps_03.jpg', 'Low power view of cervical vaginal smear showing low-grade squamous intraepithelial lesion/mild dysplasia/ cervical intraepithelial neoplasia I (CIN I) (arrow). Koilocytes show shrunken hyperchromatic nuclei with perinuclear halo (arrow head).'],
	['Paps_04.jpg', 'High power view of low-grade squamous intraepithelial lesion.  Note the by shrunken chromatic nucleus surrounded by halo and condensed cytoplasm at the periphery of the cell.']
]

var A88_98A2 =
[
	['A88-98A2_01.jpg', 'Normal ciliated pseudostratified columnar epithelium lining bronchial tree.'],
	['A88-98A2_02.jpg', 'Low magnification of bronchus with squamous metaplasia.  Etiology:  chronic irritation, as from cigarettes, recurrent bronchial infection, or bronchiectasis.'],
	['A88-98A2_03.jpg', 'Higher magnification showing transition from normal to metaplastic epithelium.'],
	['A88-98A2_04.jpg', 'Still higher magnification focusing on transition from normal to immature squamous metaplasia.'],
	['A88-98A2_05.jpg', 'Adjacent transition from immature to mature squamous metaplasia.']
]


//LAB 11 COMPONENTS
var minicase10 =
[
	['mc10_01.jpg', 'An upper GI x-ray reveals a large anterior-wall ulcer of the gastric antrum'],
	['mc10_02.jpg', 'Normal chest x-ray'],
	['mc10_03.jpg', 'Necrosis and degenerating foci with areas of atypia are present.'],
	['mc10_04.jpg', 'X-ray shows bilateral diffuse granularity and streaks. Heart appears normal.'],
	['mc10_05.jpg', 'X-ray shows bilateral diffuse granularity and streaks.'],
	['mc10_06.jpg', 'Metastatic tumor fills peribronchial lymphatics and vessels. There are tumor thrombi in vessels. In addition to interstitial lymphatics clogged with tumor, the septa are fibrous and thickened. '],
	['mc10_07.jpg', 'Metastatic tumor fills peribronchial lymphatics and vessels. There are tumor thrombi in vessels. In addition to interstitial lymphatics clogged with tumor, the septa are fibrous and thickened. '],
	['mc10_08.jpg', 'Metastatic tumor fills peribronchial lymphatics and vessels. There are tumor thrombi in vessels. In addition to interstitial lymphatics clogged with tumor, the septa are fibrous and thickened. '],
	['mc10_09.jpg', 'A low-power view of the edge of one of the ulcers reveals effacement of most of the mucosa and infiltration of the ulcer edge and base by primary adenocarcinoma (Transition through slides 10,11,12).'],
	['mc10_10.jpg', 'A low-power view of the edge of one of the ulcers reveals effacement of most of the mucosa and infiltration of the ulcer edge and base by primary adenocarcinoma (Transition through slides 10,11,12).'],
	['mc10_11.jpg', 'A low-power view of the edge of one of the ulcers reveals effacement of most of the mucosa and infiltration of the ulcer edge and base by primary adenocarcinoma (Transition through slides 10,11,12).'],
	['mc10_12.jpg', 'A low-power view of the edge of one of the ulcers reveals effacement of most of the mucosa and infiltration of the ulcer edge and base by primary adenocarcinoma (Transition through slides 10,11,12).'],
	['mc10_13.jpg', 'Mucicarmine stain reveals mucin production by tumor cells.'],
	['mc10_14.jpg', 'Review of the original biopsy reveals the mucinous tumor cells.']
]

var micro196 =
[
	['196_01.jpg', 'Gross: Picture of a uterine leiomyoma. The tumor bulges out from the cut surface and is firm and white. The tumor shown here encroaches upon the endometrial cavity, possibly causing increased menstrual blood loss.'],
	['196_02.jpg', 'Low power view of leiomyoma showing a circumscribed tumor.'],
	['196_03.jpg', 'Medium power. Interlacing bundles of cells that closely resemble normal smooth muscle cells.'],
	['196_04.jpg', 'Higher power. The leiomyoma is composed of spindle cells with cigar shaped nuclei arranged in a fascicular pattern. Note the lack of nuclear pleomorphism, mitotic activity, and necrosis.']
]

var UH88_6138 =
[
	['UH88-6138_01.jpg', 'Gross: Very bulky, multilobulated tumor with focal hemorrage and necrosis. Note the difference in appearance from leiomyoma, which is round, pale, whorled, and usually of uniform color. Also, if you were to feel this tumor, you would find it to be a little soft in contrast to leiomyoma, which is firm and rubbery.'],
	['UH88-6138_02.jpg', 'Photo taken at the edge of the tumor, where it meets the myometrium. Note that the border is not completely sharp and rounded, a feature you would expect to find in a benign leiomyoma. Instead, a broad tongue of tumor is extending beyond the main mass and infiltrating the myometrium. This illustrates an important feature of malignant tumors in general: their lack of sharp circumscription, or, put another way, their ability to infiltrate adjacent tissue.'],
	['UH88-6138_03.jpg', 'Like leiomyoma, leiomyosarcoma is a "spindle cell" tumor, composed of cells with elongated, or fusiform nuclei.'],
	['UH88-6138_04.jpg', 'The tumor cells are arranged in a roughly parallel arrays recapitulating the appearance of normal smooth muscle.'],
	['UH88-6138_05.jpg', 'Numerous mitoses are present in a single field (arrows).'],
	['UH88-6138_06.jpg', 'In comparison to leiomyoma, this malignant tumor is extremely cellular. The nuclear to cytoplasmic ratio is high, nuclei are hyperchromatic and variable in shape with bizarre cells (arrow).']
]


//LAB 12 COMPONENTS

var minicase9 =
[
	['mc09_01.jpg', 'Chest x-ray with large density, left lower lobe, behind heart.'],
	['mc09_01p5.jpg', 'Relative risks of lung cancer in ex-smokers.'],
	['mc09_02.jpg', 'Sputum cytology sections. Note clumps of large, obviously malignant cells. Contrast them to normal lower respiratory tract phagocytes and leukocytes. Tumor cells are bizarre and, when in clumps, suggest glands.'],
	['mc09_03.jpg', 'Sputum cytology sections. Note clumps of large, obviously malignant cells. Contrast them to normal lower respiratory tract phagocytes and leukocytes. Tumor cells are bizarre and, when in clumps, suggest glands.'],
	['mc09_04.jpg', 'Peripheral adenocarcinoma of lung. Note alveolar arrangement, the malignant cells appearing to line up on the septum. On high magnification (Slide 5), contrast size of tumor cells with the lymphocytes in the septa. Can you imagine this tumor yielding the sputum cytology just projected?'],
	['mc09_05.jpg', 'Peripheral adenocarcinoma of lung. Note alveolar arrangement, the malignant cells appearing to line up on the septum. On high magnification, contrast size of tumor cells with the lymphocytes in the septa. Can you imagine this tumor yielding the sputum cytology just projected?'],
	['mc09_06.jpg', 'Mediastinal lymph node replaced by metastatic adenocarcinoma. Low power (Slide 6) shows complete replacement of the node by tumor. Only the shape of the node and an inconspicuous rim of lymphoid tissue remain. Higher magnifications (Slide 7, Slide 8) show that the tumor has a glandular pattern.'],
	['mc09_07.jpg', 'Mediastinal lymph node replaced by metastatic adenocarcinoma. Low power (Slide 6) shows complete replacement of the node by tumor. Only the shape of the node and an inconspicuous rim of lymphoid tissue remain. Higher magnifications (Slide 7, Slide 8) show that the tumor has a glandular pattern.'],
	['mc09_08.jpg', 'Mediastinal lymph node replaced by metastatic adenocarcinoma. Low power (Slide 6) shows complete replacement of the node by tumor. Only the shape of the node and an inconspicuous rim of lymphoid tissue remain. Higher magnifications (Slide 7, Slide 8) show that the tumor has a glandular pattern.'],
	['mc09_09.jpg', 'CT scan of base of brain (top is anterior), enhanced by intravenous contrast material, revealing large mass in sella turcica.'],
	['mc09_10.jpg', 'Repeat CT scan at a higher cut, revealing two separate mass densities, typical of metastatic tumor.'],
	['mc09_11.jpg', 'The large tumor is the LLL (Slide 11) mass, extending from diaphragm to lateral pleura, puckering the surface of the lung. Note (Slide 12) firm, white and viable tumor surrounding a brown centrally necrotic area, the latter presumably related in part to radiation therapy. Microscopically (Slide 13) note normal bronchus on the right adjacent to adenocarcinoma on the left. Higher magnification ( Slide 14, Slide 15 ). Note normal small bronchus. Aren\'t those tumor cells big and bizarre? This histology is identical to percutaneous LLL biopsy done during life.'],
	['mc09_12.jpg', 'The large tumor is the LLL (Slide 11) mass, extending from diaphragm to lateral pleura, puckering the surface of the lung. Note (Slide 12) firm, white and viable tumor surrounding a brown centrally necrotic area, the latter presumably related in part to radiation therapy. Microscopically (Slide 13) note normal bronchus on the right adjacent to adenocarcinoma on the left. Higher magnification ( Slide 14, Slide 15 ). Note normal small bronchus. Aren\'t those tumor cells big and bizarre? This histology is identical to percutaneous LLL biopsy done during life.'],
	['mc09_13.jpg', 'The large tumor is the LLL (Slide 11) mass, extending from diaphragm to lateral pleura, puckering the surface of the lung. Note (Slide 12) firm, white and viable tumor surrounding a brown centrally necrotic area, the latter presumably related in part to radiation therapy. Microscopically (Slide 13) note normal bronchus on the left adjacent to adenocarcinoma on the right. Higher magnification ( Slide 14, Slide 15 ). Note normal small bronchus. Aren\'t those tumor cells big and bizarre? This histology is identical to percutaneous LLL biopsy done during life.'],
	['mc09_14.jpg', 'The large tumor is the LLL (Slide 11) mass, extending from diaphragm to lateral pleura, puckering the surface of the lung. Note (Slide 12) firm, white and viable tumor surrounding a brown centrally necrotic area, the latter presumably related in part to radiation therapy. Microscopically (Slide 13) note normal bronchus on the left adjacent to adenocarcinoma on the right. Higher magnification ( Slide 14, Slide 15 ). Note normal small bronchus. Aren\'t those tumor cells big and bizarre? This histology is identical to percutaneous LLL biopsy done during life.'],
	['mc09_15.jpg', 'The large tumor is the LLL (Slide 11) mass, extending from diaphragm to lateral pleura, puckering the surface of the lung. Note (Slide 12) firm, white and viable tumor surrounding a brown centrally necrotic area, the latter presumably related in part to radiation therapy. Microscopically (Slide 13) note normal bronchus on the left adjacent to adenocarcinoma on the right. Higher magnification ( Slide 14, Slide 15 ). Note normal small bronchus. Aren\'t those tumor cells big and bizarre? This histology is identical to percutaneous LLL biopsy done during life.'],
	['mc09_16.jpg', 'The brain had two metastases, one of which is seen on this cut. Note the cortical tumor with tumor necrosis. Also note increased size of this hemisphere with shift of the falx. The increased size of the hemisphere is due to the pronounced edema (note the large white area below the tumor) incited by a metastasis in the brain.'],
	['mc09_17.jpg', 'The pituitary adenoma (Slide 17) bulged up through the diaphragm sella, creating an indentation on the inferior surface of the brain. The tumor was 4 cm. in diameter. The cut surface of the adenoma (Slide 18) was fleshy and solid. Microscopically (Slide 19) it was very cellular, and composed of anastomosing cords of cells (Slide 20).'],
	['mc09_18.jpg', 'The pituitary adenoma (Slide 17) bulged up through the diaphragm sella, creating an indentation on the inferior surface of the brain. The tumor was 4 cm. in diameter. The cut surface of the adenoma (Slide 18) was fleshy and solid. Microscopically (Slide 19) it was very cellular, and composed of anastomosing cords of cells (Slide 20).'],
	['mc09_19.jpg', 'The pituitary adenoma (Slide 17) bulged up through the diaphragm sella, creating an indentation on the inferior surface of the brain. The tumor was 4 cm. in diameter. The cut surface of the adenoma (Slide 18) was fleshy and solid. Microscopically (Slide 19) it was very cellular, and composed of anastomosing cords of cells (Slide 20).'],
	['mc09_20.jpg', 'The pituitary adenoma (Slide 17) bulged up through the diaphragm sella, creating an indentation on the inferior surface of the brain. The tumor was 4 cm. in diameter. The cut surface of the adenoma (Slide 18) was fleshy and solid. Microscopically (Slide 19) it was very cellular, and composed of anastomosing cords of cells (Slide 20).'],
	['mc09_21.jpg', 'What caused the severe dyspnea and was the immediate cause of death? Pulmonary thromboemboli. All of the major pulmonary arteries on the right and some on the left were occluded by thromboemboli. On this view of the pulmonary hilus (Slide 21), note emboli and nodules of white metastatic carcinoma in peribronchial nodes. Microscopically (Slide 22), note arteries occluded by emboli and (Slide 23) wedge-shaped peripheral infarct.'],
	['mc09_22.jpg', 'What caused the severe dyspnea and was the immediate cause of death? Pulmonary thromboemboli. All of the major pulmonary arteries on the right and some on the left were occluded by thromboemboli. On this view of the pulmonary hilus (Slide 21), note emboli and nodules of white metastatic carcinoma in peribronchial nodes. Microscopically (Slide 22), note arteries occluded by emboli and (Slide 23) wedge-shaped peripheral infarct.'],
	['mc09_23.jpg', 'What caused the severe dyspnea and was the immediate cause of death? Pulmonary thromboemboli. All of the major pulmonary arteries on the right and some on the left were occluded by thromboemboli. On this view of the pulmonary hilus (Slide 21), note emboli and nodules of white metastatic carcinoma in peribronchial nodes. Microscopically (Slide 22), note arteries occluded by emboli and (Slide 23) wedge-shaped peripheral infarct.'],
	['mc09_24.jpg', 'Where did the pulmonary emboli come from? The deep veins of the lower extremity. A look (Slide 24) at the inguinal area, where the femoral veins join, shows a broken- off thrombus, the upper end of which is in the lung. Thrombi were demonstrated (Slide 25) in the gastrocnemius muscle of the calf.'],
	['mc09_25.jpg', 'Where did the pulmonary emboli come from? The deep veins of the lower extremity. A look (Slide 24) at the inguinal area, where the femoral veins join, shows a broken- off thrombus, the upper end of which is in the lung. Thrombi were demonstrated (Slide 25) in the gastrocnemius muscle of the calf.']
]

var A82_135B =
[
	['A82-135B_01.jpg', 'This tumor recapitulates the gland-forming capacity of normal lung. Note that the glands are fairly simple, except for numerous, delicate papillary infoldings.'],
	['A82-135B_02.jpg', 'On higher magnification, note that the nuclei are bland, and quite uniform in size and shape. There is a much lower N/C ratio than is seen in higher-grade tumors. The abundant cytoplasm is clear, because it contains mucin, which represents another sign of a high degree of differentiation in this tumor.']
]

var A85_118A =
[
	['A85-118A_01.jpg', 'Low power view of lung adenocarcinoma. On the right side is uninvolved pulmonary parenchyma, and on the left side is a pulmonary adenocarcinoma.'],
	['A85-118A_02.jpg', 'Higher power of the same area. This tumor recapitulates the gland forming capacity of normal lung.'],
	['A85-118A_03.jpg', 'Moderately differentiated adenocarcinoma. The glands show outpouchings, back-to-back patterns and cribriforming.'],
	['A85-118A_04.jpg', 'At the highest magnification, note mitotic figures (arrows)'],
	['A85-118A_05.jpg', 'This tumor also shows necrosis.']
]

var A81_268B1 =
[
	['A81-268B1_01.jpg', 'Low power view of a poorly differentiated adenocarcinoma. Normal lung is on the right lower corner.'],
	['A81-268B1_02.jpg', 'This tumor has a solid pattern of growth.'],
	['A81-268B1_03.jpg', 'Foci of necrosis (arrows) are commonly in in poorly differentiated carcinomas.'],
	['A81-268B1_04.jpg', 'Note the necrosis (green arrow) at low magnification, and the high N/C ratio and numerous mitoses (red arrows).']
]


// LAB COLLECTIONS

var Summer_Lab01 =
[
	['Electron Micrographs', 'Cell Injury', summer_em, summer_lab01_dir, ],
	['Mini-Case 27', 'Acute Myocardial Infarction', minicase27, summer_lab01_dir, ],
	['Micro 161', 'Acute Myocardial Infarct', micro161, summer_lab01_dir, '@1775'],
	['Micro 163', 'Heart, Healing Infarct', micro163, summer_lab01_dir, '@1736'],
	['Micro UH86-6206', 'Subacute Myocardial Infarct', UH86_6206, summer_lab01_dir, '@1739']
];

var Summer_Lab02 =
[
	['Micro 138', 'Bilateral Renal Cortical Necrosis', micro138, summer_lab02_dir, '@1737'],
	['Micro 140', 'Acute Tubular Necrosis', micro140, summer_lab02_dir, '@1741'],
	['A63-100', 'Pancreas, Enzymatic Fat Necrosis', A63_100, summer_lab02_dir, '@1756'],
	['N83-2135', 'Skin, Gangrene', N83_2135, summer_lab02_dir, '@1758'],
	['A66-45', 'Lung, Caseous Necrosis', A66_45, summer_lab02_dir, '@1760'],
	['Demo', 'Liquefactive Necrosis in a Cerebellar Infarct', liquenec, summer_lab02_dir, ]
];

var Summer_Lab03 =
[
	['Micro 112', 'Early Bacterial Pneumonia', micro112, summer_lab03_dir, '@1762'],
	['Micro 113', 'Bacterial Pneumonia', micro113, summer_lab03_dir, '@1765'],
	['Micro 114', 'Bacterial Pneumonia', micro114, summer_lab03_dir, '@1767'],
	['Micro 159', 'Acute Bacterial Meningitis', micro159, summer_lab03_dir, '@1771'],
	['Micro 165', 'Fibrinous Pericarditis', micro165, summer_lab03_dir, '@1810'],
	['Micro 167', 'Acute Appendicitis', micro167, summer_lab03_dir, '@1815'],
	['Micro 177', 'Lung Abscess', micro177, summer_lab03_dir, '@1819'],
	['N82_12985', 'Skin Furuncle', N82_12985, summer_lab03_dir, ],
	['N70_7090B', 'Early Serosal Inflammation, Ileum', N70_7090B, summer_lab03_dir, '@1823'],
	['A65_180', 'Liver Abscess', A65_180, summer_lab03_dir, '@1817']
];

var Summer_Lab04 =
[
	['Minicase 51', 'Pulmonary Tuberculosis', minicase52, summer_lab04_dir, ],
	['Minicase 28', 'Sarcoidosis', minicase28, summer_lab04_dir, ],
	['Micro 115', 'Organizing Pneumonia', micro115, summer_lab04_dir, '@1857'],
	['Micro 166', 'Organizing Pericarditis', micro166, summer_lab04_dir, '@1860'],
	['Micro 168', 'Active Tuberculosis', micro168, summer_lab04_dir, '@1875'],
	['Micro 169', 'Miliary Tuberculosis', micro169, summer_lab04_dir, '@1877'],
	['N73-9001', 'Tuberculous Endometritis', N73_9001, summer_lab04_dir, '@4951'],
	['N64-3649', 'Foreign Body Reaction, Skin', N64_3649, summer_lab04_dir, '@4953'],
	['N71-583', 'Granulation Tissue', N71_583, summer_lab04_dir, '@4952']
];

var Summer_Lab05 =
[
	['Minicase 18', 'Pulmonary Thromboembolism', minicase18, summer_lab05_dir, ],
	['Micro 222', 'Renal Infarct, anemic', micro222, summer_lab05_dir, '@4992'],
	['Micro 137', 'Renal Infarct, red', micro137, summer_lab05_dir, '@4993'],
	['Micro 152', 'Venous Thrombosis, prostate', micro152, summer_lab05_dir, '@4994'],
	['Micro 186', 'Pulmonary Artery Embolism', micro186, summer_lab05_dir, '@5073'],
	['A82-191L', 'Splenic Infarct, anemic', A82_191L, summer_lab05_dir, '@5074'],
	['A82-44A', 'Pulmonary Infarct, hemorrhagic', A82_44A, summer_lab05_dir, '@5075'],
	['A78-181', 'Hepatic Vein Thrombosis', A78_181, summer_lab05_dir, '@5076']
];

var Summer_Lab06 =
[
	['Minicase 1', 'Polyarteritis Nodosa, kidney', minicase1, summer_lab06_dir, ],
	['Micro 136', 'Polyarteritis Nodosa, skin and adrenal', micro136, summer_lab06_dir, '@5187'],
	['A69-164J', 'Polyarteritis Nodosa, kidney', A69_164J, summer_lab06_dir, '@5188'],
	['Case 1', 'Rheumatic Heart Disease', rheumaticHD, summer_lab06_dir, ],
	['Case 2', 'Hemolytic Anemia', hemolyticAnemia, summer_lab06_dir, ],
	['Case 3', 'Rheumatoid Diseases', rheumatoidDZ, summer_lab06_dir, ],
	['Case 4', 'Multiple Sclerosis', MS, summer_lab06_dir, ],
	['Case 5', 'Systemic Lupus Erythematosis', SLE, summer_lab06_dir, ]
];

var Summer_Lab07 =
[
//	['Micro', 'title', micro1, summer_lab08_dir, ]
];

var Summer_Lab08 =
[
//	['Micro', 'title', micro1, summer_lab06_dir, ]
];


var Summer_Lab09 =
[
	['Minicase 21', 'Asbestosis', minicase21, summer_lab09_dir, ],
	['Minicase 24', 'Lead Poisoning', minicase24, summer_lab09_dir, ],
	['Minicase 53', 'Traumatic Physical Injury', minicase53, summer_lab09_dir, ],
	['A79-180EK', 'Asbestosis, Lung', A79_180EK, summer_lab09_dir, '@5077'],
	['A79-282', 'Asbestos bodies, Lung', A79_282, summer_lab09_dir, '@5078'],
	['N65-374A', 'Radioactive Foreign Body Reaction', N65_374A, summer_lab09_dir, '@5079'],
	['N78-5717B', 'Drug Induced Vaginal Adenosis', N78_5717B, summer_lab09_dir, '@5080'],
	['N79-7514', 'Drug Induced Liver Cholestasis', N79_7514, summer_lab09_dir, '@5081'],
	['A71-102', 'Wound Healing, Early', A71_102, summer_lab09_dir, '@5143']
];

var Summer_Lab10 =
[
	['Minicase 22', 'Cervical Dysplasia Evolving to Carcinoma', minicase22, summer_lab10_dir, ],
	['UH83-6741N', 'Squamous Metaplasia, cervix', UH83_6741N, summer_lab10_dir, '@5189'],
	['UH83-3417', 'Dysplasia, cervix', UH83_3417, summer_lab10_dir, '@5190'],
	['Pap Smear', 'Normal (negative)', pap_neg, summer_lab10_dir, '@5191'],
	['Pap Smear', 'Severe Displasia', pap_dys, summer_lab10_dir, '@5192'],
	['A88-98A2', 'Squamous metaplasia of bronchus, due to bronchiectasis or smoking', A88_98A2, summer_lab10_dir, '@5193']
];

var Summer_Lab11 =
[
	['Minicase 10', 'Adenocarcinoma of the Stomach)', minicase10, summer_lab11_dir, ],
	['Micro 196', 'Leiomyoma, uterus', micro196, summer_lab11_dir, '@5225'],
	['UH88-6138', 'Leiomyosarcoma, uterus', UH88_6138, summer_lab11_dir, ]
];

var Summer_Lab12 =
[
	['Minicase 9', 'Pulmonary Adenocarcinoma in a Smoker', minicase9, summer_lab12_dir, ],
	['A82-135B', 'Adenocarcinoma of the lung, well differentiated', A82_135B, summer_lab12_dir, '@5226'],
	['A85-118A', 'Adenocarcinoma of the lung, moderately differentiated', A85_118A, summer_lab12_dir, '@5228'],
	['A81-268B1', 'Adenocarcinoma of the lung, poorly differentiated', A81_268B1, summer_lab12_dir, ]
];


// YEAR I COMPONENT LABS

var summer =
[
	['Lab 01', 'Summer_Lab01', 'Laboratory check in; Ultrastructure and Histology of Cell Injury and Cell Death', Summer_Lab01],
	['Lab 02', 'Summer_Lab02', 'Histology of Cell Injury and Cell Death; Types of Necrosis', Summer_Lab02],
	['Lab 03', 'Summer_Lab03', 'Acute Inflammation', Summer_Lab03],
	['Lab 04', 'Summer_Lab04', 'Granulomatous Inflammation; Organizing Processes; Scar Formation', Summer_Lab04],
	['Lab 05', 'Summer_Lab05', 'Hemodynamic Disorders', Summer_Lab05],
	['Lab 06', 'Summer_Lab06', 'Autoimmune Processes', Summer_Lab06],
	['Lab 07', 'Summer_Lab07', 'Case Studies in Coagulation; Problem Solving', Summer_Lab07],
	['Lab 08', 'Summer_Lab08', 'Case Studies in Coagulation; Problem Solving', Summer_Lab08],
	['Lab 09', 'Summer_Lab09', 'Chemical and Physical Injury', Summer_Lab09],
	['Lab 10', 'Summer_Lab10', 'Metaplasia and Dysplasia', Summer_Lab10],
	['Lab 11', 'Summer_Lab11', 'Carcinoma: Benign vs. Malignant', Summer_Lab11],
	['Lab 12', 'Summer_Lab12', 'Adenocarcinoma:  Concepts of Stage and Grade', Summer_Lab12]
];