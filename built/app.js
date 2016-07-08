(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", 'dojo-core/Promise', 'dojo-widgets/util/createMemoryStore', 'dojo-widgets/createButton', 'dojo-widgets/createDijit', 'dojo-widgets/createLayoutContainer', 'dojo-widgets/createList', 'dojo-widgets/createPanel', 'dojo-widgets/createResizePanel', 'dojo-widgets/createTabbedPanel', 'dojo-widgets/createTextInput', 'dojo-widgets/createWidget', 'dojo-widgets/projector', 'dojo-actions/createAction', 'dijit/form/DateTextBox'], factory);
    }
})(function (require, exports) {
    "use strict";
    /**
     * An example basic application using stores/widgets/actions
     * @module dojo-app-example/app
     */
    var Promise_1 = require('dojo-core/Promise');
    var createMemoryStore_1 = require('dojo-widgets/util/createMemoryStore');
    var createButton_1 = require('dojo-widgets/createButton');
    var createDijit_1 = require('dojo-widgets/createDijit');
    var createLayoutContainer_1 = require('dojo-widgets/createLayoutContainer');
    var createList_1 = require('dojo-widgets/createList');
    var createPanel_1 = require('dojo-widgets/createPanel');
    var createResizePanel_1 = require('dojo-widgets/createResizePanel');
    var createTabbedPanel_1 = require('dojo-widgets/createTabbedPanel');
    var createTextInput_1 = require('dojo-widgets/createTextInput');
    var createWidget_1 = require('dojo-widgets/createWidget');
    var projector_1 = require('dojo-widgets/projector');
    var createAction_1 = require('dojo-actions/createAction');
    var DateTextBox = require('dijit/form/DateTextBox');
    /**
     * List items to populate list widget
     */
    var listItems = [
        { id: 1, label: 'foo' },
        { id: 2, label: 'bar' },
        { id: 3, label: 'baz' },
        { id: 4, label: 'qux' },
        { id: 5, label: 'norf' }
    ];
    /**
     * A memory store which handles the widget states
     */
    var widgetStore = createMemoryStore_1.default({
        data: [
            { id: 'header', label: 'Dojo 2 Example Application' },
            { id: 'tabbed-panel', classes: ['pad-1em'] },
            { id: 'tab-1', label: 'Tab 1', closeable: false },
            { id: 'layout-container', classes: ['horizontal'] },
            { id: 'panel-fixed', classes: ['fixed'] },
            { id: 'panel-resize', classes: ['vertical', 'border-right', 'pad-1em'], width: '200px' },
            { id: 'remove', label: 'Remove', name: 'remove' },
            { id: 'first-name', name: 'first-name', value: 'qat' },
            { id: 'add', label: 'Add', name: 'add' },
            { id: 'list', classes: ['margin-1em'], items: listItems },
            { id: 'tab-2', classes: ['pad-1em'], label: 'Tab 2', closeable: true },
            { id: 'tab-2-content', label: 'You can close me!' },
            { id: 'tab-3', classes: ['pad-1em'], label: 'Tab 3', closeable: true },
            { id: 'tab-3-content', label: 'You can try to close me, but...' },
            { id: 'can-close', label: 'Can Close' },
            { id: 'tab-4', classes: ['pad-1em'], label: 'Tab 4' },
            { id: 'text-usd', name: 'text-usd', value: 1 },
            { id: 'text-gbp', name: 'text-gbp' },
            { id: 'text-eur', name: 'text-eur' }
        ]
    });
    var actionStore = createMemoryStore_1.default({
        data: [
            { id: 'close-tab', canClose: false, enabled: true },
            { id: 'can-close-tab', enabled: true },
            { id: 'update-amount', amount: 0, usd2gbp: 0.683854, usd2eur: 0.89075, gbp2eur: 1.29691 }
        ]
    });
    var widgets = [];
    /**
     * A header widget
     */
    var header = createWidget_1.default({
        id: 'header',
        stateFrom: widgetStore,
        tagName: 'h1'
    });
    widgets.push(header);
    var tabbedPanel = createTabbedPanel_1.default({
        id: 'tabbed-panel',
        stateFrom: widgetStore
    });
    widgets.push(tabbedPanel);
    var tab1 = createPanel_1.default({
        id: 'tab-1',
        stateFrom: widgetStore
    });
    tabbedPanel.append(tab1);
    var layoutContainer = createLayoutContainer_1.default({
        id: 'layout-container',
        stateFrom: widgetStore
    });
    tab1.append(layoutContainer);
    projector_1.default.append(widgets);
    var panelFixed = createPanel_1.default({
        id: 'panel-fixed',
        stateFrom: widgetStore
    });
    layoutContainer.append(panelFixed);
    var panelResize = createResizePanel_1.default({
        id: 'panel-resize',
        stateFrom: widgetStore
    });
    panelFixed.append(panelResize);
    /**
     * Button will remove item from list
     */
    var removeButton = createButton_1.default({
        id: 'remove',
        stateFrom: widgetStore
    });
    panelResize.append(removeButton);
    /**
     * A widget for collecting the value of the list
     */
    var firstName = createTextInput_1.default({
        id: 'first-name',
        stateFrom: widgetStore
    });
    panelResize.append(firstName);
    /**
     * A widget that will add the value to the list
     */
    var addButton = createButton_1.default({
        id: 'add',
        stateFrom: widgetStore
    });
    panelResize.append(addButton);
    /**
     * The list widget
     */
    var list = createList_1.default({
        id: 'list',
        stateFrom: widgetStore
    });
    panelFixed.append(list);
    var tab2 = createPanel_1.default({
        id: 'tab-2',
        stateFrom: widgetStore
    });
    tabbedPanel.append(tab2);
    tab2.append(createWidget_1.default({
        id: 'tab-2-content',
        stateFrom: widgetStore,
        tagName: 'div'
    }));
    /* Adding a Dojo 1 Dijit to a Dojo 2 Panel */
    tab2.append(createDijit_1.default({
        Ctor: DateTextBox,
        params: {
            id: 'dateBox',
            name: 'dateBox',
            value: '16/06/1973'
        },
        tagName: 'input'
    }));
    tab2.append(createDijit_1.default({
        Ctor: 'dijit/form/Button',
        params: {
            label: 'Rocking it old school!',
            onClick: function () {
                alert('Yes, old school!');
            }
        }
    }));
    var tab3 = createPanel_1.default({
        id: 'tab-3',
        stateFrom: widgetStore
    });
    tabbedPanel.append(tab3);
    tab3.append(createWidget_1.default({
        id: 'tab-3-content',
        stateFrom: widgetStore,
        tagName: 'div'
    }));
    var canCloseButton = createButton_1.default({
        id: 'can-close',
        stateFrom: widgetStore
    });
    tab3.append(canCloseButton);
    /**
     * An action that will pop an item from the list item and patch the items into the widgetstore
     */
    var actionPopList = createAction_1.default({
        do: function () {
            listItems.pop();
            return widgetStore.patch({ id: 'list', items: listItems });
        }
    });
    /**
     * Connect the buttons onclick to the action
     */
    removeButton.on('click', actionPopList);
    /**
     * An action that will take the value from the text input, push it onto the list and patch
     * the widget store
     */
    var actionPushList = createAction_1.default({
        do: function () {
            var label = firstName.value;
            listItems.push({ id: listItems.length, label: label });
            return widgetStore.patch({ id: 'list', items: listItems }) /* patch the list */
                .patch({ id: 'first-name', value: label }); /* patch the value of fisrt-name */
        }
    });
    /**
     * Connect the buttons onclick to the action
     */
    addButton.on('click', actionPushList);
    var actionCloseTab3 = createAction_1.default({
        do: function (options) {
            if (options && options.event && !this.state.canClose) {
                options.event.preventDefault();
                return widgetStore.patch({ label: 'I said you can\'t close me' }, { id: 'tab-3-content' });
            }
        }
    });
    actionCloseTab3.observeState('close-tab', actionStore);
    tab3.on('close', actionCloseTab3);
    var actionCanCloseTab3 = createAction_1.default({
        do: function () {
            return actionStore.patch({ canClose: true }, { id: 'close-tab' })
                .then(function () { return widgetStore.patch({ label: 'Now you can close the tab!!!' }, { id: 'tab-3-content' }); });
        }
    });
    canCloseButton.on('click', actionCanCloseTab3);
    /** TAB 4 */
    var tab4 = createPanel_1.default({
        id: 'tab-4',
        stateFrom: widgetStore
    });
    tabbedPanel.append(tab4);
    var textUSD = createTextInput_1.default({
        stateFrom: widgetStore,
        id: 'text-usd'
    });
    var textGBP = createTextInput_1.default({
        stateFrom: widgetStore,
        id: 'text-gbp'
    });
    var textEUR = createTextInput_1.default({
        stateFrom: widgetStore,
        id: 'text-eur'
    });
    var actionUpdateAmount = createAction_1.default({
        stateFrom: actionStore,
        id: 'update-amount',
        do: function (_a) {
            var event = _a.event;
            var action = this;
            var value = event.value, target = event.target;
            if (value === String(Number(value))) {
                event.preventDefault();
                var usd = void 0;
                var gbp = void 0;
                var eur = void 0;
                if (target === textUSD) {
                    usd = value;
                    gbp = Math.round(Number(value) * action.state.usd2gbp * 1000) / 1000;
                    eur = Math.round(Number(value) * action.state.usd2eur * 1000) / 1000;
                }
                else if (target === textGBP) {
                    usd = Math.round(Number(value) / action.state.usd2gbp * 1000) / 1000;
                    gbp = value;
                    eur = Math.round(Number(value) * action.state.gbp2eur * 1000) / 1000;
                }
                else {
                    usd = Math.round(Number(value) / action.state.usd2eur * 1000) / 1000;
                    gbp = Math.round(Number(value) / action.state.gbp2eur * 1000) / 1000;
                    eur = value;
                }
                console.log(usd, gbp, eur);
                return Promise_1.default.all([
                    widgetStore.patch({ value: usd }, { id: 'text-usd' }),
                    widgetStore.patch({ value: gbp }, { id: 'text-gbp' }),
                    widgetStore.patch({ value: eur }, { id: 'text-eur' })
                ]);
            }
        }
    });
    textUSD.on('valuechange', actionUpdateAmount);
    textGBP.on('valuechange', actionUpdateAmount);
    textEUR.on('valuechange', actionUpdateAmount);
    tab4.append(createWidget_1.default({
        tagName: 'app-label',
        state: {
            label: 'USD'
        }
    }));
    tab4.append(textUSD);
    tab4.append(createWidget_1.default({
        tagName: 'app-label',
        state: {
            label: 'GBP'
        }
    }));
    tab4.append(textGBP);
    tab4.append(createWidget_1.default({
        tagName: 'app-label',
        state: {
            label: 'EUR'
        }
    }));
    tab4.append(textEUR);
    /**
     * Attach the VDOM
     */
    projector_1.default.attach();
});
//# sourceMappingURL=app.js.map