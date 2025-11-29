import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'amp-generator',
    templateUrl: './generator.component.html',
    styleUrl: './generator.component.css'
})

export class GeneratorComponent implements OnInit {

  messages = [
    "AAA... namesti gi nekako...",
    "Na pauza sme",
    "kruna..2?",
    "Pojma nemam iskreno",
    "$100 prvo"
  ];

  gradients = [
    "linear-gradient(135deg, #ff9a9e, #fad0c4)",
    "linear-gradient(135deg, #a18cd1, #fbc2eb)",
    "linear-gradient(135deg, #fbc2eb, #a6c1ee)",
    "linear-gradient(135deg, #fda085, #f6d365)",
    "linear-gradient(135deg, #84fab0, #8fd3f4)"
  ];

  currentMessage = this.messages[0];
  currentGradient = this.gradients[0];

  private gradientIndex = 0;

  ngOnInit(): void {
      this.currentMessage = this.messages[Math.floor(Math.random() * this.messages.length)];
    setInterval(() => {
      this.gradientIndex = (this.gradientIndex + 1) % this.gradients.length;
      this.currentGradient = this.gradients[this.gradientIndex];
    }, 3000);
  }
}