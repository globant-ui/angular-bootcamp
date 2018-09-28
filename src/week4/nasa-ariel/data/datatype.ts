declare module namespace {

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

    export interface RootObject {
        photos: Photo[];
    }

}

