import React from "react";

function cabecalho() {
  return (
    <div class="sheet-header" style={{ textAlign: "center" }}>
      <div class="sheet-header-block">
        <div class="sheet-undertext">Nome do Personagem</div>
        <input
          class="sheet-long-text-input"
          type="text"
          name="personagem_nome"
          placeholder="Fulanin"
          style={{ textalign: "center" }}
        />
      </div>
      <div class="sheet-header-block">
        <div class="sheet-undertext">Espécie</div>
        <select name="personagem_especie" style={{ textalign: "left" }}>
          <optgroup label="Comum">
            <option value="Anão">Anão</option>
            <option value="Draconato">Draconato</option>
            <option value="Elfo">Elfo</option>
            <option value="Gnomo">Gnomo</option>
            <option value="Halfling">Halfling</option>
            <option value="Humano" selected>
              Humano
            </option>
            <option value="Meio-Elfo">Meio-Elfo</option>
            <option value="Meio-Orc">Meio-Orc</option>
            <option value="Tiefling">Tiefling</option>
          </optgroup>
          <optgroup label="Incomum">
            <option value="Aarakocra">Aarakocra</option>
            <option value="Aasimar">Aasimar</option>
            <option value="Changeling">Changeling</option>
            <option value="Forjado">Forjado</option>
            <option value="Firbolg">Firbolg</option>
            <option value="Genasi">Genasi</option>
            <option value="Gith">Gith</option>
            <option value="Goliath">Goliath</option>
            <option value="Kenku">Kenku</option>
            <option value="Orc">Orc</option>
            <option value="Povo Lagarto">Povo Lagarto</option>
            <option value="Shifter">Shifter</option>
            <option value="Tabaxi">Tabaxi</option>
            <option value="Tritão">Tritão</option>
          </optgroup>
          <optgroup label="Monstruosas">
            <option value="Bugbear">Bugbear</option>
            <option value="Goblin">Goblin</option>
            <option value="Hobgoblin">Hobgoblin</option>
            <option value="Minotauro">Minotauro (Krynn)</option>
            <option value="Yuan-Ti">Yuan-Ti</option>
          </optgroup>
        </select>
      </div>
      <div class="sheet-header-block">
        <div class="sheet-undertext">Sub-espécie</div>
        <select name="personagem_sub_especie" style={{ textalign: "left" }}>
          <option value="none">Padrão</option>
        </select>
      </div>
      <div class="sheet-header-block">
        <div class="sheet-undertext">Classe</div>
        <select name="personagem_classe" style={{ textalign: "left" }}>
          <option value="Bárbaro">Bárbaro</option>
          <option value="Bardo">Bardo</option>
          <option value="Bruxo">Bruxo</option>
          <option value="Clérigo">Clérigo</option>
          <option value="Druida">Druida</option>
          <option value="Feiticeiro">Feiticeiro</option>
          <option value="Guerreiro">Guerreiro</option>
          <option value="Ladino">Ladino</option>
          <option value="Mago">Mago</option>
          <option value="Monge">Monge</option>
          <option value="Paladino">Paladino</option>
          <option value="Patrulheiro">Patrulheiro</option>
        </select>
      </div>
      <div class="sheet-header-block">
        <div class="sheet-undertext">Sub-Classe</div>
        <select name="personagem_sub_classe" style={{ textalign: "left" }}>
          <option value="none">Padrão</option>
        </select>
      </div>
      <br />
      <div class="sheet-header-block">
        <div class="sheet-undertext">Nível</div>
        <input
          class="sheet-numbox"
          style={{ width: 2 + "em", textalign: "center" }}
          type="text"
          name="personagem_nivel"
          value="1"
          readonly
        />
      </div>
      <div class="sheet-header-block">
        <div class="sheet-undertext">Experiência</div>
        <input
          class="sheet-long-numbox"
          style={{ width: 6 + "em", textalign: "center" }}
          type="number"
          name="personagem_xp"
          min="0"
          step="10"
          value="0"
          onchange="campoAlterado(this)"
        />
      </div>
      <div class="sheet-header-block">
        <div class="sheet-undertext">XP p/Levelup</div>
        <input
          class="sheet-long-numbox"
          style={{ width: 6 + "em", textalign: "center" }}
          type="text"
          name="personagem_xp_plus"
          min="0"
          step="1"
          value="300"
          readonly
        />
      </div>
      <div class="sheet-header-block">
        <div class="sheet-undertext">Inspiração</div>
        <input
          class="sheet-long-numbox"
          style={{ width: 4 + "em", textalign: "center" }}
          type="number"
          name="personagem_inspiracao"
          min="0"
          max="5"
          step="1"
          value="0"
        />
      </div>
      <div class="sheet-header-block">
        <div class="sheet-undertext">Proficiência</div>
        <input
          class="sheet-long-numbox"
          style={{ width: 4 + "em", textalign: "center" }}
          type="text"
          name="personagem_proficiencia"
          value="+2"
          readonly
        />
      </div>
      <div class="sheet-header-block">
        <div class="sheet-undertext">Iniciativa</div>
        <input
          class="sheet-long-numbox"
          style={{ width: 4 + "em", textalign: "center" }}
          type="text"
          name="personagem_iniciativa"
          value="+0"
        />
      </div>
      <div class="sheet-header-block">
        <div class="sheet-undertext">Alinhamento</div>
        <select name="personagem_alinhamento" style={{ textalign: "left" }}>
          <option value="Neutro bom">Neutro bom</option>
          <option value="Leal bom">Leal bom</option>
          <option value="Caótico bom">Caótico bom</option>
          <option value="Neutro">Neutro</option>
          <option value="Leal Neutro">Leal Neutro</option>
          <option value="Caótico Neutro">Caótico Neutro</option>
          <option value="Neutro mal">Neutro mal</option>
          <option value="Leal mal">Leal mal</option>
          <option value="Caótico mal">Caótico mal</option>
        </select>
      </div>
      <br />
      <span class="sheet-big-bold-fancy">Desloc.:</span>
      <div class="sheet-header-block">
        <div class="sheet-undertext">Base</div>
        <input
          class="sheet-long-numbox"
          style={{ width: 4 + "em", textalign: "center" }}
          type="text"
          name="personagem_deslocamento_base"
          value="9m"
          onchange="campoAlterado(this)"
          readonly
        />
      </div>
      <div class="sheet-header-block">
        <div class="sheet-undertext">Voo</div>
        <input
          class="sheet-long-numbox"
          style={{ width: 4 + "em", textalign: "center" }}
          type="text"
          name="personagem_deslocamento_voo"
          value="0m"
        />
      </div>
      <div class="sheet-header-block">
        <div class="sheet-undertext">Nado</div>
        <input
          class="sheet-long-numbox"
          style={{ width: 4 + "em", textalign: "center" }}
          type="text"
          name="personagem_deslocamento_nado"
          value="6m"
        />
      </div>
      <div class="sheet-header-block">
        <div class="sheet-undertext">Escalada</div>
        <input
          class="sheet-long-numbox"
          style={{ width: 4 + "em", textalign: "center" }}
          type="text"
          name="personagem_deslocamento_escalada"
          value="4.5m"
        />
      </div>
      <div class="sheet-header-block">
        <div class="sheet-undertext">SaltoH</div>
        <input
          class="sheet-long-numbox"
          style={{ width: 4 + "em", textalign: "center" }}
          type="text"
          name="personagem_deslocamento_saltoh"
          value="3m"
        />
      </div>
      <div class="sheet-header-block">
        <div class="sheet-undertext">SaltoV</div>
        <input
          class="sheet-long-numbox"
          style={{ width: 4 + "em", textalign: "center" }}
          type="text"
          name="personagem_deslocamento_saltov"
          value="1m"
        />
      </div>
      <div class="sheet-header-block">
        <div class="sheet-undertext">Ficha</div>
        <button style={{ textalign: "center" }} onclick="salvarFicha()">
          add/att
        </button>
      </div>
    </div>
  );
}

export default cabecalho;
