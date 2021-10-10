export const toolbox = {
  kind: 'categoryToolbox',
  contents: [
    {
      kind: 'category',
      name: 'Loops',
      colour: '#5ba55b',
      contents: [
        {
          kind: 'block',
          blockxml: `<block type="controls_repeat_ext">
     <value name="TIMES">
       <shadow type="math_number">
         <field name="NUM">10</field>
       </shadow>
     </value>
   </block>`,
        },
        {
          kind: 'block',
          blockxml: `    <block type="controls_whileUntil">
        <field name="MODE">WHILE</field>
      </block>`,
        },
        {
          kind: 'block',
          blockxml: `    <block type="controls_for">
        <field name="VAR" id="a:~Oo3dd$G}ExN2-PZCh">i</field>
        <value name="FROM">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>
        <value name="TO">
          <shadow type="math_number">
            <field name="NUM">10</field>
          </shadow>
        </value>
        <value name="BY">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>
      </block>`,
        },
        {
          kind: 'block',
          blockxml: ` <block type="controls_forEach">
        <field name="VAR" id="YdZp%x}jHaEo(d*?3_A;">j</field>
      </block>`,
        },
        {
          kind: 'block',
          blockxml: `   
        <block type="controls_flow_statements">
          <field name="FLOW">BREAK</field>
        </block>`,
        },
      ],
    },
    {
      kind: 'category',
      name: 'logic',
      colour: '210',
      contents: [
        {
          kind: 'block',
          type: 'controls_if',
        },
        {
          kind: 'block',
          type: 'controls_whileUntil',
        },
        {
          kind: 'block',
          blockxml: `<block type="logic_compare">
            <field name="OP">EQ</field>
          </block>`,
        },
        {
          kind: 'block',
          blockxml: `<block type="logic_operation">
          <field name="OP">AND</field>
        </block>`,
        },
        {
          kind: 'block',
          blockxml: `<block type="logic_boolean">
        <field name="BOOL">TRUE</field>
      </block>`,
        },
        { kind: 'block', type: 'logic_negate' },
        { kind: 'block', type: 'logic_null' },
        { kind: 'block', type: 'logic_ternary' },
      ],
    },
    {
      kind: 'category',
      name: 'Math',
      colour: '#5b67a5',
      contents: [
        {
          kind: 'block',
          blockxml: `    <block type="math_number">
        <field name="NUM">0</field>
      </block>`,
        },
        {
          kind: 'block',
          blockxml: `<block type="math_arithmetic">
        <field name="OP">ADD</field>
        <value name="A">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>
        <value name="B">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>
      </block>`,
        },
        {
          kind: 'block',
          blockxml: `    <block type="math_single">
        <field name="OP">ROOT</field>
        <value name="NUM">
          <shadow type="math_number">
            <field name="NUM">9</field>
          </shadow>
        </value>
      </block>`,
        },
        {
          kind: 'block',
          blockxml: `<block type="math_trig">
        <field name="OP">SIN</field>
        <value name="NUM">
          <shadow type="math_number">
            <field name="NUM">45</field>
          </shadow>
        </value>
      </block>`,
        },
        {
          kind: 'block',
          blockxml: `<block type="math_constant">
        <field name="CONSTANT">PI</field>
      </block>`,
        },
        {
          kind: 'block',
          blockxml: `    <block type="math_number_property">
        <mutation divisor_input="false"></mutation>
        <field name="PROPERTY">EVEN</field>
        <value name="NUMBER_TO_CHECK">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
      </block>`,
        },
        {
          kind: 'block',
          blockxml: `    <block type="math_round">
        <field name="OP">ROUND</field>
        <value name="NUM">
          <shadow type="math_number">
            <field name="NUM">3.1</field>
          </shadow>
        </value>
      </block>`,
        },
        {
          kind: 'block',
          blockxml: `<block type="math_on_list">
          <mutation op="SUM"></mutation>
          <field name="OP">SUM</field>
        </block>`,
        },
        {
          kind: 'block',
          blockxml: `    <block type="math_modulo">
        <value name="DIVIDEND">
          <shadow type="math_number">
            <field name="NUM">64</field>
          </shadow>
        </value>
        <value name="DIVISOR">
          <shadow type="math_number">
            <field name="NUM">10</field>
          </shadow>
        </value>
      </block>`,
        },
        {
          kind: 'block',
          blockxml: `    <block type="math_constrain">
        <value name="VALUE">
          <shadow type="math_number">
            <field name="NUM">50</field>
          </shadow>
        </value>
        <value name="LOW">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>
        <value name="HIGH">
          <shadow type="math_number">
            <field name="NUM">100</field>
          </shadow>
        </value>
      </block>`,
        },
        {
          kind: 'block',
          blockxml: `  <block type="math_random_int">
        <value name="FROM">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>
        <value name="TO">
          <shadow type="math_number">
            <field name="NUM">100</field>
          </shadow>
        </value>
      </block>`,
        },
        { kind: 'block', type: 'math_random_float' },
      ],
    },
    {
      kind: 'category',
      name: 'text',
      colour: '#5ba58c',
      contents: [
        {
          kind: 'block',
          blockxml: `    <block type="text">
          <field name="TEXT"></field>
        </block>`,
        },
        {
          kind: 'block',
          blockxml: `
        <block type="text_join">
          <mutation items="2"></mutation>
        </block>`,
        },
        {
          kind: 'block',
          blockxml: `    <block type="text_append">
        <field name="VAR" id="-O]*Wz)]VbSmB]W@kR=~">item</field>
        <value name="TEXT">
          <shadow type="text">
            <field name="TEXT"></field>
          </shadow>
        </value>
      </block>`,
        },
        {
          kind: 'block',
          blockxml: `
        <block type="text_length">
          <value name="VALUE">
            <shadow type="text">
              <field name="TEXT">abc</field>
            </shadow>
          </value>
        </block>`,
        },
        {
          kind: 'block',
          blockxml: `
        <block type="text_isEmpty">
          <value name="VALUE">
            <shadow type="text">
              <field name="TEXT"></field>
            </shadow>
          </value>
        </block>`,
        },
        {
          kind: 'block',
          blockxml: `    <block type="text_indexOf">
        <field name="END">FIRST</field>
        <value name="VALUE">
          <block type="variables_get">
            <field name="VAR" id="e=5Ke)U;9Jh(}sO[8ufJ">text</field>
          </block>
        </value>
        <value name="FIND">
          <shadow type="text">
            <field name="TEXT">abc</field>
          </shadow>
        </value>
      </block>`,
        },
        {
          kind: 'block',
          blockxml: `    <block type="text_charAt">
        <mutation at="true"></mutation>
        <field name="WHERE">FROM_START</field>
        <value name="VALUE">
          <block type="variables_get">
            <field name="VAR" id="e=5Ke)U;9Jh(}sO[8ufJ">text</field>
          </block>
        </value>
      </block>`,
        },
        {
          kind: 'block',
          blockxml: `    <block type="text_getSubstring">
        <mutation at1="true" at2="true"></mutation>
        <field name="WHERE1">FROM_START</field>
        <field name="WHERE2">FROM_START</field>
        <value name="STRING">
          <block type="variables_get">
            <field name="VAR" id="e=5Ke)U;9Jh(}sO[8ufJ">text</field>
          </block>
        </value>
      </block>`,
        },
        {
          kind: 'block',
          blockxml: `    <block type="text_changeCase">
        <field name="CASE">UPPERCASE</field>
        <value name="TEXT">
          <shadow type="text">
            <field name="TEXT">abc</field>
          </shadow>
        </value>
      </block>`,
        },
        {
          kind: 'block',
          blockxml: `  <block type="text_trim">
        <field name="MODE">BOTH</field>
        <value name="TEXT">
          <shadow type="text">
            <field name="TEXT">abc</field>
          </shadow>
        </value>
      </block>`,
        },
        {
          kind: 'block',
          blockxml: `    <block type="text_print">
        <value name="TEXT">
          <shadow type="text">
            <field name="TEXT">abc</field>
          </shadow>
        </value>
      </block>`,
        },
        /*       {
          kind: 'block',
          blockxml: `    <block type="text_prompt_ext">
        <mutation type="TEXT"></mutation>
        <field name="TYPE">TEXT</field>
        <value name="TEXT">
          <shadow type="text">
            <field name="TEXT">abc</field>
          </shadow>
        </value>
      </block>`,
        }, */
      ],
    },
    {
      kind: 'category',
      name: 'Lists',
      colour: '#745ba5',
      contents: [
        {
          kind: 'block',
          blockxml: ` <block type="lists_create_with">
          <mutation items="0"></mutation>
        </block>`,
        },
        {
          kind: 'block',
          blockxml: `<block type="lists_create_with">
        <mutation items="3"></mutation>
      </block>`,
        },
        {
          kind: 'block',
          blockxml: `  <block type="lists_repeat">
        <value name="NUM">
          <shadow type="math_number">
            <field name="NUM">5</field>
          </shadow>
        </value>
      </block>`,
        },
        { kind: 'block', type: 'lists_length' },
        {
          kind: 'block',
          blockxml: `    <block type="lists_indexOf">
        <field name="END">FIRST</field>
        <value name="VALUE">
          <block type="variables_get">
            <field name="VAR" id="SI7zr5S(=TA;_(uU4!]J">list</field>
          </block>
        </value>
      </block>`,
        },
        {
          kind: 'block',
          blockxml: ` <block type="lists_getIndex">
        <mutation statement="false" at="true"></mutation>
        <field name="MODE">GET</field>
        <field name="WHERE">FROM_START</field>
        <value name="VALUE">
          <block type="variables_get">
            <field name="VAR" id="SI7zr5S(=TA;_(uU4!]J">list</field>
          </block>
        </value>
      </block>`,
        },
        {
          kind: 'block',
          blockxml: `    <block type="lists_setIndex">
        <mutation at="true"></mutation>
        <field name="MODE">SET</field>
        <field name="WHERE">FROM_START</field>
        <value name="LIST">
          <block type="variables_get">
            <field name="VAR" id="SI7zr5S(=TA;_(uU4!]J">list</field>
          </block>
        </value>
      </block>`,
        },
        {
          kind: 'block',
          blockxml: `    <block type="lists_getSublist">
        <mutation at1="true" at2="true"></mutation>
        <field name="WHERE1">FROM_START</field>
        <field name="WHERE2">FROM_START</field>
        <value name="LIST">
          <block type="variables_get">
            <field name="VAR" id="SI7zr5S(=TA;_(uU4!]J">list</field>
          </block>
        </value>
      </block>`,
        },
        {
          kind: 'block',
          blockxml: ` <block type="lists_split">
        <mutation mode="SPLIT"></mutation>
        <field name="MODE">SPLIT</field>
        <value name="DELIM">
          <shadow type="text">
            <field name="TEXT">,</field>
          </shadow>
        </value>
      </block>`,
        },
        {
          kind: 'block',
          blockxml: `   <block type="lists_sort">
        <field name="TYPE">NUMERIC</field>
        <field name="DIRECTION">1</field>
      </block>`,
        },
      ],
    },
    {
      kind: 'category',
      name: 'Colour',
      colour: '#a5745b',
      contents: [
        {
          kind: 'block',
          blockxml: `    <block type="colour_picker">
     <field name="COLOUR">#ff0000</field>
   </block>`,
        },
        { kind: 'block', type: 'colour_random' },
        {
          kind: 'block',
          blockxml: ` <block type="colour_rgb">
        <value name="RED">
          <shadow type="math_number">
            <field name="NUM">100</field>
          </shadow>
        </value>
        <value name="GREEN">
          <shadow type="math_number">
            <field name="NUM">50</field>
          </shadow>
        </value>
        <value name="BLUE">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
      </block>`,
        },
        {
          kind: 'block',
          blockxml: ` <block type="colour_blend">
        <value name="COLOUR1">
          <shadow type="colour_picker">
            <field name="COLOUR">#ff0000</field>
          </shadow>
        </value>
        <value name="COLOUR2">
          <shadow type="colour_picker">
            <field name="COLOUR">#3333ff</field>
          </shadow>
        </value>
        <value name="RATIO">
          <shadow type="math_number">
            <field name="NUM">0.5</field>
          </shadow>
        </value>
      </block>`,
        },
      ],
    },
    { kind: 'sep' },
    {
      kind: 'category',
      name: 'Variables',
      colour: '#a55b80',
      custom: 'VARIABLE',
    },
    {
      kind: 'category',
      name: 'Procedures',
      colour: '#995ba5',
      custom: 'PROCEDURE',
    },
    { kind: 'sep' },
    {
      kind: 'category',
      name: 'canvas',
      colour: '#6600cc',
      contents: [
        {
          kind: 'block',
          blockxml: ` <block type="canvas_background_color">
    <value name="backgroundColor">
      <shadow type="colour_picker">
        <field name="COLOUR">#33ccff</field>
      </shadow>
    </value>
  </block>`,
        },
        {
          kind: 'block',
          blockxml: ` <block type="canvas_set_text_color">
    <value name="textColor">
      <shadow type="colour_picker">
        <field name="COLOUR">#000000</field>
      </shadow>
    </value>
  </block>`,
        },
        {
          kind: 'block',
          blockxml: ` <block type="canvas_text_size">
    <value name="textSize">
      <shadow type="math_number">
        <field name="NUM">3</field>

      </shadow>
    </value>
  </block>`,
        },
        { kind: 'block', type: 'canvas_width' },
        { kind: 'block', type: 'canvas_height' },
        {
          kind: 'block',
          blockxml: `<block type="canvas_set_cursor">
          <value name="x">
            <shadow type="math_number">
              <field name="NUM">0</field>
      
            </shadow>
          </value>
          <value name="y">
          <shadow type="math_number">
            <field name="NUM">0</field>
    
          </shadow>
        </value>
        </block>`,
        },
      ],
    },
    {
      kind: 'category',
      name: 'game',
      colour: '#FFAABB',
      contents: [
        {
          kind: 'block',
          type: 'game_setup',
        },
        { kind: 'block', type: 'game_duck' },
        { kind: 'block', type: 'game_chicken' },
      ],
    },
  ],
};
