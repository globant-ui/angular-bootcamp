import { Rover, Camera } from './rover';

export interface Photo {
    id: number;
    sol: number;
    camera: Camera;
    img_src: string;
    earth_date: string;
    rover: Rover;
}
