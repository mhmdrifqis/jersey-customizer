export default () => ({
    activeMenu: 'mockup',
    currentModel: 'v-neck-short',
    currentView: 'front', // 'front', 'back', 'pants'

    availableMockups: [
        {
            id: 'v-neck-short',
            label: 'V-Neck Short Sleeve',
            parts: {
                front: ['body', 'collar', 'left_sleeve', 'right_sleeve', 'left_cuff', 'right_cuff'],
                back: ['body', 'collar', 'left_sleeve', 'right_sleeve', 'left_cuff', 'right_cuff'],
                pants: ['left', 'right', 'belt', 'list1', 'list2']
            }
        },
        {
            id: 'v-neck combination-short',
            label: 'V-Neck Combination',
            parts: {
                front: ['body', 'collar', 'collar1', 'left_sleeve', 'right_sleeve', 'left_cuff', 'right_cuff'],
                back: ['body', 'collar', 'left_sleeve', 'right_sleeve', 'left_cuff', 'right_cuff'],
                pants: ['left', 'right', 'belt', 'list1', 'list2']
            }
        },
        {
            id: 'o-neck-short',
            label: 'O-Neck Short Sleeve',
            parts: {
                front: ['body', 'collar', 'left_sleeve', 'right_sleeve', 'left_cuff', 'right_cuff'],
                back: ['body', 'collar', 'left_sleeve', 'right_sleeve', 'left_cuff', 'right_cuff'],
                pants: ['left', 'right', 'belt', 'list1', 'list2']
            }
        }
    ],

    // Labels for all possible parts
    partLabels: {
        body: 'Badan',
        left_sleeve: 'Lengan Kiri',
        right_sleeve: 'Lengan Kanan',
        left_cuff: 'Cuff Kiri',
        right_cuff: 'Cuff Kanan',
        collar: 'Kerah',
        collar1: 'Kerah 1',
        left: 'Celana Kiri',
        right: 'Celana Kanan',
        belt: 'Pinggang/Sabuk',
        list1: 'List 1',
        list2: 'List 2'
    },

    // VIEW STATES (Independent for Front, Back, Pants)
    viewStates: {
        front: {
            partColors: { body: '#ffffff', left_sleeve: '#ffffff', right_sleeve: '#ffffff', left_cuff: '#ffffff', right_cuff: '#ffffff', collar: '#ffffff', collar1: '#ffffff' },
            partPatterns: { body: false, left_sleeve: false, right_sleeve: false, collar: false, collar1: false, left_cuff: false, right_cuff: false },
            partPatternScales: { body: 1, left_sleeve: 1, right_sleeve: 1, collar: 1, collar1: 1, left_cuff: 1, right_cuff: 1 },
            partPatternAngles: { body: 0, left_sleeve: 0, right_sleeve: 0, collar: 0, collar1: 0, left_cuff: 0, right_cuff: 0 },
            partPatternFlipX: { body: false, left_sleeve: false, right_sleeve: false, collar: false, collar1: false, left_cuff: false, right_cuff: false },
            partPatternFlipY: { body: false, left_sleeve: false, right_sleeve: false, collar: false, collar1: false, left_cuff: false, right_cuff: false },
            partActivePatterns: { body: null, left_sleeve: null, right_sleeve: null, collar: null, collar1: null, left_cuff: null, right_cuff: null },
            partPatternColors: { body: '#000000', left_sleeve: '#000000', right_sleeve: '#000000', collar: '#000000', collar1: '#000000', left_cuff: '#000000', right_cuff: '#000000' }
        },
        back: {
            partColors: { body: '#ffffff', left_sleeve: '#ffffff', right_sleeve: '#ffffff', left_cuff: '#ffffff', right_cuff: '#ffffff', collar: '#ffffff', collar1: '#ffffff' },
            partPatterns: { body: false, left_sleeve: false, right_sleeve: false, collar: false, collar1: false, left_cuff: false, right_cuff: false },
            partPatternScales: { body: 1, left_sleeve: 1, right_sleeve: 1, collar: 1, collar1: 1, left_cuff: 1, right_cuff: 1 },
            partPatternAngles: { body: 0, left_sleeve: 0, right_sleeve: 0, collar: 0, collar1: 0, left_cuff: 0, right_cuff: 0 },
            partPatternFlipX: { body: false, left_sleeve: false, right_sleeve: false, collar: false, collar1: false, left_cuff: false, right_cuff: false },
            partPatternFlipY: { body: false, left_sleeve: false, right_sleeve: false, collar: false, collar1: false, left_cuff: false, right_cuff: false },
            partActivePatterns: { body: null, left_sleeve: null, right_sleeve: null, collar: null, collar1: null, left_cuff: null, right_cuff: null },
            partPatternColors: { body: '#000000', left_sleeve: '#000000', right_sleeve: '#000000', collar: '#000000', collar1: '#000000', left_cuff: '#000000', right_cuff: '#000000' }
        },
        pants: {
            partColors: { left: '#ffffff', right: '#ffffff', belt: '#ffffff', list1: '#ffffff', list2: '#ffffff' },
            partPatterns: { left: false, right: false, belt: false, list1: false, list2: false },
            partPatternScales: { left: 1, right: 1, belt: 1, list1: 1, list2: 1 },
            partPatternAngles: { left: 0, right: 0, belt: 0, list1: 0, list2: 0 },
            partPatternFlipX: { left: false, right: false, belt: false, list1: false, list2: false },
            partPatternFlipY: { left: false, right: false, belt: false, list1: false, list2: false },
            partActivePatterns: { left: null, right: null, belt: null, list1: null, list2: null },
            partPatternColors: { left: '#000000', right: '#000000', belt: '#000000', list1: '#000000', list2: '#000000' }
        }
    },

    // Getters for active view state
    get activeState() { return this.viewStates[this.currentView]; },
    get partColors() { return this.activeState.partColors; },
    get partPatterns() { return this.activeState.partPatterns; },
    get partPatternScales() { return this.activeState.partPatternScales; },
    get partPatternAngles() { return this.activeState.partPatternAngles; },
    get partPatternFlipX() { return this.activeState.partPatternFlipX; },
    get partPatternFlipY() { return this.activeState.partPatternFlipY; },
    get partActivePatterns() { return this.activeState.partActivePatterns; },
    get partPatternColors() { return this.activeState.partPatternColors; },
    get patternColor() { return this.partPatternColors[this.activePatternPart] || '#000000'; },

    // Dynamic parts based on LOADED layers
    get parts() {
        const availableParts = [];
        const potentialParts = this.currentView === 'pants'
            ? ['left', 'right', 'belt', 'list1', 'list2']
            : ['body', 'left_sleeve', 'right_sleeve', 'left_cuff', 'right_cuff', 'collar', 'collar1'];

        potentialParts.forEach(pid => {
            if (this.layers[pid]) {
                availableParts.push({ id: pid, label: this.partLabels[pid] || pid });
            }
        });
        return availableParts;
    },

    activePart: 'body',
    activePatternPart: 'body',

    availableFonts: [
        { id: 'sans-serif', name: 'Standard' },
        { id: 'AC Milan 4th', name: 'AC Milan' },
        { id: 'Brøndby IF', name: 'Brøndby' },
        { id: 'Girondins Bordeaux', name: 'Bordeaux' },
        { id: 'Iraq 2025', name: 'Iraq' },
        { id: 'Osasuna 25-26', name: 'Osasuna' },
        { id: 'PSG Fourth', name: 'PSG' },
        { id: 'Palermo FC', name: 'Palermo' },
        { id: 'Portugal WC 2026', name: 'Portugal' },
        { id: 'SC Freiburg', name: 'Freiburg' },
        { id: 'South Africa', name: 'South Africa' },
        { id: 'Spain WC 2026', name: 'Spain' }
    ],

    // UNIVERSAL TEXT STATE
    textInput: '',
    activeFont: 'sans-serif',
    activeColor: '#000000ff',
    textFontSize: 40,
    textCharSpacing: 0,
    textArc: 0,

    isLoading: true,
    isPanelOpen: true,
    currentZoom: 1,
    showToolbar: false,
    toolbarPos: { top: 0, left: 0 },
    undoStack: [],
    redoStack: [],
    isHistoryAction: false,

    menus: [
        { id: 'mockup', label: 'Mockup', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>' },
        { id: 'color', label: 'Warna', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="M2 12h2"/><path d="m4.93 19.07 1.41-1.41"/><path d="M12 20v2"/><path d="m17.66 17.66 1.41 1.41"/><path d="M20 12h2"/><path d="m17.66 6.34 1.41-1.41"/><circle cx="12" cy="12" r="4"/></svg>' },
        { id: 'pattern', label: 'Motif', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>' },
        { id: 'text', label: 'Teks', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></svg>' },
        { id: 'logo', label: 'Logo', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>' }
    ],

    colors: ['#ffffff', '#000000', '#ef4444', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#475569', '#1e293b'],
    patterns: [
        { id: 'p1', name: 'Motif 1', url: '/assets/patterns/pattern1.png' },
        { id: 'p2', name: 'Motif 2', url: '/assets/patterns/pattern2.png' },
        { id: 'p3', name: 'Motif 3', url: '/assets/patterns/pattern3.png' },
        { id: 'p4', name: 'Motif 4', url: '/assets/patterns/pattern4.png' },
        { id: 'p5', name: 'Motif 5', url: '/assets/patterns/pattern5.png' },
        { id: 'p6', name: 'Motif 6', url: '/assets/patterns/pattern6.png' },
        { id: 'p7', name: 'Motif 7', url: '/assets/patterns/pattern7.png' },
        { id: 'p8', name: 'Motif 8', url: '/assets/patterns/pattern8.png' },
        { id: 'p9', name: 'Motif 9', url: '/assets/patterns/pattern9.png' },
        { id: 'p10', name: 'Motif 10', url: '/assets/patterns/pattern10.png' }
    ],
    layers: { shadows: null, highlights: null },
    designObjects: [],
    canvas: null,

    get activeMenuLabel() { return this.menus.find(m => m.id === this.activeMenu)?.label || ''; },

    init() {
        this.$nextTick(() => {
            this.initCanvas().catch(err => {
                console.error('Initialization failed:', err);
                this.isLoading = false;
            });
            window.addEventListener('resize', () => this.resizeCanvas());
            window.addEventListener('keydown', (e) => {
                if ((e.ctrlKey || e.metaKey) && e.key === 'z') { e.preventDefault(); if (e.shiftKey) this.redo(); else this.undo(); }
                if ((e.key === 'Delete' || e.key === 'Backspace') && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) { this.deleteSelected(); }
            });
        });
    },

    async initCanvas() {
        try {
            if (!window.fabric) throw new Error('Fabric.js not found!');
            this.canvas = new window.fabric.Canvas('jersey-canvas', {
                preserveObjectStacking: true, backgroundColor: 'transparent',
                width: 600, height: 600, targetFindTolerance: 10, perPixelTargetFind: true
            });

            this.resizeCanvas();
            await this.loadInitialLayers();
            this.saveHistory();
            this.setupZoomEvents();
            this.setupToolbarEvents();
            this.setupHistoryEvents();
            this.isLoading = false;
        } catch (error) { console.error('Error in initCanvas:', error); this.isLoading = false; }
    },

    setupHistoryEvents() {
        this.canvas.on('object:modified', () => { if (this.isHistoryAction) return; this.saveHistory(); });
        this.canvas.on('object:added', (e) => {
            if (this.isHistoryAction || e.target.isSystemLayer) return;
            this.saveHistory();
        });
        this.canvas.on('object:removed', (e) => {
            if (this.isHistoryAction || e.target.isSystemLayer) return;
            this.saveHistory();
        });
    },

    saveHistory() {
        if (this.isHistoryAction) return;
        const state = {
            viewStates: JSON.parse(JSON.stringify(this.viewStates)),
            textState: { input: this.textInput, font: this.activeFont, color: this.activeColor, size: this.textFontSize, spacing: this.textCharSpacing, arc: this.textArc },
            designObjects: this.designObjects.map(obj => obj.toObject(['clipPath', 'isSystemLayer', 'view', 'arc'])),
            currentModel: this.currentModel,
            currentView: this.currentView
        };
        this.undoStack.push(JSON.stringify(state));
        if (this.undoStack.length > 25) this.undoStack.shift();
        this.redoStack = [];
    },

    async undo() {
        if (this.undoStack.length <= 1) return;
        const currentStateStr = this.undoStack.pop();
        this.redoStack.push(currentStateStr);
        const prevState = JSON.parse(this.undoStack[this.undoStack.length - 1]);
        await this.applyState(prevState);
    },

    async redo() {
        if (this.redoStack.length === 0) return;
        const nextStateStr = this.redoStack.pop();
        // Save the remaining redo stack before applyState can clear it
        const savedRedoStack = [...this.redoStack];
        this.undoStack.push(nextStateStr);
        await this.applyState(JSON.parse(nextStateStr));
        // Restore redo stack (applyState -> loadInitialLayers/updatePattern -> saveHistory clears it)
        this.redoStack = savedRedoStack;
    },

    async applyState(state) {
        this.isHistoryAction = true;
        this.isLoading = true;
        this.viewStates = state.viewStates;
        this.textInput = state.textState.input;
        this.activeFont = state.textState.font;
        this.activeColor = state.textState.color;
        this.textFontSize = state.textState.size;
        this.textCharSpacing = state.textState.spacing;
        this.textArc = state.textState.arc;
        this.currentModel = state.currentModel;
        this.currentView = state.currentView;

        const fabric = window.fabric;
        const objects = await fabric.util.enlivenObjects(state.designObjects);
        this.designObjects = objects;

        await this.loadInitialLayers();
        await this.updatePattern();
        this.renderLayers();
        this.isHistoryAction = false;
        this.isLoading = false;
    },

    setupToolbarEvents() {
        this.canvas.on({
            'selection:created': (e) => this.syncUI(e),
            'selection:updated': (e) => this.syncUI(e),
            'selection:cleared': () => { this.showToolbar = false; },
            'object:moving': (e) => this.updateToolbar(e),
            'object:scaling': (e) => this.updateToolbar(e),
            'object:rotating': (e) => this.updateToolbar(e)
        });
    },

    syncUI(e) {
        this.updateToolbar(e);
        const obj = e.selected[0];
        if (obj && (obj.type === 'text' || obj.type === 'i-text')) {
            this.activeMenu = 'text';
            this.isPanelOpen = true;
            this.textInput = obj.text;
            this.activeFont = obj.fontFamily;
            this.activeColor = obj.fill;
            this.textFontSize = obj.fontSize;
            this.textCharSpacing = obj.charSpacing;
            this.textArc = obj.arc || 0;
            this.resizeCanvas();
        }
    },

    async setModel(modelId) {
        if (this.currentModel === modelId) return;
        this.isLoading = true; this.currentModel = modelId;
        const wasHistoryAction = this.isHistoryAction;
        this.isHistoryAction = true;
        await this.loadInitialLayers(); await this.updatePattern(); this.renderLayers();
        this.isHistoryAction = wasHistoryAction;
        this.isLoading = false; this.saveHistory();
    },

    async setView(view) {
        if (this.currentView === view) return;
        this.isLoading = true; this.currentView = view;

        // Dynamic active part selection based on what exists in the new view
        const mockup = this.availableMockups.find(m => m.id === this.currentModel);
        const viewParts = mockup?.parts[view] || [];

        if (view === 'pants') {
            this.activePart = viewParts.includes('left') ? 'left' : viewParts[0];
        } else {
            this.activePart = viewParts.includes('body') ? 'body' : viewParts[0];
        }
        this.activePatternPart = this.activePart;

        const wasHistoryAction = this.isHistoryAction;
        this.isHistoryAction = true;
        await this.loadInitialLayers(); await this.updatePattern(); this.renderLayers();
        this.isHistoryAction = wasHistoryAction;
        this.isLoading = false;
    },

    async loadInitialLayers() {
        const assetPath = `/assets/mockups/${this.currentModel}/${this.currentView}/`;

        // Clean up previous layers to avoid "ghost" layers from previous mockups
        const oldLayers = Object.keys(this.layers);
        oldLayers.forEach(key => {
            if (this.layers[key] && key !== 'partPatterns') {
                if (this.canvas) this.canvas.remove(this.layers[key]);
                this.layers[key] = null;
            }
        });

        this.layers = { shadows: null, highlights: null, partPatterns: this.layers.partPatterns || {} };

        try {
            const mockup = this.availableMockups.find(m => m.id === this.currentModel);
            const potentialPartIds = mockup?.parts[this.currentView] || (this.currentView === 'pants'
                ? ['left', 'right', 'belt', 'list1', 'list2']
                : ['body', 'left_sleeve', 'right_sleeve', 'left_cuff', 'right_cuff', 'collar']);

            // Load actual layers
            for (const pid of potentialPartIds) {
                const layer = await this.loadImage(assetPath + pid + '.png', { isSystemLayer: true, selectable: false, evented: false });
                if (layer) this.layers[pid] = layer;
            }

            // Load shadows & highlights (always expected)
            this.layers.shadows = await this.loadImage(assetPath + 'shadows.png', { isSystemLayer: true, selectable: false, evented: false, globalCompositeOperation: 'multiply' });
            this.layers.highlights = await this.loadImage(assetPath + 'highlights.png', { isSystemLayer: true, selectable: false, evented: false, globalCompositeOperation: 'screen' });

            // Re-apply colors to new layers
            Object.keys(this.layers).forEach(pid => {
                if (this.partColors.hasOwnProperty(pid) && this.layers[pid]) {
                    this.applyFilterToLayer(pid, this.partColors[pid]);
                }
            });

            this.renderLayers();
        } catch (err) { console.error('Error loading layers:', err); }
    },

    async applyFilterToLayer(partId, color) {
        const layer = this.layers[partId];
        if (!layer || !window.fabric) return;

        // Use 'multiply' for better color accuracy on white fabric
        layer.filters = [new window.fabric.filters.BlendColor({
            color: color,
            mode: 'multiply',
            alpha: 1
        })];
        layer.applyFilters();
    },

    async updatePartColor(partId, color, saveHistory = true) {
        if (!this.partColors || !this.partColors.hasOwnProperty(partId)) return;
        this.partColors[partId] = color;
        await this.applyFilterToLayer(partId, color);
        if (this.canvas) this.canvas.renderAll();
        if (saveHistory) this.saveHistory();
    },

    async updatePatternColor(color) {
        const pid = this.activePatternPart;
        this.activeState.partPatternColors[pid] = color;

        let hasUpdated = false;
        if (this.layers.partPatterns && this.layers.partPatterns[pid]) {
            const pLayer = this.layers.partPatterns[pid];
            if (pLayer && window.fabric) {
                // 'add' mode works on dark/black pixels: adds color value to each pixel channel
                pLayer.filters = [new window.fabric.filters.BlendColor({
                    color: color,
                    mode: 'add',
                    alpha: 1
                })];
                pLayer.applyFilters();
                hasUpdated = true;
                if (this.canvas) this.canvas.renderAll();
            }
        }

        if (!hasUpdated) {
            // If the specific pattern layer wasn't found (e.g. not created yet), update full pattern
            await this.updatePattern();
        }

        if (!this.isHistoryAction) this.saveHistory();
    },

    async updatePattern() {
        this.isLoading = true;

        // Clear existing pattern layers from canvas and memory
        if (this.layers.partPatterns) {
            Object.values(this.layers.partPatterns).forEach(p => {
                if (p && this.canvas) this.canvas.remove(p);
            });
        }
        this.layers.partPatterns = {};

        for (const pid of Object.keys(this.partPatterns)) {
            const patternId = this.partActivePatterns[pid];
            const isEnabled = this.partPatterns[pid];
            const patternObj = this.patterns.find(p => p.id === patternId);
            if (!isEnabled || !patternObj || !this.layers[pid]) { this.layers.partPatterns[pid] = null; continue; }

            const maskLayer = await this.layers[pid].clone(['isSystemLayer']);
            const maskGroup = new window.fabric.Group([maskLayer], { absolutePositioned: true, originX: 'center', originY: 'center', left: 300, top: 300 });

            const pLayer = await this.loadImage(patternObj.url, {
                selectable: false, evented: false, isSystemLayer: true, clipPath: maskGroup,
                scaleX: this.partPatternScales[pid] || 1, scaleY: this.partPatternScales[pid] || 1,
                angle: this.partPatternAngles[pid] || 0, flipX: this.partPatternFlipX[pid] || false, flipY: this.partPatternFlipY[pid] || false
            });

            if (pLayer) {
                // Use the specific color for THIS part
                const pColor = this.activeState.partPatternColors[pid] || '#000000';
                pLayer.filters = [new window.fabric.filters.BlendColor({
                    color: pColor,
                    mode: 'add',
                    alpha: 1
                })];
                pLayer.applyFilters();
            }
            this.layers.partPatterns[pid] = pLayer;
        }
        this.renderLayers(); this.isLoading = false; if (!this.isHistoryAction) this.saveHistory();
    },

    flipObject(axis) {
        const obj = this.canvas.getActiveObject();
        if (!obj) return;
        if (axis === 'X') obj.set('flipX', !obj.flipX); else obj.set('flipY', !obj.flipY);
        this.canvas.requestRenderAll(); this.saveHistory();
    },

    updatePatternFlip(axis) {
        const pid = this.activePatternPart;
        if (axis === 'X') this.activeState.partPatternFlipX[pid] = !this.activeState.partPatternFlipX[pid];
        else this.activeState.partPatternFlipY[pid] = !this.activeState.partPatternFlipY[pid];
        this.updatePattern();
    },

    updatePatternScale(val) {
        const pid = this.activePatternPart; this.activeState.partPatternScales[pid] = parseFloat(val);
        if (this.layers.partPatterns && this.layers.partPatterns[pid]) { this.layers.partPatterns[pid].set({ scaleX: val, scaleY: val }); this.canvas.requestRenderAll(); }
    },

    updatePatternAngle(val) {
        const pid = this.activePatternPart; this.activeState.partPatternAngles[pid] = parseFloat(val);
        if (this.layers.partPatterns && this.layers.partPatterns[pid]) { this.layers.partPatterns[pid].set({ angle: val }); this.canvas.requestRenderAll(); }
    },

    togglePartPattern(partId) {
        this.activeState.partPatterns[partId] = !this.activeState.partPatterns[partId];
        if (this.activeState.partPatterns[partId] && !this.activeState.partActivePatterns[partId]) {
            if (this.patterns.length > 0) this.activeState.partActivePatterns[partId] = this.patterns[0].id;
        }
        this.updatePattern();
    },

    async getMockupClipMask() {
        const maskLayers = [];
        const mockup = this.availableMockups.find(m => m.id === this.currentModel);
        const partIds = mockup?.parts[this.currentView] || [];

        for (const pid of partIds) {
            if (this.layers[pid]) maskLayers.push(await this.layers[pid].clone(['isSystemLayer']));
        }
        return maskLayers.length ? new window.fabric.Group(maskLayers, { absolutePositioned: true, originX: 'center', originY: 'center', left: 300, top: 300 }) : null;
    },

    renderLayers() {
        if (!this.canvas) return;
        const wasHistoryAction = this.isHistoryAction;
        this.isHistoryAction = true; // Protect against events during clear/add
        this.canvas.clear();
        const zOrder = this.currentView === 'pants' ? ['left', 'right', 'belt', 'list1', 'list2'] : ['body', 'left_sleeve', 'right_sleeve', 'left_cuff', 'right_cuff', 'collar', 'collar1'];
        zOrder.forEach(key => { if (this.layers[key]) this.canvas.add(this.layers[key]); });

        // Only render patterns that belong to the current view's parts
        if (this.layers.partPatterns) {
            zOrder.forEach(key => {
                const p = this.layers.partPatterns[key];
                if (p) this.canvas.add(p);
            });
        }

        this.designObjects.filter(obj => obj.view === this.currentView).forEach(obj => this.canvas.add(obj));
        if (this.layers.shadows) this.canvas.add(this.layers.shadows);
        if (this.layers.highlights) this.canvas.add(this.layers.highlights);
        this.canvas.renderAll();
        this.isHistoryAction = wasHistoryAction;
    },

    async updateTextProperty(key, val) {
        const activeObj = this.canvas.getActiveObject();
        this[key] = val;
        if (activeObj && (activeObj.type === 'i-text' || activeObj.type === 'text')) {
            if (key === 'textInput') activeObj.set('text', val);
            if (key === 'activeColor') activeObj.set('fill', val);
            if (key === 'activeFont') { await document.fonts.load(`10px "${val}"`); activeObj.set({ fontFamily: val }); }
            if (key === 'textFontSize') activeObj.set({ fontSize: parseFloat(val) });
            if (key === 'textCharSpacing') activeObj.set({ charSpacing: parseFloat(val) });

            if (key === 'textArc') {
                activeObj.arc = parseFloat(val);
                this.applyArcToText(activeObj);
            }
            this.canvas.renderAll();
            this.saveHistory();
        }
    },

    applyArcToText(obj) {
        if (!obj || !obj.text) return;
        const charCount = obj.text.length;
        const arcValue = obj.arc || 0;
        const fontSize = obj.fontSize;
        const charSpacing = obj.charSpacing || 0;

        // Reset styles for fresh render
        obj.set({ styles: {} });
        if (Math.abs(arcValue) < 1) return;

        // HIGHLY FLEXIBLE ARC LOGIC
        // Radius is inversely proportional to arc value
        const radius = 20000 / arcValue;
        const circumference = 2 * Math.PI * Math.abs(radius);
        const anglePerChar = ((fontSize * 0.7) + (charSpacing / 10)) / radius;
        const totalAngle = anglePerChar * (charCount - 1);
        const startAngle = -totalAngle / 2;

        obj.styles[0] = {};
        for (let i = 0; i < charCount; i++) {
            const charAngle = startAngle + (i * anglePerChar);
            const xOffset = Math.sin(charAngle) * radius;
            const yOffset = radius - (Math.cos(charAngle) * radius);

            // Invert Y for upside down arcs
            const finalY = arcValue > 0 ? yOffset : yOffset;

            obj.styles[0][i] = {
                deltaY: -finalY,
                // Fabric.js character rotation is tricky, we'll focus on Y offset for now
            };
        }
    },

    updateFont(type, fontId) {
        this.activeFont = fontId;
        document.fonts.load(`10px "${fontId}"`).then(() => { this.updateTextProperty('activeFont', fontId); this.saveHistory(); });
    },

    async addText() {
        const clipMask = await this.getMockupClipMask();
        await document.fonts.load(`10px "${this.activeFont}"`);
        const newText = new window.fabric.IText(this.textInput || 'TEKS BARU', {
            left: 300, top: 300, originX: 'center', originY: 'center', fill: this.activeColor,
            fontFamily: this.activeFont, fontSize: this.textFontSize, charSpacing: this.textCharSpacing,
            cornerStyle: 'circle', cornerColor: '#6366f1', clipPath: clipMask, view: this.currentView, arc: this.textArc
        });
        if (this.textArc !== 0) this.applyArcToText(newText);
        this.designObjects.push(newText);
        this.renderLayers();
        this.canvas.setActiveObject(newText);
        this.saveHistory();
    },

    updateToolbar(e) {
        const obj = e.target || (e.selected && e.selected[0]);
        if (!obj || obj.isSystemLayer) { this.showToolbar = false; return; }
        const rect = obj.getBoundingRect(); const vpt = this.canvas.viewportTransform;
        this.toolbarPos = { top: (rect.top * vpt[0] + vpt[5]) - 70, left: (rect.left * vpt[0] + vpt[4]) + (rect.width * vpt[0] / 2) };
        this.showToolbar = true;
    },

    async duplicateSelected() {
        const obj = this.canvas.getActiveObject(); if (!obj) return;
        const clone = await obj.clone(['clipPath', 'isSystemLayer', 'view', 'arc']);
        clone.set({ left: obj.left + 20, top: obj.top + 20 });
        this.designObjects.push(clone);
        this.renderLayers();
        this.canvas.setActiveObject(clone);
        this.saveHistory();
    },

    setupZoomEvents() {
        this.canvas.on('mouse:wheel', (opt) => {
            let zoom = this.canvas.getZoom() * (0.999 ** opt.e.deltaY); zoom = Math.min(Math.max(zoom, 0.5), 5);
            this.canvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom); this.currentZoom = zoom; this.showToolbar = false;
            opt.e.preventDefault(); opt.e.stopPropagation();
        });
    },

    zoom(delta) { let zoom = Math.min(Math.max(this.canvas.getZoom() + delta, 0.5), 5); this.canvas.zoomToPoint({ x: 300, y: 300 }, zoom); this.currentZoom = zoom; },
    resetZoom() { this.canvas.setZoom(1); this.canvas.setViewportTransform([1, 0, 0, 1, 0, 0]); this.currentZoom = 1; this.resizeCanvas(); },
    async loadImage(url, options = {}) {
        try { const img = await window.fabric.FabricImage.fromURL(url, { crossOrigin: 'anonymous' }); img.scaleToWidth(600); img.set({ originX: 'center', originY: 'center', left: 300, top: 300, ...options }); return img; } catch (err) { return null; }
    },

    handleLogoUpload(event) {
        const file = event.target.files[0]; if (!file) return;
        const reader = new FileReader();
        reader.onload = async (e) => {
            const img = await window.fabric.FabricImage.fromURL(e.target.result);
            img.scaleToWidth(100); const clipMask = await this.getMockupClipMask();
            img.set({ left: 300, top: 250, originX: 'center', originY: 'center', cornerStyle: 'circle', cornerColor: '#6366f1', clipPath: clipMask, view: this.currentView });
            this.designObjects.push(img);
            this.renderLayers();
            this.canvas.setActiveObject(img);
            this.saveHistory();
        };
        reader.readAsDataURL(file);
    },
    setActiveMenu(menuId) { if (this.activeMenu === menuId) this.togglePanel(); else { this.activeMenu = menuId; this.isPanelOpen = true; setTimeout(() => this.resizeCanvas(), 350); } },
    deleteSelected() { const obj = this.canvas.getActiveObject(); if (obj) { this.canvas.remove(obj); this.designObjects = this.designObjects.filter(o => o !== obj); this.showToolbar = false; } },
    resizeCanvas() { try { const container = document.querySelector('main .relative'); if (!container || !this.canvas || this.currentZoom !== 1) return; const size = Math.min(container.clientWidth - 40, 600); this.canvas.setDimensions({ width: size, height: size }); this.canvas.setZoom(size / 600); } catch (err) { } },
    togglePanel() { this.isPanelOpen = !this.isPanelOpen; setTimeout(() => this.resizeCanvas(), 350); }
});
