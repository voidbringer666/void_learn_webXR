import * as THREE from '../../libs/three/three.module.js';
import { OrbitControls } from '../../libs/three/jsm/OrbitControls.js';

class App{
	constructor(){
		const container = document.createElement( 'div' );
		document.body.appendChild( container );
    
        this.camera = new THREE.PerspectiveCamera( 60, window.innerWidth/window.innerHeight, 0.1, 100);
        this.camera.position.set(0,0,4);
        
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color( 0xaaaaaa );
        
        this.renderer = new THREEWebGLRenderer({ antialias:true } );
        this.renderer.setPixelRatio( window.devicePixelRatio );
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        container.appendChild( this.renderer.domElement);
        
        this.renderer.set.AnimationLoop( this.render.bind(this));
        
        const geometry = new THREE.BoxBufferGeometry();
        const material = new THREE.MeshStandartMaterial({ color: 0xff0000 });
        
        this.mesh = new THREE.mesh( geometry, material );
        this.scene.add( this.mesh );
        
        window.addEventListener('resize', this.resize.bind(this) );
	}	
    
    resize(){
        
    }
    
	render( ) {  
        this.mesh.rotateY( 0.01 );
        this.renderer.render(this.scene, this.camera)
    }
}

export { App };