<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jersey Customizer</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <style>
        [x-cloak] { display: none !important; }
        .canvas-container { margin: 0 auto !important; }
        ::-webkit-scrollbar { width: 4px; height: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #334155; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #475569; }
        
        @media (max-width: 768px) {
            #jersey-canvas { max-width: 100% !important; height: auto !important; }
            .canvas-container { width: 100% !important; height: auto !important; }
        }

        .floating-toolbar-shadow {
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.4);
        }

        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        @font-face { font-family: 'AC Milan 4th'; src: url('/assets/fonts/AC Milan 4th 23.woff2') format('woff2'); }
        @font-face { font-family: 'Brøndby IF'; src: url('/assets/fonts/Brøndby IF 25-26.woff2') format('woff2'); }
        @font-face { font-family: 'Girondins Bordeaux'; src: url('/assets/fonts/Girondins Bordeaux 25-26_Nero Design.woff2') format('woff2'); }
        @font-face { font-family: 'Iraq 2025'; src: url('/assets/fonts/Iraq 2025_Nero Design.woff2') format('woff2'); }
        @font-face { font-family: 'Osasuna 25-26'; src: url('/assets/fonts/Osasuna 25-26_NeroDesign.woff2') format('woff2'); }
        @font-face { font-family: 'PSG Fourth'; src: url('/assets/fonts/PSG Fourth 25-26_Nero Design.woff2') format('woff2'); }
        @font-face { font-family: 'Palermo FC'; src: url('/assets/fonts/Palermo FC 125 years 25-26_Nero Design.woff2') format('woff2'); }
        @font-face { font-family: 'Portugal WC 2026'; src: url('/assets/fonts/Portugal WC 2026_Nero Design.woff2') format('woff2'); }
        @font-face { font-family: 'SC Freiburg'; src: url('/assets/fonts/SC Freiburg 25-26_Nero Design.woff2') format('woff2'); }
        @font-face { font-family: 'South Africa'; src: url('/assets/fonts/South Africa 25-26_Nero Design.woff2') format('woff2'); }
        @font-face { font-family: 'Spain WC 2026'; src: url('/assets/fonts/Spain WC 2026_Nero Design.woff2') format('woff2'); }
    </style>
