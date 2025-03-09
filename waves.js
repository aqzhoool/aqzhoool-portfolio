class WaveBackground {
    constructor() {
      this.canvas = document.createElement('canvas');
      this.ctx = this.canvas.getContext('2d');
      document.body.prepend(this.canvas);
      
      this.waves = [];
      this.resize();
      this.init();
      window.addEventListener('resize', this.resize.bind(this));
    }
  
    resize() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }
  
    init() {
      // creating wave
      for(let i = 0; i < 3; i++) {
        this.waves.push({
          amplitude: 50 + Math.random() * 100,
          frequency: 0.001 + Math.random() * 0.002,
          phase: Math.random() * 2 * Math.PI,
          color: `hsl(${200 + i * 30}, 70%, 50%)`
        });
      }
      
      this.animate();
    }
  
    animate() {
      this.ctx.fillStyle = '#0a0a0a';
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  
      this.waves.forEach((wave, index) => {
        this.ctx.beginPath();
        this.ctx.moveTo(0, this.canvas.height/2);
        
        for(let x = 0; x < this.canvas.width; x++) {
          const y = this.canvas.height/2 + 
            Math.sin(x * wave.frequency + wave.phase + Date.now() * 0.001) * wave.amplitude;
          this.ctx.lineTo(x, y);
        }
  
        this.ctx.strokeStyle = wave.color;
        this.ctx.lineWidth = 2;
        this.ctx.stroke();
      });
  
      requestAnimationFrame(this.animate.bind(this));
    }
  }
  
  new WaveBackground();