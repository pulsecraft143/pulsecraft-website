import os
import re

svg_template = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 50" fill="none">
  <defs>
    <!-- Primary Brand Red Gradient -->
    <linearGradient id="pcRedMain" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FF2424" />
      <stop offset="100%" stop-color="#EA0813" />
    </linearGradient>

    <!-- Left Ribbon Fold Shadow (under the upper arm) -->
    <linearGradient id="pcLeftFold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#800206" />
      <stop offset="40%" stop-color="#B8060D" />
      <stop offset="100%" stop-color="#FF2020" />
    </linearGradient>

    <!-- Right Ribbon Fold Shadow (under the upper arm) -->
    <linearGradient id="pcRightFold" x1="100%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#800206" />
      <stop offset="40%" stop-color="#B8060D" />
      <stop offset="100%" stop-color="#FF2020" />
    </linearGradient>

    <!-- Trough Fold Shadow -->
    <linearGradient id="pcTroughFold" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#8A0307" />
      <stop offset="50%" stop-color="#CC0810" />
      <stop offset="100%" stop-color="#FF2020" />
    </linearGradient>
  </defs>

  <!-- Left Chevron (<) -->
  <g id="left-chevron">
    <!-- Lower arm folding under -->
    <path
      d="M24.5 41.5 L9.5 26"
      stroke="url(#pcLeftFold)"
      stroke-width="5.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <!-- Upper arm in front -->
    <path
      d="M24.5 10.5 L9.5 26"
      stroke="url(#pcRedMain)"
      stroke-width="5.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>

  <!-- Central Pulse Line -->
  <g id="center-pulse">
    <!-- Rising recovery from trough -->
    <path
      d="M54.5 41.5 L62.5 26 H75.5"
      stroke="url(#pcTroughFold)"
      stroke-width="5.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <!-- Horizontal lead-in, sharp peak, and plunge to trough -->
    <path
      d="M23.5 26 H39 L47 6 L54.5 41.5"
      stroke="url(#pcRedMain)"
      stroke-width="5.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>

  <!-- Right Chevron (>) -->
  <g id="right-chevron">
    <!-- Lower arm folding under -->
    <path
      d="M75.5 41.5 L90.5 26"
      stroke="url(#pcRightFold)"
      stroke-width="5.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <!-- Upper arm in front -->
    <path
      d="M75.5 10.5 L90.5 26"
      stroke="url(#pcRedMain)"
      stroke-width="5.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
</svg>"""

with open(r'd:\ZappioTech\pulsecraft\public\images\logo\symbol.svg', 'w', encoding='utf-8') as f:
    f.write(svg_template)

print("Created symbol.svg successfully")