</head>
<body class="bg-slate-950 text-slate-100 h-screen overflow-hidden font-sans" x-data="customizer()" x-cloak>

    <!-- LOADING OVERLAY -->
    <div x-show="isLoading" 
         class="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-md flex flex-col items-center justify-center transition-all duration-500">
        <div class="relative w-24 h-24">
            <div class="absolute inset-0 border-4 border-indigo-500/20 rounded-full"></div>
            <div class="absolute inset-0 border-4 border-t-indigo-500 rounded-full animate-spin"></div>
        </div>
        <p class="mt-6 text-indigo-400 font-bold tracking-widest text-xs uppercase animate-pulse text-center">Menyiapkan Desain...</p>
    </div>
    
    <div id="app-container" class="flex flex-col md:flex-row h-full w-full overflow-hidden relative">
        
        <!-- SIDEBAR NAV -->
        <nav class="w-full md:w-20 bg-slate-900/50 backdrop-blur-xl border-t md:border-t-0 md:border-r border-slate-800 flex flex-row md:flex-col items-center py-3 md:py-6 px-4 md:px-0 gap-4 md:gap-8 z-30 order-3 md:order-1 shrink-0">
            <div class="hidden md:flex p-3 rounded-xl bg-indigo-600 shadow-lg mb-4 cursor-pointer" @click="location.reload()">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>
            </div>
            
            <div class="flex flex-row md:flex-col flex-1 justify-around md:justify-start gap-2 md:gap-6 w-full overflow-x-auto no-scrollbar">
                <template x-for="menu in menus" :key="menu.id">
                    <button @click="setActiveMenu(menu.id)" :class="activeMenu === menu.id ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/50' : 'text-slate-400 border-transparent'" class="group flex flex-col items-center gap-1 p-2 rounded-lg border transition-all min-w-[60px]">
                        <div class="p-2 rounded-lg group-hover:bg-slate-800"><span x-html="menu.icon"></span></div>
                        <span class="text-[9px] md:text-[10px] font-medium uppercase" x-text="menu.label"></span>
                    </button>
                </template>
            </div>
        </nav>

        <!-- OPTIONS PANEL -->
        <aside 
            :class="isPanelOpen ? 'md:w-80 h-1/2 md:h-full opacity-100' : 'md:w-0 h-0 md:h-full md:opacity-0 opacity-0'"
            class="relative w-full bg-slate-900 border-t md:border-t-0 md:border-r border-slate-800 flex flex-col z-20 shadow-2xl order-2 md:order-2 transition-all duration-300 overflow-hidden shrink-0"
        >
            <header class="p-4 md:p-6 border-b border-slate-800 bg-slate-900/50 flex items-center justify-between">
                <div>
                    <h2 class="text-base md:text-lg font-semibold capitalize" x-text="activeMenuLabel"></h2>
                    <p class="text-[10px] md:text-sm text-slate-500 mt-1">Konfigurasi Elemen</p>
                </div>
            </header>
            
            <div class="flex-1 overflow-y-auto p-4 md:p-6 space-y-8">
                <!-- Mockup Selection -->
                <div x-show="activeMenu === 'mockup'" x-transition class="space-y-6">
                    <label class="block text-[10px] font-medium text-slate-400 mb-4 uppercase tracking-widest">Pilih Model Mockup</label>
                    <div class="grid grid-cols-1 gap-4">
                        <template x-for="mockup in availableMockups" :key="mockup.id">
                            <button 
                                @click="setModel(mockup.id)"
                                :class="currentModel === mockup.id ? 'border-indigo-500 bg-indigo-500/5 ring-1 ring-indigo-500' : 'border-slate-800 hover:border-slate-700 bg-slate-950/30'"
                                class="w-full flex items-center gap-4 p-4 rounded-2xl border transition-all text-left group"
                            >
                                <div class="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>
                                </div>
                                <div>
                                    <h3 class="text-xs font-bold text-slate-100 uppercase tracking-wide" x-text="mockup.label"></h3>
                                    <p class="text-[10px] text-slate-500 mt-1 uppercase" x-text="mockup.id"></p>
                                </div>
                                <div x-show="currentModel === mockup.id" class="ml-auto">
                                    <div class="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
                                </div>
                            </button>
                        </template>
                    </div>
                </div>

                <!-- Color & Parts -->
                <div x-show="activeMenu === 'color'" x-transition class="space-y-8">
                    <!-- PART SELECTOR (Like Screenshot) -->
                    <div>
                        <label class="block text-[10px] font-medium text-slate-400 mb-4 uppercase tracking-widest">Pilih Bagian Jersey</label>
                        <div class="space-y-1 bg-slate-950/50 rounded-xl border border-slate-800 overflow-hidden">
                            <template x-for="part in parts" :key="'part-'+part.id">
                                <button 
                                    @click="activePart = part.id"
                                    class="w-full flex items-center justify-between p-3 hover:bg-slate-800/50 transition-colors border-b border-slate-800/50 last:border-0"
                                    :class="activePart === part.id ? 'bg-indigo-500/5 border-l-2 border-l-indigo-500' : ''"
                                >
                                    <div class="flex items-center gap-3">
                                        <div class="w-5 h-5 rounded-full border border-white/10" :style="`background-color: ${partColors[part.id]}`"></div>
                                        <span class="text-xs font-medium" :class="activePart === part.id ? 'text-indigo-300' : 'text-slate-300'" x-text="part.label"></span>
                                    </div>
                                </button>
                            </template>
                        </div>
                    </div>

                    <!-- PALETTE -->
                    <div>
                        <label class="block text-[10px] font-medium text-slate-400 mb-4 uppercase tracking-widest">Warna untuk <span class="text-indigo-400" x-text="parts.find(p => p.id === activePart)?.label"></span></label>
                        <div class="grid grid-cols-6 gap-2">
                            <template x-for="color in colors" :key="color">
                                <button @click="updatePartColor(activePart, color)" :style="`background-color: ${color}`" :class="partColors[activePart] === color ? 'ring-2 ring-indigo-500 ring-offset-2 ring-offset-slate-900 scale-110' : ''" class="w-6 h-6 md:w-8 md:h-8 rounded-full border border-white/5 transition-all"></button>
                            </template>
                            <button @click="$refs.partPicker.click()" class="w-6 h-6 md:w-8 md:h-8 rounded-full border border-white/20 bg-slate-800 flex items-center justify-center relative"><span class="text-[10px]">+</span><input type="color" x-ref="partPicker" class="absolute inset-0 opacity-0 cursor-pointer" @input="updatePartColor(activePart, $event.target.value)"></button>
                        </div>
                    </div>
                </div>

                <!-- Pattern -->
                <div x-show="activeMenu === 'pattern'" x-transition class="space-y-6">
                    <!-- PART SELECTOR FOR PATTERN (New) -->
                    <div>
                        <label class="block text-[10px] font-medium text-slate-400 mb-4 uppercase tracking-widest">Atur Motif Per Bagian</label>
                        <div class="space-y-1 bg-slate-950/50 rounded-xl border border-slate-800 overflow-hidden mb-6">
                            <template x-for="part in parts.filter(p => !['left_cuff', 'right_cuff', 'belt'].includes(p.id))" :key="'pnode-'+part.id">
                                <div 
                                    class="w-full flex items-center justify-between p-3 hover:bg-slate-800/50 transition-colors border-b border-slate-800/50 last:border-0 cursor-pointer"
                                    :class="activePatternPart === part.id ? 'bg-indigo-500/5 border-l-2 border-l-indigo-500' : ''"
                                    @click="activePatternPart = part.id"
                                >
                                    <div class="flex items-center gap-3">
                                        <div class="w-2 h-2 rounded-full" :class="partPatterns[part.id] ? 'bg-indigo-500' : 'bg-slate-700'"></div>
                                        <span class="text-xs font-medium" :class="activePatternPart === part.id ? 'text-indigo-300' : 'text-slate-300'" x-text="part.label"></span>
                                    </div>
                                    <div class="flex items-center gap-3">
                                        <button 
                                            @click.stop="togglePartPattern(part.id)"
                                            class="relative inline-flex h-4 w-7 items-center rounded-full transition-colors focus:outline-none"
                                            :class="partPatterns[part.id] ? 'bg-indigo-600' : 'bg-slate-700'"
                                        >
                                            <span 
                                                class="inline-block h-2.5 w-2.5 transform rounded-full bg-white transition-transform"
                                                :class="partPatterns[part.id] ? 'translate-x-4' : 'translate-x-0.5'"
                                            ></span>
                                        </button>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </div>

                    <!-- PATTERN GRID (Like Screenshot 1) -->
                    <div>
                        <label class="block text-[10px] font-medium text-slate-400 mb-3 uppercase tracking-widest">Pilih Motif untuk <span class="text-indigo-400" x-text="parts.find(p => p.id === activePatternPart)?.label"></span></label>
                        <div class="grid grid-cols-2 gap-3 mb-6">
                            <template x-for="p in patterns" :key="p.id">
                                <button 
                                    @click="partActivePatterns[activePatternPart] = p.id; updatePattern()" 
                                    class="group relative aspect-[4/3] bg-slate-800 rounded-xl overflow-hidden border-2 transition-all" 
                                    :class="partActivePatterns[activePatternPart] === p.id ? 'border-indigo-500 ring-2 ring-indigo-500/20' : 'border-slate-800'"
                                >
                                    <img :src="p.url" class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity">
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div class="absolute bottom-2 left-2 text-[9px] font-bold text-white uppercase truncate pr-2" x-text="p.name"></div>
                                </button>
                            </template>
                        </div>
                        
                        <!-- Pattern Color -->
                        <label class="block text-[10px] font-medium text-slate-400 mb-3 uppercase tracking-widest">Warna Motif</label>
                        <div class="grid grid-cols-6 gap-2">
                            <template x-for="color in colors" :key="'p'+color">
                                <button @click="updatePatternColor(color)" :style="`background-color: ${color}`" :class="patternColor === color ? 'ring-2 ring-indigo-500 ring-offset-2 ring-offset-slate-900 scale-110' : ''" class="w-6 h-6 rounded-full border border-white/5 transition-all"></button>
                            </template>
                            <button @click="$refs.patternPicker.click()" class="w-6 h-6 rounded-full border border-white/20 bg-slate-800 flex items-center justify-center relative"><span class="text-[10px]">+</span><input type="color" x-ref="patternPicker" class="absolute inset-0 opacity-0 cursor-pointer" @input="updatePatternColor($event.target.value)"></button>
                        </div>
                    </div>

                    <!-- SCALE & ANGLE & FLIP -->
                    <div class="space-y-6 pt-4 border-t border-slate-800">
                        <div class="grid grid-cols-2 gap-4">
                            <div class="space-y-3">
                                <label class="text-[10px] font-medium text-slate-400 uppercase tracking-widest">Scale: <span class="text-indigo-400" x-text="Number(partPatternScales[activePatternPart] || 1).toFixed(1)"></span></label>
                                <input type="range" min="0.5" max="8" step="0.1" x-model.number="partPatternScales[activePatternPart]" @input="updatePatternScale($event.target.value)" class="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500">
                            </div>
                            <div class="space-y-3">
                                <label class="text-[10px] font-medium text-slate-400 uppercase tracking-widest">Angle: <span class="text-indigo-400" x-text="partPatternAngles[activePatternPart]"></span>°</label>
                                <input type="range" min="0" max="360" step="1" x-model="partPatternAngles[activePatternPart]" @input="updatePatternAngle($event.target.value)" class="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500">
                            </div>
                        </div>

                        <div class="flex gap-2">
                            <button 
                                @click="updatePatternFlip('X')"
                                :class="partPatternFlipX[activePatternPart] ? 'bg-indigo-600 border-indigo-500' : 'bg-slate-800 border-slate-700'"
                                class="flex-1 py-2 rounded-xl border flex items-center justify-center gap-2 text-[10px] font-bold uppercase transition-all"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18"/><path d="m15 15 3-3-3-3"/><path d="m9 9-3 3 3 3"/></svg>
                                Flip H
                            </button>
                            <button 
                                @click="updatePatternFlip('Y')"
                                :class="partPatternFlipY[activePatternPart] ? 'bg-indigo-600 border-indigo-500' : 'bg-slate-800 border-slate-700'"
                                class="flex-1 py-2 rounded-xl border flex items-center justify-center gap-2 text-[10px] font-bold uppercase transition-all"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h18"/><path d="m9 15 3 3 3-3"/><path d="m15 9-3-3-3 3"/></svg>
                                Flip V
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Logo -->
                <div x-show="activeMenu === 'logo'" x-transition>
                    <div @click="$refs.logoInput.click()" class="border-2 border-dashed border-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-indigo-500/50 transition-colors">
                        <span class="text-xs font-medium text-slate-300">Upload Logo Baru</span>
                        <input type="file" x-ref="logoInput" class="hidden" @change="handleLogoUpload($event)" accept="image/*">
                    </div>
                </div>

                <!-- Unified Text Panel -->
                <div x-show="activeMenu === 'text'" x-transition class="space-y-6">
                    <div>
                        <label class="block text-[10px] font-medium text-slate-400 mb-3 uppercase tracking-widest">Input Teks</label>
                        <div class="flex gap-2">
                            <input type="text" x-model="textInput" @input="updateTextProperty('textInput', $event.target.value)" class="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 text-sm focus:border-indigo-500 focus:outline-none" placeholder="Ketik teks...">
                            <button @click="addText()" class="bg-indigo-600 hover:bg-indigo-500 text-white p-3 rounded-xl transition-all shadow-lg shadow-indigo-600/20">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                            </button>
                        </div>
                    </div>

                    <!-- Fonts -->
                    <div>
                        <label class="block text-[10px] font-medium text-slate-400 mb-3 uppercase tracking-widest">Pilihan Font</label>
                        <div class="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto pr-1 no-scrollbar">
                            <template x-for="f in availableFonts" :key="f.id">
                                <button 
                                    @click="updateFont('activeFont', f.id)"
                                    :class="activeFont === f.id ? 'border-indigo-500 bg-indigo-500/10' : 'border-slate-800 hover:border-slate-700 bg-slate-950/30'"
                                    class="p-2 border rounded-lg transition-all text-center group"
                                >
                                    <div class="text-sm text-slate-100 truncate" :style="`font-family: '${f.id}'`" x-text="'Abc 123'"></div>
                                    <div class="text-[8px] text-slate-500 mt-1 uppercase" x-text="f.name"></div>
                                </button>
                            </template>
                        </div>
                    </div>

                    <!-- Colors -->
                    <div>
                        <label class="block text-[10px] font-medium text-slate-400 mb-3 uppercase tracking-widest">Warna Teks</label>
                        <div class="grid grid-cols-6 gap-2">
                            <template x-for="color in colors" :key="'text'+color">
                                <button @click="updateTextProperty('activeColor', color)" :style="`background-color: ${color}`" :class="activeColor === color ? 'ring-2 ring-indigo-500 ring-offset-2 ring-offset-slate-900 scale-110' : ''" class="w-6 h-6 rounded-full border border-white/5 transition-all"></button>
                            </template>
                            <button @click="$refs.textPicker.click()" class="w-6 h-6 rounded-full border border-white/20 bg-slate-800 flex items-center justify-center relative"><span class="text-[10px]">+</span><input type="color" x-ref="textPicker" class="absolute inset-0 opacity-0 cursor-pointer" @input="updateTextProperty('activeColor', $event.target.value)"></button>
                        </div>
                    </div>

                    <!-- Advanced Typography -->
                    <div class="space-y-5 pt-4 border-t border-slate-800">
                        <div class="space-y-3">
                            <div class="flex justify-between">
                                <label class="text-[10px] font-medium text-slate-400 uppercase tracking-widest">Ukuran: <span class="text-indigo-400" x-text="textFontSize"></span>px</label>
                            </div>
                            <input type="range" min="10" max="250" step="1" x-model.number="textFontSize" @input="updateTextProperty('textFontSize', $event.target.value)" class="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500">
                        </div>
                        
                        <div class="space-y-3">
                            <div class="flex justify-between">
                                <label class="text-[10px] font-medium text-slate-400 uppercase tracking-widest">Jarak Huruf: <span class="text-indigo-400" x-text="textCharSpacing"></span></label>
                            </div>
                            <input type="range" min="-100" max="1000" step="10" x-model.number="textCharSpacing" @input="updateTextProperty('textCharSpacing', $event.target.value)" class="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500">
                        </div>

                        <div class="space-y-3">
                            <div class="flex justify-between">
                                <label class="text-[10px] font-medium text-slate-400 uppercase tracking-widest">Lengkungan: <span class="text-indigo-400" x-text="textArc"></span></label>
                            </div>
                            <input type="range" min="-300" max="300" step="1" x-model.number="textArc" @input="updateTextProperty('textArc', $event.target.value)" class="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500">
                        </div>
                    </div>
                </div>
            </div>

            <footer class="p-4 md:p-6 border-t border-slate-800 bg-slate-900/50 mt-auto">
                <button class="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 md:py-4 rounded-xl shadow-lg shadow-indigo-600/30 text-sm md:text-base transition-all">SAVE DESAIN</button>
            </footer>
        </aside>

        <!-- MAIN STAGE -->
        <main class="flex-1 bg-slate-100 relative flex flex-col items-center justify-center p-4 min-h-[350px] order-1 md:order-3">
            <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>

            <!-- VIEW SELECTOR -->
            <div class="absolute top-6 left-1/2 -translate-x-1/2 z-40">
                <div class="bg-white/80 backdrop-blur-md p-1 rounded-2xl border border-slate-200 shadow-xl flex gap-1">
                    <template x-for="v in [
                        {id: 'front', label: 'Depan'},
                        {id: 'back', label: 'Belakang'},
                        {id: 'pants', label: 'Celana'}
                    ]" :key="v.id">
                        <button 
                            @click="setView(v.id)"
                            :class="currentView === v.id ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 'text-slate-600 hover:bg-slate-100'"
                            class="px-5 py-2 rounded-xl text-xs font-bold transition-all uppercase tracking-wider"
                            x-text="v.label"
                        ></button>
                    </template>
                </div>
            </div>
            
            <!-- HISTORY & ZOOM CONTROLS -->
            <div class="absolute bottom-6 right-6 z-40 flex flex-col gap-4">
                <div class="flex flex-col gap-2">
                    <button @click="undo()" :disabled="undoStack.length <= 1" class="w-10 h-10 bg-slate-800 text-slate-100 rounded-lg flex items-center justify-center hover:bg-indigo-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-xl" title="Undo (Ctrl+Z)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7v6h6"/><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"/></svg>
                    </button>
                    <button @click="redo()" :disabled="redoStack.length === 0" class="w-10 h-10 bg-slate-800 text-slate-100 rounded-lg flex items-center justify-center hover:bg-indigo-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-xl" title="Redo (Ctrl+Shift+Z)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 7v6h-6"/><path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3L21 13"/></svg>
                    </button>
                </div>

                <div class="flex flex-col gap-2">
                    <button @click="zoom(0.2)" class="w-10 h-10 bg-slate-800 text-white rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-colors shadow-xl text-xl font-bold">+</button>
                    <button @click="zoom(-0.2)" class="w-10 h-10 bg-slate-800 text-white rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-colors shadow-xl text-xl font-bold">-</button>
                    <button @click="resetZoom()" class="px-3 h-10 bg-rose-600 text-white rounded-lg flex items-center justify-center hover:bg-rose-500 transition-colors shadow-xl text-[10px] font-bold uppercase tracking-widest leading-none">Reset</button>
                </div>
            </div>

            <div class="relative bg-white/50 rounded-[1.5rem] md:rounded-[2.5rem] p-4 md:p-12 backdrop-blur-md border border-slate-300 shadow-2xl w-full max-w-[600px] aspect-square flex items-center justify-center transition-all">
                
                <!-- FLOATING CONTEXT TOOLBAR -->
                <div 
                    x-show="showToolbar" 
                    x-transition:enter="transition ease-out duration-200"
                    x-transition:enter-start="opacity-0 scale-95 translate-y-2"
                    x-transition:enter-end="opacity-100 scale-100 translate-y-0"
                    class="absolute z-[60] bg-slate-900/90 backdrop-blur-xl border border-slate-700 rounded-full flex items-center gap-1 p-1.5 floating-toolbar-shadow pointer-events-auto"
                    :style="`top: ${toolbarPos.top}px; left: ${toolbarPos.left}px; transform: translateX(-50%);`"
                    @mousedown.stop
                >
                    <button @click="duplicateSelected()" class="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-colors group relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                        <span class="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-[8px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Salin</span>
                    </button>
                    
                    <div class="w-[1px] h-4 bg-slate-700 mx-1"></div>

                    <button @click="flipObject('X')" class="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-colors group relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18"/><path d="m15 15 3-3-3-3"/><path d="m9 9-3 3 3 3"/></svg>
                        <span class="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-[8px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Flip H</span>
                    </button>

                    <button @click="flipObject('Y')" class="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-colors group relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h18"/><path d="m9 15 3 3 3-3"/><path d="m15 9-3-3-3 3"/></svg>
                        <span class="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-[8px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Flip V</span>
                    </button>
                    
                    <div class="w-[1px] h-4 bg-slate-700 mx-1"></div>
                    
                    <button @click="deleteSelected()" class="p-2 text-slate-400 hover:text-rose-400 hover:bg-rose-400/10 rounded-full transition-colors group relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
                        <span class="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-[8px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Hapus</span>
                    </button>
                </div>

                <div class="w-full h-full flex items-center justify-center overflow-hidden rounded-xl">
                    <canvas id="jersey-canvas" width="600" height="600" class="rounded-xl"></canvas>
                </div>
            </div>
        </main>
    </div>

</body>
</html>