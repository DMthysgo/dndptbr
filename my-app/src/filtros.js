import React from "react";

function Filtros() {
  return (
    <div style={{ textAlign: "center" }}>
      <input
        type="radio"
        name="attr_tab"
        class="sheet-tab-button sheet-tab-button1"
        value="1"
        title="No1"
      />
      <div class="sheet-icon sheet-icon-tab-Habilidades"></div>
      <span class="sheet-tab-label">Habilidades&nbsp;</span>
      <input
        type="radio"
        name="attr_tab"
        class="sheet-tab-button sheet-tab-button2"
        value="2"
        title="No2"
      />
      <div class="sheet-icon sheet-icon-tab-equipment"></div>
      <span class="sheet-tab-label">Equipamento e Combate&nbsp;</span>
      <input
        type="radio"
        name="attr_tab"
        class="sheet-tab-button sheet-tab-button3"
        value="3"
        title="No3"
      />
      <div class="sheet-icon sheet-icon-mount"></div>
      <span class="sheet-tab-label">Pets e Propriedades&nbsp;</span>
      <input
        type="radio"
        name="attr_tab"
        class="sheet-tab-button sheet-tab-button4"
        value="4"
        title="No4"
      />
      <div class="sheet-icon sheet-icon-tab-magic"></div>
      <span class="sheet-tab-label">Magias&nbsp;</span>
      <input
        type="radio"
        name="attr_tab"
        class="sheet-tab-button sheet-tab-button5"
        value="5"
        title="No5"
      />
      <div class="sheet-icon sheet-icon-tab-notebook"></div>
      <span class="sheet-tab-label">Anotações&nbsp;</span>
      <input
        type="radio"
        name="attr_tab"
        class="sheet-tab-button sheet-tab-button-all"
        value="6"
        title="Everything"
        checked
      />
      <span class="sheet-tab-label">Tudo</span>
    </div>
  );
}

export default Filtros;
