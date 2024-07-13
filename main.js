// ==UserScript==
// @name         Hilton Element Color Changer and Column Hider
// @namespace    http://tampermonkey.net/
// @version      2.0.3
// @description  Changes the color of table headers, buttons, and elements on enterprise.pep.hilton.com and allows users to select columns to hide
// @match        https://login.pep.hilton.com/*
// @updateURL    https://raw.githubusercontent.com/ImTaliesin/HiltonQolScript/main/main.js
// @downloadURL  https://raw.githubusercontent.com/ImTaliesin/HiltonQolScript/main/main.js
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

(function() {
    'use strict';
    console.log("Brennan's script last updated: 7/11/24")
    // Default color values
    const DEFAULT_COLORS = {
        primaryColor: '#6E00FF',
        buttonTextColor: '#40e0d0',
        bgColor: '#313032',
        bodyText: '#FFFFFF'
    };

    // All column names
    const ALL_COLUMNS = [
        'HONORS TIER', 'BENEFITS', 'DIGITAL CHECK OUT', 'DCI', 'DK', 'MESSAGE',
        'LAST NAME', 'FIRST NAME', 'STATUS', 'ROOM', 'ROOM TYPE', 'OCC STATUS',
        'HSK STATUS', 'ARRIVAL DATE', 'DEPARTURE DATE', 'NIGHTS', 'RATE PLAN',
        'GROUP', 'CITY', 'COMPANY', 'CONF NUMBER', 'ADDN GUESTS', 'EST. DEPT TIME',
        'LATE CHECK OUT', 'BALANCE'
    ];

    // Get color values from storage or use defaults
    let colors = {
        primaryColor: GM_getValue('primaryColor', DEFAULT_COLORS.primaryColor),
        buttonTextColor: GM_getValue('buttonTextColor', DEFAULT_COLORS.buttonTextColor),
        bgColor: GM_getValue('bgColor', DEFAULT_COLORS.bgColor),
        bodyText: GM_getValue('bodyText', DEFAULT_COLORS.bodyText)
    };

    // Get hidden columns from storage or use an empty array
    let hiddenColumns = GM_getValue('hiddenColumns', []);

    // Change element colors based on the selected colors
    function changeElementColors() {
        GM_addStyle(`
            .reservations-report-table,
            .cth[data-v-4273bdc8],
            button,
            .tabs>div,
            .el-button,
            .el-menu-item,
            .el-menu-item:focus,
            .el-menu-item:hover,
            .left-tabs .menu[data-v-7175d18d],
            .left-tabs .sub-menu[data-v-7175d18d],
            thead,
            .cth,
            cth,
            .thead,
            .user,
            .user-details,
            .tab-item,
            .left-tabs,
            .el-radio-button__inner,
            .hk-tab[data-v-56570132],
            .reservations-report-table .cth[data-v-1bc9ee52], .hk-tab[data-v-50ccac6a] {
                background-color: ${colors.primaryColor} !important;
            }

            button,
            .rate-badge,
            .tabs>div,
            .el-button,
            .hk-text-black {
                color: ${colors.buttonTextColor} !important;
            }

            .hk-tab.active[data-v-56570132] {
                background-color: ${colors.buttonTextColor} !important;
            }

.ctd,
#nav > div > div.wrapper > div.content > div > div > div.tabs-wrapper > div > div.tab-details > div > div.details-left-part > div.flex-1.p-10px.flexed-column > div.flexed-column.m-t-10,
body,
.sidebar,
.el-menu-vertical-demo,
body::before,
.hk-tab[data-v-50ccac6a],
.hk-tab-header-v1,
#nav > div > div.wrapper > div.content > div > div.check-in-container.hk-tab-card > div.hk-tabs > div,
div[data-v-974bfea2].hk-tab-header-v1,
div[data-v-974bfea2].hk-tab-v1,
div[data-v-974bfea2].hk-tab-v1.active-v1 {
    background-color: ${colors.bgColor} !important;
    color: ${colors.bodyText} !important;
}

            .rooms,
            .room-box,
            .cth,
            #nav > div > div.wrapper > div > div > div > div.popup-wrapper.small-popup > div > div.popup-header > div > div > div > svg {
                color: black !important;
            }

            /* Updated sidebar selector */
            .sidebar,
            div[data-v-00bd171e][data-v-ac254710].sidebar,
            .el-menu-vertical-demo {
                min-width: 200px !important;
                max-width: 200px !important;
                width: 200px !important;
            }
        `);
    }

    // Create a color wheel input for a specific color setting
    function createColorWheel(label, colorKey) {
        const container = document.createElement('div');
        container.style.display = 'inline-block';
        container.style.marginRight = '10px';

        const labelElement = document.createElement('label');
        labelElement.textContent = label;
        labelElement.style.display = 'block';

        const colorInput = document.createElement('input');
        colorInput.type = 'color';
        colorInput.value = colors[colorKey];

        colorInput.addEventListener('change', function() {
            colors[colorKey] = colorInput.value;
            GM_setValue(colorKey, colorInput.value);
            changeElementColors();
        });

        container.appendChild(labelElement);
        container.appendChild(colorInput);

        return container;
    }

    // Show the settings GUI
    function showSettingsGUI() {
        const settingsContainer = document.createElement('div');
        settingsContainer.style.position = 'fixed';
        settingsContainer.style.top = '50%';
        settingsContainer.style.left = '50%';
        settingsContainer.style.transform = 'translate(-50%, -50%)';
        settingsContainer.style.backgroundColor = 'white';
        settingsContainer.style.padding = '10px';
        settingsContainer.style.zIndex = '100';
        settingsContainer.style.color = 'black';

        const closeButton = document.createElement('span');
        closeButton.textContent = 'X';
        closeButton.style.position = 'absolute';
        closeButton.style.top = '5px';
        closeButton.style.right = '10px';
        closeButton.style.cursor = 'pointer';
        closeButton.addEventListener('click', function() {
            settingsContainer.remove();
        });
        settingsContainer.appendChild(closeButton);

        const colorWheelsTitle = document.createElement('h3');
        colorWheelsTitle.textContent = 'Color Settings';
        settingsContainer.appendChild(colorWheelsTitle);

        settingsContainer.appendChild(createColorWheel('Primary Color', 'primaryColor'));
        settingsContainer.appendChild(createColorWheel('Button Text Color', 'buttonTextColor'));
        settingsContainer.appendChild(createColorWheel('Background Color', 'bgColor'));
        settingsContainer.appendChild(createColorWheel('Body Text Color', 'bodyText'));

        const columnSelectorTitle = document.createElement('h3');
        columnSelectorTitle.textContent = 'Select Columns to Hide';
        settingsContainer.appendChild(columnSelectorTitle);

        const selectAllButton = document.createElement('button');
        selectAllButton.textContent = 'Select All';
        selectAllButton.style.marginBottom = '10px';
        selectAllButton.addEventListener('click', function() {
            const allSelected = hiddenColumns.length === ALL_COLUMNS.length;
            hiddenColumns = allSelected ? [] : [...ALL_COLUMNS];
            GM_setValue('hiddenColumns', hiddenColumns);
            updateCheckboxes();
            hideColumns();
        });
        settingsContainer.appendChild(selectAllButton);

        const columnListContainer = document.createElement('div');
        columnListContainer.style.display = 'flex';
        columnListContainer.style.flexWrap = 'wrap';

        const columnsPerList = Math.ceil(ALL_COLUMNS.length / 2);
        const columnLists = [document.createElement('div'), document.createElement('div')];

        columnLists.forEach((columnList, index) => {
            columnList.style.flex = '1';
            columnList.style.marginRight = index === 0 ? '10px' : '0';
            columnListContainer.appendChild(columnList);
        });

        ALL_COLUMNS.forEach((columnName, index) => {
            const listIndex = Math.floor(index / columnsPerList);
            const columnList = columnLists[listIndex];

            const label = document.createElement('label');
            label.style.display = 'block';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = hiddenColumns.includes(columnName);
            checkbox.addEventListener('change', function() {
                if (checkbox.checked) {
                    hiddenColumns.push(columnName);
                } else {
                    const columnIndex = hiddenColumns.indexOf(columnName);
                    if (columnIndex !== -1) {
                        hiddenColumns.splice(columnIndex, 1);
                    }
                }
                GM_setValue('hiddenColumns', hiddenColumns);
                hideColumns();
            });

            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(' ' + columnName));
            columnList.appendChild(label);
        });

        settingsContainer.appendChild(columnListContainer);
        document.body.appendChild(settingsContainer);
    }

    // Update checkbox states based on hidden columns
    function updateCheckboxes() {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(function(checkbox) {
            const columnName = checkbox.parentNode.textContent.trim();
            checkbox.checked = hiddenColumns.includes(columnName);
        });
    }

    // Wait for the settings button to appear and add a click event listener
    function waitForButton() {
        const buttonSelector = '#nav > div > div.header > div:nth-child(3)';
        const button = document.querySelector(buttonSelector);

        if (button) {
            button.addEventListener('click', function(event) {
                event.preventDefault();
                showSettingsGUI();
            });
        } else {
            setTimeout(waitForButton, 500);
        }
    }

    // Hide columns based on the hidden columns array
    function hideColumns() {
        const table = document.querySelector('.reservations-report-table');

        if (table) {
            const headerRow = table.querySelector('thead tr');
            const headerCells = headerRow ? Array.from(headerRow.cells) : [];

            headerCells.forEach((th, index) => {
                const columnName = th.textContent.trim().toUpperCase();

                if (hiddenColumns.includes(columnName)) {
                    th.style.display = 'none';

                    const dataRows = table.querySelectorAll('tbody tr');
                    dataRows.forEach(row => {
                        const cell = row.cells[index];
                        if (cell) {
                            cell.style.display = 'none';
                        }
                    });
                } else {
                    th.style.display = '';

                    const dataRows = table.querySelectorAll('tbody tr');
                    dataRows.forEach(row => {
                        const cell = row.cells[index];
                        if (cell) {
                            cell.style.display = '';
                        }
                    });
                }
            });
        }
    }

    // Wait for the table to appear and hide columns
    function waitForTableAndHideColumns() {
        const table = document.querySelector('.reservations-report-table');

        if (table) {
            hideColumns();
        } else {
            setTimeout(waitForTableAndHideColumns, 500);
        }
    }

    // Observe page changes and hide columns when the table appears
    function observePageChanges() {
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'childList') {
                    waitForTableAndHideColumns();
                }
            });
        });

        const config = { childList: true, subtree: true };
        observer.observe(document.body, config);
    }

    function checkAndClickExtendSession() {
        const extendSessionButton = document.querySelector('#app > div.popup-wrapper.small-popup > div > div.popup-content.normal-font > div > div.buttons > button.el-button.el-button--primary');
        if (extendSessionButton) {
            extendSessionButton.click();
            console.log('Extended Session Clicked');
        }
    }

    // Main function to initialize the script
    function main() {
        changeElementColors();
        waitForButton();
        observePageChanges();
        setInterval(checkAndClickExtendSession, 5000);
    }

    main();
})();
