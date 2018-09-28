export class Rover {
    name: string;
    page: number;
    landing_date: string;
    launch_date: string;
    photos: Photo[];
    cameras: string[];


    constructor(
        name: string,
        page: number,
        landing_date: string,
        launch_date: string,
        cameras: string[],
        photos: Photo[]
    ) {
        this.name = name;
        this.page = page;
        this.photos = photos;
        this.cameras = cameras;
        this.landing_date = landing_date;
        this.launch_date = launch_date;
    }
}

export interface Photo {
    id: number;
    sol: number;
    camera: string;
    img_src: string;
    earth_date: string;
}

interface stringIndexArray {
    [index: string]: string;
}
export let cameras_names = {} as stringIndexArray;
cameras_names['FHAZ'] = 'Front Hazard Avoidance Camera'; 
cameras_names['RHAZ'] = 'Rear Hazard Avoidance Camera'; 
cameras_names['MAST'] = 'Mast Camera'; 
cameras_names['CHEMCAM'] = 'Chemistry and Camera Complex'; 
cameras_names['MAHLI'] = 'Mars Hand Lens Imager'; 
cameras_names['MARDI'] = 'Mars Descent Imager'; 
cameras_names['NAVCAM'] = 'Navigation Camera'; 
cameras_names['PANCAM'] = 'Panoramic Camera'; 
cameras_names['MINITES'] = 'Miniature Thermal Emission Spectrometer (Mini-TES)	'; 


export let Curiousity: Rover = new Rover(
    "Curiousity",
    0,
    "2012-08-06",
    "2011-11-26",
    [
        'FHAZ',
        'RHAZ',
        'MAST',
        'CHEMCAM',
        'MAHLI',
        'MARDI',
        'NAVCAM',
        'PANCAM',
        'MINITES'
    ], [
        {
            id: 424905,
            sol: 1000,
            camera: "MAST",
            img_src: 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01100/opgs/edr/rcam/RRB_495148536EDR_F0492902RHAZ00311M_.JPG',
            earth_date: "2015-05-30",
        },
         {
            id: 424943,
            sol: 1000,
            camera: "MAST",
            img_src: 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01100/opgs/edr/rcam/RLB_495137826EDR_F0492626RHAZ00323M_.JPG',
            earth_date: "2015-05-30",
        },
         {
            id: 424944,
            sol: 2172,
            camera: "MAST",
            img_src: 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01100/opgs/edr/rcam/RRB_495137826EDR_F0492626RHAZ00323M_.JPG',
            earth_date: "2015-05-30",
        }
    ]
);

export let Opportunity: Rover = new Rover(
    "Opportunity",
    0,
    "2012-08-06",
    "2011-11-26",
    [
        'FHAZ',
        'RHAZ',       
        'NAVCAM',
        'PANCAM',
        'MINITES'
    ], [
        {
            id: 121537,
            sol: 1100,
            camera: "FHAZ",
            img_src: 'http://mars.nasa.gov/mer/gallery/all/1/r/1100/1R225845033EFF797SP1301R0M1-BR.JPG',
            earth_date: "2015-05-30",
        },
         {
            id: 121538,
            sol: 1100,
            camera: "FHAZ",
            img_src: 'http://mars.nasa.gov/mer/gallery/all/1/r/1100/1R225845161EFF798DP1312L0M1-BR.JPG',
            earth_date: "2015-05-30",
        },
         {
            id: 121539,
            sol: 1100,
            camera: "FHAZ",
            img_src: 'http://mars.nasa.gov/mer/gallery/all/1/r/1100/1R225845161EFF798DP1312R0M1-BR.JPG',
            earth_date: "2015-05-30",
        }
    ]
);

export let Spirit: Rover = new Rover(
    "Spirit",
    0,
    "2012-08-06",
    "2011-11-26",
    [
        'FHAZ',
        'RHAZ',       
        'NAVCAM',
        'PANCAM',
        'MINITES'
    ], [
        {
            id: 290302,
            sol: 120,
            camera: "FHAZ",
            img_src: 'http://mars.nasa.gov/mer/gallery/all/2/r/120/2R137025207EDN40DWF0006R0M1-BR.JPG',
            earth_date: "2004-05-06",
        },
         {
            id: 290304,
            sol: 120,
            camera: "FHAZ",
            img_src: 'http://mars.nasa.gov/mer/gallery/all/2/r/120/2R137025207EDN40DWF0006L0M1-BR.JPG',
            earth_date: "2004-05-06",
        },
         {
            id: 290306,
            sol: 120,
            camera: "FHAZ",
            img_src: 'http://mars.nasa.gov/mer/gallery/all/2/r/120/2R137024883EDN40DUF0006L0M1-BR.JPG',
            earth_date: "2004-05-06",
        }
    ]
);

export let rovers_info : Rover [] = [ Curiousity ,Opportunity , Spirit ]

/* Data Structure from JSON


export interface Camera {
    id: number;
    name: string;
    rover_id: number;
    full_name: string;
  }
  
  export interface Camera2 {
    name: string;
    full_name: string;
  }
  
  export interface Rover {
    id: number;
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
    max_sol: number;
    max_date: string;
    total_photos: number;
    cameras: Camera2[];
  }
  
  export interface Photo {
    id: number;
    sol: number;
    camera: Camera;
    img_src: string;
    earth_date: string;
    rover: Rover;
  }
  
  export  interface RootObject {
     photos: Photo[];
  }
  
*/