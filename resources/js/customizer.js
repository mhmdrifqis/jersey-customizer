export default () => ({
    activeMenu: 'mockup',
    currentModel: 'v-neck-short',
    currentView: 'front', // 'front', 'back', 'pants'

    availableMockups: [
        { id: 'v-neck-short', label: 'V-Neck Short Sleeve' },
        { id: 'v-neck comb-short', label: 'V-Neck Comb Short Sleeve' },
        { id: 'o-neck-short', label: 'O-Neck Short Sleeve' }
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
            partPatterns: { body: false, left_sleeve: false, right_sleeve: false, collar: false, collar1: false },
            partPatternScales: { body: 1, left_sleeve: 1, right_sleeve: 1, collar: 1, collar1: 1 },
            partPatternAngles: { body: 0, left_sleeve: 0, right_sleeve: 0, collar: 0, collar1: 0 },
            partPatternFlipX: { body: false, left_sleeve: false, right_sleeve: false, collar: false, collar1: false },
            partPatternFlipY: { body: false, left_sleeve: false, right_sleeve: false, collar: false, collar1: false },
            partActivePatterns: { body: null, left_sleeve: null, right_sleeve: null, collar: null, collar1: null },
            patternColor: '#000000'
        },
        back: {
            partColors: { body: '#ffffff', left_sleeve: '#ffffff', right_sleeve: '#ffffff', left_cuff: '#ffffff', right_cuff: '#ffffff', collar: '#ffffff', collar1: '#ffffff' },
            partPatterns: { body: false, left_sleeve: false, right_sleeve: false, collar: false, collar1: false },
            partPatternScales: { body: 1, left_sleeve: 1, right_sleeve: 1, collar: 1, collar1: 1 },
            partPatternAngles: { body: 0, left_sleeve: 0, right_sleeve: 0, collar: 0, collar1: 0 },
            partPatternFlipX: { body: false, left_sleeve: false, right_sleeve: false, collar: false, collar1: false },
            partPatternFlipY: { body: false, left_sleeve: false, right_sleeve: false, collar: false, collar1: false },
            partActivePatterns: { body: null, left_sleeve: null, right_sleeve: null, collar: null, collar1: null },
            patternColor: '#000000'
        },
        pants: {
            partColors: { left: '#ffffff', right: '#ffffff', belt: '#ffffff', list1: '#ffffff', list2: '#ffffff' },
            partPatterns: { left: false, right: false, belt: false, list1: false, list2: false },
            partPatternScales: { left: 1, right: 1, belt: 1, list1: 1, list2: 1 },
            partPatternAngles: { left: 0, right: 0, belt: 0, list1: 0, list2: 0 },
            partPatternFlipX: { left: false, right: false, belt: false, list1: false, list2: false },
            partPatternFlipY: { left: false, right: false, belt: false, list1: false, list2: false },
            partActivePatterns: { left: null, right: null, belt: null, list1: null, list2: null },
            patternColor: '#000000'
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
    get patternColor() { return this.activeState.patternColor; },

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

    nameColor: '#ffffff',
    numberColor: '#ffffff',
    jerseyTexts: { name: '', number: '' },
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
        { id: 'number', label: 'Nomor', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10V4h-4"/><path d="M20 14v6h-4"/><path d="M4 10V4h4"/><path d="M4 14v6h4"/><path d="M12 4v16"/></svg>' },
        { id: 'name', label: 'Nama', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></svg>' },
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
        { id: 'p10', name: 'Motif 10', url: '/assets/patterns/pattern10.png' },

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
                if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
                    e.preventDefault();
                    if (e.shiftKey) this.redo(); else this.undo();
                }
                if ((e.key === 'Delete' || e.key === 'Backspace') && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
                    this.deleteSelected();
                }
            });
        });
    },

    async initCanvas() {
        try {
            if (!window.fabric) throw new Error('Fabric.js not found!');
            const fabric = window.fabric;
            this.canvas = new fabric.Canvas('jersey-canvas', {
                preserveObjectStacking: true,
                backgroundColor: 'transparent',
                width: 600, height: 600,
                targetFindTolerance: 10,
                perPixelTargetFind: true
            });
            this.resizeCanvas();
            await this.loadInitialLayers();
            this.saveHistory();
            this.setupZoomEvents();
            this.setupToolbarEvents();
            this.setupHistoryEvents();
            this.isLoading = false;
        } catch (error) {
            console.error('Error in initCanvas:', error);
            this.isLoading = false;
        }
    },

    setupHistoryEvents() {
        this.canvas.on('object:modified', () => this.saveHistory());
        this.canvas.on('object:added', (e) => { if (e.target.isSystemLayer) return; this.saveHistory(); });
        this.canvas.on('object:removed', (e) => { if (e.target.isSystemLayer) return; this.saveHistory(); });
    },

    saveHistory() {
        if (this.isHistoryAction) return;
        const state = {
            viewStates: JSON.parse(JSON.stringify(this.viewStates)),
            nameColor: this.nameColor,
            numberColor: this.numberColor,
            designObjects: this.designObjects.map(obj => obj.toObject(['clipPath', 'isSystemLayer', 'view'])),
            currentModel: this.currentModel,
            currentView: this.currentView
        };
        this.undoStack.push(JSON.stringify(state));
        if (this.undoStack.length > 25) this.undoStack.shift();
        this.redoStack = [];
    },

    async undo() {
        if (this.undoStack.length <= 1) return;
        this.undoStack.pop();
        const prevState = JSON.parse(this.undoStack[this.undoStack.length - 1]);
        await this.applyState(prevState);
    },

    async redo() {
        if (this.redoStack.length === 0) return;
        const nextStateStr = this.redoStack.pop();
        this.undoStack.push(nextStateStr);
        await this.applyState(JSON.parse(nextStateStr));
    },

    async applyState(state) {
        this.isHistoryAction = true;
        this.isLoading = true;
        this.viewStates = state.viewStates;
        this.nameColor = state.nameColor;
        this.numberColor = state.numberColor;
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
            'selection:created': (e) => this.updateToolbar(e),
            'selection:updated': (e) => this.updateToolbar(e),
            'selection:cleared': () => { this.showToolbar = false; },
            'object:moving': (e) => this.updateToolbar(e),
            'object:scaling': (e) => this.updateToolbar(e),
            'object:rotating': (e) => this.updateToolbar(e)
        });
    },

    async setModel(modelId) {
        if (this.currentModel === modelId) return;
        this.isLoading = true;
        this.currentModel = modelId;
        // State is preserved in viewStates, just reload assets
        await this.loadInitialLayers();
        await this.updatePattern();
        this.renderLayers();
        this.isLoading = false;
        this.saveHistory();
    },

    async setView(view) {
        if (this.currentView === view) return;
        this.isLoading = true;
        this.currentView = view;
        this.activePart = view === 'pants' ? 'left' : 'body';
        this.activePatternPart = view === 'pants' ? 'left' : 'body';
        await this.loadInitialLayers();
        await this.updatePattern();
        this.renderLayers();
        this.isLoading = false;
    },

    async loadInitialLayers() {
        const assetPath = `/assets/mockups/${this.currentModel}/${this.currentView}/`;
        this.layers = {}; // Reset layers for current view
        try {
            const potentialPartIds = this.currentView === 'pants'
                ? ['left', 'right', 'belt', 'list1', 'list2']
                : ['body', 'left_sleeve', 'right_sleeve', 'left_cuff', 'right_cuff', 'collar', 'collar1'];

            for (const pid of potentialPartIds) {
                const fileName = `${pid}.png`;
                const layer = await this.loadImage(assetPath + fileName, { isSystemLayer: true, selectable: false, evented: false });
                if (layer) this.layers[pid] = layer;
            }

            this.layers.shadows = await this.loadImage(assetPath + 'shadows.png', { isSystemLayer: true, selectable: false, evented: false, globalCompositeOperation: 'multiply' });
            this.layers.highlights = await this.loadImage(assetPath + 'highlights.png', { isSystemLayer: true, selectable: false, evented: false, globalCompositeOperation: 'screen' });

            // Apply active colors to all loaded layers
            Object.keys(this.layers).forEach(pid => {
                if (this.partColors.hasOwnProperty(pid)) {
                    this.applyFilterToLayer(pid, this.partColors[pid]);
                }
            });

            this.renderLayers();
        } catch (err) { console.error('Error loading layers:', err); }
    },

    async applyFilterToLayer(partId, color) {
        const layer = this.layers[partId];
        if (!layer || !window.fabric) return;
        layer.filters = [new window.fabric.filters.BlendColor({ color: color, mode: 'overlay', alpha: 1 })];
        layer.applyFilters();
    },

    async updatePartColor(partId, color, saveHistory = true) {
        if (!this.partColors || !this.partColors.hasOwnProperty(partId)) return;
        this.partColors[partId] = color;
        await this.applyFilterToLayer(partId, color);
        if (this.canvas) this.canvas.renderAll();
        if (saveHistory) this.saveHistory();
    },

    async updatePattern() {
        this.isLoading = true;
        this.layers.partPatterns = this.layers.partPatterns || {};
        const partIds = Object.keys(this.partPatterns);

        for (const pid of partIds) {
            const patternId = this.partActivePatterns[pid];
            const isEnabled = this.partPatterns[pid];
            const patternObj = this.patterns.find(p => p.id === patternId);

            if (!isEnabled || !patternObj || !this.layers[pid]) {
                this.layers.partPatterns[pid] = null;
                continue;
            }

            const maskLayer = await this.layers[pid].clone(['isSystemLayer']);
            const maskGroup = new window.fabric.Group([maskLayer], {
                absolutePositioned: true, originX: 'center', originY: 'center', left: 300, top: 300
            });

            const scale = this.partPatternScales[pid] || 1;
            const angle = this.partPatternAngles[pid] || 0;
            const flipX = this.partPatternFlipX[pid] || false;
            const flipY = this.partPatternFlipY[pid] || false;

            const pLayer = await this.loadImage(patternObj.url, {
                selectable: false, evented: false, isSystemLayer: true,
                clipPath: maskGroup, scaleX: scale, scaleY: scale, angle: angle,
                flipX: flipX, flipY: flipY
            });

            if (pLayer) {
                pLayer.filters = [new window.fabric.filters.BlendColor({ color: this.patternColor, mode: 'overlay', alpha: 1 })];
                pLayer.applyFilters();
            }
            this.layers.partPatterns[pid] = pLayer;
        }

        this.renderLayers();
        this.isLoading = false;
        if (!this.isHistoryAction) this.saveHistory();
    },

    flipObject(axis) {
        const obj = this.canvas.getActiveObject();
        if (!obj) return;
        if (axis === 'X') obj.set('flipX', !obj.flipX);
        else obj.set('flipY', !obj.flipY);
        this.canvas.requestRenderAll();
        this.saveHistory();
    },

    updatePatternFlip(axis) {
        const pid = this.activePatternPart;
        if (axis === 'X') this.activeState.partPatternFlipX[pid] = !this.activeState.partPatternFlipX[pid];
        else this.activeState.partPatternFlipY[pid] = !this.activeState.partPatternFlipY[pid];
        this.updatePattern();
    },

    updatePatternScale(val) {
        const pid = this.activePatternPart;
        this.activeState.partPatternScales[pid] = parseFloat(val);
        if (this.layers.partPatterns && this.layers.partPatterns[pid]) {
            this.layers.partPatterns[pid].set({ scaleX: val, scaleY: val });
            this.canvas.requestRenderAll();
        }
    },

    updatePatternAngle(val) {
        const pid = this.activePatternPart;
        this.activeState.partPatternAngles[pid] = parseFloat(val);
        if (this.layers.partPatterns && this.layers.partPatterns[pid]) {
            this.layers.partPatterns[pid].set({ angle: val });
            this.canvas.requestRenderAll();
        }
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
        const partIds = Object.keys(this.layers).filter(k => k !== 'shadows' && k !== 'highlights' && k !== 'partPatterns');
        for (const pid of partIds) {
            if (this.layers[pid]) maskLayers.push(await this.layers[pid].clone(['isSystemLayer']));
        }
        return maskLayers.length ? new window.fabric.Group(maskLayers, { absolutePositioned: true, originX: 'center', originY: 'center', left: 300, top: 300 }) : null;
    },

    renderLayers() {
        if (!this.canvas) return;
        this.canvas.clear();

        // Render base parts in Z-Order
        const zOrder = this.currentView === 'pants'
            ? ['left', 'right', 'belt', 'list1', 'list2']
            : ['body', 'left_sleeve', 'right_sleeve', 'left_cuff', 'right_cuff', 'collar', 'collar1'];

        zOrder.forEach(key => {
            if (this.layers[key]) this.canvas.add(this.layers[key]);
        });

        // Render patterns
        if (this.layers.partPatterns) {
            Object.values(this.layers.partPatterns).forEach(p => { if (p) this.canvas.add(p); });
        }

        // Render objects filtered by current view
        this.designObjects.filter(obj => obj.view === this.currentView).forEach(obj => this.canvas.add(obj));

        if (this.layers.shadows) this.canvas.add(this.layers.shadows);
        if (this.layers.highlights) this.canvas.add(this.layers.highlights);
        this.canvas.renderAll();
    },

    updateElementColor(color, type = null) {
        if (type === 'pattern') return this.updatePatternColor(color);
        if (type === 'name') this.nameColor = color;
        if (type === 'number') this.numberColor = color;
        const activeObj = this.canvas.getActiveObject();
        if (activeObj && (activeObj.type === 'i-text' || activeObj.type === 'text')) {
            activeObj.set('fill', color);
            this.canvas.requestRenderAll();
            this.saveHistory();
        }
    },

    updatePatternColor(color = null) {
        if (color) { this.activeState.patternColor = color; this.saveHistory(); }
        if (!this.layers.partPatterns) return;
        Object.values(this.layers.partPatterns).forEach(p => {
            if (p) {
                p.filters = [new window.fabric.filters.BlendColor({ color: this.patternColor, mode: 'overlay', alpha: 1 })];
                p.applyFilters();
            }
        });
        this.canvas.renderAll();
    },

    updateToolbar(e) {
        const obj = e.target;
        if (!obj || obj.isSystemLayer) { this.showToolbar = false; return; }
        const rect = obj.getBoundingRect();
        const vpt = this.canvas.viewportTransform;
        this.toolbarPos = { top: (rect.top * vpt[0] + vpt[5]) - 70, left: (rect.left * vpt[0] + vpt[4]) + (rect.width * vpt[0] / 2) };
        this.showToolbar = true;
    },

    async duplicateSelected() {
        const obj = this.canvas.getActiveObject();
        if (!obj) return;
        const clone = await obj.clone(['clipPath', 'isSystemLayer', 'view']);
        clone.set({ left: obj.left + 20, top: obj.top + 20 });
        this.designObjects.push(clone);
        this.renderLayers();
        this.canvas.setActiveObject(clone);
    },

    setupZoomEvents() {
        this.canvas.on('mouse:wheel', (opt) => {
            let zoom = this.canvas.getZoom() * (0.999 ** opt.e.deltaY);
            zoom = Math.min(Math.max(zoom, 0.5), 5);
            this.canvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
            this.currentZoom = zoom; this.showToolbar = false;
            opt.e.preventDefault(); opt.e.stopPropagation();
        });
    },

    zoom(delta) {
        let zoom = Math.min(Math.max(this.canvas.getZoom() + delta, 0.5), 5);
        this.canvas.zoomToPoint({ x: 300, y: 300 }, zoom); this.currentZoom = zoom;
    },

    resetZoom() { this.canvas.setZoom(1); this.canvas.setViewportTransform([1, 0, 0, 1, 0, 0]); this.currentZoom = 1; this.resizeCanvas(); },

    async loadImage(url, options = {}) {
        try {
            const img = await window.fabric.FabricImage.fromURL(url, { crossOrigin: 'anonymous' });
            img.scaleToWidth(600); img.set({ originX: 'center', originY: 'center', left: 300, top: 300, ...options });
            return img;
        } catch (err) { return null; }
    },

    async addText(type) {
        const clipMask = await this.getMockupClipMask();
        const config = type === 'name' ? { top: 180, fontSize: 30 } : { top: 300, fontSize: 120 };
        const newText = new window.fabric.IText(this.jerseyTexts[type], {
            left: 300, originX: 'center', fill: type === 'name' ? this.nameColor : this.numberColor,
            fontFamily: 'sans-serif', cornerStyle: 'circle', cornerColor: '#6366f1', clipPath: clipMask,
            view: this.currentView, ...config
        });
        this.designObjects.push(newText); this.renderLayers(); this.canvas.setActiveObject(newText);
    },

    handleLogoUpload(event) {
        const file = event.target.files[0]; if (!file) return;
        const reader = new FileReader();
        reader.onload = async (e) => {
            const img = await window.fabric.FabricImage.fromURL(e.target.result);
            img.scaleToWidth(100); const clipMask = await this.getMockupClipMask();
            img.set({ left: 300, top: 250, originX: 'center', originY: 'center', cornerStyle: 'circle', cornerColor: '#6366f1', clipPath: clipMask, view: this.currentView });
            this.designObjects.push(img); this.renderLayers(); this.canvas.setActiveObject(img);
        };
        reader.readAsDataURL(file);
    },

    setActiveMenu(menuId) { if (this.activeMenu === menuId) this.togglePanel(); else { this.activeMenu = menuId; this.isPanelOpen = true; setTimeout(() => this.resizeCanvas(), 350); } },

    deleteSelected() {
        const obj = this.canvas.getActiveObject();
        if (obj) { this.canvas.remove(obj); this.designObjects = this.designObjects.filter(o => o !== obj); this.showToolbar = false; }
    },

    resizeCanvas() {
        try {
            const container = document.querySelector('main .relative');
            if (!container || !this.canvas || this.currentZoom !== 1) return;
            const size = Math.min(container.clientWidth - 40, 600);
            this.canvas.setDimensions({ width: size, height: size }); this.canvas.setZoom(size / 600);
        } catch (err) { }
    },
    togglePanel() { this.isPanelOpen = !this.isPanelOpen; setTimeout(() => this.resizeCanvas(), 350); }
});
