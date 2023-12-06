let arr = [
       {  category:"Differentiation",
       formula:[
        {
          category:"Differentiation",
          raw:"d/dxx^n = nx^(n-1)",
          math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
          <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="21" data-semantic-children="18,20" data-semantic-content="9" data-semantic-speech="StartFraction d Over d x EndFraction x Superscript n Baseline equals n x Superscript n minus 1">
            <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="18" data-semantic-children="5,8" data-semantic-content="17" data-semantic-parent="21">
              <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="5" data-semantic-children="0,4" data-semantic-parent="18">
                <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="0" data-semantic-parent="5">d</mi>
                <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:simple;clearspeak:unit" data-semantic-id="4" data-semantic-children="1,2" data-semantic-content="3" data-semantic-parent="5">
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="1" data-semantic-parent="4">d</mi>
                  <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="3" data-semantic-parent="4" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="4">x</mi>
                </mrow>
              </mfrac>
              <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="17" data-semantic-parent="18" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
              <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="8" data-semantic-children="6,7" data-semantic-parent="18">
                <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="6" data-semantic-parent="8">x</mi>
                <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="7" data-semantic-parent="8">n</mi>
              </msup>
            </mrow>
            <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="9" data-semantic-parent="21" data-semantic-operator="relseq,=">=</mo>
            <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="20" data-semantic-children="10,16" data-semantic-content="19" data-semantic-parent="21">
              <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="10" data-semantic-parent="20">n</mi>
              <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="19" data-semantic-parent="20" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
              <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="16" data-semantic-children="11,15" data-semantic-parent="20">
                <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="11" data-semantic-parent="16">x</mi>
                <mrow data-semantic-type="infixop" data-semantic-role="subtraction" data-semantic-id="15" data-semantic-children="12,14" data-semantic-content="13" data-semantic-parent="16">
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="12" data-semantic-parent="15">n</mi>
                  <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="13" data-semantic-parent="15" data-semantic-operator="infixop,-">-</mo>
                  <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="14" data-semantic-parent="15">1</mn>
                </mrow>
              </msup>
            </mrow>
          </mstyle>
        </math>`
        },
        {
            
            raw:"d/dxa^x = a^x ln(a)",
            math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
            <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="24" data-semantic-children="21,23" data-semantic-content="9" data-semantic-speech="StartFraction d Over d x EndFraction a Superscript x Baseline equals a Superscript x Baseline ln left parenthesis a right parenthesis">
              <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="21" data-semantic-children="5,8" data-semantic-content="20" data-semantic-parent="24">
                <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="5" data-semantic-children="0,4" data-semantic-parent="21">
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="0" data-semantic-parent="5">d</mi>
                  <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:simple;clearspeak:unit" data-semantic-id="4" data-semantic-children="1,2" data-semantic-content="3" data-semantic-parent="5">
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="1" data-semantic-parent="4">d</mi>
                    <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="3" data-semantic-parent="4" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="4">x</mi>
                  </mrow>
                </mfrac>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="20" data-semantic-parent="21" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="8" data-semantic-children="6,7" data-semantic-parent="21">
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="6" data-semantic-parent="8">a</mi>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="7" data-semantic-parent="8">x</mi>
                </msup>
              </mrow>
              <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="9" data-semantic-parent="24" data-semantic-operator="relseq,=">=</mo>
              <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="23" data-semantic-children="12,19" data-semantic-content="22" data-semantic-parent="24">
                <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="12" data-semantic-children="10,11" data-semantic-parent="23">
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="10" data-semantic-parent="12">a</mi>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="11" data-semantic-parent="12">x</mi>
                </msup>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="22" data-semantic-parent="23" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="19" data-semantic-children="13,17" data-semantic-content="18,13" data-semantic-parent="23">
                  <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="13" data-semantic-parent="19" data-semantic-operator="appl">ln</mi>
                  <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="18" data-semantic-parent="19" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                  <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="17" data-semantic-children="15" data-semantic-content="14,16" data-semantic-parent="19">
                    <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="14" data-semantic-parent="17" data-semantic-operator="fenced">(</mo>
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="15" data-semantic-parent="17">a</mi>
                    <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="16" data-semantic-parent="17" data-semantic-operator="fenced">)</mo>
                  </mrow>
                </mrow>
              </mrow>
            </mstyle>
          </math>`
        },
        {   
            
            raw:"d/dxln(x)= 1/x",
            math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
            <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="19" data-semantic-children="18,16" data-semantic-content="13" data-semantic-speech="StartFraction d Over d x EndFraction ln left parenthesis x right parenthesis equals StartFraction 1 Over x EndFraction">
              <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="18" data-semantic-children="5,12" data-semantic-content="17" data-semantic-parent="19">
                <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="5" data-semantic-children="0,4" data-semantic-parent="18">
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="0" data-semantic-parent="5">d</mi>
                  <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:simple;clearspeak:unit" data-semantic-id="4" data-semantic-children="1,2" data-semantic-content="3" data-semantic-parent="5">
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="1" data-semantic-parent="4">d</mi>
                    <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="3" data-semantic-parent="4" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="4">x</mi>
                  </mrow>
                </mfrac>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="17" data-semantic-parent="18" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="12" data-semantic-children="6,10" data-semantic-content="11,6" data-semantic-parent="18">
                  <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="6" data-semantic-parent="12" data-semantic-operator="appl">ln</mi>
                  <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="11" data-semantic-parent="12" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                  <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="10" data-semantic-children="8" data-semantic-content="7,9" data-semantic-parent="12">
                    <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="7" data-semantic-parent="10" data-semantic-operator="fenced">(</mo>
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="8" data-semantic-parent="10">x</mi>
                    <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="9" data-semantic-parent="10" data-semantic-operator="fenced">)</mo>
                  </mrow>
                </mrow>
              </mrow>
              <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="13" data-semantic-parent="19" data-semantic-operator="relseq,=">=</mo>
              <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="16" data-semantic-children="14,15" data-semantic-parent="19">
                <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="14" data-semantic-parent="16">1</mn>
                <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="15" data-semantic-parent="16">x</mi>
              </mfrac>
            </mstyle>
          </math>`
        },
        {
            
            raw:"(f+g)^'=f^'+g^'",
            math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
            <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="18" data-semantic-children="8,17" data-semantic-content="9" data-semantic-speech="left parenthesis f plus g right parenthesis prime equals f prime plus g prime">
              <msup data-semantic-type="superscript" data-semantic-role="leftright" data-semantic-id="8" data-semantic-children="6,7" data-semantic-parent="18">
                <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="6" data-semantic-children="5" data-semantic-content="0,4" data-semantic-parent="8">
                  <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="0" data-semantic-parent="6" data-semantic-operator="fenced">(</mo>
                  <mrow data-semantic-type="infixop" data-semantic-role="addition" data-semantic-id="5" data-semantic-children="1,3" data-semantic-content="2" data-semantic-parent="6">
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="1" data-semantic-parent="5">f</mi>
                    <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="2" data-semantic-parent="5" data-semantic-operator="infixop,+">+</mo>
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="3" data-semantic-parent="5">g</mi>
                  </mrow>
                  <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="4" data-semantic-parent="6" data-semantic-operator="fenced">)</mo>
                </mrow>
                <mo data-semantic-type="punctuation" data-semantic-role="prime" data-semantic-id="7" data-semantic-parent="8">&#x2032;</mo>
              </msup>
              <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="9" data-semantic-parent="18" data-semantic-operator="relseq,=">=</mo>
              <mrow data-semantic-type="infixop" data-semantic-role="addition" data-semantic-id="17" data-semantic-children="12,16" data-semantic-content="13" data-semantic-parent="18">
                <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="12" data-semantic-children="10,11" data-semantic-parent="17">
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="10" data-semantic-parent="12">f</mi>
                  <mo data-semantic-type="punctuation" data-semantic-role="prime" data-semantic-id="11" data-semantic-parent="12">&#x2032;</mo>
                </msup>
                <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="13" data-semantic-parent="17" data-semantic-operator="infixop,+">+</mo>
                <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="16" data-semantic-children="14,15" data-semantic-parent="17">
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="14" data-semantic-parent="16">g</mi>
                  <mo data-semantic-type="punctuation" data-semantic-role="prime" data-semantic-id="15" data-semantic-parent="16">&#x2032;</mo>
                </msup>
              </mrow>
            </mstyle>
          </math>`
        },
        {
            
            raw:"(fg)^'=fg^'+f^'g",
            math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
            <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="24" data-semantic-children="8,23" data-semantic-content="9" data-semantic-speech="left parenthesis f g right parenthesis prime equals f g Superscript prime Baseline plus f prime g">
              <msup data-semantic-type="superscript" data-semantic-role="leftright" data-semantic-id="8" data-semantic-children="6,7" data-semantic-parent="24">
                <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="6" data-semantic-children="5" data-semantic-content="0,3" data-semantic-parent="8">
                  <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="0" data-semantic-parent="6" data-semantic-operator="fenced">(</mo>
                  <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:simple;clearspeak:unit" data-semantic-id="5" data-semantic-children="1,2" data-semantic-content="4" data-semantic-parent="6">
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="1" data-semantic-parent="5">f</mi>
                    <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="4" data-semantic-parent="5" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="5">g</mi>
                  </mrow>
                  <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="3" data-semantic-parent="6" data-semantic-operator="fenced">)</mo>
                </mrow>
                <mo data-semantic-type="punctuation" data-semantic-role="prime" data-semantic-id="7" data-semantic-parent="8">&#x2032;</mo>
              </msup>
              <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="9" data-semantic-parent="24" data-semantic-operator="relseq,=">=</mo>
              <mrow data-semantic-type="infixop" data-semantic-role="addition" data-semantic-id="23" data-semantic-children="20,22" data-semantic-content="14" data-semantic-parent="24">
                <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="20" data-semantic-children="10,13" data-semantic-content="19" data-semantic-parent="23">
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="10" data-semantic-parent="20">f</mi>
                  <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="19" data-semantic-parent="20" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                  <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="13" data-semantic-children="11,12" data-semantic-parent="20">
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="11" data-semantic-parent="13">g</mi>
                    <mo data-semantic-type="punctuation" data-semantic-role="prime" data-semantic-id="12" data-semantic-parent="13">&#x2032;</mo>
                  </msup>
                </mrow>
                <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="14" data-semantic-parent="23" data-semantic-operator="infixop,+">+</mo>
                <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="22" data-semantic-children="17,18" data-semantic-content="21" data-semantic-parent="23">
                  <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="17" data-semantic-children="15,16" data-semantic-parent="22">
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="15" data-semantic-parent="17">f</mi>
                    <mo data-semantic-type="punctuation" data-semantic-role="prime" data-semantic-id="16" data-semantic-parent="17">&#x2032;</mo>
                  </msup>
                  <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="21" data-semantic-parent="22" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="18" data-semantic-parent="22">g</mi>
                </mrow>
              </mrow>
            </mstyle>
          </math>`
        },
        {
            
            raw:"(f/g)^'=(gf^'-fg^')/g^2",
            math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
            <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="27" data-semantic-children="7,26" data-semantic-content="8" data-semantic-speech="left parenthesis StartFraction f Over g EndFraction right parenthesis prime equals StartFraction g f Superscript prime Baseline minus f g Superscript prime Baseline Over g squared EndFraction">
              <msup data-semantic-type="superscript" data-semantic-role="leftright" data-semantic-id="7" data-semantic-children="5,6" data-semantic-parent="27">
                <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="5" data-semantic-children="3" data-semantic-content="0,4" data-semantic-parent="7">
                  <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="0" data-semantic-parent="5" data-semantic-operator="fenced">(</mo>
                  <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="3" data-semantic-children="1,2" data-semantic-parent="5">
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="1" data-semantic-parent="3">f</mi>
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="3">g</mi>
                  </mfrac>
                  <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="4" data-semantic-parent="5" data-semantic-operator="fenced">)</mo>
                </mrow>
                <mo data-semantic-type="punctuation" data-semantic-role="prime" data-semantic-id="6" data-semantic-parent="7">&#x2032;</mo>
              </msup>
              <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="8" data-semantic-parent="27" data-semantic-operator="relseq,=">=</mo>
              <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="26" data-semantic-children="22,25" data-semantic-parent="27">
                <mrow data-semantic-type="infixop" data-semantic-role="subtraction" data-semantic-id="22" data-semantic-children="19,21" data-semantic-content="13" data-semantic-parent="26">
                  <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="19" data-semantic-children="9,12" data-semantic-content="18" data-semantic-parent="22">
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="9" data-semantic-parent="19">g</mi>
                    <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="18" data-semantic-parent="19" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                    <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="12" data-semantic-children="10,11" data-semantic-parent="19">
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="10" data-semantic-parent="12">f</mi>
                      <mo data-semantic-type="punctuation" data-semantic-role="prime" data-semantic-id="11" data-semantic-parent="12">&#x2032;</mo>
                    </msup>
                  </mrow>
                  <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="13" data-semantic-parent="22" data-semantic-operator="infixop,-">-</mo>
                  <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="21" data-semantic-children="14,17" data-semantic-content="20" data-semantic-parent="22">
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="14" data-semantic-parent="21">f</mi>
                    <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="20" data-semantic-parent="21" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                    <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="17" data-semantic-children="15,16" data-semantic-parent="21">
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="15" data-semantic-parent="17">g</mi>
                      <mo data-semantic-type="punctuation" data-semantic-role="prime" data-semantic-id="16" data-semantic-parent="17">&#x2032;</mo>
                    </msup>
                  </mrow>
                </mrow>
                <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="25" data-semantic-children="23,24" data-semantic-parent="26">
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="23" data-semantic-parent="25">g</mi>
                  <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="24" data-semantic-parent="25">2</mn>
                </msup>
              </mfrac>
            </mstyle>
          </math>`
        },
        {
            

            raw:"d/dx(f(g(x))=f^'(g(x))g^'(x))",
            math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
            <mstyle displaystyle="true" data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="51" data-semantic-children="5,49" data-semantic-content="50" data-semantic-speech="StartFraction d Over d x EndFraction left parenthesis f left parenthesis g left parenthesis x right parenthesis right parenthesis equals f prime left parenthesis g left parenthesis x right parenthesis right parenthesis g prime left parenthesis x right parenthesis right parenthesis">
              <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="5" data-semantic-children="0,4" data-semantic-parent="51">
                <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="0" data-semantic-parent="5">d</mi>
                <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:simple;clearspeak:unit" data-semantic-id="4" data-semantic-children="1,2" data-semantic-content="3" data-semantic-parent="5">
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="1" data-semantic-parent="4">d</mi>
                  <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="3" data-semantic-parent="4" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="4">x</mi>
                </mrow>
              </mfrac>
              <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="50" data-semantic-parent="51" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
              <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="49" data-semantic-children="48" data-semantic-content="6,45" data-semantic-parent="51">
                <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="6" data-semantic-parent="49" data-semantic-operator="fenced">(</mo>
                <mrow data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="48" data-semantic-children="19,47" data-semantic-content="20" data-semantic-parent="49">
                  <mrow data-semantic-type="appl" data-semantic-role="simple function" data-semantic-annotation="clearspeak:simple" data-semantic-id="19" data-semantic-children="7,17" data-semantic-content="18,7" data-semantic-parent="48">
                    <mi data-semantic-type="identifier" data-semantic-role="simple function" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="7" data-semantic-parent="19" data-semantic-operator="appl">f</mi>
                    <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="18" data-semantic-parent="19" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                    <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="17" data-semantic-children="15" data-semantic-content="8,16" data-semantic-parent="19">
                      <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="8" data-semantic-parent="17" data-semantic-operator="fenced">(</mo>
                      <mrow data-semantic-type="appl" data-semantic-role="simple function" data-semantic-annotation="clearspeak:simple" data-semantic-id="15" data-semantic-children="9,13" data-semantic-content="14,9" data-semantic-parent="17">
                        <mi data-semantic-type="identifier" data-semantic-role="simple function" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="9" data-semantic-parent="15" data-semantic-operator="appl">g</mi>
                        <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="14" data-semantic-parent="15" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                        <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="13" data-semantic-children="11" data-semantic-content="10,12" data-semantic-parent="15">
                          <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="10" data-semantic-parent="13" data-semantic-operator="fenced">(</mo>
                          <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="11" data-semantic-parent="13">x</mi>
                          <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="12" data-semantic-parent="13" data-semantic-operator="fenced">)</mo>
                        </mrow>
                      </mrow>
                      <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="16" data-semantic-parent="17" data-semantic-operator="fenced">)</mo>
                    </mrow>
                  </mrow>
                  <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="20" data-semantic-parent="48" data-semantic-operator="relseq,=">=</mo>
                  <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="47" data-semantic-children="35,44" data-semantic-content="46" data-semantic-parent="48">
                    <mrow data-semantic-type="appl" data-semantic-role="simple function" data-semantic-annotation="clearspeak:simple" data-semantic-id="35" data-semantic-children="23,33" data-semantic-content="34,21" data-semantic-parent="47">
                      <msup data-semantic-type="superscript" data-semantic-role="simple function" data-semantic-id="23" data-semantic-children="21,22" data-semantic-parent="35">
                        <mi data-semantic-type="identifier" data-semantic-role="simple function" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="21" data-semantic-parent="23" data-semantic-operator="appl">f</mi>
                        <mo data-semantic-type="punctuation" data-semantic-role="prime" data-semantic-id="22" data-semantic-parent="23">&#x2032;</mo>
                      </msup>
                      <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="34" data-semantic-parent="35" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                      <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="33" data-semantic-children="31" data-semantic-content="24,32" data-semantic-parent="35">
                        <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="24" data-semantic-parent="33" data-semantic-operator="fenced">(</mo>
                        <mrow data-semantic-type="appl" data-semantic-role="simple function" data-semantic-annotation="clearspeak:simple" data-semantic-id="31" data-semantic-children="25,29" data-semantic-content="30,25" data-semantic-parent="33">
                          <mi data-semantic-type="identifier" data-semantic-role="simple function" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="25" data-semantic-parent="31" data-semantic-operator="appl">g</mi>
                          <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="30" data-semantic-parent="31" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                          <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="29" data-semantic-children="27" data-semantic-content="26,28" data-semantic-parent="31">
                            <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="26" data-semantic-parent="29" data-semantic-operator="fenced">(</mo>
                            <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="27" data-semantic-parent="29">x</mi>
                            <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="28" data-semantic-parent="29" data-semantic-operator="fenced">)</mo>
                          </mrow>
                        </mrow>
                        <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="32" data-semantic-parent="33" data-semantic-operator="fenced">)</mo>
                      </mrow>
                    </mrow>
                    <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="46" data-semantic-parent="47" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                    <mrow data-semantic-type="appl" data-semantic-role="simple function" data-semantic-annotation="clearspeak:simple" data-semantic-id="44" data-semantic-children="38,42" data-semantic-content="43,36" data-semantic-parent="47">
                      <msup data-semantic-type="superscript" data-semantic-role="simple function" data-semantic-id="38" data-semantic-children="36,37" data-semantic-parent="44">
                        <mi data-semantic-type="identifier" data-semantic-role="simple function" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="36" data-semantic-parent="38" data-semantic-operator="appl">g</mi>
                        <mo data-semantic-type="punctuation" data-semantic-role="prime" data-semantic-id="37" data-semantic-parent="38">&#x2032;</mo>
                      </msup>
                      <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="43" data-semantic-parent="44" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                      <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="42" data-semantic-children="40" data-semantic-content="39,41" data-semantic-parent="44">
                        <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="39" data-semantic-parent="42" data-semantic-operator="fenced">(</mo>
                        <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="40" data-semantic-parent="42">x</mi>
                        <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="41" data-semantic-parent="42" data-semantic-operator="fenced">)</mo>
                      </mrow>
                    </mrow>
                  </mrow>
                </mrow>
                <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="45" data-semantic-parent="49" data-semantic-operator="fenced">)</mo>
              </mrow>
            </mstyle>
          </math>`
        },
        {
            raw:"d/dx(e^(ax))=ae^(ax)",
            math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
            <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="27" data-semantic-children="24,26" data-semantic-content="15" data-semantic-speech="StartFraction d Over d x EndFraction left parenthesis e Superscript a x Baseline right parenthesis equals a e Superscript a x">
              <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="24" data-semantic-children="5,14" data-semantic-content="23" data-semantic-parent="27">
                <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="5" data-semantic-children="0,4" data-semantic-parent="24">
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="0" data-semantic-parent="5">d</mi>
                  <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:simple;clearspeak:unit" data-semantic-id="4" data-semantic-children="1,2" data-semantic-content="3" data-semantic-parent="5">
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="1" data-semantic-parent="4">d</mi>
                    <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="3" data-semantic-parent="4" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="4">x</mi>
                  </mrow>
                </mfrac>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="23" data-semantic-parent="24" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="14" data-semantic-children="12" data-semantic-content="6,13" data-semantic-parent="24">
                  <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="6" data-semantic-parent="14" data-semantic-operator="fenced">(</mo>
                  <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="12" data-semantic-children="7,11" data-semantic-parent="14">
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="7" data-semantic-parent="12">e</mi>
                    <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:simple;clearspeak:unit" data-semantic-id="11" data-semantic-children="8,9" data-semantic-content="10" data-semantic-parent="12">
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="8" data-semantic-parent="11">a</mi>
                      <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="10" data-semantic-parent="11" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="9" data-semantic-parent="11">x</mi>
                    </mrow>
                  </msup>
                  <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="13" data-semantic-parent="14" data-semantic-operator="fenced">)</mo>
                </mrow>
              </mrow>
              <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="15" data-semantic-parent="27" data-semantic-operator="relseq,=">=</mo>
              <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="26" data-semantic-children="16,22" data-semantic-content="25" data-semantic-parent="27">
                <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="16" data-semantic-parent="26">a</mi>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="25" data-semantic-parent="26" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="22" data-semantic-children="17,21" data-semantic-parent="26">
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="17" data-semantic-parent="22">e</mi>
                  <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:simple;clearspeak:unit" data-semantic-id="21" data-semantic-children="18,19" data-semantic-content="20" data-semantic-parent="22">
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="18" data-semantic-parent="21">a</mi>
                    <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="20" data-semantic-parent="21" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="19" data-semantic-parent="21">x</mi>
                  </mrow>
                </msup>
              </mrow>
            </mstyle>
          </math>`
        },
        {
            raw:"d/dx(sin(x))=cos(x)",
            math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
            <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="26" data-semantic-children="25,23" data-semantic-content="16" data-semantic-speech="StartFraction d Over d x EndFraction left parenthesis sine left parenthesis x right parenthesis right parenthesis equals cosine left parenthesis x right parenthesis">
              <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="25" data-semantic-children="5,15" data-semantic-content="24" data-semantic-parent="26">
                <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="5" data-semantic-children="0,4" data-semantic-parent="25">
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="0" data-semantic-parent="5">d</mi>
                  <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:simple;clearspeak:unit" data-semantic-id="4" data-semantic-children="1,2" data-semantic-content="3" data-semantic-parent="5">
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="1" data-semantic-parent="4">d</mi>
                    <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="3" data-semantic-parent="4" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="4">x</mi>
                  </mrow>
                </mfrac>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="24" data-semantic-parent="25" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="15" data-semantic-children="13" data-semantic-content="6,14" data-semantic-parent="25">
                  <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="6" data-semantic-parent="15" data-semantic-operator="fenced">(</mo>
                  <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="13" data-semantic-children="7,11" data-semantic-content="12,7" data-semantic-parent="15">
                    <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="7" data-semantic-parent="13" data-semantic-operator="appl">sin</mi>
                    <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="12" data-semantic-parent="13" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                    <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="11" data-semantic-children="9" data-semantic-content="8,10" data-semantic-parent="13">
                      <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="8" data-semantic-parent="11" data-semantic-operator="fenced">(</mo>
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="9" data-semantic-parent="11">x</mi>
                      <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="10" data-semantic-parent="11" data-semantic-operator="fenced">)</mo>
                    </mrow>
                  </mrow>
                  <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="14" data-semantic-parent="15" data-semantic-operator="fenced">)</mo>
                </mrow>
              </mrow>
              <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="16" data-semantic-parent="26" data-semantic-operator="relseq,=">=</mo>
              <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="23" data-semantic-children="17,21" data-semantic-content="22,17" data-semantic-parent="26">
                <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="17" data-semantic-parent="23" data-semantic-operator="appl">cos</mi>
                <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="22" data-semantic-parent="23" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="21" data-semantic-children="19" data-semantic-content="18,20" data-semantic-parent="23">
                  <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="18" data-semantic-parent="21" data-semantic-operator="fenced">(</mo>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="19" data-semantic-parent="21">x</mi>
                  <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="20" data-semantic-parent="21" data-semantic-operator="fenced">)</mo>
                </mrow>
              </mrow>
            </mstyle>
          </math>`
        },
        {
            raw:"d/dx(cos(x))=-sin(x)",
            math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
            <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="28" data-semantic-children="26,27" data-semantic-content="16" data-semantic-speech="StartFraction d Over d x EndFraction left parenthesis cosine left parenthesis x right parenthesis right parenthesis equals minus sine left parenthesis x right parenthesis">
              <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="26" data-semantic-children="5,15" data-semantic-content="25" data-semantic-parent="28">
                <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="5" data-semantic-children="0,4" data-semantic-parent="26">
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="0" data-semantic-parent="5">d</mi>
                  <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:simple;clearspeak:unit" data-semantic-id="4" data-semantic-children="1,2" data-semantic-content="3" data-semantic-parent="5">
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="1" data-semantic-parent="4">d</mi>
                    <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="3" data-semantic-parent="4" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="4">x</mi>
                  </mrow>
                </mfrac>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="25" data-semantic-parent="26" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="15" data-semantic-children="13" data-semantic-content="6,14" data-semantic-parent="26">
                  <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="6" data-semantic-parent="15" data-semantic-operator="fenced">(</mo>
                  <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="13" data-semantic-children="7,11" data-semantic-content="12,7" data-semantic-parent="15">
                    <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="7" data-semantic-parent="13" data-semantic-operator="appl">cos</mi>
                    <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="12" data-semantic-parent="13" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                    <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="11" data-semantic-children="9" data-semantic-content="8,10" data-semantic-parent="13">
                      <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="8" data-semantic-parent="11" data-semantic-operator="fenced">(</mo>
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="9" data-semantic-parent="11">x</mi>
                      <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="10" data-semantic-parent="11" data-semantic-operator="fenced">)</mo>
                    </mrow>
                  </mrow>
                  <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="14" data-semantic-parent="15" data-semantic-operator="fenced">)</mo>
                </mrow>
              </mrow>
              <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="16" data-semantic-parent="28" data-semantic-operator="relseq,=">=</mo>
              <mrow data-semantic-type="prefixop" data-semantic-role="negative" data-semantic-id="27" data-semantic-children="24" data-semantic-content="17" data-semantic-parent="28">
                <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="17" data-semantic-parent="27" data-semantic-operator="prefixop,-">-</mo>
                <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="24" data-semantic-children="18,22" data-semantic-content="23,18" data-semantic-parent="27">
                  <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="18" data-semantic-parent="24" data-semantic-operator="appl">sin</mi>
                  <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="23" data-semantic-parent="24" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                  <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="22" data-semantic-children="20" data-semantic-content="19,21" data-semantic-parent="24">
                    <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="19" data-semantic-parent="22" data-semantic-operator="fenced">(</mo>
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="20" data-semantic-parent="22">x</mi>
                    <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="21" data-semantic-parent="22" data-semantic-operator="fenced">)</mo>
                  </mrow>
                </mrow>
              </mrow>
            </mstyle>
          </math>`
        },
        {
            raw:"d/dx(tan(x))=sec^2(x)",
            math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
            <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="28" data-semantic-children="27,25" data-semantic-content="16" data-semantic-speech="StartFraction d Over d x EndFraction left parenthesis tangent left parenthesis x right parenthesis right parenthesis equals secant squared left parenthesis x right parenthesis">
              <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="27" data-semantic-children="5,15" data-semantic-content="26" data-semantic-parent="28">
                <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="5" data-semantic-children="0,4" data-semantic-parent="27">
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="0" data-semantic-parent="5">d</mi>
                  <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:simple;clearspeak:unit" data-semantic-id="4" data-semantic-children="1,2" data-semantic-content="3" data-semantic-parent="5">
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="1" data-semantic-parent="4">d</mi>
                    <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="3" data-semantic-parent="4" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="4">x</mi>
                  </mrow>
                </mfrac>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="26" data-semantic-parent="27" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="15" data-semantic-children="13" data-semantic-content="6,14" data-semantic-parent="27">
                  <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="6" data-semantic-parent="15" data-semantic-operator="fenced">(</mo>
                  <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="13" data-semantic-children="7,11" data-semantic-content="12,7" data-semantic-parent="15">
                    <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="7" data-semantic-parent="13" data-semantic-operator="appl">tan</mi>
                    <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="12" data-semantic-parent="13" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                    <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="11" data-semantic-children="9" data-semantic-content="8,10" data-semantic-parent="13">
                      <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="8" data-semantic-parent="11" data-semantic-operator="fenced">(</mo>
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="9" data-semantic-parent="11">x</mi>
                      <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="10" data-semantic-parent="11" data-semantic-operator="fenced">)</mo>
                    </mrow>
                  </mrow>
                  <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="14" data-semantic-parent="15" data-semantic-operator="fenced">)</mo>
                </mrow>
              </mrow>
              <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="16" data-semantic-parent="28" data-semantic-operator="relseq,=">=</mo>
              <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="25" data-semantic-children="19,23" data-semantic-content="24,17" data-semantic-parent="28">
                <msup data-semantic-type="superscript" data-semantic-role="prefix function" data-semantic-id="19" data-semantic-children="17,18" data-semantic-parent="25">
                  <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="17" data-semantic-parent="19" data-semantic-operator="appl">sec</mi>
                  <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="18" data-semantic-parent="19">2</mn>
                </msup>
                <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="24" data-semantic-parent="25" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="23" data-semantic-children="21" data-semantic-content="20,22" data-semantic-parent="25">
                  <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="20" data-semantic-parent="23" data-semantic-operator="fenced">(</mo>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="21" data-semantic-parent="23">x</mi>
                  <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="22" data-semantic-parent="23" data-semantic-operator="fenced">)</mo>
                </mrow>
              </mrow>
            </mstyle>
          </math>`
        },
        {
           raw:"d/dx(cot(x))=-csc^2(x)",
           math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
           <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="27" data-semantic-children="25,26" data-semantic-content="13" data-semantic-speech="StartFraction d Over d x EndFraction cotangent left parenthesis x right parenthesis equals minus cosecant squared left parenthesis x right parenthesis">
             <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="25" data-semantic-children="5,12" data-semantic-content="24" data-semantic-parent="27">
               <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="5" data-semantic-children="0,4" data-semantic-parent="25">
                 <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="0" data-semantic-parent="5">d</mi>
                 <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:simple;clearspeak:unit" data-semantic-id="4" data-semantic-children="1,2" data-semantic-content="3" data-semantic-parent="5">
                   <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="1" data-semantic-parent="4">d</mi>
                   <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="3" data-semantic-parent="4" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                   <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="4">x</mi>
                 </mrow>
               </mfrac>
               <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="24" data-semantic-parent="25" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
               <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="12" data-semantic-children="6,10" data-semantic-content="11,6" data-semantic-parent="25">
                 <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="6" data-semantic-parent="12" data-semantic-operator="appl">cot</mi>
                 <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="11" data-semantic-parent="12" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                 <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="10" data-semantic-children="8" data-semantic-content="7,9" data-semantic-parent="12">
                   <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="7" data-semantic-parent="10" data-semantic-operator="fenced">(</mo>
                   <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="8" data-semantic-parent="10">x</mi>
                   <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="9" data-semantic-parent="10" data-semantic-operator="fenced">)</mo>
                 </mrow>
               </mrow>
             </mrow>
             <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="13" data-semantic-parent="27" data-semantic-operator="relseq,=">=</mo>
             <mrow data-semantic-type="prefixop" data-semantic-role="negative" data-semantic-id="26" data-semantic-children="23" data-semantic-content="14" data-semantic-parent="27">
               <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="14" data-semantic-parent="26" data-semantic-operator="prefixop,-">-</mo>
               <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="23" data-semantic-children="17,21" data-semantic-content="22,15" data-semantic-parent="26">
                 <msup data-semantic-type="superscript" data-semantic-role="prefix function" data-semantic-id="17" data-semantic-children="15,16" data-semantic-parent="23">
                   <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="15" data-semantic-parent="17" data-semantic-operator="appl">csc</mi>
                   <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="16" data-semantic-parent="17">2</mn>
                 </msup>
                 <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="22" data-semantic-parent="23" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                 <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="21" data-semantic-children="19" data-semantic-content="18,20" data-semantic-parent="23">
                   <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="18" data-semantic-parent="21" data-semantic-operator="fenced">(</mo>
                   <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="19" data-semantic-parent="21">x</mi>
                   <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="20" data-semantic-parent="21" data-semantic-operator="fenced">)</mo>
                 </mrow>
               </mrow>
             </mrow>
           </mstyle>
         </math>`
        },
        {
          raw:"d/dx(sec(x))=sec(x)tan(x)",
          math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
          <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="35" data-semantic-children="32,34" data-semantic-content="16" data-semantic-speech="StartFraction d Over d x EndFraction left parenthesis secant left parenthesis x right parenthesis right parenthesis equals secant left parenthesis x right parenthesis tangent left parenthesis x right parenthesis">
            <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="32" data-semantic-children="5,15" data-semantic-content="31" data-semantic-parent="35">
              <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="5" data-semantic-children="0,4" data-semantic-parent="32">
                <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="0" data-semantic-parent="5">d</mi>
                <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:simple;clearspeak:unit" data-semantic-id="4" data-semantic-children="1,2" data-semantic-content="3" data-semantic-parent="5">
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="1" data-semantic-parent="4">d</mi>
                  <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="3" data-semantic-parent="4" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="4">x</mi>
                </mrow>
              </mfrac>
              <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="31" data-semantic-parent="32" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
              <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="15" data-semantic-children="13" data-semantic-content="6,14" data-semantic-parent="32">
                <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="6" data-semantic-parent="15" data-semantic-operator="fenced">(</mo>
                <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="13" data-semantic-children="7,11" data-semantic-content="12,7" data-semantic-parent="15">
                  <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="7" data-semantic-parent="13" data-semantic-operator="appl">sec</mi>
                  <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="12" data-semantic-parent="13" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                  <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="11" data-semantic-children="9" data-semantic-content="8,10" data-semantic-parent="13">
                    <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="8" data-semantic-parent="11" data-semantic-operator="fenced">(</mo>
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="9" data-semantic-parent="11">x</mi>
                    <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="10" data-semantic-parent="11" data-semantic-operator="fenced">)</mo>
                  </mrow>
                </mrow>
                <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="14" data-semantic-parent="15" data-semantic-operator="fenced">)</mo>
              </mrow>
            </mrow>
            <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="16" data-semantic-parent="35" data-semantic-operator="relseq,=">=</mo>
            <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="34" data-semantic-children="23,30" data-semantic-content="33" data-semantic-parent="35">
              <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="23" data-semantic-children="17,21" data-semantic-content="22,17" data-semantic-parent="34">
                <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="17" data-semantic-parent="23" data-semantic-operator="appl">sec</mi>
                <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="22" data-semantic-parent="23" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="21" data-semantic-children="19" data-semantic-content="18,20" data-semantic-parent="23">
                  <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="18" data-semantic-parent="21" data-semantic-operator="fenced">(</mo>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="19" data-semantic-parent="21">x</mi>
                  <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="20" data-semantic-parent="21" data-semantic-operator="fenced">)</mo>
                </mrow>
              </mrow>
              <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="33" data-semantic-parent="34" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
              <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="30" data-semantic-children="24,28" data-semantic-content="29,24" data-semantic-parent="34">
                <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="24" data-semantic-parent="30" data-semantic-operator="appl">tan</mi>
                <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="29" data-semantic-parent="30" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="28" data-semantic-children="26" data-semantic-content="25,27" data-semantic-parent="30">
                  <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="25" data-semantic-parent="28" data-semantic-operator="fenced">(</mo>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="26" data-semantic-parent="28">x</mi>
                  <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="27" data-semantic-parent="28" data-semantic-operator="fenced">)</mo>
                </mrow>
              </mrow>
            </mrow>
          </mstyle>
        </math>`
        },
         {

            raw:"d/dx(csc(x))=-cot(x)csc(x)",
            math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
            <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="37" data-semantic-children="33,36" data-semantic-content="16" data-semantic-speech="StartFraction d Over d x EndFraction left parenthesis cosecant left parenthesis x right parenthesis right parenthesis equals minus cosecant left parenthesis x right parenthesis cotangent left parenthesis x right parenthesis">
              <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="33" data-semantic-children="5,15" data-semantic-content="32" data-semantic-parent="37">
                <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="5" data-semantic-children="0,4" data-semantic-parent="33">
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="0" data-semantic-parent="5">d</mi>
                  <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:simple;clearspeak:unit" data-semantic-id="4" data-semantic-children="1,2" data-semantic-content="3" data-semantic-parent="5">
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="1" data-semantic-parent="4">d</mi>
                    <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="3" data-semantic-parent="4" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="4">x</mi>
                  </mrow>
                </mfrac>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="32" data-semantic-parent="33" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="15" data-semantic-children="13" data-semantic-content="6,14" data-semantic-parent="33">
                  <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="6" data-semantic-parent="15" data-semantic-operator="fenced">(</mo>
                  <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="13" data-semantic-children="7,11" data-semantic-content="12,7" data-semantic-parent="15">
                    <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="7" data-semantic-parent="13" data-semantic-operator="appl">csc</mi>
                    <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="12" data-semantic-parent="13" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                    <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="11" data-semantic-children="9" data-semantic-content="8,10" data-semantic-parent="13">
                      <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="8" data-semantic-parent="11" data-semantic-operator="fenced">(</mo>
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="9" data-semantic-parent="11">x</mi>
                      <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="10" data-semantic-parent="11" data-semantic-operator="fenced">)</mo>
                    </mrow>
                  </mrow>
                  <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="14" data-semantic-parent="15" data-semantic-operator="fenced">)</mo>
                </mrow>
              </mrow>
              <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="16" data-semantic-parent="37" data-semantic-operator="relseq,=">=</mo>
              <mrow data-semantic-type="prefixop" data-semantic-role="negative" data-semantic-id="36" data-semantic-children="35" data-semantic-content="17" data-semantic-parent="37">
                <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="17" data-semantic-parent="36" data-semantic-operator="prefixop,-">-</mo>
                <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="35" data-semantic-children="24,31" data-semantic-content="34" data-semantic-parent="36">
                  <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="24" data-semantic-children="18,22" data-semantic-content="23,18" data-semantic-parent="35">
                    <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="18" data-semantic-parent="24" data-semantic-operator="appl">csc</mi>
                    <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="23" data-semantic-parent="24" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                    <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="22" data-semantic-children="20" data-semantic-content="19,21" data-semantic-parent="24">
                      <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="19" data-semantic-parent="22" data-semantic-operator="fenced">(</mo>
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="20" data-semantic-parent="22">x</mi>
                      <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="21" data-semantic-parent="22" data-semantic-operator="fenced">)</mo>
                    </mrow>
                  </mrow>
                  <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="34" data-semantic-parent="35" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                  <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="31" data-semantic-children="25,29" data-semantic-content="30,25" data-semantic-parent="35">
                    <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="25" data-semantic-parent="31" data-semantic-operator="appl">cot</mi>
                    <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="30" data-semantic-parent="31" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                    <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="29" data-semantic-children="27" data-semantic-content="26,28" data-semantic-parent="31">
                      <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="26" data-semantic-parent="29" data-semantic-operator="fenced">(</mo>
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="27" data-semantic-parent="29">x</mi>
                      <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="28" data-semantic-parent="29" data-semantic-operator="fenced">)</mo>
                    </mrow>
                  </mrow>
                </mrow>
              </mrow>
            </mstyle>
          </math>`
         },
         {
            raw:"d/dx(sin^-1(x))=1/sqrt(1-x^2)",
            math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
            <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="29" data-semantic-children="28,26" data-semantic-content="17" data-semantic-speech="StartFraction d Over d x EndFraction sine Superscript negative 1 Baseline left parenthesis x right parenthesis equals StartFraction 1 Over StartRoot 1 minus x squared EndRoot EndFraction">
              <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="28" data-semantic-children="5,16" data-semantic-content="27" data-semantic-parent="29">
                <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="5" data-semantic-children="0,4" data-semantic-parent="28">
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="0" data-semantic-parent="5">d</mi>
                  <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:simple;clearspeak:unit" data-semantic-id="4" data-semantic-children="1,2" data-semantic-content="3" data-semantic-parent="5">
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="1" data-semantic-parent="4">d</mi>
                    <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="3" data-semantic-parent="4" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="4">x</mi>
                  </mrow>
                </mfrac>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="27" data-semantic-parent="28" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="16" data-semantic-children="10,14" data-semantic-content="15,6" data-semantic-parent="28">
                  <msup data-semantic-type="superscript" data-semantic-role="prefix function" data-semantic-id="10" data-semantic-children="6,9" data-semantic-parent="16">
                    <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="6" data-semantic-parent="10" data-semantic-operator="appl">sin</mi>
                    <mrow data-semantic-type="prefixop" data-semantic-role="negative" data-semantic-annotation="clearspeak:simple" data-semantic-id="9" data-semantic-children="8" data-semantic-content="7" data-semantic-parent="10">
                      <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="7" data-semantic-parent="9" data-semantic-operator="prefixop,-">-</mo>
                      <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="8" data-semantic-parent="9">1</mn>
                    </mrow>
                  </msup>
                  <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="15" data-semantic-parent="16" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                  <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="14" data-semantic-children="12" data-semantic-content="11,13" data-semantic-parent="16">
                    <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="11" data-semantic-parent="14" data-semantic-operator="fenced">(</mo>
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="12" data-semantic-parent="14">x</mi>
                    <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="13" data-semantic-parent="14" data-semantic-operator="fenced">)</mo>
                  </mrow>
                </mrow>
              </mrow>
              <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="17" data-semantic-parent="29" data-semantic-operator="relseq,=">=</mo>
              <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="26" data-semantic-children="18,25" data-semantic-parent="29">
                <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="18" data-semantic-parent="26">1</mn>
                <msqrt data-semantic-type="sqrt" data-semantic-role="unknown" data-semantic-id="25" data-semantic-children="24" data-semantic-parent="26">
                  <mrow data-semantic-type="infixop" data-semantic-role="subtraction" data-semantic-id="24" data-semantic-children="19,23" data-semantic-content="20" data-semantic-parent="25">
                    <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="19" data-semantic-parent="24">1</mn>
                    <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="20" data-semantic-parent="24" data-semantic-operator="infixop,-">-</mo>
                    <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="23" data-semantic-children="21,22" data-semantic-parent="24">
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="21" data-semantic-parent="23">x</mi>
                      <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="22" data-semantic-parent="23">2</mn>
                    </msup>
                  </mrow>
                </msqrt>
              </mfrac>
            </mstyle>
          </math>`
         },
         {
            raw:"d/dxcos^-1(x)=-1/sqrt(1-x^2)",
            math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
            <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="31" data-semantic-children="29,30" data-semantic-content="17" data-semantic-speech="StartFraction d Over d x EndFraction cosine Superscript negative 1 Baseline left parenthesis x right parenthesis equals minus StartFraction 1 Over StartRoot 1 minus x squared EndRoot EndFraction">
              <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="29" data-semantic-children="5,16" data-semantic-content="28" data-semantic-parent="31">
                <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="5" data-semantic-children="0,4" data-semantic-parent="29">
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="0" data-semantic-parent="5">d</mi>
                  <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:simple;clearspeak:unit" data-semantic-id="4" data-semantic-children="1,2" data-semantic-content="3" data-semantic-parent="5">
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="1" data-semantic-parent="4">d</mi>
                    <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="3" data-semantic-parent="4" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="4">x</mi>
                  </mrow>
                </mfrac>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="28" data-semantic-parent="29" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="16" data-semantic-children="10,14" data-semantic-content="15,6" data-semantic-parent="29">
                  <msup data-semantic-type="superscript" data-semantic-role="prefix function" data-semantic-id="10" data-semantic-children="6,9" data-semantic-parent="16">
                    <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="6" data-semantic-parent="10" data-semantic-operator="appl">cos</mi>
                    <mrow data-semantic-type="prefixop" data-semantic-role="negative" data-semantic-annotation="clearspeak:simple" data-semantic-id="9" data-semantic-children="8" data-semantic-content="7" data-semantic-parent="10">
                      <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="7" data-semantic-parent="9" data-semantic-operator="prefixop,-">-</mo>
                      <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="8" data-semantic-parent="9">1</mn>
                    </mrow>
                  </msup>
                  <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="15" data-semantic-parent="16" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                  <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="14" data-semantic-children="12" data-semantic-content="11,13" data-semantic-parent="16">
                    <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="11" data-semantic-parent="14" data-semantic-operator="fenced">(</mo>
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="12" data-semantic-parent="14">x</mi>
                    <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="13" data-semantic-parent="14" data-semantic-operator="fenced">)</mo>
                  </mrow>
                </mrow>
              </mrow>
              <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="17" data-semantic-parent="31" data-semantic-operator="relseq,=">=</mo>
              <mrow data-semantic-type="prefixop" data-semantic-role="negative" data-semantic-id="30" data-semantic-children="27" data-semantic-content="18" data-semantic-parent="31">
                <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="18" data-semantic-parent="30" data-semantic-operator="prefixop,-">-</mo>
                <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="27" data-semantic-children="19,26" data-semantic-parent="30">
                  <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="19" data-semantic-parent="27">1</mn>
                  <msqrt data-semantic-type="sqrt" data-semantic-role="unknown" data-semantic-id="26" data-semantic-children="25" data-semantic-parent="27">
                    <mrow data-semantic-type="infixop" data-semantic-role="subtraction" data-semantic-id="25" data-semantic-children="20,24" data-semantic-content="21" data-semantic-parent="26">
                      <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="20" data-semantic-parent="25">1</mn>
                      <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="21" data-semantic-parent="25" data-semantic-operator="infixop,-">-</mo>
                      <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="24" data-semantic-children="22,23" data-semantic-parent="25">
                        <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="22" data-semantic-parent="24">x</mi>
                        <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="23" data-semantic-parent="24">2</mn>
                      </msup>
                    </mrow>
                  </msqrt>
                </mfrac>
              </mrow>
            </mstyle>
          </math>`
         },
         {
            raw:"d/dx(tan^-1(x))=1/(1+x^2)",
            math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
            <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="31" data-semantic-children="30,28" data-semantic-content="20" data-semantic-speech="StartFraction d Over d x EndFraction left parenthesis tangent Superscript negative 1 Baseline left parenthesis x right parenthesis right parenthesis equals StartFraction 1 Over 1 plus x squared EndFraction">
              <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="30" data-semantic-children="5,19" data-semantic-content="29" data-semantic-parent="31">
                <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="5" data-semantic-children="0,4" data-semantic-parent="30">
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="0" data-semantic-parent="5">d</mi>
                  <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:simple;clearspeak:unit" data-semantic-id="4" data-semantic-children="1,2" data-semantic-content="3" data-semantic-parent="5">
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="1" data-semantic-parent="4">d</mi>
                    <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="3" data-semantic-parent="4" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="4">x</mi>
                  </mrow>
                </mfrac>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="29" data-semantic-parent="30" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="19" data-semantic-children="17" data-semantic-content="6,18" data-semantic-parent="30">
                  <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="6" data-semantic-parent="19" data-semantic-operator="fenced">(</mo>
                  <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="17" data-semantic-children="11,15" data-semantic-content="16,7" data-semantic-parent="19">
                    <msup data-semantic-type="superscript" data-semantic-role="prefix function" data-semantic-id="11" data-semantic-children="7,10" data-semantic-parent="17">
                      <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="7" data-semantic-parent="11" data-semantic-operator="appl">tan</mi>
                      <mrow data-semantic-type="prefixop" data-semantic-role="negative" data-semantic-annotation="clearspeak:simple" data-semantic-id="10" data-semantic-children="9" data-semantic-content="8" data-semantic-parent="11">
                        <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="8" data-semantic-parent="10" data-semantic-operator="prefixop,-">-</mo>
                        <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="9" data-semantic-parent="10">1</mn>
                      </mrow>
                    </msup>
                    <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="16" data-semantic-parent="17" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                    <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="15" data-semantic-children="13" data-semantic-content="12,14" data-semantic-parent="17">
                      <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="12" data-semantic-parent="15" data-semantic-operator="fenced">(</mo>
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="13" data-semantic-parent="15">x</mi>
                      <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="14" data-semantic-parent="15" data-semantic-operator="fenced">)</mo>
                    </mrow>
                  </mrow>
                  <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="18" data-semantic-parent="19" data-semantic-operator="fenced">)</mo>
                </mrow>
              </mrow>
              <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="20" data-semantic-parent="31" data-semantic-operator="relseq,=">=</mo>
              <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="28" data-semantic-children="21,27" data-semantic-parent="31">
                <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="21" data-semantic-parent="28">1</mn>
                <mrow data-semantic-type="infixop" data-semantic-role="addition" data-semantic-id="27" data-semantic-children="22,26" data-semantic-content="23" data-semantic-parent="28">
                  <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="22" data-semantic-parent="27">1</mn>
                  <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="23" data-semantic-parent="27" data-semantic-operator="infixop,+">+</mo>
                  <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="26" data-semantic-children="24,25" data-semantic-parent="27">
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="24" data-semantic-parent="26">x</mi>
                    <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="25" data-semantic-parent="26">2</mn>
                  </msup>
                </mrow>
              </mfrac>
            </mstyle>
          </math>`
         },
         {
            raw:"d/dx(cot^-1(x))=-1/(1+x^2)",
            math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
            <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="33" data-semantic-children="31,32" data-semantic-content="20" data-semantic-speech="StartFraction d Over d x EndFraction left parenthesis cotangent Superscript negative 1 Baseline left parenthesis x right parenthesis right parenthesis equals minus StartFraction 1 Over 1 plus x squared EndFraction">
              <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="31" data-semantic-children="5,19" data-semantic-content="30" data-semantic-parent="33">
                <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="5" data-semantic-children="0,4" data-semantic-parent="31">
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="0" data-semantic-parent="5">d</mi>
                  <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:simple;clearspeak:unit" data-semantic-id="4" data-semantic-children="1,2" data-semantic-content="3" data-semantic-parent="5">
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="1" data-semantic-parent="4">d</mi>
                    <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="3" data-semantic-parent="4" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="4">x</mi>
                  </mrow>
                </mfrac>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="30" data-semantic-parent="31" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="19" data-semantic-children="17" data-semantic-content="6,18" data-semantic-parent="31">
                  <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="6" data-semantic-parent="19" data-semantic-operator="fenced">(</mo>
                  <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="17" data-semantic-children="11,15" data-semantic-content="16,7" data-semantic-parent="19">
                    <msup data-semantic-type="superscript" data-semantic-role="prefix function" data-semantic-id="11" data-semantic-children="7,10" data-semantic-parent="17">
                      <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="7" data-semantic-parent="11" data-semantic-operator="appl">cot</mi>
                      <mrow data-semantic-type="prefixop" data-semantic-role="negative" data-semantic-annotation="clearspeak:simple" data-semantic-id="10" data-semantic-children="9" data-semantic-content="8" data-semantic-parent="11">
                        <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="8" data-semantic-parent="10" data-semantic-operator="prefixop,-">-</mo>
                        <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="9" data-semantic-parent="10">1</mn>
                      </mrow>
                    </msup>
                    <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="16" data-semantic-parent="17" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                    <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="15" data-semantic-children="13" data-semantic-content="12,14" data-semantic-parent="17">
                      <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="12" data-semantic-parent="15" data-semantic-operator="fenced">(</mo>
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="13" data-semantic-parent="15">x</mi>
                      <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="14" data-semantic-parent="15" data-semantic-operator="fenced">)</mo>
                    </mrow>
                  </mrow>
                  <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="18" data-semantic-parent="19" data-semantic-operator="fenced">)</mo>
                </mrow>
              </mrow>
              <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="20" data-semantic-parent="33" data-semantic-operator="relseq,=">=</mo>
              <mrow data-semantic-type="prefixop" data-semantic-role="negative" data-semantic-id="32" data-semantic-children="29" data-semantic-content="21" data-semantic-parent="33">
                <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="21" data-semantic-parent="32" data-semantic-operator="prefixop,-">-</mo>
                <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="29" data-semantic-children="22,28" data-semantic-parent="32">
                  <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="22" data-semantic-parent="29">1</mn>
                  <mrow data-semantic-type="infixop" data-semantic-role="addition" data-semantic-id="28" data-semantic-children="23,27" data-semantic-content="24" data-semantic-parent="29">
                    <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="23" data-semantic-parent="28">1</mn>
                    <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="24" data-semantic-parent="28" data-semantic-operator="infixop,+">+</mo>
                    <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="27" data-semantic-children="25,26" data-semantic-parent="28">
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="25" data-semantic-parent="27">x</mi>
                      <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="26" data-semantic-parent="27">2</mn>
                    </msup>
                  </mrow>
                </mfrac>
              </mrow>
            </mstyle>
          </math>`
         },
         {
            raw:" d/dxsec^-1(x)=1/(|x|sqrt(x^2-1))",
            math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
            <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="35" data-semantic-children="34,32" data-semantic-content="17" data-semantic-speech="StartFraction d Over d x EndFraction secant Superscript negative 1 Baseline left parenthesis x right parenthesis equals StartFraction 1 Over StartAbsoluteValue x EndAbsoluteValue StartRoot x squared minus 1 EndRoot EndFraction">
              <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="34" data-semantic-children="5,16" data-semantic-content="33" data-semantic-parent="35">
                <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="5" data-semantic-children="0,4" data-semantic-parent="34">
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="0" data-semantic-parent="5">d</mi>
                  <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:simple;clearspeak:unit" data-semantic-id="4" data-semantic-children="1,2" data-semantic-content="3" data-semantic-parent="5">
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="1" data-semantic-parent="4">d</mi>
                    <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="3" data-semantic-parent="4" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="4">x</mi>
                  </mrow>
                </mfrac>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="33" data-semantic-parent="34" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="16" data-semantic-children="10,14" data-semantic-content="15,6" data-semantic-parent="34">
                  <msup data-semantic-type="superscript" data-semantic-role="prefix function" data-semantic-id="10" data-semantic-children="6,9" data-semantic-parent="16">
                    <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="6" data-semantic-parent="10" data-semantic-operator="appl">sec</mi>
                    <mrow data-semantic-type="prefixop" data-semantic-role="negative" data-semantic-annotation="clearspeak:simple" data-semantic-id="9" data-semantic-children="8" data-semantic-content="7" data-semantic-parent="10">
                      <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="7" data-semantic-parent="9" data-semantic-operator="prefixop,-">-</mo>
                      <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="8" data-semantic-parent="9">1</mn>
                    </mrow>
                  </msup>
                  <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="15" data-semantic-parent="16" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                  <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="14" data-semantic-children="12" data-semantic-content="11,13" data-semantic-parent="16">
                    <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="11" data-semantic-parent="14" data-semantic-operator="fenced">(</mo>
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="12" data-semantic-parent="14">x</mi>
                    <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="13" data-semantic-parent="14" data-semantic-operator="fenced">)</mo>
                  </mrow>
                </mrow>
              </mrow>
              <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="17" data-semantic-parent="35" data-semantic-operator="relseq,=">=</mo>
              <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="32" data-semantic-children="18,31" data-semantic-parent="35">
                <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="18" data-semantic-parent="32">1</mn>
                <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="31" data-semantic-children="22,29" data-semantic-content="30" data-semantic-parent="32">
                  <mrow data-semantic-type="fenced" data-semantic-role="neutral" data-semantic-id="22" data-semantic-children="20" data-semantic-content="19,21" data-semantic-parent="31">
                    <mo data-semantic-type="fence" data-semantic-role="neutral" data-semantic-id="19" data-semantic-parent="22" data-semantic-operator="fenced">|</mo>
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="20" data-semantic-parent="22">x</mi>
                    <mo data-semantic-type="fence" data-semantic-role="neutral" data-semantic-id="21" data-semantic-parent="22" data-semantic-operator="fenced">|</mo>
                  </mrow>
                  <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="30" data-semantic-parent="31" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                  <msqrt data-semantic-type="sqrt" data-semantic-role="unknown" data-semantic-id="29" data-semantic-children="28" data-semantic-parent="31">
                    <mrow data-semantic-type="infixop" data-semantic-role="subtraction" data-semantic-id="28" data-semantic-children="25,27" data-semantic-content="26" data-semantic-parent="29">
                      <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="25" data-semantic-children="23,24" data-semantic-parent="28">
                        <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="23" data-semantic-parent="25">x</mi>
                        <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="24" data-semantic-parent="25">2</mn>
                      </msup>
                      <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="26" data-semantic-parent="28" data-semantic-operator="infixop,-">-</mo>
                      <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="27" data-semantic-parent="28">1</mn>
                    </mrow>
                  </msqrt>
                </mrow>
              </mfrac>
            </mstyle>
          </math>`
        },
        {
            raw:"d/dxcsc^-1(x)=-1/(|x|sqrt(x^2-1))",
            math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
            <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="37" data-semantic-children="35,36" data-semantic-content="17" data-semantic-speech="StartFraction d Over d x EndFraction cosecant Superscript negative 1 Baseline left parenthesis x right parenthesis equals minus StartFraction 1 Over StartAbsoluteValue x EndAbsoluteValue StartRoot x squared minus 1 EndRoot EndFraction">
              <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="35" data-semantic-children="5,16" data-semantic-content="34" data-semantic-parent="37">
                <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="5" data-semantic-children="0,4" data-semantic-parent="35">
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="0" data-semantic-parent="5">d</mi>
                  <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:simple;clearspeak:unit" data-semantic-id="4" data-semantic-children="1,2" data-semantic-content="3" data-semantic-parent="5">
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="1" data-semantic-parent="4">d</mi>
                    <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="3" data-semantic-parent="4" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="4">x</mi>
                  </mrow>
                </mfrac>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="34" data-semantic-parent="35" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="16" data-semantic-children="10,14" data-semantic-content="15,6" data-semantic-parent="35">
                  <msup data-semantic-type="superscript" data-semantic-role="prefix function" data-semantic-id="10" data-semantic-children="6,9" data-semantic-parent="16">
                    <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="6" data-semantic-parent="10" data-semantic-operator="appl">csc</mi>
                    <mrow data-semantic-type="prefixop" data-semantic-role="negative" data-semantic-annotation="clearspeak:simple" data-semantic-id="9" data-semantic-children="8" data-semantic-content="7" data-semantic-parent="10">
                      <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="7" data-semantic-parent="9" data-semantic-operator="prefixop,-">-</mo>
                      <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="8" data-semantic-parent="9">1</mn>
                    </mrow>
                  </msup>
                  <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="15" data-semantic-parent="16" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                  <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="14" data-semantic-children="12" data-semantic-content="11,13" data-semantic-parent="16">
                    <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="11" data-semantic-parent="14" data-semantic-operator="fenced">(</mo>
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="12" data-semantic-parent="14">x</mi>
                    <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="13" data-semantic-parent="14" data-semantic-operator="fenced">)</mo>
                  </mrow>
                </mrow>
              </mrow>
              <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="17" data-semantic-parent="37" data-semantic-operator="relseq,=">=</mo>
              <mrow data-semantic-type="prefixop" data-semantic-role="negative" data-semantic-id="36" data-semantic-children="33" data-semantic-content="18" data-semantic-parent="37">
                <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="18" data-semantic-parent="36" data-semantic-operator="prefixop,-">-</mo>
                <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="33" data-semantic-children="19,32" data-semantic-parent="36">
                  <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="19" data-semantic-parent="33">1</mn>
                  <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="32" data-semantic-children="23,30" data-semantic-content="31" data-semantic-parent="33">
                    <mrow data-semantic-type="fenced" data-semantic-role="neutral" data-semantic-id="23" data-semantic-children="21" data-semantic-content="20,22" data-semantic-parent="32">
                      <mo data-semantic-type="fence" data-semantic-role="neutral" data-semantic-id="20" data-semantic-parent="23" data-semantic-operator="fenced">|</mo>
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="21" data-semantic-parent="23">x</mi>
                      <mo data-semantic-type="fence" data-semantic-role="neutral" data-semantic-id="22" data-semantic-parent="23" data-semantic-operator="fenced">|</mo>
                    </mrow>
                    <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="31" data-semantic-parent="32" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                    <msqrt data-semantic-type="sqrt" data-semantic-role="unknown" data-semantic-id="30" data-semantic-children="29" data-semantic-parent="32">
                      <mrow data-semantic-type="infixop" data-semantic-role="subtraction" data-semantic-id="29" data-semantic-children="26,28" data-semantic-content="27" data-semantic-parent="30">
                        <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="26" data-semantic-children="24,25" data-semantic-parent="29">
                          <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="24" data-semantic-parent="26">x</mi>
                          <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="25" data-semantic-parent="26">2</mn>
                        </msup>
                        <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="27" data-semantic-parent="29" data-semantic-operator="infixop,-">-</mo>
                        <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="28" data-semantic-parent="29">1</mn>
                      </mrow>
                    </msqrt>
                  </mrow>
                </mfrac>
              </mrow>
            </mstyle>
          </math>`
        }
       ]
    },
    {  
        category:"Indefinite Integration",
        formula:[
            {
                
                raw:"intx^n dx = x^(n+1)/(n+1)+C,n ne -1",
                math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
                <mstyle displaystyle="true" data-semantic-type="punctuated" data-semantic-role="sequence" data-semantic-id="35" data-semantic-children="32,22,34" data-semantic-content="22" data-semantic-speech="integral x Superscript n Baseline d x equals StartFraction x Superscript n plus 1 Baseline Over n plus 1 EndFraction plus upper C comma n not equals negative 1">
                  <mrow data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="32" data-semantic-children="30,31" data-semantic-content="8" data-semantic-parent="35">
                    <mrow data-semantic-type="integral" data-semantic-role="integral" data-semantic-id="30" data-semantic-children="0,28,29" data-semantic-content="0" data-semantic-parent="32">
                      <mo data-semantic-type="largeop" data-semantic-role="integral" data-semantic-id="0" data-semantic-parent="30" data-semantic-operator="integral">&#x222B;</mo>
                      <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="28" data-semantic-children="3,4,5" data-semantic-content="27,6" data-semantic-parent="30">
                        <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="3" data-semantic-children="1,2" data-semantic-parent="28">
                          <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="1" data-semantic-parent="3">x</mi>
                          <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="3">n</mi>
                        </msup>
                      </mrow>
                      <mrow data-semantic-type="empty" data-semantic-role="unknown" data-semantic-id="29" data-semantic-parent="30"></mrow>
                    </mrow>
                    <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="27" data-semantic-parent="28" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                    <mrow>
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="4" data-semantic-parent="28">d</mi>
                      <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="6" data-semantic-parent="28" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="5" data-semantic-parent="28">x</mi>
                    </mrow>
                    <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="8" data-semantic-parent="32" data-semantic-operator="relseq,=">=</mo>
                    <mrow data-semantic-type="infixop" data-semantic-role="addition" data-semantic-id="31" data-semantic-children="19,21" data-semantic-content="20" data-semantic-parent="32">
                      <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="19" data-semantic-children="14,18" data-semantic-parent="31">
                        <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="14" data-semantic-children="9,13" data-semantic-parent="19">
                          <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="9" data-semantic-parent="14">x</mi>
                          <mrow data-semantic-type="infixop" data-semantic-role="addition" data-semantic-id="13" data-semantic-children="10,12" data-semantic-content="11" data-semantic-parent="14">
                            <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="10" data-semantic-parent="13">n</mi>
                            <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="11" data-semantic-parent="13" data-semantic-operator="infixop,+">+</mo>
                            <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="12" data-semantic-parent="13">1</mn>
                          </mrow>
                        </msup>
                        <mrow data-semantic-type="infixop" data-semantic-role="addition" data-semantic-id="18" data-semantic-children="15,17" data-semantic-content="16" data-semantic-parent="19">
                          <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="15" data-semantic-parent="18">n</mi>
                          <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="16" data-semantic-parent="18" data-semantic-operator="infixop,+">+</mo>
                          <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="17" data-semantic-parent="18">1</mn>
                        </mrow>
                      </mfrac>
                      <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="20" data-semantic-parent="31" data-semantic-operator="infixop,+">+</mo>
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="21" data-semantic-parent="31">C</mi>
                    </mrow>
                  </mrow>
                  <mo data-semantic-type="punctuation" data-semantic-role="comma" data-semantic-id="22" data-semantic-parent="35" data-semantic-operator="punctuated">,</mo>
                  <mrow data-semantic-type="relseq" data-semantic-role="inequality" data-semantic-id="34" data-semantic-children="23,33" data-semantic-content="24" data-semantic-parent="35">
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="23" data-semantic-parent="34">n</mi>
                    <mo data-semantic-type="relation" data-semantic-role="inequality" data-semantic-id="24" data-semantic-parent="34" data-semantic-operator="relseq,&#x2260;">&#x2260;</mo>
                    <mrow data-semantic-type="prefixop" data-semantic-role="negative" data-semantic-annotation="clearspeak:simple" data-semantic-id="33" data-semantic-children="26" data-semantic-content="25" data-semantic-parent="34">
                      <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="25" data-semantic-parent="33" data-semantic-operator="prefixop,-">-</mo>
                      <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="26" data-semantic-parent="33">1</mn>
                    </mrow>
                  </mrow>
                </mstyle>
              </math>`
            },
            {
                raw:"int e^(ax)=e^(ax)/a+C",
                math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
                <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="21" data-semantic-children="19,20" data-semantic-content="7" data-semantic-speech="integral e Superscript a x Baseline equals StartFraction e Superscript a x Baseline Over a EndFraction plus upper C">
                  <mrow data-semantic-type="integral" data-semantic-role="integral" data-semantic-id="19" data-semantic-children="0,6,18" data-semantic-content="0" data-semantic-parent="21">
                    <mo data-semantic-type="largeop" data-semantic-role="integral" data-semantic-id="0" data-semantic-parent="19" data-semantic-operator="integral">&#x222B;</mo>
                    <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="6" data-semantic-children="1,5" data-semantic-parent="19">
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="1" data-semantic-parent="6">e</mi>
                      <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:simple;clearspeak:unit" data-semantic-id="5" data-semantic-children="2,3" data-semantic-content="4" data-semantic-parent="6">
                        <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="5">a</mi>
                        <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="4" data-semantic-parent="5" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                        <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="3" data-semantic-parent="5">x</mi>
                      </mrow>
                    </msup>
                    <mrow data-semantic-type="empty" data-semantic-role="unknown" data-semantic-id="18" data-semantic-parent="19"></mrow>
                  </mrow>
                  <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="7" data-semantic-parent="21" data-semantic-operator="relseq,=">=</mo>
                  <mrow data-semantic-type="infixop" data-semantic-role="addition" data-semantic-id="20" data-semantic-children="15,17" data-semantic-content="16" data-semantic-parent="21">
                    <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="15" data-semantic-children="13,14" data-semantic-parent="20">
                      <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="13" data-semantic-children="8,12" data-semantic-parent="15">
                        <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="8" data-semantic-parent="13">e</mi>
                        <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:simple;clearspeak:unit" data-semantic-id="12" data-semantic-children="9,10" data-semantic-content="11" data-semantic-parent="13">
                          <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="9" data-semantic-parent="12">a</mi>
                          <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="11" data-semantic-parent="12" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                          <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="10" data-semantic-parent="12">x</mi>
                        </mrow>
                      </msup>
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="14" data-semantic-parent="15">a</mi>
                    </mfrac>
                    <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="16" data-semantic-parent="20" data-semantic-operator="infixop,+">+</mo>
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="17" data-semantic-parent="20">C</mi>
                  </mrow>
                </mstyle>
              </math>`
            },
            {
                raw:"int a^x dx=a^x/ln(a)+C,(a>0 and a ne 1)",
                math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
                <mstyle displaystyle="true" data-semantic-type="punctuated" data-semantic-role="sequence" data-semantic-id="48" data-semantic-children="47,22,41" data-semantic-content="22" data-semantic-speech="integral a Superscript x Baseline d x equals StartFraction a Superscript x Baseline Over ln left parenthesis a right parenthesis EndFraction plus upper C comma left parenthesis a greater than 0 and a not equals 1 right parenthesis">
                  <mrow data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="47" data-semantic-children="45,46" data-semantic-content="8" data-semantic-parent="48">
                    <mrow data-semantic-type="integral" data-semantic-role="integral" data-semantic-id="45" data-semantic-children="0,43,44" data-semantic-content="0" data-semantic-parent="47">
                      <mo data-semantic-type="largeop" data-semantic-role="integral" data-semantic-id="0" data-semantic-parent="45" data-semantic-operator="integral">&#x222B;</mo>
                      <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="43" data-semantic-children="3,4,5" data-semantic-content="42,6" data-semantic-parent="45">
                        <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="3" data-semantic-children="1,2" data-semantic-parent="43">
                          <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="1" data-semantic-parent="3">a</mi>
                          <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="3">x</mi>
                        </msup>
                      </mrow>
                      <mrow data-semantic-type="empty" data-semantic-role="unknown" data-semantic-id="44" data-semantic-parent="45"></mrow>
                    </mrow>
                    <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="42" data-semantic-parent="43" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                    <mrow>
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="4" data-semantic-parent="43">d</mi>
                      <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="6" data-semantic-parent="43" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="5" data-semantic-parent="43">x</mi>
                    </mrow>
                    <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="8" data-semantic-parent="47" data-semantic-operator="relseq,=">=</mo>
                    <mrow data-semantic-type="infixop" data-semantic-role="addition" data-semantic-id="46" data-semantic-children="19,21" data-semantic-content="20" data-semantic-parent="47">
                      <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="19" data-semantic-children="11,18" data-semantic-parent="46">
                        <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="11" data-semantic-children="9,10" data-semantic-parent="19">
                          <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="9" data-semantic-parent="11">a</mi>
                          <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="10" data-semantic-parent="11">x</mi>
                        </msup>
                        <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="18" data-semantic-children="12,16" data-semantic-content="17,12" data-semantic-parent="19">
                          <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="12" data-semantic-parent="18" data-semantic-operator="appl">ln</mi>
                          <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="17" data-semantic-parent="18" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                          <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="16" data-semantic-children="14" data-semantic-content="13,15" data-semantic-parent="18">
                            <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="13" data-semantic-parent="16" data-semantic-operator="fenced">(</mo>
                            <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="14" data-semantic-parent="16">a</mi>
                            <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="15" data-semantic-parent="16" data-semantic-operator="fenced">)</mo>
                          </mrow>
                        </mrow>
                      </mfrac>
                      <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="20" data-semantic-parent="46" data-semantic-operator="infixop,+">+</mo>
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="21" data-semantic-parent="46">C</mi>
                    </mrow>
                  </mrow>
                  <mo data-semantic-type="punctuation" data-semantic-role="comma" data-semantic-id="22" data-semantic-parent="48" data-semantic-operator="punctuated">,</mo>
                  <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="41" data-semantic-children="40" data-semantic-content="23,36" data-semantic-parent="48">
                    <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="23" data-semantic-parent="41" data-semantic-operator="fenced">(</mo>
                    <mrow data-semantic-type="multirel" data-semantic-role="inequality" data-semantic-id="40" data-semantic-children="24,39,35" data-semantic-content="25,34" data-semantic-parent="41">
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="24" data-semantic-parent="40">a</mi>
                      <mo data-semantic-type="relation" data-semantic-role="inequality" data-semantic-id="25" data-semantic-parent="40" data-semantic-operator="multirel">&gt;</mo>
                      <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="39" data-semantic-children="26,32,33" data-semantic-content="37,38" data-semantic-parent="40">
                        <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="26" data-semantic-parent="39">0</mn>
                        <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="37" data-semantic-parent="39" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                        <mrow data-semantic-type="punctuated" data-semantic-role="text" data-semantic-id="32" data-semantic-children="27,28,29" data-semantic-parent="39" data-semantic-collapsed="(32 (c 30 31) 27 28 29)">
                          <mspace width="1ex" data-semantic-type="text" data-semantic-role="space" data-semantic-annotation="clearspeak:unit" data-semantic-id="27" data-semantic-parent="32"></mspace>
                          <mtext data-semantic-type="text" data-semantic-role="unknown" data-semantic-font="normal" data-semantic-annotation="clearspeak:unit" data-semantic-id="28" data-semantic-parent="32">and</mtext>
                          <mspace width="1ex" data-semantic-type="text" data-semantic-role="space" data-semantic-annotation="clearspeak:unit" data-semantic-id="29" data-semantic-parent="32"></mspace>
                        </mrow>
                        <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="38" data-semantic-parent="39" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                        <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="33" data-semantic-parent="39">a</mi>
                      </mrow>
                      <mo data-semantic-type="relation" data-semantic-role="inequality" data-semantic-id="34" data-semantic-parent="40" data-semantic-operator="multirel">&#x2260;</mo>
                      <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="35" data-semantic-parent="40">1</mn>
                    </mrow>
                    <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="36" data-semantic-parent="41" data-semantic-operator="fenced">)</mo>
                  </mrow>
                </mstyle>
              </math>`
            },
            {
               raw:"int 1/x dx = ln|x|+C",
               math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
               <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="23" data-semantic-children="21,22" data-semantic-content="8" data-semantic-speech="integral StartFraction 1 Over x EndFraction d x equals ln StartAbsoluteValue x EndAbsoluteValue plus upper C">
                 <mrow data-semantic-type="integral" data-semantic-role="integral" data-semantic-id="21" data-semantic-children="0,19,20" data-semantic-content="0" data-semantic-parent="23">
                   <mo data-semantic-type="largeop" data-semantic-role="integral" data-semantic-id="0" data-semantic-parent="21" data-semantic-operator="integral">&#x222B;</mo>
                   <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="19" data-semantic-children="3,4,5" data-semantic-content="18,6" data-semantic-parent="21">
                     <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="3" data-semantic-children="1,2" data-semantic-parent="19">
                       <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="1" data-semantic-parent="3">1</mn>
                       <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="3">x</mi>
                     </mfrac>
                   </mrow>
                   <mrow data-semantic-type="empty" data-semantic-role="unknown" data-semantic-id="20" data-semantic-parent="21"></mrow>
                 </mrow>
                 <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="18" data-semantic-parent="19" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                 <mrow>
                   <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="4" data-semantic-parent="19">d</mi>
                   <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="6" data-semantic-parent="19" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                   <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="5" data-semantic-parent="19">x</mi>
                 </mrow>
                 <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="8" data-semantic-parent="23" data-semantic-operator="relseq,=">=</mo>
                 <mrow data-semantic-type="infixop" data-semantic-role="addition" data-semantic-id="22" data-semantic-children="17,15" data-semantic-content="14" data-semantic-parent="23">
                   <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="17" data-semantic-children="9,13" data-semantic-content="16,9" data-semantic-parent="22">
                     <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="9" data-semantic-parent="17" data-semantic-operator="appl">ln</mi>
                     <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="16" data-semantic-parent="17" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                     <mrow data-semantic-type="fenced" data-semantic-role="neutral" data-semantic-id="13" data-semantic-children="11" data-semantic-content="10,12" data-semantic-parent="17">
                       <mo data-semantic-type="fence" data-semantic-role="neutral" data-semantic-id="10" data-semantic-parent="13" data-semantic-operator="fenced">|</mo>
                       <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="11" data-semantic-parent="13">x</mi>
                       <mo data-semantic-type="fence" data-semantic-role="neutral" data-semantic-id="12" data-semantic-parent="13" data-semantic-operator="fenced">|</mo>
                     </mrow>
                   </mrow>
                   <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="14" data-semantic-parent="22" data-semantic-operator="infixop,+">+</mo>
                   <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="15" data-semantic-parent="22">C</mi>
                 </mrow>
               </mstyle>
             </math>`

            },
            {
               raw:"int lnx dx = xlnx-x+C",
               math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
               <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="27" data-semantic-children="22,26" data-semantic-content="9" data-semantic-speech="integral ln x d x equals x ln x minus x plus upper C">
                 <mrow data-semantic-type="integral" data-semantic-role="integral" data-semantic-id="22" data-semantic-children="0,20,21" data-semantic-content="0" data-semantic-parent="27">
                   <mo data-semantic-type="largeop" data-semantic-role="integral" data-semantic-id="0" data-semantic-parent="22" data-semantic-operator="integral">&#x222B;</mo>
                   <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="20" data-semantic-children="4,5,6" data-semantic-content="19,7" data-semantic-parent="22">
                     <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="4" data-semantic-children="1,2" data-semantic-content="3,1" data-semantic-parent="20">
                       <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="1" data-semantic-parent="4" data-semantic-operator="appl">ln</mi>
                       <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="3" data-semantic-parent="4" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                       <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="4">x</mi>
                     </mrow>
                   </mrow>
                   <mrow data-semantic-type="empty" data-semantic-role="unknown" data-semantic-id="21" data-semantic-parent="22"></mrow>
                 </mrow>
                 <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="19" data-semantic-parent="20" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                 <mrow>
                   <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="5" data-semantic-parent="20">d</mi>
                   <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="7" data-semantic-parent="20" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                   <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="6" data-semantic-parent="20">x</mi>
                 </mrow>
                 <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="9" data-semantic-parent="27" data-semantic-operator="relseq,=">=</mo>
                 <mrow data-semantic-type="infixop" data-semantic-role="addition" data-semantic-id="26" data-semantic-children="25,18" data-semantic-content="17" data-semantic-parent="27">
                   <mrow data-semantic-type="infixop" data-semantic-role="subtraction" data-semantic-id="25" data-semantic-children="24,16" data-semantic-content="15" data-semantic-parent="26">
                     <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="24" data-semantic-children="10,14" data-semantic-content="23" data-semantic-parent="25">
                       <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="10" data-semantic-parent="24">x</mi>
                       <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="23" data-semantic-parent="24" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                       <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="14" data-semantic-children="11,12" data-semantic-content="13,11" data-semantic-parent="24">
                         <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="11" data-semantic-parent="14" data-semantic-operator="appl">ln</mi>
                         <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="13" data-semantic-parent="14" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                         <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="12" data-semantic-parent="14">x</mi>
                       </mrow>
                     </mrow>
                     <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="15" data-semantic-parent="25" data-semantic-operator="infixop,-">-</mo>
                     <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="16" data-semantic-parent="25">x</mi>
                   </mrow>
                   <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="17" data-semantic-parent="26" data-semantic-operator="infixop,+">+</mo>
                   <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="18" data-semantic-parent="26">C</mi>
                 </mrow>
               </mstyle>
             </math>`
            },

            {
              raw:" integration by parts, int udv=uv-int vdu",
              math_ml:`integration by parts,<math xmlns="http://www.w3.org/1998/Math/MathML">
              <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="19" data-semantic-children="15,18" data-semantic-content="4" data-semantic-speech="integral u d v equals u v minus integral v d u">
                <mrow data-semantic-type="integral" data-semantic-role="integral" data-semantic-id="15" data-semantic-children="0,1,14" data-semantic-content="0" data-semantic-parent="19">
                  <mo data-semantic-type="largeop" data-semantic-role="integral" data-semantic-id="0" data-semantic-parent="15" data-semantic-operator="integral">&#x222B;</mo>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="1" data-semantic-parent="15">u</mi>
                  <mrow data-semantic-type="prefixop" data-semantic-role="integral" data-semantic-font="normal" data-semantic-id="14" data-semantic-children="3" data-semantic-content="2" data-semantic-parent="15">
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-id="2" data-semantic-parent="14" data-semantic-operator="prefixop,d">d</mi>
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="3" data-semantic-parent="14">v</mi>
                  </mrow>
                </mrow>
                <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="4" data-semantic-parent="19" data-semantic-operator="relseq,=">=</mo>
                <mrow data-semantic-type="infixop" data-semantic-role="subtraction" data-semantic-id="18" data-semantic-children="17,13" data-semantic-content="7" data-semantic-parent="19">
                  <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:simple;clearspeak:unit" data-semantic-id="17" data-semantic-children="5,6" data-semantic-content="16" data-semantic-parent="18">
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="5" data-semantic-parent="17">u</mi>
                    <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="16" data-semantic-parent="17" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="6" data-semantic-parent="17">v</mi>
                  </mrow>
                  <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="7" data-semantic-parent="18" data-semantic-operator="infixop,-">-</mo>
                  <mrow data-semantic-type="integral" data-semantic-role="integral" data-semantic-id="13" data-semantic-children="8,9,12" data-semantic-content="8" data-semantic-parent="18">
                    <mo data-semantic-type="largeop" data-semantic-role="integral" data-semantic-id="8" data-semantic-parent="13" data-semantic-operator="integral">&#x222B;</mo>
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="9" data-semantic-parent="13">v</mi>
                    <mrow data-semantic-type="prefixop" data-semantic-role="integral" data-semantic-font="normal" data-semantic-id="12" data-semantic-children="11" data-semantic-content="10" data-semantic-parent="13">
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-id="10" data-semantic-parent="12" data-semantic-operator="prefixop,d">d</mi>
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="11" data-semantic-parent="12">u</mi>
                    </mrow>
                  </mrow>
                </mrow>
              </mstyle>
            </math> `
            },
            {
              raw:"int sin(x)dx = -cosx +C",
              math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
              <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="26" data-semantic-children="23,25" data-semantic-content="12" data-semantic-speech="integral sine left parenthesis x right parenthesis d x equals minus cosine x plus upper C">
                <mrow data-semantic-type="integral" data-semantic-role="integral" data-semantic-id="23" data-semantic-children="0,21,22" data-semantic-content="0" data-semantic-parent="26">
                  <mo data-semantic-type="largeop" data-semantic-role="integral" data-semantic-id="0" data-semantic-parent="23" data-semantic-operator="integral">&#x222B;</mo>
                  <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="21" data-semantic-children="7,8,9" data-semantic-content="20,10" data-semantic-parent="23">
                    <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="7" data-semantic-children="1,5" data-semantic-content="6,1" data-semantic-parent="21">
                      <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="1" data-semantic-parent="7" data-semantic-operator="appl">sin</mi>
                      <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="6" data-semantic-parent="7" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                      <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="5" data-semantic-children="3" data-semantic-content="2,4" data-semantic-parent="7">
                        <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="2" data-semantic-parent="5" data-semantic-operator="fenced">(</mo>
                        <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="3" data-semantic-parent="5">x</mi>
                        <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="4" data-semantic-parent="5" data-semantic-operator="fenced">)</mo>
                      </mrow>
                    </mrow>
                  </mrow>
                  <mrow data-semantic-type="empty" data-semantic-role="unknown" data-semantic-id="22" data-semantic-parent="23"></mrow>
                </mrow>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="20" data-semantic-parent="21" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mrow>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="8" data-semantic-parent="21">d</mi>
                  <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="10" data-semantic-parent="21" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="9" data-semantic-parent="21">x</mi>
                </mrow>
                <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="12" data-semantic-parent="26" data-semantic-operator="relseq,=">=</mo>
                <mrow data-semantic-type="infixop" data-semantic-role="addition" data-semantic-id="25" data-semantic-children="24,19" data-semantic-content="18" data-semantic-parent="26">
                  <mrow data-semantic-type="prefixop" data-semantic-role="negative" data-semantic-id="24" data-semantic-children="17" data-semantic-content="13" data-semantic-parent="25">
                    <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="13" data-semantic-parent="24" data-semantic-operator="prefixop,-">-</mo>
                    <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="17" data-semantic-children="14,15" data-semantic-content="16,14" data-semantic-parent="24">
                      <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="14" data-semantic-parent="17" data-semantic-operator="appl">cos</mi>
                      <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="16" data-semantic-parent="17" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="15" data-semantic-parent="17">x</mi>
                    </mrow>
                  </mrow>
                  <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="18" data-semantic-parent="25" data-semantic-operator="infixop,+">+</mo>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="19" data-semantic-parent="25">C</mi>
                </mrow>
              </mstyle>
            </math>`
            },

            {
              raw: " int cosx dx = sinx +C",
              math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
              <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="21" data-semantic-children="19,20" data-semantic-content="9" data-semantic-speech="integral cosine x d x equals sine x plus upper C">
                <mrow data-semantic-type="integral" data-semantic-role="integral" data-semantic-id="19" data-semantic-children="0,17,18" data-semantic-content="0" data-semantic-parent="21">
                  <mo data-semantic-type="largeop" data-semantic-role="integral" data-semantic-id="0" data-semantic-parent="19" data-semantic-operator="integral">&#x222B;</mo>
                  <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="17" data-semantic-children="4,5,6" data-semantic-content="16,7" data-semantic-parent="19">
                    <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="4" data-semantic-children="1,2" data-semantic-content="3,1" data-semantic-parent="17">
                      <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="1" data-semantic-parent="4" data-semantic-operator="appl">cos</mi>
                      <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="3" data-semantic-parent="4" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="4">x</mi>
                    </mrow>
                  </mrow>
                  <mrow data-semantic-type="empty" data-semantic-role="unknown" data-semantic-id="18" data-semantic-parent="19"></mrow>
                </mrow>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="16" data-semantic-parent="17" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mrow>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="5" data-semantic-parent="17">d</mi>
                  <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="7" data-semantic-parent="17" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="6" data-semantic-parent="17">x</mi>
                </mrow>
                <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="9" data-semantic-parent="21" data-semantic-operator="relseq,=">=</mo>
                <mrow data-semantic-type="infixop" data-semantic-role="addition" data-semantic-id="20" data-semantic-children="13,15" data-semantic-content="14" data-semantic-parent="21">
                  <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="13" data-semantic-children="10,11" data-semantic-content="12,10" data-semantic-parent="20">
                    <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="10" data-semantic-parent="13" data-semantic-operator="appl">sin</mi>
                    <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="12" data-semantic-parent="13" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="11" data-semantic-parent="13">x</mi>
                  </mrow>
                  <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="14" data-semantic-parent="20" data-semantic-operator="infixop,+">+</mo>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="15" data-semantic-parent="20">C</mi>
                </mrow>
              </mstyle>
            </math>`
            },

            {
              raw: "int tanx dx= ln|sec(x)|+C",
              math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
              <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="30" data-semantic-children="28,29" data-semantic-content="9" data-semantic-speech="integral tangent x d x equals ln StartAbsoluteValue secant left parenthesis x right parenthesis EndAbsoluteValue plus upper C">
                <mrow data-semantic-type="integral" data-semantic-role="integral" data-semantic-id="28" data-semantic-children="0,26,27" data-semantic-content="0" data-semantic-parent="30">
                  <mo data-semantic-type="largeop" data-semantic-role="integral" data-semantic-id="0" data-semantic-parent="28" data-semantic-operator="integral">&#x222B;</mo>
                  <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="26" data-semantic-children="4,5,6" data-semantic-content="25,7" data-semantic-parent="28">
                    <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="4" data-semantic-children="1,2" data-semantic-content="3,1" data-semantic-parent="26">
                      <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="1" data-semantic-parent="4" data-semantic-operator="appl">tan</mi>
                      <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="3" data-semantic-parent="4" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="4">x</mi>
                    </mrow>
                  </mrow>
                  <mrow data-semantic-type="empty" data-semantic-role="unknown" data-semantic-id="27" data-semantic-parent="28"></mrow>
                </mrow>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="25" data-semantic-parent="26" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mrow>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="5" data-semantic-parent="26">d</mi>
                  <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="7" data-semantic-parent="26" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="6" data-semantic-parent="26">x</mi>
                </mrow>
                <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="9" data-semantic-parent="30" data-semantic-operator="relseq,=">=</mo>
                <mrow data-semantic-type="infixop" data-semantic-role="addition" data-semantic-id="29" data-semantic-children="24,22" data-semantic-content="21" data-semantic-parent="30">
                  <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="24" data-semantic-children="10,20" data-semantic-content="23,10" data-semantic-parent="29">
                    <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="10" data-semantic-parent="24" data-semantic-operator="appl">ln</mi>
                    <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="23" data-semantic-parent="24" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                    <mrow data-semantic-type="fenced" data-semantic-role="neutral" data-semantic-id="20" data-semantic-children="18" data-semantic-content="11,19" data-semantic-parent="24">
                      <mo data-semantic-type="fence" data-semantic-role="neutral" data-semantic-id="11" data-semantic-parent="20" data-semantic-operator="fenced">|</mo>
                      <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="18" data-semantic-children="12,16" data-semantic-content="17,12" data-semantic-parent="20">
                        <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="12" data-semantic-parent="18" data-semantic-operator="appl">sec</mi>
                        <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="17" data-semantic-parent="18" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                        <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="16" data-semantic-children="14" data-semantic-content="13,15" data-semantic-parent="18">
                          <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="13" data-semantic-parent="16" data-semantic-operator="fenced">(</mo>
                          <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="14" data-semantic-parent="16">x</mi>
                          <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="15" data-semantic-parent="16" data-semantic-operator="fenced">)</mo>
                        </mrow>
                      </mrow>
                      <mo data-semantic-type="fence" data-semantic-role="neutral" data-semantic-id="19" data-semantic-parent="20" data-semantic-operator="fenced">|</mo>
                    </mrow>
                  </mrow>
                  <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="21" data-semantic-parent="29" data-semantic-operator="infixop,+">+</mo>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="22" data-semantic-parent="29">C</mi>
                </mrow>
              </mstyle>
            </math>`
            },
            {
             raw:"int cotx dx = ln|sin(x)|+C",
             math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
             <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="30" data-semantic-children="28,29" data-semantic-content="9" data-semantic-speech="integral cotangent x d x equals ln StartAbsoluteValue sine left parenthesis x right parenthesis EndAbsoluteValue plus upper C">
               <mrow data-semantic-type="integral" data-semantic-role="integral" data-semantic-id="28" data-semantic-children="0,26,27" data-semantic-content="0" data-semantic-parent="30">
                 <mo data-semantic-type="largeop" data-semantic-role="integral" data-semantic-id="0" data-semantic-parent="28" data-semantic-operator="integral">&#x222B;</mo>
                 <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="26" data-semantic-children="4,5,6" data-semantic-content="25,7" data-semantic-parent="28">
                   <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="4" data-semantic-children="1,2" data-semantic-content="3,1" data-semantic-parent="26">
                     <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="1" data-semantic-parent="4" data-semantic-operator="appl">cot</mi>
                     <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="3" data-semantic-parent="4" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                     <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="4">x</mi>
                   </mrow>
                 </mrow>
                 <mrow data-semantic-type="empty" data-semantic-role="unknown" data-semantic-id="27" data-semantic-parent="28"></mrow>
               </mrow>
               <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="25" data-semantic-parent="26" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
               <mrow>
                 <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="5" data-semantic-parent="26">d</mi>
                 <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="7" data-semantic-parent="26" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                 <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="6" data-semantic-parent="26">x</mi>
               </mrow>
               <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="9" data-semantic-parent="30" data-semantic-operator="relseq,=">=</mo>
               <mrow data-semantic-type="infixop" data-semantic-role="addition" data-semantic-id="29" data-semantic-children="24,22" data-semantic-content="21" data-semantic-parent="30">
                 <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="24" data-semantic-children="10,20" data-semantic-content="23,10" data-semantic-parent="29">
                   <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="10" data-semantic-parent="24" data-semantic-operator="appl">ln</mi>
                   <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="23" data-semantic-parent="24" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                   <mrow data-semantic-type="fenced" data-semantic-role="neutral" data-semantic-id="20" data-semantic-children="18" data-semantic-content="11,19" data-semantic-parent="24">
                     <mo data-semantic-type="fence" data-semantic-role="neutral" data-semantic-id="11" data-semantic-parent="20" data-semantic-operator="fenced">|</mo>
                     <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="18" data-semantic-children="12,16" data-semantic-content="17,12" data-semantic-parent="20">
                       <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="12" data-semantic-parent="18" data-semantic-operator="appl">sin</mi>
                       <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="17" data-semantic-parent="18" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                       <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="16" data-semantic-children="14" data-semantic-content="13,15" data-semantic-parent="18">
                         <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="13" data-semantic-parent="16" data-semantic-operator="fenced">(</mo>
                         <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="14" data-semantic-parent="16">x</mi>
                         <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="15" data-semantic-parent="16" data-semantic-operator="fenced">)</mo>
                       </mrow>
                     </mrow>
                     <mo data-semantic-type="fence" data-semantic-role="neutral" data-semantic-id="19" data-semantic-parent="20" data-semantic-operator="fenced">|</mo>
                   </mrow>
                 </mrow>
                 <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="21" data-semantic-parent="29" data-semantic-operator="infixop,+">+</mo>
                 <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="22" data-semantic-parent="29">C</mi>
               </mrow>
             </mstyle>
           </math>`
            },
            {

            },
            {
              raw:"int secx dx = ln|secx+tanx|+C",
              math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
              <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="33" data-semantic-children="31,32" data-semantic-content="9" data-semantic-speech="integral secant x d x equals ln StartAbsoluteValue secant x plus tangent x EndAbsoluteValue plus upper C">
                <mrow data-semantic-type="integral" data-semantic-role="integral" data-semantic-id="31" data-semantic-children="0,29,30" data-semantic-content="0" data-semantic-parent="33">
                  <mo data-semantic-type="largeop" data-semantic-role="integral" data-semantic-id="0" data-semantic-parent="31" data-semantic-operator="integral">&#x222B;</mo>
                  <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="29" data-semantic-children="4,5,6" data-semantic-content="28,7" data-semantic-parent="31">
                    <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="4" data-semantic-children="1,2" data-semantic-content="3,1" data-semantic-parent="29">
                      <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="1" data-semantic-parent="4" data-semantic-operator="appl">sec</mi>
                      <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="3" data-semantic-parent="4" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="4">x</mi>
                    </mrow>
                  </mrow>
                  <mrow data-semantic-type="empty" data-semantic-role="unknown" data-semantic-id="30" data-semantic-parent="31"></mrow>
                </mrow>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="28" data-semantic-parent="29" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mrow>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="5" data-semantic-parent="29">d</mi>
                  <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="7" data-semantic-parent="29" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="6" data-semantic-parent="29">x</mi>
                </mrow>
                <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="9" data-semantic-parent="33" data-semantic-operator="relseq,=">=</mo>
                <mrow data-semantic-type="infixop" data-semantic-role="addition" data-semantic-id="32" data-semantic-children="27,25" data-semantic-content="24" data-semantic-parent="33">
                  <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-id="27" data-semantic-children="10,23" data-semantic-content="26,10" data-semantic-parent="32">
                    <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="10" data-semantic-parent="27" data-semantic-operator="appl">ln</mi>
                    <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="26" data-semantic-parent="27" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                    <mrow data-semantic-type="fenced" data-semantic-role="neutral" data-semantic-id="23" data-semantic-children="22" data-semantic-content="11,21" data-semantic-parent="27">
                      <mo data-semantic-type="fence" data-semantic-role="neutral" data-semantic-id="11" data-semantic-parent="23" data-semantic-operator="fenced">|</mo>
                      <mrow data-semantic-type="infixop" data-semantic-role="addition" data-semantic-id="22" data-semantic-children="15,20" data-semantic-content="16" data-semantic-parent="23">
                        <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="15" data-semantic-children="12,13" data-semantic-content="14,12" data-semantic-parent="22">
                          <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="12" data-semantic-parent="15" data-semantic-operator="appl">sec</mi>
                          <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="14" data-semantic-parent="15" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                          <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="13" data-semantic-parent="15">x</mi>
                        </mrow>
                        <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="16" data-semantic-parent="22" data-semantic-operator="infixop,+">+</mo>
                        <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="20" data-semantic-children="17,18" data-semantic-content="19,17" data-semantic-parent="22">
                          <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="17" data-semantic-parent="20" data-semantic-operator="appl">tan</mi>
                          <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="19" data-semantic-parent="20" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                          <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="18" data-semantic-parent="20">x</mi>
                        </mrow>
                      </mrow>
                      <mo data-semantic-type="fence" data-semantic-role="neutral" data-semantic-id="21" data-semantic-parent="23" data-semantic-operator="fenced">|</mo>
                    </mrow>
                  </mrow>
                  <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="24" data-semantic-parent="32" data-semantic-operator="infixop,+">+</mo>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="25" data-semantic-parent="32">C</mi>
                </mrow>
              </mstyle>
            </math>`
            },
            {
              raw:"int cscx dx = -ln|cscx+cotx|+C",
              math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
              <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="35" data-semantic-children="32,34" data-semantic-content="9" data-semantic-speech="integral cosecant x d x equals minus ln StartAbsoluteValue cosecant x plus cotangent x EndAbsoluteValue plus upper C">
                <mrow data-semantic-type="integral" data-semantic-role="integral" data-semantic-id="32" data-semantic-children="0,30,31" data-semantic-content="0" data-semantic-parent="35">
                  <mo data-semantic-type="largeop" data-semantic-role="integral" data-semantic-id="0" data-semantic-parent="32" data-semantic-operator="integral">&#x222B;</mo>
                  <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="30" data-semantic-children="4,5,6" data-semantic-content="29,7" data-semantic-parent="32">
                    <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="4" data-semantic-children="1,2" data-semantic-content="3,1" data-semantic-parent="30">
                      <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="1" data-semantic-parent="4" data-semantic-operator="appl">csc</mi>
                      <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="3" data-semantic-parent="4" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="4">x</mi>
                    </mrow>
                  </mrow>
                  <mrow data-semantic-type="empty" data-semantic-role="unknown" data-semantic-id="31" data-semantic-parent="32"></mrow>
                </mrow>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="29" data-semantic-parent="30" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mrow>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="5" data-semantic-parent="30">d</mi>
                  <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="7" data-semantic-parent="30" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="6" data-semantic-parent="30">x</mi>
                </mrow>
                <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="9" data-semantic-parent="35" data-semantic-operator="relseq,=">=</mo>
                <mrow data-semantic-type="infixop" data-semantic-role="addition" data-semantic-id="34" data-semantic-children="33,26" data-semantic-content="25" data-semantic-parent="35">
                  <mrow data-semantic-type="prefixop" data-semantic-role="negative" data-semantic-id="33" data-semantic-children="28" data-semantic-content="10" data-semantic-parent="34">
                    <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="10" data-semantic-parent="33" data-semantic-operator="prefixop,-">-</mo>
                    <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-id="28" data-semantic-children="11,24" data-semantic-content="27,11" data-semantic-parent="33">
                      <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="11" data-semantic-parent="28" data-semantic-operator="appl">ln</mi>
                      <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="27" data-semantic-parent="28" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                      <mrow data-semantic-type="fenced" data-semantic-role="neutral" data-semantic-id="24" data-semantic-children="23" data-semantic-content="12,22" data-semantic-parent="28">
                        <mo data-semantic-type="fence" data-semantic-role="neutral" data-semantic-id="12" data-semantic-parent="24" data-semantic-operator="fenced">|</mo>
                        <mrow data-semantic-type="infixop" data-semantic-role="addition" data-semantic-id="23" data-semantic-children="16,21" data-semantic-content="17" data-semantic-parent="24">
                          <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="16" data-semantic-children="13,14" data-semantic-content="15,13" data-semantic-parent="23">
                            <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="13" data-semantic-parent="16" data-semantic-operator="appl">csc</mi>
                            <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="15" data-semantic-parent="16" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                            <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="14" data-semantic-parent="16">x</mi>
                          </mrow>
                          <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="17" data-semantic-parent="23" data-semantic-operator="infixop,+">+</mo>
                          <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="21" data-semantic-children="18,19" data-semantic-content="20,18" data-semantic-parent="23">
                            <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="18" data-semantic-parent="21" data-semantic-operator="appl">cot</mi>
                            <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="20" data-semantic-parent="21" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                            <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="19" data-semantic-parent="21">x</mi>
                          </mrow>
                        </mrow>
                        <mo data-semantic-type="fence" data-semantic-role="neutral" data-semantic-id="22" data-semantic-parent="24" data-semantic-operator="fenced">|</mo>
                      </mrow>
                    </mrow>
                  </mrow>
                  <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="25" data-semantic-parent="34" data-semantic-operator="infixop,+">+</mo>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="26" data-semantic-parent="34">C</mi>
                </mrow>
              </mstyle>
            </math>`
            },
            {
              raw:"int 1/sqrt(1-x^2)dx=sin^-1(x)+C",
              math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
              <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="33" data-semantic-children="31,32" data-semantic-content="14" data-semantic-speech="integral StartFraction 1 Over StartRoot 1 minus x squared EndRoot EndFraction d x equals sine Superscript negative 1 Baseline left parenthesis x right parenthesis plus upper C">
                <mrow data-semantic-type="integral" data-semantic-role="integral" data-semantic-id="31" data-semantic-children="0,29,30" data-semantic-content="0" data-semantic-parent="33">
                  <mo data-semantic-type="largeop" data-semantic-role="integral" data-semantic-id="0" data-semantic-parent="31" data-semantic-operator="integral">&#x222B;</mo>
                  <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="29" data-semantic-children="9,10,11" data-semantic-content="28,12" data-semantic-parent="31">
                    <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="9" data-semantic-children="1,8" data-semantic-parent="29">
                      <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="1" data-semantic-parent="9">1</mn>
                      <msqrt data-semantic-type="sqrt" data-semantic-role="unknown" data-semantic-id="8" data-semantic-children="7" data-semantic-parent="9">
                        <mrow data-semantic-type="infixop" data-semantic-role="subtraction" data-semantic-id="7" data-semantic-children="2,6" data-semantic-content="3" data-semantic-parent="8">
                          <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="7">1</mn>
                          <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="3" data-semantic-parent="7" data-semantic-operator="infixop,-">-</mo>
                          <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="6" data-semantic-children="4,5" data-semantic-parent="7">
                            <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="4" data-semantic-parent="6">x</mi>
                            <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="5" data-semantic-parent="6">2</mn>
                          </msup>
                        </mrow>
                      </msqrt>
                    </mfrac>
                  </mrow>
                  <mrow data-semantic-type="empty" data-semantic-role="unknown" data-semantic-id="30" data-semantic-parent="31"></mrow>
                </mrow>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="28" data-semantic-parent="29" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mrow>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="10" data-semantic-parent="29">d</mi>
                  <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="12" data-semantic-parent="29" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="11" data-semantic-parent="29">x</mi>
                </mrow>
                <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="14" data-semantic-parent="33" data-semantic-operator="relseq,=">=</mo>
                <mrow data-semantic-type="infixop" data-semantic-role="addition" data-semantic-id="32" data-semantic-children="25,27" data-semantic-content="26" data-semantic-parent="33">
                  <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="25" data-semantic-children="19,23" data-semantic-content="24,15" data-semantic-parent="32">
                    <msup data-semantic-type="superscript" data-semantic-role="prefix function" data-semantic-id="19" data-semantic-children="15,18" data-semantic-parent="25">
                      <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="15" data-semantic-parent="19" data-semantic-operator="appl">sin</mi>
                      <mrow data-semantic-type="prefixop" data-semantic-role="negative" data-semantic-annotation="clearspeak:simple" data-semantic-id="18" data-semantic-children="17" data-semantic-content="16" data-semantic-parent="19">
                        <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="16" data-semantic-parent="18" data-semantic-operator="prefixop,-">-</mo>
                        <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="17" data-semantic-parent="18">1</mn>
                      </mrow>
                    </msup>
                    <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="24" data-semantic-parent="25" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                    <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="23" data-semantic-children="21" data-semantic-content="20,22" data-semantic-parent="25">
                      <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="20" data-semantic-parent="23" data-semantic-operator="fenced">(</mo>
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="21" data-semantic-parent="23">x</mi>
                      <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="22" data-semantic-parent="23" data-semantic-operator="fenced">)</mo>
                    </mrow>
                  </mrow>
                  <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="26" data-semantic-parent="32" data-semantic-operator="infixop,+">+</mo>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="27" data-semantic-parent="32">C</mi>
                </mrow>
              </mstyle>
            </math>`
            },
            {
              raw:"int -1/sqrt(1-x^2)dx=cos^-1(x)+C",
              math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
              <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="35" data-semantic-children="33,34" data-semantic-content="15" data-semantic-speech="integral minus StartFraction 1 Over StartRoot 1 minus x squared EndRoot EndFraction d x equals cosine Superscript negative 1 Baseline left parenthesis x right parenthesis plus upper C">
                <mrow data-semantic-type="integral" data-semantic-role="integral" data-semantic-id="33" data-semantic-children="0,31,32" data-semantic-content="0" data-semantic-parent="35">
                  <mo data-semantic-type="largeop" data-semantic-role="integral" data-semantic-id="0" data-semantic-parent="33" data-semantic-operator="integral">&#x222B;</mo>
                  <mrow data-semantic-type="prefixop" data-semantic-role="negative" data-semantic-id="31" data-semantic-children="30" data-semantic-content="1" data-semantic-parent="33">
                    <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="1" data-semantic-parent="31" data-semantic-operator="prefixop,-">-</mo>
                    <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="30" data-semantic-children="10,11,12" data-semantic-content="29,13" data-semantic-parent="31">
                      <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="10" data-semantic-children="2,9" data-semantic-parent="30">
                        <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="10">1</mn>
                        <msqrt data-semantic-type="sqrt" data-semantic-role="unknown" data-semantic-id="9" data-semantic-children="8" data-semantic-parent="10">
                          <mrow data-semantic-type="infixop" data-semantic-role="subtraction" data-semantic-id="8" data-semantic-children="3,7" data-semantic-content="4" data-semantic-parent="9">
                            <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="3" data-semantic-parent="8">1</mn>
                            <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="4" data-semantic-parent="8" data-semantic-operator="infixop,-">-</mo>
                            <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="7" data-semantic-children="5,6" data-semantic-parent="8">
                              <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="5" data-semantic-parent="7">x</mi>
                              <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="6" data-semantic-parent="7">2</mn>
                            </msup>
                          </mrow>
                        </msqrt>
                      </mfrac>
                    </mrow>
                  </mrow>
                  <mrow data-semantic-type="empty" data-semantic-role="unknown" data-semantic-id="32" data-semantic-parent="33"></mrow>
                </mrow>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="29" data-semantic-parent="30" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mrow>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="11" data-semantic-parent="30">d</mi>
                  <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="13" data-semantic-parent="30" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="12" data-semantic-parent="30">x</mi>
                </mrow>
                <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="15" data-semantic-parent="35" data-semantic-operator="relseq,=">=</mo>
                <mrow data-semantic-type="infixop" data-semantic-role="addition" data-semantic-id="34" data-semantic-children="26,28" data-semantic-content="27" data-semantic-parent="35">
                  <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="26" data-semantic-children="20,24" data-semantic-content="25,16" data-semantic-parent="34">
                    <msup data-semantic-type="superscript" data-semantic-role="prefix function" data-semantic-id="20" data-semantic-children="16,19" data-semantic-parent="26">
                      <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="16" data-semantic-parent="20" data-semantic-operator="appl">cos</mi>
                      <mrow data-semantic-type="prefixop" data-semantic-role="negative" data-semantic-annotation="clearspeak:simple" data-semantic-id="19" data-semantic-children="18" data-semantic-content="17" data-semantic-parent="20">
                        <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="17" data-semantic-parent="19" data-semantic-operator="prefixop,-">-</mo>
                        <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="18" data-semantic-parent="19">1</mn>
                      </mrow>
                    </msup>
                    <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="25" data-semantic-parent="26" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                    <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="24" data-semantic-children="22" data-semantic-content="21,23" data-semantic-parent="26">
                      <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="21" data-semantic-parent="24" data-semantic-operator="fenced">(</mo>
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="22" data-semantic-parent="24">x</mi>
                      <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="23" data-semantic-parent="24" data-semantic-operator="fenced">)</mo>
                    </mrow>
                  </mrow>
                  <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="27" data-semantic-parent="34" data-semantic-operator="infixop,+">+</mo>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="28" data-semantic-parent="34">C</mi>
                </mrow>
              </mstyle>
            </math>`
            },
            {
              raw:"int 1/sqrt(a^2-x^2)dx= sin^-1(x/a)+C",
              math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
              <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="37" data-semantic-children="35,36" data-semantic-content="16" data-semantic-speech="integral StartFraction 1 Over StartRoot a squared minus x squared EndRoot EndFraction d x equals sine Superscript negative 1 Baseline left parenthesis StartFraction x Over a EndFraction right parenthesis plus upper C">
                <mrow data-semantic-type="integral" data-semantic-role="integral" data-semantic-id="35" data-semantic-children="0,33,34" data-semantic-content="0" data-semantic-parent="37">
                  <mo data-semantic-type="largeop" data-semantic-role="integral" data-semantic-id="0" data-semantic-parent="35" data-semantic-operator="integral">&#x222B;</mo>
                  <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="33" data-semantic-children="11,12,13" data-semantic-content="32,14" data-semantic-parent="35">
                    <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="11" data-semantic-children="1,10" data-semantic-parent="33">
                      <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="1" data-semantic-parent="11">1</mn>
                      <msqrt data-semantic-type="sqrt" data-semantic-role="unknown" data-semantic-id="10" data-semantic-children="9" data-semantic-parent="11">
                        <mrow data-semantic-type="infixop" data-semantic-role="subtraction" data-semantic-id="9" data-semantic-children="4,8" data-semantic-content="5" data-semantic-parent="10">
                          <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="4" data-semantic-children="2,3" data-semantic-parent="9">
                            <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="4">a</mi>
                            <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="3" data-semantic-parent="4">2</mn>
                          </msup>
                          <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="5" data-semantic-parent="9" data-semantic-operator="infixop,-">-</mo>
                          <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="8" data-semantic-children="6,7" data-semantic-parent="9">
                            <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="6" data-semantic-parent="8">x</mi>
                            <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="7" data-semantic-parent="8">2</mn>
                          </msup>
                        </mrow>
                      </msqrt>
                    </mfrac>
                  </mrow>
                  <mrow data-semantic-type="empty" data-semantic-role="unknown" data-semantic-id="34" data-semantic-parent="35"></mrow>
                </mrow>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="32" data-semantic-parent="33" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mrow>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="12" data-semantic-parent="33">d</mi>
                  <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="14" data-semantic-parent="33" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="13" data-semantic-parent="33">x</mi>
                </mrow>
                <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="16" data-semantic-parent="37" data-semantic-operator="relseq,=">=</mo>
                <mrow data-semantic-type="infixop" data-semantic-role="addition" data-semantic-id="36" data-semantic-children="29,31" data-semantic-content="30" data-semantic-parent="37">
                  <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-id="29" data-semantic-children="21,27" data-semantic-content="28,17" data-semantic-parent="36">
                    <msup data-semantic-type="superscript" data-semantic-role="prefix function" data-semantic-id="21" data-semantic-children="17,20" data-semantic-parent="29">
                      <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="17" data-semantic-parent="21" data-semantic-operator="appl">sin</mi>
                      <mrow data-semantic-type="prefixop" data-semantic-role="negative" data-semantic-annotation="clearspeak:simple" data-semantic-id="20" data-semantic-children="19" data-semantic-content="18" data-semantic-parent="21">
                        <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="18" data-semantic-parent="20" data-semantic-operator="prefixop,-">-</mo>
                        <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="19" data-semantic-parent="20">1</mn>
                      </mrow>
                    </msup>
                    <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="28" data-semantic-parent="29" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                    <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="27" data-semantic-children="25" data-semantic-content="22,26" data-semantic-parent="29">
                      <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="22" data-semantic-parent="27" data-semantic-operator="fenced">(</mo>
                      <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="25" data-semantic-children="23,24" data-semantic-parent="27">
                        <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="23" data-semantic-parent="25">x</mi>
                        <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="24" data-semantic-parent="25">a</mi>
                      </mfrac>
                      <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="26" data-semantic-parent="27" data-semantic-operator="fenced">)</mo>
                    </mrow>
                  </mrow>
                  <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="30" data-semantic-parent="36" data-semantic-operator="infixop,+">+</mo>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="31" data-semantic-parent="36">C</mi>
                </mrow>
              </mstyle>
            </math>`
            },
            {
              raw:"int 1/(1+x^2) dx= tan^-1(x)+C",
              math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
              <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="32" data-semantic-children="30,31" data-semantic-content="13" data-semantic-speech="integral StartFraction 1 Over 1 plus x squared EndFraction d x equals tangent Superscript negative 1 Baseline left parenthesis x right parenthesis plus upper C">
                <mrow data-semantic-type="integral" data-semantic-role="integral" data-semantic-id="30" data-semantic-children="0,28,29" data-semantic-content="0" data-semantic-parent="32">
                  <mo data-semantic-type="largeop" data-semantic-role="integral" data-semantic-id="0" data-semantic-parent="30" data-semantic-operator="integral">&#x222B;</mo>
                  <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="28" data-semantic-children="8,9,10" data-semantic-content="27,11" data-semantic-parent="30">
                    <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="8" data-semantic-children="1,7" data-semantic-parent="28">
                      <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="1" data-semantic-parent="8">1</mn>
                      <mrow data-semantic-type="infixop" data-semantic-role="addition" data-semantic-id="7" data-semantic-children="2,6" data-semantic-content="3" data-semantic-parent="8">
                        <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="7">1</mn>
                        <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="3" data-semantic-parent="7" data-semantic-operator="infixop,+">+</mo>
                        <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="6" data-semantic-children="4,5" data-semantic-parent="7">
                          <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="4" data-semantic-parent="6">x</mi>
                          <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="5" data-semantic-parent="6">2</mn>
                        </msup>
                      </mrow>
                    </mfrac>
                  </mrow>
                  <mrow data-semantic-type="empty" data-semantic-role="unknown" data-semantic-id="29" data-semantic-parent="30"></mrow>
                </mrow>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="27" data-semantic-parent="28" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mrow>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="9" data-semantic-parent="28">d</mi>
                  <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="11" data-semantic-parent="28" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="10" data-semantic-parent="28">x</mi>
                </mrow>
                <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="13" data-semantic-parent="32" data-semantic-operator="relseq,=">=</mo>
                <mrow data-semantic-type="infixop" data-semantic-role="addition" data-semantic-id="31" data-semantic-children="24,26" data-semantic-content="25" data-semantic-parent="32">
                  <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="24" data-semantic-children="18,22" data-semantic-content="23,14" data-semantic-parent="31">
                    <msup data-semantic-type="superscript" data-semantic-role="prefix function" data-semantic-id="18" data-semantic-children="14,17" data-semantic-parent="24">
                      <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="14" data-semantic-parent="18" data-semantic-operator="appl">tan</mi>
                      <mrow data-semantic-type="prefixop" data-semantic-role="negative" data-semantic-annotation="clearspeak:simple" data-semantic-id="17" data-semantic-children="16" data-semantic-content="15" data-semantic-parent="18">
                        <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="15" data-semantic-parent="17" data-semantic-operator="prefixop,-">-</mo>
                        <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="16" data-semantic-parent="17">1</mn>
                      </mrow>
                    </msup>
                    <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="23" data-semantic-parent="24" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                    <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="22" data-semantic-children="20" data-semantic-content="19,21" data-semantic-parent="24">
                      <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="19" data-semantic-parent="22" data-semantic-operator="fenced">(</mo>
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="20" data-semantic-parent="22">x</mi>
                      <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="21" data-semantic-parent="22" data-semantic-operator="fenced">)</mo>
                    </mrow>
                  </mrow>
                  <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="25" data-semantic-parent="31" data-semantic-operator="infixop,+">+</mo>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="26" data-semantic-parent="31">C</mi>
                </mrow>
              </mstyle>
            </math>`
            },
            {
              raw:"int -1/(1+x^2) dx = -cot^-1(x)+C",
              math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
              <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="34" data-semantic-children="32,33" data-semantic-content="14" data-semantic-speech="integral minus StartFraction 1 Over 1 plus x squared EndFraction d x equals cotangent Superscript negative 1 Baseline left parenthesis x right parenthesis plus upper C">
                <mrow data-semantic-type="integral" data-semantic-role="integral" data-semantic-id="32" data-semantic-children="0,30,31" data-semantic-content="0" data-semantic-parent="34">
                  <mo data-semantic-type="largeop" data-semantic-role="integral" data-semantic-id="0" data-semantic-parent="32" data-semantic-operator="integral">&#x222B;</mo>
                  <mrow data-semantic-type="prefixop" data-semantic-role="negative" data-semantic-id="30" data-semantic-children="29" data-semantic-content="1" data-semantic-parent="32">
                    <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="1" data-semantic-parent="30" data-semantic-operator="prefixop,-">-</mo>
                    <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="29" data-semantic-children="9,10,11" data-semantic-content="28,12" data-semantic-parent="30">
                      <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="9" data-semantic-children="2,8" data-semantic-parent="29">
                        <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="9">1</mn>
                        <mrow data-semantic-type="infixop" data-semantic-role="addition" data-semantic-id="8" data-semantic-children="3,7" data-semantic-content="4" data-semantic-parent="9">
                          <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="3" data-semantic-parent="8">1</mn>
                          <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="4" data-semantic-parent="8" data-semantic-operator="infixop,+">+</mo>
                          <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="7" data-semantic-children="5,6" data-semantic-parent="8">
                            <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="5" data-semantic-parent="7">x</mi>
                            <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="6" data-semantic-parent="7">2</mn>
                          </msup>
                        </mrow>
                      </mfrac>
                    </mrow>
                  </mrow>
                  <mrow data-semantic-type="empty" data-semantic-role="unknown" data-semantic-id="31" data-semantic-parent="32"></mrow>
                </mrow>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="28" data-semantic-parent="29" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mrow>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="10" data-semantic-parent="29">d</mi>
                  <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="12" data-semantic-parent="29" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="11" data-semantic-parent="29">x</mi>
                </mrow>
                <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="14" data-semantic-parent="34" data-semantic-operator="relseq,=">=</mo>
                <mrow data-semantic-type="infixop" data-semantic-role="addition" data-semantic-id="33" data-semantic-children="25,27" data-semantic-content="26" data-semantic-parent="34">
                  <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="25" data-semantic-children="19,23" data-semantic-content="24,15" data-semantic-parent="33">
                    <msup data-semantic-type="superscript" data-semantic-role="prefix function" data-semantic-id="19" data-semantic-children="15,18" data-semantic-parent="25">
                      <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="15" data-semantic-parent="19" data-semantic-operator="appl">cot</mi>
                      <mrow data-semantic-type="prefixop" data-semantic-role="negative" data-semantic-annotation="clearspeak:simple" data-semantic-id="18" data-semantic-children="17" data-semantic-content="16" data-semantic-parent="19">
                        <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="16" data-semantic-parent="18" data-semantic-operator="prefixop,-">-</mo>
                        <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="17" data-semantic-parent="18">1</mn>
                      </mrow>
                    </msup>
                    <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="24" data-semantic-parent="25" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                    <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="23" data-semantic-children="21" data-semantic-content="20,22" data-semantic-parent="25">
                      <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="20" data-semantic-parent="23" data-semantic-operator="fenced">(</mo>
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="21" data-semantic-parent="23">x</mi>
                      <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="22" data-semantic-parent="23" data-semantic-operator="fenced">)</mo>
                    </mrow>
                  </mrow>
                  <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="26" data-semantic-parent="33" data-semantic-operator="infixop,+">+</mo>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="27" data-semantic-parent="33">C</mi>
                </mrow>
              </mstyle>
            </math>`
            },
            {
              raw:"int 1/(xsqrt(x^2-1)) dx= sec^-1(x)+C",
              math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
              <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="36" data-semantic-children="34,35" data-semantic-content="17" data-semantic-speech="integral StartFraction 1 Over x StartRoot x squared minus 1 EndRoot EndFraction d x equals secant Superscript negative 1 Baseline left parenthesis x right parenthesis plus upper C">
                <mrow data-semantic-type="integral" data-semantic-role="integral" data-semantic-id="34" data-semantic-children="0,32,33" data-semantic-content="0" data-semantic-parent="36">
                  <mo data-semantic-type="largeop" data-semantic-role="integral" data-semantic-id="0" data-semantic-parent="34" data-semantic-operator="integral">&#x222B;</mo>
                  <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="32" data-semantic-children="12,13,14" data-semantic-content="31,15" data-semantic-parent="34">
                    <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="12" data-semantic-children="1,11" data-semantic-parent="32">
                      <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="1" data-semantic-parent="12">1</mn>
                      <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="11" data-semantic-children="2,9" data-semantic-content="10" data-semantic-parent="12">
                        <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="11">x</mi>
                        <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="10" data-semantic-parent="11" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                        <msqrt data-semantic-type="sqrt" data-semantic-role="unknown" data-semantic-id="9" data-semantic-children="8" data-semantic-parent="11">
                          <mrow data-semantic-type="infixop" data-semantic-role="subtraction" data-semantic-id="8" data-semantic-children="5,7" data-semantic-content="6" data-semantic-parent="9">
                            <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="5" data-semantic-children="3,4" data-semantic-parent="8">
                              <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="3" data-semantic-parent="5">x</mi>
                              <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="4" data-semantic-parent="5">2</mn>
                            </msup>
                            <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="6" data-semantic-parent="8" data-semantic-operator="infixop,-">-</mo>
                            <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="7" data-semantic-parent="8">1</mn>
                          </mrow>
                        </msqrt>
                      </mrow>
                    </mfrac>
                  </mrow>
                  <mrow data-semantic-type="empty" data-semantic-role="unknown" data-semantic-id="33" data-semantic-parent="34"></mrow>
                </mrow>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="31" data-semantic-parent="32" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mrow>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="13" data-semantic-parent="32">d</mi>
                  <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="15" data-semantic-parent="32" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="14" data-semantic-parent="32">x</mi>
                </mrow>
                <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="17" data-semantic-parent="36" data-semantic-operator="relseq,=">=</mo>
                <mrow data-semantic-type="infixop" data-semantic-role="addition" data-semantic-id="35" data-semantic-children="28,30" data-semantic-content="29" data-semantic-parent="36">
                  <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="28" data-semantic-children="22,26" data-semantic-content="27,18" data-semantic-parent="35">
                    <msup data-semantic-type="superscript" data-semantic-role="prefix function" data-semantic-id="22" data-semantic-children="18,21" data-semantic-parent="28">
                      <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="18" data-semantic-parent="22" data-semantic-operator="appl">sec</mi>
                      <mrow data-semantic-type="prefixop" data-semantic-role="negative" data-semantic-annotation="clearspeak:simple" data-semantic-id="21" data-semantic-children="20" data-semantic-content="19" data-semantic-parent="22">
                        <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="19" data-semantic-parent="21" data-semantic-operator="prefixop,-">-</mo>
                        <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="20" data-semantic-parent="21">1</mn>
                      </mrow>
                    </msup>
                    <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="27" data-semantic-parent="28" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                    <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="26" data-semantic-children="24" data-semantic-content="23,25" data-semantic-parent="28">
                      <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="23" data-semantic-parent="26" data-semantic-operator="fenced">(</mo>
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="24" data-semantic-parent="26">x</mi>
                      <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="25" data-semantic-parent="26" data-semantic-operator="fenced">)</mo>
                    </mrow>
                  </mrow>
                  <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="29" data-semantic-parent="35" data-semantic-operator="infixop,+">+</mo>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="30" data-semantic-parent="35">C</mi>
                </mrow>
              </mstyle>
            </math>`
            },
            {
              raw : "int -1/(xsqrt(x^2-1)) dx= csc^-1(x)+C",
              math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
              <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="38" data-semantic-children="36,37" data-semantic-content="18" data-semantic-speech="integral minus StartFraction 1 Over x StartRoot x squared minus 1 EndRoot EndFraction d x equals cosecant Superscript negative 1 Baseline left parenthesis x right parenthesis plus upper C">
                <mrow data-semantic-type="integral" data-semantic-role="integral" data-semantic-id="36" data-semantic-children="0,34,35" data-semantic-content="0" data-semantic-parent="38">
                  <mo data-semantic-type="largeop" data-semantic-role="integral" data-semantic-id="0" data-semantic-parent="36" data-semantic-operator="integral">&#x222B;</mo>
                  <mrow data-semantic-type="prefixop" data-semantic-role="negative" data-semantic-id="34" data-semantic-children="33" data-semantic-content="1" data-semantic-parent="36">
                    <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="1" data-semantic-parent="34" data-semantic-operator="prefixop,-">-</mo>
                    <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="33" data-semantic-children="13,14,15" data-semantic-content="32,16" data-semantic-parent="34">
                      <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="13" data-semantic-children="2,12" data-semantic-parent="33">
                        <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="13">1</mn>
                        <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="12" data-semantic-children="3,10" data-semantic-content="11" data-semantic-parent="13">
                          <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="3" data-semantic-parent="12">x</mi>
                          <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="11" data-semantic-parent="12" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                          <msqrt data-semantic-type="sqrt" data-semantic-role="unknown" data-semantic-id="10" data-semantic-children="9" data-semantic-parent="12">
                            <mrow data-semantic-type="infixop" data-semantic-role="subtraction" data-semantic-id="9" data-semantic-children="6,8" data-semantic-content="7" data-semantic-parent="10">
                              <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="6" data-semantic-children="4,5" data-semantic-parent="9">
                                <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="4" data-semantic-parent="6">x</mi>
                                <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="5" data-semantic-parent="6">2</mn>
                              </msup>
                              <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="7" data-semantic-parent="9" data-semantic-operator="infixop,-">-</mo>
                              <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="8" data-semantic-parent="9">1</mn>
                            </mrow>
                          </msqrt>
                        </mrow>
                      </mfrac>
                    </mrow>
                  </mrow>
                  <mrow data-semantic-type="empty" data-semantic-role="unknown" data-semantic-id="35" data-semantic-parent="36"></mrow>
                </mrow>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="32" data-semantic-parent="33" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mrow>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="14" data-semantic-parent="33">d</mi>
                  <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="16" data-semantic-parent="33" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="15" data-semantic-parent="33">x</mi>
                </mrow>
                <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="18" data-semantic-parent="38" data-semantic-operator="relseq,=">=</mo>
                <mrow data-semantic-type="infixop" data-semantic-role="addition" data-semantic-id="37" data-semantic-children="29,31" data-semantic-content="30" data-semantic-parent="38">
                  <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="29" data-semantic-children="23,27" data-semantic-content="28,19" data-semantic-parent="37">
                    <msup data-semantic-type="superscript" data-semantic-role="prefix function" data-semantic-id="23" data-semantic-children="19,22" data-semantic-parent="29">
                      <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="19" data-semantic-parent="23" data-semantic-operator="appl">csc</mi>
                      <mrow data-semantic-type="prefixop" data-semantic-role="negative" data-semantic-annotation="clearspeak:simple" data-semantic-id="22" data-semantic-children="21" data-semantic-content="20" data-semantic-parent="23">
                        <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="20" data-semantic-parent="22" data-semantic-operator="prefixop,-">-</mo>
                        <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="21" data-semantic-parent="22">1</mn>
                      </mrow>
                    </msup>
                    <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="28" data-semantic-parent="29" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                    <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="27" data-semantic-children="25" data-semantic-content="24,26" data-semantic-parent="29">
                      <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="24" data-semantic-parent="27" data-semantic-operator="fenced">(</mo>
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="25" data-semantic-parent="27">x</mi>
                      <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="26" data-semantic-parent="27" data-semantic-operator="fenced">)</mo>
                    </mrow>
                  </mrow>
                  <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="30" data-semantic-parent="37" data-semantic-operator="infixop,+">+</mo>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="31" data-semantic-parent="37">C</mi>
                </mrow>
              </mstyle>
            </math>`
            },
            {
              raw:"by partial fraction ,int1/((x-a)(x-b))dx=1/(a-b)[ln(x-a)-ln(x-b)]+C",
              math_ml:`by partial fraction, <math xmlns="http://www.w3.org/1998/Math/MathML">
              <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="64" data-semantic-children="60,63" data-semantic-content="23" data-semantic-speech="integral StartFraction 1 Over left parenthesis x minus a right parenthesis left parenthesis x minus b right parenthesis EndFraction d x equals StartFraction 1 Over a minus b EndFraction left bracket ln left parenthesis x minus a right parenthesis minus ln left parenthesis x minus b right parenthesis right bracket plus upper C">
                <mrow data-semantic-type="integral" data-semantic-role="integral" data-semantic-id="60" data-semantic-children="0,58,59" data-semantic-content="0" data-semantic-parent="64">
                  <mo data-semantic-type="largeop" data-semantic-role="integral" data-semantic-id="0" data-semantic-parent="60" data-semantic-operator="integral">&#x222B;</mo>
                  <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="58" data-semantic-children="18,19,20" data-semantic-content="57,21" data-semantic-parent="60">
                    <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="18" data-semantic-children="1,17" data-semantic-parent="58">
                      <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="1" data-semantic-parent="18">1</mn>
                      <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="17" data-semantic-children="8,15" data-semantic-content="16" data-semantic-parent="18">
                        <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="8" data-semantic-children="7" data-semantic-content="2,6" data-semantic-parent="17">
                          <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="2" data-semantic-parent="8" data-semantic-operator="fenced">(</mo>
                          <mrow data-semantic-type="infixop" data-semantic-role="subtraction" data-semantic-id="7" data-semantic-children="3,5" data-semantic-content="4" data-semantic-parent="8">
                            <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="3" data-semantic-parent="7">x</mi>
                            <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="4" data-semantic-parent="7" data-semantic-operator="infixop,-">-</mo>
                            <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="5" data-semantic-parent="7">a</mi>
                          </mrow>
                          <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="6" data-semantic-parent="8" data-semantic-operator="fenced">)</mo>
                        </mrow>
                        <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="16" data-semantic-parent="17" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                        <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="15" data-semantic-children="14" data-semantic-content="9,13" data-semantic-parent="17">
                          <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="9" data-semantic-parent="15" data-semantic-operator="fenced">(</mo>
                          <mrow data-semantic-type="infixop" data-semantic-role="subtraction" data-semantic-id="14" data-semantic-children="10,12" data-semantic-content="11" data-semantic-parent="15">
                            <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="10" data-semantic-parent="14">x</mi>
                            <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="11" data-semantic-parent="14" data-semantic-operator="infixop,-">-</mo>
                            <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="12" data-semantic-parent="14">b</mi>
                          </mrow>
                          <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="13" data-semantic-parent="15" data-semantic-operator="fenced">)</mo>
                        </mrow>
                      </mrow>
                    </mfrac>
                  </mrow>
                  <mrow data-semantic-type="empty" data-semantic-role="unknown" data-semantic-id="59" data-semantic-parent="60"></mrow>
                </mrow>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="57" data-semantic-parent="58" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mrow>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="19" data-semantic-parent="58">d</mi>
                  <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="21" data-semantic-parent="58" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="20" data-semantic-parent="58">x</mi>
                </mrow>
                <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="23" data-semantic-parent="64" data-semantic-operator="relseq,=">=</mo>
                <mrow data-semantic-type="infixop" data-semantic-role="addition" data-semantic-id="63" data-semantic-children="62,56" data-semantic-content="55" data-semantic-parent="64">
                  <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="62" data-semantic-children="29,54" data-semantic-content="61" data-semantic-parent="63">
                    <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="29" data-semantic-children="24,28" data-semantic-parent="62">
                      <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="24" data-semantic-parent="29">1</mn>
                      <mrow data-semantic-type="infixop" data-semantic-role="subtraction" data-semantic-id="28" data-semantic-children="25,27" data-semantic-content="26" data-semantic-parent="29">
                        <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="25" data-semantic-parent="28">a</mi>
                        <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="26" data-semantic-parent="28" data-semantic-operator="infixop,-">-</mo>
                        <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="27" data-semantic-parent="28">b</mi>
                      </mrow>
                    </mfrac>
                    <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="61" data-semantic-parent="62" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                    <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="54" data-semantic-children="53" data-semantic-content="30,52" data-semantic-parent="62">
                      <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="30" data-semantic-parent="54" data-semantic-operator="fenced">[</mo>
                      <mrow data-semantic-type="infixop" data-semantic-role="subtraction" data-semantic-id="53" data-semantic-children="40,51" data-semantic-content="41" data-semantic-parent="54">
                        <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-id="40" data-semantic-children="31,38" data-semantic-content="39,31" data-semantic-parent="53">
                          <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="31" data-semantic-parent="40" data-semantic-operator="appl">ln</mi>
                          <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="39" data-semantic-parent="40" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                          <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="38" data-semantic-children="37" data-semantic-content="32,36" data-semantic-parent="40">
                            <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="32" data-semantic-parent="38" data-semantic-operator="fenced">(</mo>
                            <mrow data-semantic-type="infixop" data-semantic-role="subtraction" data-semantic-id="37" data-semantic-children="33,35" data-semantic-content="34" data-semantic-parent="38">
                              <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="33" data-semantic-parent="37">x</mi>
                              <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="34" data-semantic-parent="37" data-semantic-operator="infixop,-">-</mo>
                              <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="35" data-semantic-parent="37">a</mi>
                            </mrow>
                            <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="36" data-semantic-parent="38" data-semantic-operator="fenced">)</mo>
                          </mrow>
                        </mrow>
                        <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="41" data-semantic-parent="53" data-semantic-operator="infixop,-">-</mo>
                        <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-id="51" data-semantic-children="42,49" data-semantic-content="50,42" data-semantic-parent="53">
                          <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="42" data-semantic-parent="51" data-semantic-operator="appl">ln</mi>
                          <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="50" data-semantic-parent="51" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                          <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="49" data-semantic-children="48" data-semantic-content="43,47" data-semantic-parent="51">
                            <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="43" data-semantic-parent="49" data-semantic-operator="fenced">(</mo>
                            <mrow data-semantic-type="infixop" data-semantic-role="subtraction" data-semantic-id="48" data-semantic-children="44,46" data-semantic-content="45" data-semantic-parent="49">
                              <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="44" data-semantic-parent="48">x</mi>
                              <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="45" data-semantic-parent="48" data-semantic-operator="infixop,-">-</mo>
                              <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="46" data-semantic-parent="48">b</mi>
                            </mrow>
                            <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="47" data-semantic-parent="49" data-semantic-operator="fenced">)</mo>
                          </mrow>
                        </mrow>
                      </mrow>
                      <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="52" data-semantic-parent="54" data-semantic-operator="fenced">]</mo>
                    </mrow>
                  </mrow>
                  <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="55" data-semantic-parent="63" data-semantic-operator="infixop,+">+</mo>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="56" data-semantic-parent="63">C</mi>
                </mrow>
              </mstyle>
            </math>`
            },
            {
              raw:"int e^(ax) sin(bx) dx=e^(ax)/(a^2+b^2)(a sin(bx)-bcos(bx))+C",
              math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
              <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="78" data-semantic-children="74,77" data-semantic-content="21" data-semantic-speech="integral e Superscript a x Baseline sine left parenthesis b x right parenthesis d x equals StartFraction e Superscript a x Baseline Over a squared plus b squared EndFraction left parenthesis a sine left parenthesis b x right parenthesis minus b cosine left parenthesis b x right parenthesis right parenthesis plus upper C">
                <mrow data-semantic-type="integral" data-semantic-role="integral" data-semantic-id="74" data-semantic-children="0,72,73" data-semantic-content="0" data-semantic-parent="78">
                  <mo data-semantic-type="largeop" data-semantic-role="integral" data-semantic-id="0" data-semantic-parent="74" data-semantic-operator="integral">&#x222B;</mo>
                  <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="72" data-semantic-children="6,16,17,18" data-semantic-content="70,71,19" data-semantic-parent="74">
                    <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="6" data-semantic-children="1,5" data-semantic-parent="72">
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="1" data-semantic-parent="6">e</mi>
                      <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:simple;clearspeak:unit" data-semantic-id="5" data-semantic-children="2,3" data-semantic-content="4" data-semantic-parent="6">
                        <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="5">a</mi>
                        <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="4" data-semantic-parent="5" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                        <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="3" data-semantic-parent="5">x</mi>
                      </mrow>
                    </msup>
                    <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="70" data-semantic-parent="72" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                    <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="16" data-semantic-children="7,14" data-semantic-content="15,7" data-semantic-parent="72">
                      <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="7" data-semantic-parent="16" data-semantic-operator="appl">sin</mi>
                      <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="15" data-semantic-parent="16" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                      <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="14" data-semantic-children="13" data-semantic-content="8,11" data-semantic-parent="16">
                        <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="8" data-semantic-parent="14" data-semantic-operator="fenced">(</mo>
                        <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:simple;clearspeak:unit" data-semantic-id="13" data-semantic-children="9,10" data-semantic-content="12" data-semantic-parent="14">
                          <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="9" data-semantic-parent="13">b</mi>
                          <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="12" data-semantic-parent="13" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                          <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="10" data-semantic-parent="13">x</mi>
                        </mrow>
                        <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="11" data-semantic-parent="14" data-semantic-operator="fenced">)</mo>
                      </mrow>
                    </mrow>
                  </mrow>
                  <mrow data-semantic-type="empty" data-semantic-role="unknown" data-semantic-id="73" data-semantic-parent="74"></mrow>
                </mrow>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="71" data-semantic-parent="72" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mrow>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="17" data-semantic-parent="72">d</mi>
                  <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="19" data-semantic-parent="72" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="18" data-semantic-parent="72">x</mi>
                </mrow>
                <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="21" data-semantic-parent="78" data-semantic-operator="relseq,=">=</mo>
                <mrow data-semantic-type="infixop" data-semantic-role="addition" data-semantic-id="77" data-semantic-children="76,69" data-semantic-content="68" data-semantic-parent="78">
                  <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="76" data-semantic-children="36,67" data-semantic-content="75" data-semantic-parent="77">
                    <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="36" data-semantic-children="27,35" data-semantic-parent="76">
                      <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="27" data-semantic-children="22,26" data-semantic-parent="36">
                        <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="22" data-semantic-parent="27">e</mi>
                        <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:simple;clearspeak:unit" data-semantic-id="26" data-semantic-children="23,24" data-semantic-content="25" data-semantic-parent="27">
                          <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="23" data-semantic-parent="26">a</mi>
                          <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="25" data-semantic-parent="26" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                          <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="24" data-semantic-parent="26">x</mi>
                        </mrow>
                      </msup>
                      <mrow data-semantic-type="infixop" data-semantic-role="addition" data-semantic-id="35" data-semantic-children="30,34" data-semantic-content="31" data-semantic-parent="36">
                        <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="30" data-semantic-children="28,29" data-semantic-parent="35">
                          <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="28" data-semantic-parent="30">a</mi>
                          <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="29" data-semantic-parent="30">2</mn>
                        </msup>
                        <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="31" data-semantic-parent="35" data-semantic-operator="infixop,+">+</mo>
                        <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="34" data-semantic-children="32,33" data-semantic-parent="35">
                          <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="32" data-semantic-parent="34">b</mi>
                          <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="33" data-semantic-parent="34">2</mn>
                        </msup>
                      </mrow>
                    </mfrac>
                    <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="75" data-semantic-parent="76" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                    <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="67" data-semantic-children="66" data-semantic-content="37,61" data-semantic-parent="76">
                      <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="37" data-semantic-parent="67" data-semantic-operator="fenced">(</mo>
                      <mrow data-semantic-type="infixop" data-semantic-role="subtraction" data-semantic-id="66" data-semantic-children="63,65" data-semantic-content="49" data-semantic-parent="67">
                        <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="63" data-semantic-children="38,48" data-semantic-content="62" data-semantic-parent="66">
                          <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="38" data-semantic-parent="63">a</mi>
                          <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="62" data-semantic-parent="63" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                          <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="48" data-semantic-children="39,46" data-semantic-content="47,39" data-semantic-parent="63">
                            <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="39" data-semantic-parent="48" data-semantic-operator="appl">sin</mi>
                            <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="47" data-semantic-parent="48" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                            <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="46" data-semantic-children="45" data-semantic-content="40,43" data-semantic-parent="48">
                              <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="40" data-semantic-parent="46" data-semantic-operator="fenced">(</mo>
                              <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:simple;clearspeak:unit" data-semantic-id="45" data-semantic-children="41,42" data-semantic-content="44" data-semantic-parent="46">
                                <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="41" data-semantic-parent="45">b</mi>
                                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="44" data-semantic-parent="45" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                                <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="42" data-semantic-parent="45">x</mi>
                              </mrow>
                              <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="43" data-semantic-parent="46" data-semantic-operator="fenced">)</mo>
                            </mrow>
                          </mrow>
                        </mrow>
                        <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="49" data-semantic-parent="66" data-semantic-operator="infixop,-">-</mo>
                        <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="65" data-semantic-children="50,60" data-semantic-content="64" data-semantic-parent="66">
                          <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="50" data-semantic-parent="65">b</mi>
                          <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="64" data-semantic-parent="65" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                          <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="60" data-semantic-children="51,58" data-semantic-content="59,51" data-semantic-parent="65">
                            <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="51" data-semantic-parent="60" data-semantic-operator="appl">cos</mi>
                            <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="59" data-semantic-parent="60" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                            <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="58" data-semantic-children="57" data-semantic-content="52,55" data-semantic-parent="60">
                              <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="52" data-semantic-parent="58" data-semantic-operator="fenced">(</mo>
                              <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:simple;clearspeak:unit" data-semantic-id="57" data-semantic-children="53,54" data-semantic-content="56" data-semantic-parent="58">
                                <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="53" data-semantic-parent="57">b</mi>
                                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="56" data-semantic-parent="57" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                                <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="54" data-semantic-parent="57">x</mi>
                              </mrow>
                              <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="55" data-semantic-parent="58" data-semantic-operator="fenced">)</mo>
                            </mrow>
                          </mrow>
                        </mrow>
                      </mrow>
                      <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="61" data-semantic-parent="67" data-semantic-operator="fenced">)</mo>
                    </mrow>
                  </mrow>
                  <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="68" data-semantic-parent="77" data-semantic-operator="infixop,+">+</mo>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="69" data-semantic-parent="77">C</mi>
                </mrow>
              </mstyle>
            </math>`
            },
            {
              raw:"int e^(ax) cos(bx) dx= e^(ax) / (a^2 + b^2) (b sin bx + a cos bx) + c",
              math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
              <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="70" data-semantic-children="66,69" data-semantic-content="21" data-semantic-speech="integral e Superscript a x Baseline cosine left parenthesis b x right parenthesis d x equals StartFraction e Superscript a x Baseline Over a squared plus b squared EndFraction left parenthesis b sine b x plus a cosine b x right parenthesis plus upper C">
                <mrow data-semantic-type="integral" data-semantic-role="integral" data-semantic-id="66" data-semantic-children="0,64,65" data-semantic-content="0" data-semantic-parent="70">
                  <mo data-semantic-type="largeop" data-semantic-role="integral" data-semantic-id="0" data-semantic-parent="66" data-semantic-operator="integral">&#x222B;</mo>
                  <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="64" data-semantic-children="6,16,17,18" data-semantic-content="62,63,19" data-semantic-parent="66">
                    <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="6" data-semantic-children="1,5" data-semantic-parent="64">
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="1" data-semantic-parent="6">e</mi>
                      <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:simple;clearspeak:unit" data-semantic-id="5" data-semantic-children="2,3" data-semantic-content="4" data-semantic-parent="6">
                        <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="5">a</mi>
                        <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="4" data-semantic-parent="5" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                        <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="3" data-semantic-parent="5">x</mi>
                      </mrow>
                    </msup>
                    <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="62" data-semantic-parent="64" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                    <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="16" data-semantic-children="7,14" data-semantic-content="15,7" data-semantic-parent="64">
                      <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="7" data-semantic-parent="16" data-semantic-operator="appl">cos</mi>
                      <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="15" data-semantic-parent="16" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                      <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="14" data-semantic-children="13" data-semantic-content="8,11" data-semantic-parent="16">
                        <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="8" data-semantic-parent="14" data-semantic-operator="fenced">(</mo>
                        <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:simple;clearspeak:unit" data-semantic-id="13" data-semantic-children="9,10" data-semantic-content="12" data-semantic-parent="14">
                          <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="9" data-semantic-parent="13">b</mi>
                          <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="12" data-semantic-parent="13" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                          <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="10" data-semantic-parent="13">x</mi>
                        </mrow>
                        <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="11" data-semantic-parent="14" data-semantic-operator="fenced">)</mo>
                      </mrow>
                    </mrow>
                  </mrow>
                  <mrow data-semantic-type="empty" data-semantic-role="unknown" data-semantic-id="65" data-semantic-parent="66"></mrow>
                </mrow>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="63" data-semantic-parent="64" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mrow>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="17" data-semantic-parent="64">d</mi>
                  <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="19" data-semantic-parent="64" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="18" data-semantic-parent="64">x</mi>
                </mrow>
                <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="21" data-semantic-parent="70" data-semantic-operator="relseq,=">=</mo>
                <mrow data-semantic-type="infixop" data-semantic-role="addition" data-semantic-id="69" data-semantic-children="68,61" data-semantic-content="60" data-semantic-parent="70">
                  <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="68" data-semantic-children="36,59" data-semantic-content="67" data-semantic-parent="69">
                    <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="36" data-semantic-children="27,35" data-semantic-parent="68">
                      <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="27" data-semantic-children="22,26" data-semantic-parent="36">
                        <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="22" data-semantic-parent="27">e</mi>
                        <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:simple;clearspeak:unit" data-semantic-id="26" data-semantic-children="23,24" data-semantic-content="25" data-semantic-parent="27">
                          <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="23" data-semantic-parent="26">a</mi>
                          <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="25" data-semantic-parent="26" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                          <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="24" data-semantic-parent="26">x</mi>
                        </mrow>
                      </msup>
                      <mrow data-semantic-type="infixop" data-semantic-role="addition" data-semantic-id="35" data-semantic-children="30,34" data-semantic-content="31" data-semantic-parent="36">
                        <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="30" data-semantic-children="28,29" data-semantic-parent="35">
                          <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="28" data-semantic-parent="30">a</mi>
                          <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="29" data-semantic-parent="30">2</mn>
                        </msup>
                        <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="31" data-semantic-parent="35" data-semantic-operator="infixop,+">+</mo>
                        <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="34" data-semantic-children="32,33" data-semantic-parent="35">
                          <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="32" data-semantic-parent="34">b</mi>
                          <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="33" data-semantic-parent="34">2</mn>
                        </msup>
                      </mrow>
                    </mfrac>
                    <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="67" data-semantic-parent="68" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                    <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="59" data-semantic-children="58" data-semantic-content="37,51" data-semantic-parent="68">
                      <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="37" data-semantic-parent="59" data-semantic-operator="fenced">(</mo>
                      <mrow data-semantic-type="infixop" data-semantic-role="addition" data-semantic-id="58" data-semantic-children="54,57" data-semantic-content="44" data-semantic-parent="59">
                        <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="54" data-semantic-children="38,42,43" data-semantic-content="52,53" data-semantic-parent="58">
                          <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="38" data-semantic-parent="54">b</mi>
                          <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="52" data-semantic-parent="54" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                          <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="42" data-semantic-children="39,40" data-semantic-content="41,39" data-semantic-parent="54">
                            <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="39" data-semantic-parent="42" data-semantic-operator="appl">sin</mi>
                            <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="41" data-semantic-parent="42" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                            <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="40" data-semantic-parent="42">b</mi>
                          </mrow>
                          <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="53" data-semantic-parent="54" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                          <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="43" data-semantic-parent="54">x</mi>
                        </mrow>
                        <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="44" data-semantic-parent="58" data-semantic-operator="infixop,+">+</mo>
                        <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="57" data-semantic-children="45,49,50" data-semantic-content="55,56" data-semantic-parent="58">
                          <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="45" data-semantic-parent="57">a</mi>
                          <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="55" data-semantic-parent="57" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                          <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="49" data-semantic-children="46,47" data-semantic-content="48,46" data-semantic-parent="57">
                            <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="46" data-semantic-parent="49" data-semantic-operator="appl">cos</mi>
                            <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="48" data-semantic-parent="49" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                            <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="47" data-semantic-parent="49">b</mi>
                          </mrow>
                          <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="56" data-semantic-parent="57" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                          <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="50" data-semantic-parent="57">x</mi>
                        </mrow>
                      </mrow>
                      <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="51" data-semantic-parent="59" data-semantic-operator="fenced">)</mo>
                    </mrow>
                  </mrow>
                  <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="60" data-semantic-parent="69" data-semantic-operator="infixop,+">+</mo>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="61" data-semantic-parent="69">C</mi>
                </mrow>
              </mstyle>
            </math>`
            },
            {
              raw:"int sin^-1x dx = x sin^-1x+sqrt(1-x^2)+C",
              math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
              <mtable columnalign="left" columnspacing="1em" rowspacing="4pt">
                <mtr>
                  <mtd>
                    <mo data-mjx-texclass="OP">&#x222B;</mo>
                    <mi>s</mi>
                    <mi>i</mi>
                    <msup>
                      <mi>n</mi>
                      <mrow data-mjx-texclass="ORD">
                        <mo>&#x2212;</mo>
                        <mn>1</mn>
                      </mrow>
                    </msup>
                    <mi>x</mi>
                    <mi>d</mi>
                    <mi>x</mi>
                    <mo>=</mo>
                    <mi>x</mi>
                    <mi>s</mi>
                    <mi>i</mi>
                    <msup>
                      <mi>n</mi>
                      <mrow data-mjx-texclass="ORD">
                        <mo>&#x2212;</mo>
                        <mn>1</mn>
                      </mrow>
                    </msup>
                    <mi>x</mi>
                    <mo>+</mo>
                    <msqrt>
                      <mn>1</mn>
                      <mrow data-mjx-texclass="ORD">
                        <mo>&#x2013;</mo>
                      </mrow>
                      <msup>
                        <mi>x</mi>
                        <mn>2</mn>
                      </msup>
                    </msqrt>
                    <mo>+</mo>
                    <mi>C</mi>
                  </mtd>
                </mtr>
              </mtable>
            </math>`
            },
            {
              raw:"int cos^-1 x dx = x cos^-1 x-sqrt(1-x^2)+C",
              math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
              <mtable columnalign="left" columnspacing="1em" rowspacing="4pt">
                <mtr>
                  <mtd>
                    <mo data-mjx-texclass="OP">&#x222B;</mo>
                    <mi>c</mi>
                    <mi>o</mi>
                    <msup>
                      <mi>s</mi>
                      <mrow data-mjx-texclass="ORD">
                        <mo>&#x2212;</mo>
                        <mn>1</mn>
                      </mrow>
                    </msup>
                    <mi>x</mi>
                    <mi>d</mi>
                    <mi>x</mi>
                    <mo>=</mo>
                    <mi>x</mi>
                    <mi>c</mi>
                    <mi>o</mi>
                    <msup>
                      <mi>s</mi>
                      <mrow data-mjx-texclass="ORD">
                        <mo>&#x2212;</mo>
                        <mn>1</mn>
                      </mrow>
                    </msup>
                    <mi>x</mi>
                    <mrow data-mjx-texclass="ORD">
                      <mo>&#x2013;</mo>
                    </mrow>
                    <msqrt>
                      <mn>1</mn>
                      <mrow data-mjx-texclass="ORD">
                        <mo>&#x2013;</mo>
                      </mrow>
                      <msup>
                        <mi>x</mi>
                        <mn>2</mn>
                      </msup>
                    </msqrt>
                    <mo>+</mo>
                    <mi>C</mi>
                  </mtd>
                </mtr>
              </mtable>
            </math>`
            },
            {
              raw:"int tan^-1 x dx =x tan^-1 x -1/2 ln(1+x^2)+C",
              math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
              <mtable columnalign="left" columnspacing="1em" rowspacing="4pt">
                <mtr>
                  <mtd>
                    <mo data-mjx-texclass="OP">&#x222B;</mo>
                    <mi>t</mi>
                    <mi>a</mi>
                    <msup>
                      <mi>n</mi>
                      <mrow data-mjx-texclass="ORD">
                        <mo>&#x2212;</mo>
                        <mn>1</mn>
                      </mrow>
                    </msup>
                    <mi>x</mi>
                    <mi>d</mi>
                    <mi>x</mi>
                    <mo>=</mo>
                    <mi>x</mi>
                    <mi>t</mi>
                    <mi>a</mi>
                    <msup>
                      <mi>n</mi>
                      <mrow data-mjx-texclass="ORD">
                        <mo>&#x2212;</mo>
                        <mn>1</mn>
                      </mrow>
                    </msup>
                    <mi>x</mi>
                    <mrow data-mjx-texclass="ORD">
                      <mo>&#x2013;</mo>
                    </mrow>
                    <mfrac>
                      <mn>1</mn>
                      <mn>2</mn>
                    </mfrac>
                    <mi>l</mi>
                    <mi>n</mi>
                    <mo stretchy="false">(</mo>
                    <mn>1</mn>
                    <mo>+</mo>
                    <msup>
                      <mi>x</mi>
                      <mn>2</mn>
                    </msup>
                    <mo stretchy="false">)</mo>
                    <mo>+</mo>
                    <mi>C</mi>
                  </mtd>
                </mtr>
              </mtable>
            </math>`
            },
            {
              raw:"int cot^-1 x dx = x cot^-1 x+1/2ln(1+x^2)+C",
              math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
              <mtable columnalign="left" columnspacing="1em" rowspacing="4pt">
                <mtr>
                  <mtd>
                    <mo data-mjx-texclass="OP">&#x222B;</mo>
                    <mi>c</mi>
                    <mi>o</mi>
                    <msup>
                      <mi>t</mi>
                      <mrow data-mjx-texclass="ORD">
                        <mn>-1</mn>
                      </mrow>
                    </msup>
                    <mi>x</mi>
                    <mi>d</mi>
                    <mi>x</mi>
                    <mo>=</mo>
                    <mi>x</mi>
                    <mi>c</mi>
                    <mi>o</mi>
                    <msup>
                      <mi>t</mi>
                      <mrow data-mjx-texclass="ORD">
                        <mo>&#x2212;</mo>
                        <mn>1</mn>
                      </mrow>
                    </msup>
                    <mi>x</mi>
                    <mo>+</mo>
                    <mfrac>
                      <mn>1</mn>
                      <mn>2</mn>
                    </mfrac>
                    <mi>l</mi>
                    <mi>n</mi>
                    <mo stretchy="false">(</mo>
                    <mn>1</mn>
                    <mo>+</mo>
                    <msup>
                      <mi>x</mi>
                      <mn>2</mn>
                    </msup>
                    <mo stretchy="false">)</mo>
                    <mo>+</mo>
                    <mi>C</mi>
                  </mtd>
                </mtr>
              </mtable>
            </math>`
            },
            {
              raw:"int csc^-1(x) dx = x csc^-1(x)+ln(x+sqrt(x^2-1))+C",
              math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
              <mtable columnalign="left" columnspacing="1em" rowspacing="4pt">
                <mtr>
                  <mtd>
                    <mo data-mjx-texclass="OP">&#x222B;</mo>
                    <mi>c</mi>
                    <mi>o</mi>
                    <mi>s</mi>
                    <mi>e</mi>
                    <msup>
                      <mi>c</mi>
                      <mrow data-mjx-texclass="ORD">
                        <mo>&#x2212;</mo>
                        <mn>1</mn>
                      </mrow>
                    </msup>
                    <mi>x</mi>
                    <mi>d</mi>
                    <mi>x</mi>
                    <mo>=</mo>
                    <mi>x</mi>
                    <mi>c</mi>
                    <mi>o</mi>
                    <mi>s</mi>
                    <mi>e</mi>
                    <msup>
                      <mi>c</mi>
                      <mrow data-mjx-texclass="ORD">
                        <mo>&#x2212;</mo>
                        <mn>1</mn>
                      </mrow>
                    </msup>
                    <mi>x</mi>
                    <mo>+</mo>
                    <mi>l</mi>
                    <mi>n</mi>
                    <mo stretchy="false">(</mo>
                    <mi>x</mi>
                    <mo>+</mo>
                    <msqrt>
                      <msup>
                        <mi>x</mi>
                        <mn>2</mn>
                      </msup>
                      <mo>&#x2212;</mo>
                      <mn>1</mn>
                    </msqrt>
                    <mo stretchy="false">)</mo>
                    <mo>+</mo>
                    <mi>C</mi>
                  </mtd>
                </mtr>
              </mtable>
            </math>`
            },
            {
              raw:"int sec^-1(x) dx = x sec^-1(x)-ln(x+sqrt(x^2-1))+C",
              math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
              <mtable columnalign="left" columnspacing="1em" rowspacing="4pt">
                <mtr>
                  <mtd>
                    <mo data-mjx-texclass="OP">&#x222B;</mo>
                    <mi>s</mi>
                    <mi>e</mi>
                    <msup>
                      <mi>c</mi>
                      <mrow data-mjx-texclass="ORD">
                        <mo>&#x2212;</mo>
                        <mn>1</mn>
                      </mrow>
                    </msup>
                    <mi>x</mi>
                    <mi>d</mi>
                    <mi>x</mi>
                    <mo>=</mo>
                    <mi>x</mi>
                    <mi>s</mi>
                    <mi>e</mi>
                    <msup>
                      <mi>c</mi>
                      <mrow data-mjx-texclass="ORD">
                        <mo>&#x2212;</mo>
                        <mn>1</mn>
                      </mrow>
                    </msup>
                    <mi>x</mi>
                    <mrow data-mjx-texclass="ORD">
                      <mo>&#x2013;</mo>
                    </mrow>
                    <mi>l</mi>
                    <mi>n</mi>
                    <mo stretchy="false">(</mo>
                    <mi>x</mi>
                    <mo>+</mo>
                    <msqrt>
                      <msup>
                        <mi>x</mi>
                        <mn>2</mn>
                      </msup>
                      <mo>&#x2212;</mo>
                      <mn>1</mn>
                    </msqrt>
                    <mo stretchy="false">)</mo>
                    <mo>+</mo>
                    <mi>C</mi>
                  </mtd>
                </mtr>
              </mtable>
            </math>`
            },
            {
              raw:"int 1/(x^2-a^2) dx = 1/(2a) ln|(x-a)/(x+a)|+C",
              math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
              <mtable columnalign="left" columnspacing="1em" rowspacing="4pt">
                <mtr>
                  <mtd>
                    <mo data-mjx-texclass="OP">&#x222B;</mo>
                    <mfrac>
                      <mn>1</mn>
                      <mrow>
                        <mo stretchy="false">(</mo>
                        <msup>
                          <mi>x</mi>
                          <mn>2</mn>
                        </msup>
                        <mrow data-mjx-texclass="ORD">
                          <mo>&#x2013;</mo>
                        </mrow>
                        <msup>
                          <mi>a</mi>
                          <mn>2</mn>
                        </msup>
                        <mo stretchy="false">)</mo>
                      </mrow>
                    </mfrac>
                    <mi>d</mi>
                    <mi>x</mi>
                    <mo>=</mo>
                    <mfrac>
                      <mn>1</mn>
                      <mrow>
                        <mn>2</mn>
                        <mi>a</mi>
                      </mrow>
                    </mfrac>
                    <mo>.</mo>
                    <mi>l</mi>
                    <mi>o</mi>
                    <mi>g</mi>
                    <mrow data-mjx-texclass="INNER">
                      <mo data-mjx-texclass="OPEN">|</mo>
                      <mfrac>
                        <mrow>
                          <mo stretchy="false">(</mo>
                          <mi>x</mi>
                          <mrow data-mjx-texclass="ORD">
                            <mo>&#x2013;</mo>
                          </mrow>
                          <mi>a</mi>
                          <mo stretchy="false">)</mo>
                        </mrow>
                        <mrow>
                          <mo stretchy="false">(</mo>
                          <mi>x</mi>
                          <mo>+</mo>
                          <mi>a</mi>
                          <mo stretchy="false">)</mo>
                        </mrow>
                      </mfrac>
                      <mo data-mjx-texclass="CLOSE">|</mo>
                    </mrow>
                    <mo>+</mo>
                    <mi>C</mi>
                  </mtd>
                </mtr>
              </mtable>
            </math>`
            },
            {
              raw:"int 1/(a^2-x^2) dx = 1/(2a) ln|(a+x)/(a-x)|+C",
              math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
              <mtable columnalign="left" columnspacing="1em" rowspacing="4pt">
                <mtr>
                  <mtd>
                    <mo data-mjx-texclass="OP">&#x222B;</mo>
                    <mfrac>
                      <mn>1</mn>
                      <mrow>
                        <mo stretchy="false">(</mo>
                        <msup>
                          <mi>a</mi>
                          <mn>2</mn>
                        </msup>
                        <mrow data-mjx-texclass="ORD">
                          <mo>&#x2013;</mo>
                        </mrow>
                        <msup>
                          <mi>x</mi>
                          <mn>2</mn>
                        </msup>
                        <mo stretchy="false">)</mo>
                      </mrow>
                    </mfrac>
                    <mi>d</mi>
                    <mi>x</mi>
                    <mo>=</mo>
                    <mfrac>
                      <mn>1</mn>
                      <mrow>
                        <mn>2</mn>
                        <mi>a</mi>
                      </mrow>
                    </mfrac>
                    <mo>.</mo>
                    <mi>l</mi>
                    <mi>o</mi>
                    <mi>g</mi>
                    <mrow data-mjx-texclass="INNER">
                      <mo data-mjx-texclass="OPEN">|</mo>
                      <mfrac>
                        <mrow>
                          <mo stretchy="false">(</mo>
                          <mi>a</mi>
                          <mo>+</mo>
                          <mi>x</mi>
                          <mo stretchy="false">)</mo>
                        </mrow>
                        <mrow>
                          <mo stretchy="false">(</mo>
                          <mi>a</mi>
                          <mrow data-mjx-texclass="ORD">
                            <mo>&#x2013;</mo>
                          </mrow>
                          <mi>x</mi>
                          <mo stretchy="false">)</mo>
                        </mrow>
                      </mfrac>
                      <mo data-mjx-texclass="CLOSE">|</mo>
                    </mrow>
                    <mo>+</mo>
                    <mi>C</mi>
                  </mtd>
                </mtr>
              </mtable>
            </math>`
            },
            {
              raw:"int 1/(x^2+a^2) dx = 1/a tan^-1(x/a)+C",
              math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
              <mtable columnalign="left" columnspacing="1em" rowspacing="4pt">
                <mtr>
                  <mtd>
                    <mo data-mjx-texclass="OP">&#x222B;</mo>
                    <mfrac>
                      <mn>1</mn>
                      <mrow>
                        <mo stretchy="false">(</mo>
                        <msup>
                          <mi>x</mi>
                          <mn>2</mn>
                        </msup>
                        <mo>+</mo>
                        <msup>
                          <mi>a</mi>
                          <mn>2</mn>
                        </msup>
                        <mo stretchy="false">)</mo>
                      </mrow>
                    </mfrac>
                    <mi>d</mi>
                    <mi>x</mi>
                    <mo>=</mo>
                    <mfrac>
                      <mn>1</mn>
                      <mi>a</mi>
                    </mfrac>
                    <mi>t</mi>
                    <mi>a</mi>
                    <msup>
                      <mi>n</mi>
                      <mrow data-mjx-texclass="ORD">
                        <mo>&#x2212;</mo>
                        <mn>1</mn>
                      </mrow>
                    </msup>
                    <mo stretchy="false">(</mo>
                    <mfrac>
                      <mi>x</mi>
                      <mi>a</mi>
                    </mfrac>
                    <mo stretchy="false">)</mo>
                    <mo>+</mo>
                    <mi>C</mi>
                  </mtd>
                </mtr>
              </mtable>
            </math>`
            },
            {
              raw:"int 1/sqrt(x^2-a^2)dx = ln(x+sqrt(x^2-a^2))+C",
              math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
              <mtable columnalign="left" columnspacing="1em" rowspacing="4pt">
                <mtr>
                  <mtd>
                    <mo data-mjx-texclass="OP">&#x222B;</mo>
                    <mfrac>
                      <mn>1</mn>
                      <msqrt>
                        <msup>
                          <mi>x</mi>
                          <mn>2</mn>
                        </msup>
                        <mrow data-mjx-texclass="ORD">
                          <mo>&#x2013;</mo>
                        </mrow>
                        <msup>
                          <mi>a</mi>
                          <mn>2</mn>
                        </msup>
                      </msqrt>
                    </mfrac>
                    <mi>d</mi>
                    <mi>x</mi>
                    <mo>=</mo>
                    <mi>l</mi>
                    <mi>o</mi>
                    <mi>g</mi>
                    <mrow data-mjx-texclass="ORD">
                      <mo stretchy="false">|</mo>
                    </mrow>
                    <mi>x</mi>
                    <mo>+</mo>
                    <msqrt>
                      <msup>
                        <mi>x</mi>
                        <mn>2</mn>
                      </msup>
                      <mrow data-mjx-texclass="ORD">
                        <mo>&#x2013;</mo>
                      </mrow>
                      <msup>
                        <mi>a</mi>
                        <mn>2</mn>
                      </msup>
                    </msqrt>
                    <mrow data-mjx-texclass="ORD">
                      <mo stretchy="false">|</mo>
                    </mrow>
                    <mo>+</mo>
                    <mi>C</mi>
                  </mtd>
                </mtr>
              </mtable>
            </math>`
            },
            {
              raw:"int 1/sqrt(x^2+a^2) dx = ln(x+sqrt(x^2+a^2))+C",
              math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
              <mtable columnalign="left" columnspacing="1em" rowspacing="4pt">
                <mtr>
                  <mtd>
                    <mo data-mjx-texclass="OP">&#x222B;</mo>
                    <mfrac>
                      <mn>1</mn>
                      <msqrt>
                        <msup>
                          <mi>x</mi>
                          <mn>2</mn>
                        </msup>
                        <mo>+</mo>
                        <msup>
                          <mi>a</mi>
                          <mn>2</mn>
                        </msup>
                      </msqrt>
                    </mfrac>
                    <mi>d</mi>
                    <mi>x</mi>
                    <mo>=</mo>
                    <mi>l</mi>
                    <mi>o</mi>
                    <mi>g</mi>
                    <mrow data-mjx-texclass="ORD">
                      <mo stretchy="false">|</mo>
                    </mrow>
                    <mi>x</mi>
                    <mo>+</mo>
                    <msqrt>
                      <msup>
                        <mi>x</mi>
                        <mn>2</mn>
                      </msup>
                      <mo>+</mo>
                      <msup>
                        <mi>a</mi>
                        <mn>2</mn>
                      </msup>
                    </msqrt>
                    <mrow data-mjx-texclass="ORD">
                      <mo stretchy="false">|</mo>
                    </mrow>
                    <mo>+</mo>
                    <mi>C</mi>
                  </mtd>
                </mtr>
              </mtable>
            </math>`
            }
            
            
        ]
    },
    {  
        category:"Definite Integration",
        formula:[
            {
                
                raw:"int_a^b (f^'(x))dx=f(b)-f(a)",
                math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
                <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="41" data-semantic-children="39,40" data-semantic-content="20" data-semantic-speech="integral Subscript a Superscript b Baseline left parenthesis f prime left parenthesis x right parenthesis right parenthesis d x equals f left parenthesis b right parenthesis minus f left parenthesis a right parenthesis">
                  <mrow data-semantic-type="integral" data-semantic-role="integral" data-semantic-id="39" data-semantic-children="3,37,38" data-semantic-content="0" data-semantic-parent="41">
                    <mrow>
                      <msubsup data-semantic-type="limboth" data-semantic-role="integral" data-semantic-id="3" data-semantic-children="0,1,2" data-semantic-parent="39">
                        <mo data-semantic-type="largeop" data-semantic-role="integral" data-semantic-id="0" data-semantic-parent="3" data-semantic-operator="integral">&#x222B;</mo>
                        <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="1" data-semantic-parent="3">a</mi>
                        <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="3">b</mi>
                      </msubsup>
                    </mrow>
                    <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="37" data-semantic-children="15,16,17" data-semantic-content="36,18" data-semantic-parent="39">
                      <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="15" data-semantic-children="13" data-semantic-content="4,14" data-semantic-parent="37">
                        <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="4" data-semantic-parent="15" data-semantic-operator="fenced">(</mo>
                        <mrow data-semantic-type="appl" data-semantic-role="simple function" data-semantic-annotation="clearspeak:simple" data-semantic-id="13" data-semantic-children="7,11" data-semantic-content="12,5" data-semantic-parent="15">
                          <msup data-semantic-type="superscript" data-semantic-role="simple function" data-semantic-id="7" data-semantic-children="5,6" data-semantic-parent="13">
                            <mi data-semantic-type="identifier" data-semantic-role="simple function" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="5" data-semantic-parent="7" data-semantic-operator="appl">f</mi>
                            <mo data-semantic-type="punctuation" data-semantic-role="prime" data-semantic-id="6" data-semantic-parent="7">&#x2032;</mo>
                          </msup>
                          <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="12" data-semantic-parent="13" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                          <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="11" data-semantic-children="9" data-semantic-content="8,10" data-semantic-parent="13">
                            <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="8" data-semantic-parent="11" data-semantic-operator="fenced">(</mo>
                            <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="9" data-semantic-parent="11">x</mi>
                            <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="10" data-semantic-parent="11" data-semantic-operator="fenced">)</mo>
                          </mrow>
                        </mrow>
                        <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="14" data-semantic-parent="15" data-semantic-operator="fenced">)</mo>
                      </mrow>
                    </mrow>
                    <mrow data-semantic-type="empty" data-semantic-role="unknown" data-semantic-id="38" data-semantic-parent="39"></mrow>
                  </mrow>
                  <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="36" data-semantic-parent="37" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                  <mrow>
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="16" data-semantic-parent="37">d</mi>
                    <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="18" data-semantic-parent="37" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="17" data-semantic-parent="37">x</mi>
                  </mrow>
                  <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="20" data-semantic-parent="41" data-semantic-operator="relseq,=">=</mo>
                  <mrow data-semantic-type="infixop" data-semantic-role="subtraction" data-semantic-id="40" data-semantic-children="27,35" data-semantic-content="28" data-semantic-parent="41">
                    <mrow data-semantic-type="appl" data-semantic-role="simple function" data-semantic-annotation="clearspeak:simple" data-semantic-id="27" data-semantic-children="21,25" data-semantic-content="26,21" data-semantic-parent="40">
                      <mi data-semantic-type="identifier" data-semantic-role="simple function" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="21" data-semantic-parent="27" data-semantic-operator="appl">f</mi>
                      <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="26" data-semantic-parent="27" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                      <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="25" data-semantic-children="23" data-semantic-content="22,24" data-semantic-parent="27">
                        <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="22" data-semantic-parent="25" data-semantic-operator="fenced">(</mo>
                        <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="23" data-semantic-parent="25">b</mi>
                        <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="24" data-semantic-parent="25" data-semantic-operator="fenced">)</mo>
                      </mrow>
                    </mrow>
                    <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="28" data-semantic-parent="40" data-semantic-operator="infixop,-">-</mo>
                    <mrow data-semantic-type="appl" data-semantic-role="simple function" data-semantic-annotation="clearspeak:simple" data-semantic-id="35" data-semantic-children="29,33" data-semantic-content="34,29" data-semantic-parent="40">
                      <mi data-semantic-type="identifier" data-semantic-role="simple function" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="29" data-semantic-parent="35" data-semantic-operator="appl">f</mi>
                      <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="34" data-semantic-parent="35" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                      <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="33" data-semantic-children="31" data-semantic-content="30,32" data-semantic-parent="35">
                        <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="30" data-semantic-parent="33" data-semantic-operator="fenced">(</mo>
                        <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="31" data-semantic-parent="33">a</mi>
                        <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="32" data-semantic-parent="33" data-semantic-operator="fenced">)</mo>
                      </mrow>
                    </mrow>
                  </mrow>
                </mstyle>
              </math>`
            },
            {

                raw:"int_a^b f(x)dx=int_a^b f(a+b-x)dx",
                math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
                <mstyle displaystyle="true">
                  <mrow data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="45" data-semantic-children="44,40" data-semantic-content="15" data-semantic-speech="integral Subscript a Superscript b Baseline f left parenthesis x right parenthesis d x equals integral Subscript a Superscript b Baseline f left parenthesis a plus b minus x right parenthesis d x">
                    <mrow data-semantic-type="integral" data-semantic-role="integral" data-semantic-id="44" data-semantic-children="3,42,43" data-semantic-content="0" data-semantic-parent="45">
                      <mrow>
                        <msubsup data-semantic-type="limboth" data-semantic-role="integral" data-semantic-id="3" data-semantic-children="0,1,2" data-semantic-parent="44">
                          <mo data-semantic-type="largeop" data-semantic-role="integral" data-semantic-id="0" data-semantic-parent="3" data-semantic-operator="integral">&#x222B;</mo>
                          <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="1" data-semantic-parent="3">a</mi>
                          <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="3">b</mi>
                        </msubsup>
                      </mrow>
                      <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="42" data-semantic-children="10,11,12" data-semantic-content="41,13" data-semantic-parent="44">
                        <mrow data-semantic-type="appl" data-semantic-role="simple function" data-semantic-annotation="clearspeak:simple" data-semantic-id="10" data-semantic-children="4,8" data-semantic-content="9,4" data-semantic-parent="42">
                          <mi data-semantic-type="identifier" data-semantic-role="simple function" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="4" data-semantic-parent="10" data-semantic-operator="appl">f</mi>
                          <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="9" data-semantic-parent="10" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                          <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="8" data-semantic-children="6" data-semantic-content="5,7" data-semantic-parent="10">
                            <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="5" data-semantic-parent="8" data-semantic-operator="fenced">(</mo>
                            <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="6" data-semantic-parent="8">x</mi>
                            <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="7" data-semantic-parent="8" data-semantic-operator="fenced">)</mo>
                          </mrow>
                        </mrow>
                      </mrow>
                      <mrow data-semantic-type="empty" data-semantic-role="unknown" data-semantic-id="43" data-semantic-parent="44"></mrow>
                    </mrow>
                    <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="41" data-semantic-parent="42" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                    <mrow>
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="11" data-semantic-parent="42">d</mi>
                      <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="13" data-semantic-parent="42" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="12" data-semantic-parent="42">x</mi>
                    </mrow>
                    <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="15" data-semantic-parent="45" data-semantic-operator="relseq,=">=</mo>
                    <mrow data-semantic-type="integral" data-semantic-role="integral" data-semantic-id="40" data-semantic-children="19,38,39" data-semantic-content="16" data-semantic-parent="45">
                      <mrow>
                        <msubsup data-semantic-type="limboth" data-semantic-role="integral" data-semantic-id="19" data-semantic-children="16,17,18" data-semantic-parent="40">
                          <mo data-semantic-type="largeop" data-semantic-role="integral" data-semantic-id="16" data-semantic-parent="19" data-semantic-operator="integral">&#x222B;</mo>
                          <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="17" data-semantic-parent="19">a</mi>
                          <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="18" data-semantic-parent="19">b</mi>
                        </msubsup>
                      </mrow>
                      <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="38" data-semantic-children="32,33,34" data-semantic-content="37,35" data-semantic-parent="40">
                        <mrow data-semantic-type="appl" data-semantic-role="simple function" data-semantic-id="32" data-semantic-children="20,30" data-semantic-content="31,20" data-semantic-parent="38">
                          <mi data-semantic-type="identifier" data-semantic-role="simple function" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="20" data-semantic-parent="32" data-semantic-operator="appl">f</mi>
                          <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="31" data-semantic-parent="32" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                          <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="30" data-semantic-children="29" data-semantic-content="21,27" data-semantic-parent="32">
                            <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="21" data-semantic-parent="30" data-semantic-operator="fenced">(</mo>
                            <mrow data-semantic-type="infixop" data-semantic-role="subtraction" data-semantic-id="29" data-semantic-children="28,26" data-semantic-content="25" data-semantic-parent="30">
                              <mrow data-semantic-type="infixop" data-semantic-role="addition" data-semantic-id="28" data-semantic-children="22,24" data-semantic-content="23" data-semantic-parent="29">
                                <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="22" data-semantic-parent="28">a</mi>
                                <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="23" data-semantic-parent="28" data-semantic-operator="infixop,+">+</mo>
                                <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="24" data-semantic-parent="28">b</mi>
                              </mrow>
                              <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="25" data-semantic-parent="29" data-semantic-operator="infixop,-">-</mo>
                              <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="26" data-semantic-parent="29">x</mi>
                            </mrow>
                            <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="27" data-semantic-parent="30" data-semantic-operator="fenced">)</mo>
                          </mrow>
                        </mrow>
                      </mrow>
                      <mrow data-semantic-type="empty" data-semantic-role="unknown" data-semantic-id="39" data-semantic-parent="40"></mrow>
                    </mrow>
                  </mrow>
                  <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="37" data-semantic-parent="38" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                  <mrow>
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="33" data-semantic-parent="38">d</mi>
                    <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="35" data-semantic-parent="38" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="34" data-semantic-parent="38">x</mi>
                  </mrow>
                </mstyle>
              </math>`
            },
            {
                raw:"int_0^(oo) e^(-ax^2)dx= sqrt(pi)/(2sqrt(a)),a>0",
                math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
                <mstyle displaystyle="true" data-semantic-type="punctuated" data-semantic-role="sequence" data-semantic-id="37" data-semantic-children="35,27,36" data-semantic-content="27" data-semantic-speech="integral Subscript 0 Superscript infinity Baseline e Superscript minus a x squared Baseline d x equals StartFraction StartRoot pi EndRoot Over 2 StartRoot a EndRoot EndFraction comma a greater than 0">
                  <mrow data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="35" data-semantic-children="34,26" data-semantic-content="18" data-semantic-parent="37">
                    <mrow data-semantic-type="integral" data-semantic-role="integral" data-semantic-id="34" data-semantic-children="3,32,33" data-semantic-content="0" data-semantic-parent="35">
                      <mrow>
                        <msubsup data-semantic-type="limboth" data-semantic-role="integral" data-semantic-id="3" data-semantic-children="0,1,2" data-semantic-parent="34">
                          <mo data-semantic-type="largeop" data-semantic-role="integral" data-semantic-id="0" data-semantic-parent="3" data-semantic-operator="integral">&#x222B;</mo>
                          <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="1" data-semantic-parent="3">0</mn>
                          <mrow>
                            <mo data-semantic-type="operator" data-semantic-role="unknown" data-semantic-id="2" data-semantic-parent="3">&#x221E;</mo>
                          </mrow>
                        </msubsup>
                      </mrow>
                      <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="32" data-semantic-children="13,14,15" data-semantic-content="31,16" data-semantic-parent="34">
                        <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="13" data-semantic-children="4,12" data-semantic-parent="32">
                          <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="4" data-semantic-parent="13">e</mi>
                          <mrow data-semantic-type="prefixop" data-semantic-role="negative" data-semantic-id="12" data-semantic-children="11" data-semantic-content="5" data-semantic-parent="13">
                            <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="5" data-semantic-parent="12" data-semantic-operator="prefixop,-">-</mo>
                            <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="11" data-semantic-children="6,9" data-semantic-content="10" data-semantic-parent="12">
                              <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="6" data-semantic-parent="11">a</mi>
                              <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="10" data-semantic-parent="11" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                              <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="9" data-semantic-children="7,8" data-semantic-parent="11">
                                <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="7" data-semantic-parent="9">x</mi>
                                <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="8" data-semantic-parent="9">2</mn>
                              </msup>
                            </mrow>
                          </mrow>
                        </msup>
                      </mrow>
                      <mrow data-semantic-type="empty" data-semantic-role="unknown" data-semantic-id="33" data-semantic-parent="34"></mrow>
                    </mrow>
                    <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="31" data-semantic-parent="32" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                    <mrow>
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="14" data-semantic-parent="32">d</mi>
                      <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="16" data-semantic-parent="32" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="15" data-semantic-parent="32">x</mi>
                    </mrow>
                    <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="18" data-semantic-parent="35" data-semantic-operator="relseq,=">=</mo>
                    <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="26" data-semantic-children="20,25" data-semantic-parent="35">
                      <msqrt data-semantic-type="sqrt" data-semantic-role="unknown" data-semantic-id="20" data-semantic-children="19" data-semantic-parent="26">
                        <mrow>
                          <mi data-semantic-type="identifier" data-semantic-role="greekletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="19" data-semantic-parent="20">&#x3C0;</mi>
                        </mrow>
                      </msqrt>
                      <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="25" data-semantic-children="21,23" data-semantic-content="24" data-semantic-parent="26">
                        <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="21" data-semantic-parent="25">2</mn>
                        <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="24" data-semantic-parent="25" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                        <msqrt data-semantic-type="sqrt" data-semantic-role="unknown" data-semantic-id="23" data-semantic-children="22" data-semantic-parent="25">
                          <mrow>
                            <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="22" data-semantic-parent="23">a</mi>
                          </mrow>
                        </msqrt>
                      </mrow>
                    </mfrac>
                  </mrow>
                  <mo data-semantic-type="punctuation" data-semantic-role="comma" data-semantic-id="27" data-semantic-parent="37" data-semantic-operator="punctuated">,</mo>
                  <mrow data-semantic-type="relseq" data-semantic-role="inequality" data-semantic-id="36" data-semantic-children="28,30" data-semantic-content="29" data-semantic-parent="37">
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="28" data-semantic-parent="36">a</mi>
                    <mo data-semantic-type="relation" data-semantic-role="inequality" data-semantic-id="29" data-semantic-parent="36" data-semantic-operator="relseq,&gt;">&gt;</mo>
                    <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="30" data-semantic-parent="36">0</mn>
                  </mrow>
                </mstyle>
              </math>`
            }
            
        ]
    },
    {  
        category:"Mean Value Theorem,Rolle's Theorem",
        formula:[
            {
                
                raw:"if f(x) is continuous on [a, b] and differentiable on (a, b), then there exists at least one c in (a, b) such that  f'(c)= (f(b)-f(a))/(b-a)",
                math_ml:`if f(x) is continuous on [a, b] and differentiable on (a, b), then there exists at least one c in (a, b) such that <math xmlns="http://www.w3.org/1998/Math/MathML">
                <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="31" data-semantic-children="8,30" data-semantic-content="9" data-semantic-speech="f prime left parenthesis c right parenthesis equals StartFraction f left parenthesis b right parenthesis minus f left parenthesis a right parenthesis Over b minus a EndFraction">
                  <mrow data-semantic-type="appl" data-semantic-role="simple function" data-semantic-annotation="clearspeak:simple" data-semantic-id="8" data-semantic-children="2,6" data-semantic-content="7,0" data-semantic-parent="31">
                    <msup data-semantic-type="superscript" data-semantic-role="simple function" data-semantic-id="2" data-semantic-children="0,1" data-semantic-parent="8">
                      <mi data-semantic-type="identifier" data-semantic-role="simple function" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="0" data-semantic-parent="2" data-semantic-operator="appl">f</mi>
                      <mo data-semantic-type="punctuation" data-semantic-role="prime" data-semantic-id="1" data-semantic-parent="2">&#x2032;</mo>
                    </msup>
                    <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="7" data-semantic-parent="8" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                    <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="6" data-semantic-children="4" data-semantic-content="3,5" data-semantic-parent="8">
                      <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="3" data-semantic-parent="6" data-semantic-operator="fenced">(</mo>
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="4" data-semantic-parent="6">c</mi>
                      <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="5" data-semantic-parent="6" data-semantic-operator="fenced">)</mo>
                    </mrow>
                  </mrow>
                  <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="9" data-semantic-parent="31" data-semantic-operator="relseq,=">=</mo>
                  <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="30" data-semantic-children="25,29" data-semantic-parent="31">
                    <mrow data-semantic-type="infixop" data-semantic-role="subtraction" data-semantic-id="25" data-semantic-children="16,24" data-semantic-content="17" data-semantic-parent="30">
                      <mrow data-semantic-type="appl" data-semantic-role="simple function" data-semantic-annotation="clearspeak:simple" data-semantic-id="16" data-semantic-children="10,14" data-semantic-content="15,10" data-semantic-parent="25">
                        <mi data-semantic-type="identifier" data-semantic-role="simple function" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="10" data-semantic-parent="16" data-semantic-operator="appl">f</mi>
                        <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="15" data-semantic-parent="16" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                        <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="14" data-semantic-children="12" data-semantic-content="11,13" data-semantic-parent="16">
                          <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="11" data-semantic-parent="14" data-semantic-operator="fenced">(</mo>
                          <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="12" data-semantic-parent="14">b</mi>
                          <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="13" data-semantic-parent="14" data-semantic-operator="fenced">)</mo>
                        </mrow>
                      </mrow>
                      <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="17" data-semantic-parent="25" data-semantic-operator="infixop,-">-</mo>
                      <mrow data-semantic-type="appl" data-semantic-role="simple function" data-semantic-annotation="clearspeak:simple" data-semantic-id="24" data-semantic-children="18,22" data-semantic-content="23,18" data-semantic-parent="25">
                        <mi data-semantic-type="identifier" data-semantic-role="simple function" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="18" data-semantic-parent="24" data-semantic-operator="appl">f</mi>
                        <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="23" data-semantic-parent="24" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                        <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="22" data-semantic-children="20" data-semantic-content="19,21" data-semantic-parent="24">
                          <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="19" data-semantic-parent="22" data-semantic-operator="fenced">(</mo>
                          <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="20" data-semantic-parent="22">a</mi>
                          <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="21" data-semantic-parent="22" data-semantic-operator="fenced">)</mo>
                        </mrow>
                      </mrow>
                    </mrow>
                    <mrow data-semantic-type="infixop" data-semantic-role="subtraction" data-semantic-id="29" data-semantic-children="26,28" data-semantic-content="27" data-semantic-parent="30">
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="26" data-semantic-parent="29">b</mi>
                      <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="27" data-semantic-parent="29" data-semantic-operator="infixop,-">-</mo>
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="28" data-semantic-parent="29">a</mi>
                    </mrow>
                  </mfrac>
                </mstyle>
              </math>`
            },
            {
                raw:" if f(x) is continuous on [a, b] , differentiable on (a, b) and f(a)=f(b) then there exists at least one c in (a,b) such that f'(c)=0",
                math_ml:`if if f(x) is continuous on [a, b] , differentiable on (a, b) and f(a)=f(b) then there exists at least one c in (a,b) such that f'(c)=0`
            }
        ]
    },
    {
        category:"Laplace Transform",
        formula:[
            {
                raw:"L{f(t)}=int_0^(oo) f(t) e^(-st)dt",
                math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
                <mstyle displaystyle="true">
                  <mrow data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="42" data-semantic-children="41,39" data-semantic-content="11" data-semantic-speech="upper L left brace f left parenthesis t right parenthesis right brace equals integral Subscript 0 Superscript infinity Baseline f left parenthesis t right parenthesis e Superscript minus s t Baseline d t">
                    <mrow data-semantic-type="appl" data-semantic-role="simple function" data-semantic-annotation="clearspeak:simple" data-semantic-id="41" data-semantic-children="0,10" data-semantic-content="40,0" data-semantic-parent="42">
                      <mi data-semantic-type="identifier" data-semantic-role="simple function" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="0" data-semantic-parent="41" data-semantic-operator="appl">L</mi>
                      <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="40" data-semantic-parent="41" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                      <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="10" data-semantic-children="8" data-semantic-content="1,9" data-semantic-parent="41">
                        <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="1" data-semantic-parent="10" data-semantic-operator="fenced">{</mo>
                        <mrow data-semantic-type="appl" data-semantic-role="simple function" data-semantic-annotation="clearspeak:simple" data-semantic-id="8" data-semantic-children="2,6" data-semantic-content="7,2" data-semantic-parent="10">
                          <mi data-semantic-type="identifier" data-semantic-role="simple function" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="8" data-semantic-operator="appl">f</mi>
                          <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="7" data-semantic-parent="8" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                          <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="6" data-semantic-children="4" data-semantic-content="3,5" data-semantic-parent="8">
                            <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="3" data-semantic-parent="6" data-semantic-operator="fenced">(</mo>
                            <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="4" data-semantic-parent="6">t</mi>
                            <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="5" data-semantic-parent="6" data-semantic-operator="fenced">)</mo>
                          </mrow>
                        </mrow>
                        <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="9" data-semantic-parent="10" data-semantic-operator="fenced">}</mo>
                      </mrow>
                    </mrow>
                    <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="11" data-semantic-parent="42" data-semantic-operator="relseq,=">=</mo>
                    <mrow data-semantic-type="integral" data-semantic-role="integral" data-semantic-id="39" data-semantic-children="15,37,38" data-semantic-content="12" data-semantic-parent="42">
                      <mrow>
                        <msubsup data-semantic-type="limboth" data-semantic-role="integral" data-semantic-id="15" data-semantic-children="12,13,14" data-semantic-parent="39">
                          <mo data-semantic-type="largeop" data-semantic-role="integral" data-semantic-id="12" data-semantic-parent="15" data-semantic-operator="integral">&#x222B;</mo>
                          <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="13" data-semantic-parent="15">0</mn>
                          <mrow>
                            <mo data-semantic-type="operator" data-semantic-role="unknown" data-semantic-id="14" data-semantic-parent="15">&#x221E;</mo>
                          </mrow>
                        </msubsup>
                      </mrow>
                      <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="37" data-semantic-children="22,30,31,32" data-semantic-content="35,36,33" data-semantic-parent="39">
                        <mrow data-semantic-type="appl" data-semantic-role="simple function" data-semantic-annotation="clearspeak:simple" data-semantic-id="22" data-semantic-children="16,20" data-semantic-content="21,16" data-semantic-parent="37">
                          <mi data-semantic-type="identifier" data-semantic-role="simple function" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="16" data-semantic-parent="22" data-semantic-operator="appl">f</mi>
                          <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="21" data-semantic-parent="22" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                          <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="20" data-semantic-children="18" data-semantic-content="17,19" data-semantic-parent="22">
                            <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="17" data-semantic-parent="20" data-semantic-operator="fenced">(</mo>
                            <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="18" data-semantic-parent="20">t</mi>
                            <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="19" data-semantic-parent="20" data-semantic-operator="fenced">)</mo>
                          </mrow>
                        </mrow>
                        <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="35" data-semantic-parent="37" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                        <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="30" data-semantic-children="23,29" data-semantic-parent="37">
                          <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="23" data-semantic-parent="30">e</mi>
                          <mrow data-semantic-type="prefixop" data-semantic-role="negative" data-semantic-annotation="clearspeak:simple" data-semantic-id="29" data-semantic-children="28" data-semantic-content="24" data-semantic-parent="30">
                            <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="24" data-semantic-parent="29" data-semantic-operator="prefixop,-">-</mo>
                            <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:simple;clearspeak:unit" data-semantic-id="28" data-semantic-children="25,26" data-semantic-content="27" data-semantic-parent="29">
                              <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="25" data-semantic-parent="28">s</mi>
                              <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="27" data-semantic-parent="28" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                              <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="26" data-semantic-parent="28">t</mi>
                            </mrow>
                          </mrow>
                        </msup>
                      </mrow>
                      <mrow data-semantic-type="empty" data-semantic-role="unknown" data-semantic-id="38" data-semantic-parent="39"></mrow>
                    </mrow>
                  </mrow>
                  <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="36" data-semantic-parent="37" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                  <mrow>
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="31" data-semantic-parent="37">d</mi>
                    <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="33" data-semantic-parent="37" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="32" data-semantic-parent="37">t</mi>
                  </mrow>
                </mstyle>
              </math>`
            },
            {
                raw:"L{t^n}=((n)!)/s^(n+1)",
                math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
                <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="23" data-semantic-children="22,20" data-semantic-content="7" data-semantic-speech="upper L left brace t Superscript n Baseline right brace equals StartFraction left parenthesis n right parenthesis factorial Over s Superscript n plus 1 Baseline EndFraction">
                  <mrow data-semantic-type="appl" data-semantic-role="simple function" data-semantic-id="22" data-semantic-children="0,6" data-semantic-content="21,0" data-semantic-parent="23">
                    <mi data-semantic-type="identifier" data-semantic-role="simple function" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="0" data-semantic-parent="22" data-semantic-operator="appl">L</mi>
                    <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="21" data-semantic-parent="22" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                    <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="6" data-semantic-children="4" data-semantic-content="1,5" data-semantic-parent="22">
                      <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="1" data-semantic-parent="6" data-semantic-operator="fenced">{</mo>
                      <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="4" data-semantic-children="2,3" data-semantic-parent="6">
                        <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="4">t</mi>
                        <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="3" data-semantic-parent="4">n</mi>
                      </msup>
                      <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="5" data-semantic-parent="6" data-semantic-operator="fenced">}</mo>
                    </mrow>
                  </mrow>
                  <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="7" data-semantic-parent="23" data-semantic-operator="relseq,=">=</mo>
                  <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="20" data-semantic-children="13,19" data-semantic-parent="23">
                    <mrow data-semantic-type="punctuated" data-semantic-role="endpunct" data-semantic-id="13" data-semantic-children="11,12" data-semantic-content="12" data-semantic-parent="20">
                      <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="11" data-semantic-children="9" data-semantic-content="8,10" data-semantic-parent="13">
                        <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="8" data-semantic-parent="11" data-semantic-operator="fenced">(</mo>
                        <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="9" data-semantic-parent="11">n</mi>
                        <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="10" data-semantic-parent="11" data-semantic-operator="fenced">)</mo>
                      </mrow>
                      <mo data-semantic-type="punctuation" data-semantic-role="unknown" data-semantic-id="12" data-semantic-parent="13" data-semantic-operator="punctuated">!</mo>
                    </mrow>
                    <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="19" data-semantic-children="14,18" data-semantic-parent="20">
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="14" data-semantic-parent="19">s</mi>
                      <mrow data-semantic-type="infixop" data-semantic-role="addition" data-semantic-id="18" data-semantic-children="15,17" data-semantic-content="16" data-semantic-parent="19">
                        <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="15" data-semantic-parent="18">n</mi>
                        <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="16" data-semantic-parent="18" data-semantic-operator="infixop,+">+</mo>
                        <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="17" data-semantic-parent="18">1</mn>
                      </mrow>
                    </msup>
                  </mfrac>
                </mstyle>
              </math>`
            },
            {
                raw:"L{e^(at)}=1/(s-a)",
                math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
                <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="19" data-semantic-children="18,16" data-semantic-content="10" data-semantic-speech="upper L left brace e Superscript a t Baseline right brace equals StartFraction 1 Over s minus a EndFraction">
                  <mrow data-semantic-type="appl" data-semantic-role="simple function" data-semantic-id="18" data-semantic-children="0,9" data-semantic-content="17,0" data-semantic-parent="19">
                    <mi data-semantic-type="identifier" data-semantic-role="simple function" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="0" data-semantic-parent="18" data-semantic-operator="appl">L</mi>
                    <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="17" data-semantic-parent="18" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                    <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="9" data-semantic-children="7" data-semantic-content="1,8" data-semantic-parent="18">
                      <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="1" data-semantic-parent="9" data-semantic-operator="fenced">{</mo>
                      <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="7" data-semantic-children="2,6" data-semantic-parent="9">
                        <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="7">e</mi>
                        <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:simple;clearspeak:unit" data-semantic-id="6" data-semantic-children="3,4" data-semantic-content="5" data-semantic-parent="7">
                          <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="3" data-semantic-parent="6">a</mi>
                          <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="5" data-semantic-parent="6" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                          <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="4" data-semantic-parent="6">t</mi>
                        </mrow>
                      </msup>
                      <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="8" data-semantic-parent="9" data-semantic-operator="fenced">}</mo>
                    </mrow>
                  </mrow>
                  <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="10" data-semantic-parent="19" data-semantic-operator="relseq,=">=</mo>
                  <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="16" data-semantic-children="11,15" data-semantic-parent="19">
                    <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="11" data-semantic-parent="16">1</mn>
                    <mrow data-semantic-type="infixop" data-semantic-role="subtraction" data-semantic-id="15" data-semantic-children="12,14" data-semantic-content="13" data-semantic-parent="16">
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="12" data-semantic-parent="15">s</mi>
                      <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="13" data-semantic-parent="15" data-semantic-operator="infixop,-">-</mo>
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="14" data-semantic-parent="15">a</mi>
                    </mrow>
                  </mfrac>
                </mstyle>
              </math>`
            },
            {
                raw:"L{sin(at)}=a/(s^2+a^2)",
                math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
                <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="27" data-semantic-children="26,24" data-semantic-content="14" data-semantic-speech="upper L left brace sine left parenthesis a t right parenthesis right brace equals StartFraction a Over s squared plus a squared EndFraction">
                  <mrow data-semantic-type="appl" data-semantic-role="simple function" data-semantic-annotation="clearspeak:simple" data-semantic-id="26" data-semantic-children="0,13" data-semantic-content="25,0" data-semantic-parent="27">
                    <mi data-semantic-type="identifier" data-semantic-role="simple function" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="0" data-semantic-parent="26" data-semantic-operator="appl">L</mi>
                    <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="25" data-semantic-parent="26" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                    <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="13" data-semantic-children="11" data-semantic-content="1,12" data-semantic-parent="26">
                      <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="1" data-semantic-parent="13" data-semantic-operator="fenced">{</mo>
                      <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="11" data-semantic-children="2,9" data-semantic-content="10,2" data-semantic-parent="13">
                        <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="2" data-semantic-parent="11" data-semantic-operator="appl">sin</mi>
                        <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="10" data-semantic-parent="11" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                        <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="9" data-semantic-children="8" data-semantic-content="3,6" data-semantic-parent="11">
                          <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="3" data-semantic-parent="9" data-semantic-operator="fenced">(</mo>
                          <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:simple;clearspeak:unit" data-semantic-id="8" data-semantic-children="4,5" data-semantic-content="7" data-semantic-parent="9">
                            <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="4" data-semantic-parent="8">a</mi>
                            <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="7" data-semantic-parent="8" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                            <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="5" data-semantic-parent="8">t</mi>
                          </mrow>
                          <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="6" data-semantic-parent="9" data-semantic-operator="fenced">)</mo>
                        </mrow>
                      </mrow>
                      <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="12" data-semantic-parent="13" data-semantic-operator="fenced">}</mo>
                    </mrow>
                  </mrow>
                  <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="14" data-semantic-parent="27" data-semantic-operator="relseq,=">=</mo>
                  <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="24" data-semantic-children="15,23" data-semantic-parent="27">
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="15" data-semantic-parent="24">a</mi>
                    <mrow data-semantic-type="infixop" data-semantic-role="addition" data-semantic-id="23" data-semantic-children="18,22" data-semantic-content="19" data-semantic-parent="24">
                      <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="18" data-semantic-children="16,17" data-semantic-parent="23">
                        <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="16" data-semantic-parent="18">s</mi>
                        <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="17" data-semantic-parent="18">2</mn>
                      </msup>
                      <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="19" data-semantic-parent="23" data-semantic-operator="infixop,+">+</mo>
                      <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="22" data-semantic-children="20,21" data-semantic-parent="23">
                        <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="20" data-semantic-parent="22">a</mi>
                        <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="21" data-semantic-parent="22">2</mn>
                      </msup>
                    </mrow>
                  </mfrac>
                </mstyle>
              </math>`
            },
            {
                raw:"L{cos(at)}=s/(s^2+a^2)",
                math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
                <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="27" data-semantic-children="26,24" data-semantic-content="14" data-semantic-speech="upper L left brace cosine left parenthesis a t right parenthesis right brace equals StartFraction s Over s squared plus a squared EndFraction">
                  <mrow data-semantic-type="appl" data-semantic-role="simple function" data-semantic-annotation="clearspeak:simple" data-semantic-id="26" data-semantic-children="0,13" data-semantic-content="25,0" data-semantic-parent="27">
                    <mi data-semantic-type="identifier" data-semantic-role="simple function" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="0" data-semantic-parent="26" data-semantic-operator="appl">L</mi>
                    <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="25" data-semantic-parent="26" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                    <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="13" data-semantic-children="11" data-semantic-content="1,12" data-semantic-parent="26">
                      <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="1" data-semantic-parent="13" data-semantic-operator="fenced">{</mo>
                      <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="11" data-semantic-children="2,9" data-semantic-content="10,2" data-semantic-parent="13">
                        <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="2" data-semantic-parent="11" data-semantic-operator="appl">cos</mi>
                        <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="10" data-semantic-parent="11" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                        <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="9" data-semantic-children="8" data-semantic-content="3,6" data-semantic-parent="11">
                          <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="3" data-semantic-parent="9" data-semantic-operator="fenced">(</mo>
                          <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:simple;clearspeak:unit" data-semantic-id="8" data-semantic-children="4,5" data-semantic-content="7" data-semantic-parent="9">
                            <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="4" data-semantic-parent="8">a</mi>
                            <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="7" data-semantic-parent="8" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                            <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="5" data-semantic-parent="8">t</mi>
                          </mrow>
                          <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="6" data-semantic-parent="9" data-semantic-operator="fenced">)</mo>
                        </mrow>
                      </mrow>
                      <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="12" data-semantic-parent="13" data-semantic-operator="fenced">}</mo>
                    </mrow>
                  </mrow>
                  <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="14" data-semantic-parent="27" data-semantic-operator="relseq,=">=</mo>
                  <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="24" data-semantic-children="15,23" data-semantic-parent="27">
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="15" data-semantic-parent="24">s</mi>
                    <mrow data-semantic-type="infixop" data-semantic-role="addition" data-semantic-id="23" data-semantic-children="18,22" data-semantic-content="19" data-semantic-parent="24">
                      <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="18" data-semantic-children="16,17" data-semantic-parent="23">
                        <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="16" data-semantic-parent="18">s</mi>
                        <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="17" data-semantic-parent="18">2</mn>
                      </msup>
                      <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="19" data-semantic-parent="23" data-semantic-operator="infixop,+">+</mo>
                      <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="22" data-semantic-children="20,21" data-semantic-parent="23">
                        <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="20" data-semantic-parent="22">a</mi>
                        <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="21" data-semantic-parent="22">2</mn>
                      </msup>
                    </mrow>
                  </mfrac>
                </mstyle>
              </math>`
            },
            {
                raw:"L{u(t)}=1/s",
                math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
                <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="17" data-semantic-children="16,14" data-semantic-content="11" data-semantic-speech="upper L left brace u left parenthesis t right parenthesis right brace equals StartFraction 1 Over s EndFraction">
                  <mrow data-semantic-type="appl" data-semantic-role="simple function" data-semantic-annotation="clearspeak:simple" data-semantic-id="16" data-semantic-children="0,10" data-semantic-content="15,0" data-semantic-parent="17">
                    <mi data-semantic-type="identifier" data-semantic-role="simple function" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="0" data-semantic-parent="16" data-semantic-operator="appl">L</mi>
                    <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="15" data-semantic-parent="16" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                    <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="10" data-semantic-children="9" data-semantic-content="1,7" data-semantic-parent="16">
                      <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="1" data-semantic-parent="10" data-semantic-operator="fenced">{</mo>
                      <mrow data-semantic-type="appl" data-semantic-role="simple function" data-semantic-annotation="clearspeak:simple" data-semantic-id="9" data-semantic-children="2,6" data-semantic-content="8,2" data-semantic-parent="10">
                        <mi data-semantic-type="identifier" data-semantic-role="simple function" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="9" data-semantic-operator="appl">u</mi>
                        <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="8" data-semantic-parent="9" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                        <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="6" data-semantic-children="4" data-semantic-content="3,5" data-semantic-parent="9">
                          <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="3" data-semantic-parent="6" data-semantic-operator="fenced">(</mo>
                          <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="4" data-semantic-parent="6">t</mi>
                          <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="5" data-semantic-parent="6" data-semantic-operator="fenced">)</mo>
                        </mrow>
                      </mrow>
                      <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="7" data-semantic-parent="10" data-semantic-operator="fenced">}</mo>
                    </mrow>
                  </mrow>
                  <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="11" data-semantic-parent="17" data-semantic-operator="relseq,=">=</mo>
                  <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="14" data-semantic-children="12,13" data-semantic-parent="17">
                    <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="12" data-semantic-parent="14">1</mn>
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="13" data-semantic-parent="14">s</mi>
                  </mfrac>
                </mstyle>
              </math>`
            },
            {
                raw:"L{tu(t)}=1/s^2",
                math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
                <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="22" data-semantic-children="21,19" data-semantic-content="14" data-semantic-speech="upper L left brace t u left parenthesis t right parenthesis right brace equals StartFraction 1 Over s squared EndFraction">
                  <mrow data-semantic-type="appl" data-semantic-role="simple function" data-semantic-id="21" data-semantic-children="0,13" data-semantic-content="20,0" data-semantic-parent="22">
                    <mi data-semantic-type="identifier" data-semantic-role="simple function" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="0" data-semantic-parent="21" data-semantic-operator="appl">L</mi>
                    <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="20" data-semantic-parent="21" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                    <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="13" data-semantic-children="12" data-semantic-content="1,8" data-semantic-parent="21">
                      <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="1" data-semantic-parent="13" data-semantic-operator="fenced">{</mo>
                      <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="12" data-semantic-children="2,10" data-semantic-content="11" data-semantic-parent="13">
                        <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="12">t</mi>
                        <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="11" data-semantic-parent="12" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                        <mrow data-semantic-type="appl" data-semantic-role="simple function" data-semantic-annotation="clearspeak:simple" data-semantic-id="10" data-semantic-children="3,7" data-semantic-content="9,3" data-semantic-parent="12">
                          <mi data-semantic-type="identifier" data-semantic-role="simple function" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="3" data-semantic-parent="10" data-semantic-operator="appl">u</mi>
                          <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="9" data-semantic-parent="10" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                          <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="7" data-semantic-children="5" data-semantic-content="4,6" data-semantic-parent="10">
                            <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="4" data-semantic-parent="7" data-semantic-operator="fenced">(</mo>
                            <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="5" data-semantic-parent="7">t</mi>
                            <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="6" data-semantic-parent="7" data-semantic-operator="fenced">)</mo>
                          </mrow>
                        </mrow>
                      </mrow>
                      <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="8" data-semantic-parent="13" data-semantic-operator="fenced">}</mo>
                    </mrow>
                  </mrow>
                  <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="14" data-semantic-parent="22" data-semantic-operator="relseq,=">=</mo>
                  <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="19" data-semantic-children="15,18" data-semantic-parent="22">
                    <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="15" data-semantic-parent="19">1</mn>
                    <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="18" data-semantic-children="16,17" data-semantic-parent="19">
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="16" data-semantic-parent="18">s</mi>
                      <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="17" data-semantic-parent="18">2</mn>
                    </msup>
                  </mfrac>
                </mstyle>
              </math>`
            },
            {
                raw:"L{y'}=sY(s)-y(0)",
                math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
                <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="29" data-semantic-children="25,28" data-semantic-content="7" data-semantic-speech="upper L left brace y Superscript prime Baseline right brace equals s upper Y left parenthesis s right parenthesis minus y left parenthesis 0 right parenthesis">
                  <mrow data-semantic-type="appl" data-semantic-role="simple function" data-semantic-id="25" data-semantic-children="0,6" data-semantic-content="24,0" data-semantic-parent="29">
                    <mi data-semantic-type="identifier" data-semantic-role="simple function" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="0" data-semantic-parent="25" data-semantic-operator="appl">L</mi>
                    <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="24" data-semantic-parent="25" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                    <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="6" data-semantic-children="4" data-semantic-content="1,5" data-semantic-parent="25">
                      <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="1" data-semantic-parent="6" data-semantic-operator="fenced">{</mo>
                      <msup data-semantic-type="superscript" data-semantic-role="simple function" data-semantic-id="4" data-semantic-children="2,3" data-semantic-parent="6">
                        <mi data-semantic-type="identifier" data-semantic-role="simple function" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="4">y</mi>
                        <mo data-semantic-type="punctuation" data-semantic-role="prime" data-semantic-id="3" data-semantic-parent="4">&#x2032;</mo>
                      </msup>
                      <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="5" data-semantic-parent="6" data-semantic-operator="fenced">}</mo>
                    </mrow>
                  </mrow>
                  <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="7" data-semantic-parent="29" data-semantic-operator="relseq,=">=</mo>
                  <mrow data-semantic-type="infixop" data-semantic-role="subtraction" data-semantic-id="28" data-semantic-children="27,21" data-semantic-content="14" data-semantic-parent="29">
                    <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="27" data-semantic-children="8,23" data-semantic-content="26" data-semantic-parent="28">
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="8" data-semantic-parent="27">s</mi>
                      <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="26" data-semantic-parent="27" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                      <mrow data-semantic-type="appl" data-semantic-role="simple function" data-semantic-annotation="clearspeak:simple" data-semantic-id="23" data-semantic-children="9,13" data-semantic-content="22,9" data-semantic-parent="27">
                        <mi data-semantic-type="identifier" data-semantic-role="simple function" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="9" data-semantic-parent="23" data-semantic-operator="appl">Y</mi>
                        <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="22" data-semantic-parent="23" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                        <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="13" data-semantic-children="11" data-semantic-content="10,12" data-semantic-parent="23">
                          <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="10" data-semantic-parent="13" data-semantic-operator="fenced">(</mo>
                          <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="11" data-semantic-parent="13">s</mi>
                          <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="12" data-semantic-parent="13" data-semantic-operator="fenced">)</mo>
                        </mrow>
                      </mrow>
                    </mrow>
                    <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="14" data-semantic-parent="28" data-semantic-operator="infixop,-">-</mo>
                    <mrow data-semantic-type="appl" data-semantic-role="simple function" data-semantic-annotation="clearspeak:simple" data-semantic-id="21" data-semantic-children="15,19" data-semantic-content="20,15" data-semantic-parent="28">
                      <mi data-semantic-type="identifier" data-semantic-role="simple function" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="15" data-semantic-parent="21" data-semantic-operator="appl">y</mi>
                      <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="20" data-semantic-parent="21" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                      <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="19" data-semantic-children="17" data-semantic-content="16,18" data-semantic-parent="21">
                        <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="16" data-semantic-parent="19" data-semantic-operator="fenced">(</mo>
                        <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="17" data-semantic-parent="19">0</mn>
                        <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="18" data-semantic-parent="19" data-semantic-operator="fenced">)</mo>
                      </mrow>
                    </mrow>
                  </mrow>
                </mstyle>
              </math>`
            },
            {
              raw:"L{y''}=s^2Y(s)-sy(0)-y'(0)",
              math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
              <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="46" data-semantic-children="40,45" data-semantic-content="9" data-semantic-speech="upper L left brace y Superscript double prime Baseline right brace equals s squared upper Y left parenthesis s right parenthesis minus s y left parenthesis 0 right parenthesis minus y prime left parenthesis 0 right parenthesis">
                <mrow data-semantic-type="appl" data-semantic-role="simple function" data-semantic-id="40" data-semantic-children="0,8" data-semantic-content="39,0" data-semantic-parent="46">
                  <mi data-semantic-type="identifier" data-semantic-role="simple function" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="0" data-semantic-parent="40" data-semantic-operator="appl">L</mi>
                  <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="39" data-semantic-parent="40" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                  <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="8" data-semantic-children="6" data-semantic-content="1,7" data-semantic-parent="40">
                    <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="1" data-semantic-parent="8" data-semantic-operator="fenced">{</mo>
                    <msup data-semantic-type="superscript" data-semantic-role="simple function" data-semantic-id="6" data-semantic-children="2,5" data-semantic-parent="8">
                      <mi data-semantic-type="identifier" data-semantic-role="simple function" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="6">y</mi>
                      <mrow data-semantic-type="punctuated" data-semantic-role="prime" data-semantic-id="5" data-semantic-children="3,4" data-semantic-content="3,4" data-semantic-parent="6">
                        <mo data-mjx-pseudoscript="true" data-semantic-type="punctuation" data-semantic-role="prime" data-semantic-id="3" data-semantic-parent="5" data-semantic-operator="punctuated">&#x2032;</mo>
                        <mo data-mjx-pseudoscript="true" data-semantic-type="punctuation" data-semantic-role="prime" data-semantic-id="4" data-semantic-parent="5" data-semantic-operator="punctuated">&#x2032;</mo>
                      </mrow>
                    </msup>
                    <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="7" data-semantic-parent="8" data-semantic-operator="fenced">}</mo>
                  </mrow>
                </mrow>
                <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="9" data-semantic-parent="46" data-semantic-operator="relseq,=">=</mo>
                <mrow data-semantic-type="infixop" data-semantic-role="subtraction" data-semantic-id="45" data-semantic-children="42,44,34" data-semantic-content="18,25" data-semantic-parent="46">
                  <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="42" data-semantic-children="12,38" data-semantic-content="41" data-semantic-parent="45">
                    <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="12" data-semantic-children="10,11" data-semantic-parent="42">
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="10" data-semantic-parent="12">s</mi>
                      <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="11" data-semantic-parent="12">2</mn>
                    </msup>
                    <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="41" data-semantic-parent="42" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                    <mrow data-semantic-type="appl" data-semantic-role="simple function" data-semantic-annotation="clearspeak:simple" data-semantic-id="38" data-semantic-children="13,17" data-semantic-content="37,13" data-semantic-parent="42">
                      <mi data-semantic-type="identifier" data-semantic-role="simple function" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="13" data-semantic-parent="38" data-semantic-operator="appl">Y</mi>
                      <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="37" data-semantic-parent="38" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                      <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="17" data-semantic-children="15" data-semantic-content="14,16" data-semantic-parent="38">
                        <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="14" data-semantic-parent="17" data-semantic-operator="fenced">(</mo>
                        <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="15" data-semantic-parent="17">s</mi>
                        <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="16" data-semantic-parent="17" data-semantic-operator="fenced">)</mo>
                      </mrow>
                    </mrow>
                  </mrow>
                  <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="18" data-semantic-parent="45" data-semantic-operator="infixop,-">-</mo>
                  <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="44" data-semantic-children="19,36" data-semantic-content="43" data-semantic-parent="45">
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="19" data-semantic-parent="44">s</mi>
                    <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="43" data-semantic-parent="44" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                    <mrow data-semantic-type="appl" data-semantic-role="simple function" data-semantic-annotation="clearspeak:simple" data-semantic-id="36" data-semantic-children="20,24" data-semantic-content="35,20" data-semantic-parent="44">
                      <mi data-semantic-type="identifier" data-semantic-role="simple function" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="20" data-semantic-parent="36" data-semantic-operator="appl">y</mi>
                      <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="35" data-semantic-parent="36" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                      <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="24" data-semantic-children="22" data-semantic-content="21,23" data-semantic-parent="36">
                        <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="21" data-semantic-parent="24" data-semantic-operator="fenced">(</mo>
                        <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="22" data-semantic-parent="24">0</mn>
                        <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="23" data-semantic-parent="24" data-semantic-operator="fenced">)</mo>
                      </mrow>
                    </mrow>
                  </mrow>
                  <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="25" data-semantic-parent="45" data-semantic-operator="infixop,-">-</mo>
                  <mrow data-semantic-type="appl" data-semantic-role="simple function" data-semantic-annotation="clearspeak:simple" data-semantic-id="34" data-semantic-children="28,32" data-semantic-content="33,26" data-semantic-parent="45">
                    <msup data-semantic-type="superscript" data-semantic-role="simple function" data-semantic-id="28" data-semantic-children="26,27" data-semantic-parent="34">
                      <mi data-semantic-type="identifier" data-semantic-role="simple function" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="26" data-semantic-parent="28" data-semantic-operator="appl">y</mi>
                      <mo data-semantic-type="punctuation" data-semantic-role="prime" data-semantic-id="27" data-semantic-parent="28">&#x2032;</mo>
                    </msup>
                    <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="33" data-semantic-parent="34" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                    <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="32" data-semantic-children="30" data-semantic-content="29,31" data-semantic-parent="34">
                      <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="29" data-semantic-parent="32" data-semantic-operator="fenced">(</mo>
                      <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="30" data-semantic-parent="32">0</mn>
                      <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="31" data-semantic-parent="32" data-semantic-operator="fenced">)</mo>
                    </mrow>
                  </mrow>
                </mrow>
              </mstyle>
            </math>`
            },
            {
              raw:"L{e^(-at)f(t)}=F(s+a), where F(s) is Laplace Transform of f(t)",
              math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
              <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="34" data-semantic-children="31,33" data-semantic-content="21" data-semantic-speech="upper L left brace e Superscript minus a t Baseline f left parenthesis t right parenthesis right brace equals upper F left parenthesis s plus a right parenthesis">
                <mrow data-semantic-type="appl" data-semantic-role="simple function" data-semantic-id="31" data-semantic-children="0,20" data-semantic-content="30,0" data-semantic-parent="34">
                  <mi data-semantic-type="identifier" data-semantic-role="simple function" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="0" data-semantic-parent="31" data-semantic-operator="appl">L</mi>
                  <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="30" data-semantic-parent="31" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                  <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="20" data-semantic-children="19" data-semantic-content="1,17" data-semantic-parent="31">
                    <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="1" data-semantic-parent="20" data-semantic-operator="fenced">{</mo>
                    <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="19" data-semantic-children="9,16" data-semantic-content="18" data-semantic-parent="20">
                      <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="9" data-semantic-children="2,8" data-semantic-parent="19">
                        <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="9">e</mi>
                        <mrow data-semantic-type="prefixop" data-semantic-role="negative" data-semantic-annotation="clearspeak:simple" data-semantic-id="8" data-semantic-children="7" data-semantic-content="3" data-semantic-parent="9">
                          <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="3" data-semantic-parent="8" data-semantic-operator="prefixop,-">-</mo>
                          <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:simple;clearspeak:unit" data-semantic-id="7" data-semantic-children="4,5" data-semantic-content="6" data-semantic-parent="8">
                            <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="4" data-semantic-parent="7">a</mi>
                            <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="6" data-semantic-parent="7" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                            <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="5" data-semantic-parent="7">t</mi>
                          </mrow>
                        </mrow>
                      </msup>
                      <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="18" data-semantic-parent="19" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                      <mrow data-semantic-type="appl" data-semantic-role="simple function" data-semantic-annotation="clearspeak:simple" data-semantic-id="16" data-semantic-children="10,14" data-semantic-content="15,10" data-semantic-parent="19">
                        <mi data-semantic-type="identifier" data-semantic-role="simple function" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="10" data-semantic-parent="16" data-semantic-operator="appl">f</mi>
                        <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="15" data-semantic-parent="16" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                        <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="14" data-semantic-children="12" data-semantic-content="11,13" data-semantic-parent="16">
                          <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="11" data-semantic-parent="14" data-semantic-operator="fenced">(</mo>
                          <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="12" data-semantic-parent="14">t</mi>
                          <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="13" data-semantic-parent="14" data-semantic-operator="fenced">)</mo>
                        </mrow>
                      </mrow>
                    </mrow>
                    <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="17" data-semantic-parent="20" data-semantic-operator="fenced">}</mo>
                  </mrow>
                </mrow>
                <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="21" data-semantic-parent="34" data-semantic-operator="relseq,=">=</mo>
                <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="33" data-semantic-children="22,29" data-semantic-content="32" data-semantic-parent="34">
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="22" data-semantic-parent="33">F</mi>
                  <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="32" data-semantic-parent="33" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                  <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="29" data-semantic-children="28" data-semantic-content="23,27" data-semantic-parent="33">
                    <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="23" data-semantic-parent="29" data-semantic-operator="fenced">(</mo>
                    <mrow data-semantic-type="infixop" data-semantic-role="addition" data-semantic-id="28" data-semantic-children="24,26" data-semantic-content="25" data-semantic-parent="29">
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="24" data-semantic-parent="28">s</mi>
                      <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="25" data-semantic-parent="28" data-semantic-operator="infixop,+">+</mo>
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="26" data-semantic-parent="28">a</mi>
                    </mrow>
                    <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="27" data-semantic-parent="29" data-semantic-operator="fenced">)</mo>
                  </mrow>
                </mrow>
              </mstyle>
            </math>, where F(s) is Laplace Transform of f(t)`
            }
        ]
    },
    {
      category:"Economics",
      formula:[
        {
          raw:"Elasticity of demand (e)= ((dQ)/Q)/((dP)/P)",
          math_ml:`Elasticity of demand <math xmlns="http://www.w3.org/1998/Math/MathML">
          <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="18" data-semantic-children="3,17" data-semantic-content="4" data-semantic-speech="left parenthesis e right parenthesis equals StartStartFraction StartFraction d upper Q Over upper Q EndFraction OverOver StartFraction d upper P Over upper P EndFraction EndEndFraction">
            <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="3" data-semantic-children="1" data-semantic-content="0,2" data-semantic-parent="18">
              <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="0" data-semantic-parent="3" data-semantic-operator="fenced">(</mo>
              <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="1" data-semantic-parent="3">e</mi>
              <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="2" data-semantic-parent="3" data-semantic-operator="fenced">)</mo>
            </mrow>
            <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="4" data-semantic-parent="18" data-semantic-operator="relseq,=">=</mo>
            <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="17" data-semantic-children="10,16" data-semantic-parent="18">
              <mrow>
                <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="10" data-semantic-children="8,9" data-semantic-parent="17">
                  <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:simple;clearspeak:unit" data-semantic-id="8" data-semantic-children="5,6" data-semantic-content="7" data-semantic-parent="10">
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="5" data-semantic-parent="8">d</mi>
                    <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="7" data-semantic-parent="8" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="6" data-semantic-parent="8">Q</mi>
                  </mrow>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="9" data-semantic-parent="10">Q</mi>
                </mfrac>
              </mrow>
              <mrow>
                <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="16" data-semantic-children="14,15" data-semantic-parent="17">
                  <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:simple;clearspeak:unit" data-semantic-id="14" data-semantic-children="11,12" data-semantic-content="13" data-semantic-parent="16">
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="11" data-semantic-parent="14">d</mi>
                    <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="13" data-semantic-parent="14" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="12" data-semantic-parent="14">P</mi>
                  </mrow>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="15" data-semantic-parent="16">P</mi>
                </mfrac>
              </mrow>
            </mfrac>
          </mstyle>
        </math> `
        },
        {
          raw:"Total Cost = Fixed Cost + Variable Cost",
          math_ml:`Total Cost = Fixed Cost + Variable Cost`
        },
        {
          raw:"Average Cost bar(C)=(C(x))/x",
          math_ml:`Average Cost <math xmlns="http://www.w3.org/1998/Math/MathML">
          <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="13" data-semantic-children="2,12" data-semantic-content="3" data-semantic-speech="ModifyingAbove upper C With bar equals StartFraction upper C left parenthesis x right parenthesis Over x EndFraction">
            <mover data-semantic-type="overscore" data-semantic-role="simple function" data-semantic-id="2" data-semantic-children="0,1" data-semantic-parent="13">
              <mrow>
                <mi data-semantic-type="identifier" data-semantic-role="simple function" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="0" data-semantic-parent="2">C</mi>
              </mrow>
              <mo data-semantic-type="operator" data-semantic-role="overaccent" data-semantic-annotation="accent:bar" data-semantic-id="1" data-semantic-parent="2">&#xAF;</mo>
            </mover>
            <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="3" data-semantic-parent="13" data-semantic-operator="relseq,=">=</mo>
            <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="12" data-semantic-children="10,11" data-semantic-parent="13">
              <mrow data-semantic-type="appl" data-semantic-role="simple function" data-semantic-annotation="clearspeak:simple" data-semantic-id="10" data-semantic-children="4,8" data-semantic-content="9,4" data-semantic-parent="12">
                <mi data-semantic-type="identifier" data-semantic-role="simple function" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="4" data-semantic-parent="10" data-semantic-operator="appl">C</mi>
                <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="9" data-semantic-parent="10" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="8" data-semantic-children="6" data-semantic-content="5,7" data-semantic-parent="10">
                  <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="5" data-semantic-parent="8" data-semantic-operator="fenced">(</mo>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="6" data-semantic-parent="8">x</mi>
                  <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="7" data-semantic-parent="8" data-semantic-operator="fenced">)</mo>
                </mrow>
              </mrow>
              <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="11" data-semantic-parent="12">x</mi>
            </mfrac>
          </mstyle>
        </math>`
        },
        {
          raw:"Marginal Cost MC =C^'(x)",
          math_ml:`Marginal Cost <math xmlns="http://www.w3.org/1998/Math/MathML">
          <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="14" data-semantic-children="13,11" data-semantic-content="2" data-semantic-speech="upper M upper C equals upper C prime left parenthesis x right parenthesis">
            <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:simple;clearspeak:unit" data-semantic-id="13" data-semantic-children="0,1" data-semantic-content="12" data-semantic-parent="14">
              <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="0" data-semantic-parent="13">M</mi>
              <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="12" data-semantic-parent="13" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
              <mi data-semantic-type="identifier" data-semantic-role="simple function" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="1" data-semantic-parent="13">C</mi>
            </mrow>
            <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="2" data-semantic-parent="14" data-semantic-operator="relseq,=">=</mo>
            <mrow data-semantic-type="appl" data-semantic-role="simple function" data-semantic-annotation="clearspeak:simple" data-semantic-id="11" data-semantic-children="5,9" data-semantic-content="10,3" data-semantic-parent="14">
              <msup data-semantic-type="superscript" data-semantic-role="simple function" data-semantic-id="5" data-semantic-children="3,4" data-semantic-parent="11">
                <mi data-semantic-type="identifier" data-semantic-role="simple function" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="3" data-semantic-parent="5" data-semantic-operator="appl">C</mi>
                <mo data-semantic-type="punctuation" data-semantic-role="prime" data-semantic-id="4" data-semantic-parent="5">&#x2032;</mo>
              </msup>
              <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="10" data-semantic-parent="11" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
              <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="9" data-semantic-children="7" data-semantic-content="6,8" data-semantic-parent="11">
                <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="6" data-semantic-parent="9" data-semantic-operator="fenced">(</mo>
                <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="7" data-semantic-parent="9">x</mi>
                <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="8" data-semantic-parent="9" data-semantic-operator="fenced">)</mo>
              </mrow>
            </mrow>
          </mstyle>
        </math>`
        },
        {
          raw:"Revenue R(x)=xP(x) where P(x) is price function and x is quantity",
          math_ml:`Revenue <math xmlns="http://www.w3.org/1998/Math/MathML">
          <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="18" data-semantic-children="15,17" data-semantic-content="5" data-semantic-speech="upper R left parenthesis x right parenthesis equals x upper P left parenthesis x right parenthesis">
            <mrow data-semantic-type="appl" data-semantic-role="simple function" data-semantic-annotation="clearspeak:simple" data-semantic-id="15" data-semantic-children="0,4" data-semantic-content="14,0" data-semantic-parent="18">
              <mi data-semantic-type="identifier" data-semantic-role="simple function" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="0" data-semantic-parent="15" data-semantic-operator="appl">R</mi>
              <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="14" data-semantic-parent="15" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
              <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="4" data-semantic-children="2" data-semantic-content="1,3" data-semantic-parent="15">
                <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="1" data-semantic-parent="4" data-semantic-operator="fenced">(</mo>
                <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="4">x</mi>
                <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="3" data-semantic-parent="4" data-semantic-operator="fenced">)</mo>
              </mrow>
            </mrow>
            <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="5" data-semantic-parent="18" data-semantic-operator="relseq,=">=</mo>
            <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="17" data-semantic-children="6,13" data-semantic-content="16" data-semantic-parent="18">
              <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="6" data-semantic-parent="17">x</mi>
              <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="16" data-semantic-parent="17" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
              <mrow data-semantic-type="appl" data-semantic-role="simple function" data-semantic-annotation="clearspeak:simple" data-semantic-id="13" data-semantic-children="7,11" data-semantic-content="12,7" data-semantic-parent="17">
                <mi data-semantic-type="identifier" data-semantic-role="simple function" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="7" data-semantic-parent="13" data-semantic-operator="appl">P</mi>
                <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="12" data-semantic-parent="13" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="11" data-semantic-children="9" data-semantic-content="8,10" data-semantic-parent="13">
                  <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="8" data-semantic-parent="11" data-semantic-operator="fenced">(</mo>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="9" data-semantic-parent="11">x</mi>
                  <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="10" data-semantic-parent="11" data-semantic-operator="fenced">)</mo>
                </mrow>
              </mrow>
            </mrow>
          </mstyle>
        </math> where P(x) is price function and x is quantity`
        },
        {
          raw:"Profit Pr(x)=R(x)-C(x) or Pr(x)=xP(x)-C(x)",
          math_ml:`Profit <math xmlns="http://www.w3.org/1998/Math/MathML">
          <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="66" data-semantic-children="58,62,65" data-semantic-content="6,30" data-semantic-speech="upper P r left parenthesis x right parenthesis equals upper R left parenthesis x right parenthesis minus upper C left parenthesis x right parenthesis or upper P r left parenthesis x right parenthesis equals x upper P left parenthesis x right parenthesis minus upper C left parenthesis x right parenthesis">
            <mrow data-semantic-type="appl" data-semantic-role="simple function" data-semantic-annotation="clearspeak:simple" data-semantic-id="58" data-semantic-children="0,56" data-semantic-content="57,0" data-semantic-parent="66">
              <mi data-semantic-type="identifier" data-semantic-role="simple function" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="0" data-semantic-parent="58" data-semantic-operator="appl">P</mi>
              <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="57" data-semantic-parent="58" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
              <mrow data-semantic-type="appl" data-semantic-role="simple function" data-semantic-annotation="clearspeak:simple" data-semantic-id="56" data-semantic-children="1,5" data-semantic-content="55,1" data-semantic-parent="58">
                <mi data-semantic-type="identifier" data-semantic-role="simple function" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="1" data-semantic-parent="56" data-semantic-operator="appl">r</mi>
                <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="55" data-semantic-parent="56" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="5" data-semantic-children="3" data-semantic-content="2,4" data-semantic-parent="56">
                  <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="2" data-semantic-parent="5" data-semantic-operator="fenced">(</mo>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="3" data-semantic-parent="5">x</mi>
                  <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="4" data-semantic-parent="5" data-semantic-operator="fenced">)</mo>
                </mrow>
              </mrow>
            </mrow>
            <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="6" data-semantic-parent="66" data-semantic-operator="relseq,=">=</mo>
            <mrow data-semantic-type="infixop" data-semantic-role="subtraction" data-semantic-id="62" data-semantic-children="54,61" data-semantic-content="12" data-semantic-parent="66">
              <mrow data-semantic-type="appl" data-semantic-role="simple function" data-semantic-annotation="clearspeak:simple" data-semantic-id="54" data-semantic-children="7,11" data-semantic-content="53,7" data-semantic-parent="62">
                <mi data-semantic-type="identifier" data-semantic-role="simple function" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="7" data-semantic-parent="54" data-semantic-operator="appl">R</mi>
                <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="53" data-semantic-parent="54" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="11" data-semantic-children="9" data-semantic-content="8,10" data-semantic-parent="54">
                  <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="8" data-semantic-parent="11" data-semantic-operator="fenced">(</mo>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="9" data-semantic-parent="11">x</mi>
                  <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="10" data-semantic-parent="11" data-semantic-operator="fenced">)</mo>
                </mrow>
              </mrow>
              <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="12" data-semantic-parent="62" data-semantic-operator="infixop,-">-</mo>
              <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="61" data-semantic-children="52,23,50" data-semantic-content="59,60" data-semantic-parent="62">
                <mrow data-semantic-type="appl" data-semantic-role="simple function" data-semantic-annotation="clearspeak:simple" data-semantic-id="52" data-semantic-children="13,17" data-semantic-content="51,13" data-semantic-parent="61">
                  <mi data-semantic-type="identifier" data-semantic-role="simple function" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="13" data-semantic-parent="52" data-semantic-operator="appl">C</mi>
                  <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="51" data-semantic-parent="52" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                  <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="17" data-semantic-children="15" data-semantic-content="14,16" data-semantic-parent="52">
                    <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="14" data-semantic-parent="17" data-semantic-operator="fenced">(</mo>
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="15" data-semantic-parent="17">x</mi>
                    <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="16" data-semantic-parent="17" data-semantic-operator="fenced">)</mo>
                  </mrow>
                </mrow>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="59" data-semantic-parent="61" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mrow data-semantic-type="punctuated" data-semantic-role="text" data-semantic-id="23" data-semantic-children="18,19,20" data-semantic-parent="61" data-semantic-collapsed="(23 (c 21 22) 18 19 20)">
                  <mspace width="1ex" data-semantic-type="text" data-semantic-role="space" data-semantic-annotation="clearspeak:unit" data-semantic-id="18" data-semantic-parent="23"></mspace>
                  <mtext data-semantic-type="text" data-semantic-role="unknown" data-semantic-font="normal" data-semantic-annotation="clearspeak:unit" data-semantic-id="19" data-semantic-parent="23">or</mtext>
                  <mspace width="1ex" data-semantic-type="text" data-semantic-role="space" data-semantic-annotation="clearspeak:unit" data-semantic-id="20" data-semantic-parent="23"></mspace>
                </mrow>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="60" data-semantic-parent="61" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mrow data-semantic-type="appl" data-semantic-role="simple function" data-semantic-annotation="clearspeak:simple" data-semantic-id="50" data-semantic-children="24,48" data-semantic-content="49,24" data-semantic-parent="61">
                  <mi data-semantic-type="identifier" data-semantic-role="simple function" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="24" data-semantic-parent="50" data-semantic-operator="appl">P</mi>
                  <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="49" data-semantic-parent="50" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                  <mrow data-semantic-type="appl" data-semantic-role="simple function" data-semantic-annotation="clearspeak:simple" data-semantic-id="48" data-semantic-children="25,29" data-semantic-content="47,25" data-semantic-parent="50">
                    <mi data-semantic-type="identifier" data-semantic-role="simple function" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="25" data-semantic-parent="48" data-semantic-operator="appl">r</mi>
                    <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="47" data-semantic-parent="48" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                    <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="29" data-semantic-children="27" data-semantic-content="26,28" data-semantic-parent="48">
                      <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="26" data-semantic-parent="29" data-semantic-operator="fenced">(</mo>
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="27" data-semantic-parent="29">x</mi>
                      <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="28" data-semantic-parent="29" data-semantic-operator="fenced">)</mo>
                    </mrow>
                  </mrow>
                </mrow>
              </mrow>
            </mrow>
            <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="30" data-semantic-parent="66" data-semantic-operator="relseq,=">=</mo>
            <mrow data-semantic-type="infixop" data-semantic-role="subtraction" data-semantic-id="65" data-semantic-children="64,44" data-semantic-content="37" data-semantic-parent="66">
              <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="64" data-semantic-children="31,46" data-semantic-content="63" data-semantic-parent="65">
                <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="31" data-semantic-parent="64">x</mi>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="63" data-semantic-parent="64" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mrow data-semantic-type="appl" data-semantic-role="simple function" data-semantic-annotation="clearspeak:simple" data-semantic-id="46" data-semantic-children="32,36" data-semantic-content="45,32" data-semantic-parent="64">
                  <mi data-semantic-type="identifier" data-semantic-role="simple function" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="32" data-semantic-parent="46" data-semantic-operator="appl">P</mi>
                  <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="45" data-semantic-parent="46" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                  <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="36" data-semantic-children="34" data-semantic-content="33,35" data-semantic-parent="46">
                    <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="33" data-semantic-parent="36" data-semantic-operator="fenced">(</mo>
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="34" data-semantic-parent="36">x</mi>
                    <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="35" data-semantic-parent="36" data-semantic-operator="fenced">)</mo>
                  </mrow>
                </mrow>
              </mrow>
              <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="37" data-semantic-parent="65" data-semantic-operator="infixop,-">-</mo>
              <mrow data-semantic-type="appl" data-semantic-role="simple function" data-semantic-annotation="clearspeak:simple" data-semantic-id="44" data-semantic-children="38,42" data-semantic-content="43,38" data-semantic-parent="65">
                <mi data-semantic-type="identifier" data-semantic-role="simple function" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="38" data-semantic-parent="44" data-semantic-operator="appl">C</mi>
                <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="43" data-semantic-parent="44" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="42" data-semantic-children="40" data-semantic-content="39,41" data-semantic-parent="44">
                  <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="39" data-semantic-parent="42" data-semantic-operator="fenced">(</mo>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="40" data-semantic-parent="42">x</mi>
                  <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="41" data-semantic-parent="42" data-semantic-operator="fenced">)</mo>
                </mrow>
              </mrow>
            </mrow>
          </mstyle>
        </math>`
        },
        {
          raw:"if p=D(x) is demand function,p=S(x) is supply function and (Q,P) is equilibrium point then Consumer surplus at equilibrium point is given by  int_0^Q (D(x)-P)dx=int_0^Q D(x)dx-PQ",

          math_ml:`if p=D(x) is demand function,p=S(x) is supply function and (Q,P) is equilibrium point then Consumer surplus at equilibrium point is given by <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
          <munderover>
            <mo>&#x222B;<!-- ∫ --></mo>
            <mn>0</mn>
            <mi>Q</mi>
          </munderover>
          <mrow>
            <mo>(</mo>
            <mrow>
              <mi>D</mi>
              <mo stretchy="false">(</mo>
              <mi>x</mi>
              <mo stretchy="false">)</mo>
              <mo>&#x2212;<!-- − --></mo>
              <mi>P</mi>
            </mrow>
            <mo>)</mo>
          </mrow>
          <mi>d</mi>
          <mi>x</mi>
          <mo>=</mo>
          <munderover>
            <mo>&#x222B;<!-- ∫ --></mo>
            <mn>0</mn>
            <mi>Q</mi>
          </munderover>
          <mi>D</mi>
          <mo stretchy="false">(</mo>
          <mi>x</mi>
          <mo stretchy="false">)</mo>
          <mi>d</mi>
          <mi>x</mi>
          <mo>&#x2212;<!-- − --></mo>
          <mi>Q</mi>
          <mi>P</mi>
        </math>`
        },
        {
          raw:"if p=D(x) is demand function,p=S(x) is supply function and (Q,P) is equilibrium point then Producer surplus at equilibrium point is given by int_0^Q (P-S(x))dx=PQ-int_0^Q S(x)dx ",
          math_ml:`if p=D(x) is demand function,p=S(x) is supply function and (Q,P) is equilibrium point then Producer surplus at equilibrium point is given by <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
          <munderover>
            <mo>&#x222B;<!-- ∫ --></mo>
            <mn>0</mn>
            <mi>Q</mi>
          </munderover>
          <mrow>
            <mo>(</mo>
            <mrow>
              <mi>P</mi>
              <mo>&#x2212;<!-- − --></mo>
              <mi>S</mi>
              <mo stretchy="false">(</mo>
              <mi>x</mi>
              <mo stretchy="false">)</mo>
            </mrow>
            <mo>)</mo>
          </mrow>
          <mi>d</mi>
          <mi>x</mi>
          <mo>=</mo>
          <mi>Q</mi>
          <mi>P</mi>
          <mo>&#x2212;<!-- − --></mo>
          <munderover>
            <mo>&#x222B;<!-- ∫ --></mo>
            <mn>0</mn>
            <mi>Q</mi>
          </munderover>
          <mi>S</mi>
          <mo stretchy="false">(</mo>
          <mi>x</mi>
          <mo stretchy="false">)</mo>
          <mi>d</mi>
          <mi>x</mi>
        </math>`
        },
        
        
      ]
    },
    {
      category:"Series Expansion",
      formula:[
        {
           raw:" Taylor series Expansion of  f(x) = sum_(n=0)^(oo) (f^((n))(a))/(n!)(x-a)^n",
           math_ml:`Taylor series Expansion of <math xmlns="http://www.w3.org/1998/Math/MathML">
           <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="43" data-semantic-children="6,42" data-semantic-content="7" data-semantic-speech="f left parenthesis x right parenthesis equals sigma summation Underscript n equals 0 Overscript infinity Endscripts StartFraction f Superscript left parenthesis n right parenthesis Baseline left parenthesis a right parenthesis Over n factorial EndFraction left parenthesis x minus a right parenthesis Superscript n">
             <mrow data-semantic-type="appl" data-semantic-role="simple function" data-semantic-annotation="clearspeak:simple" data-semantic-id="6" data-semantic-children="0,4" data-semantic-content="5,0" data-semantic-parent="43">
               <mi data-semantic-type="identifier" data-semantic-role="simple function" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="0" data-semantic-parent="6" data-semantic-operator="appl">f</mi>
               <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="5" data-semantic-parent="6" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
               <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="4" data-semantic-children="2" data-semantic-content="1,3" data-semantic-parent="6">
                 <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="1" data-semantic-parent="4" data-semantic-operator="fenced">(</mo>
                 <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="4">x</mi>
                 <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="3" data-semantic-parent="4" data-semantic-operator="fenced">)</mo>
               </mrow>
             </mrow>
             <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="7" data-semantic-parent="43" data-semantic-operator="relseq,=">=</mo>
             <mrow data-semantic-type="bigop" data-semantic-role="sum" data-semantic-id="42" data-semantic-children="14,41" data-semantic-content="8" data-semantic-parent="43">
               <mrow>
                 <munderover data-semantic-type="limboth" data-semantic-role="sum" data-semantic-id="14" data-semantic-children="8,12,13" data-semantic-parent="42">
                   <mo data-semantic-type="largeop" data-semantic-role="sum" data-semantic-id="8" data-semantic-parent="14" data-semantic-operator="bigop">&#x2211;</mo>
                   <mrow data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="12" data-semantic-children="9,11" data-semantic-content="10" data-semantic-parent="14">
                     <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="9" data-semantic-parent="12">n</mi>
                     <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="10" data-semantic-parent="12" data-semantic-operator="relseq,=">=</mo>
                     <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="11" data-semantic-parent="12">0</mn>
                   </mrow>
                   <mrow>
                     <mo data-semantic-type="operator" data-semantic-role="unknown" data-semantic-id="13" data-semantic-parent="14">&#x221E;</mo>
                   </mrow>
                 </munderover>
               </mrow>
               <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="41" data-semantic-children="30,39" data-semantic-content="40" data-semantic-parent="42">
                 <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="30" data-semantic-children="26,29" data-semantic-parent="41">
                   <mrow>
                     <mrow data-semantic-type="appl" data-semantic-role="simple function" data-semantic-annotation="clearspeak:simple" data-semantic-id="26" data-semantic-children="20,24" data-semantic-content="25,15" data-semantic-parent="30">
                       <msup data-semantic-type="superscript" data-semantic-role="simple function" data-semantic-id="20" data-semantic-children="15,19" data-semantic-parent="26">
                         <mi data-semantic-type="identifier" data-semantic-role="simple function" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="15" data-semantic-parent="20" data-semantic-operator="appl">f</mi>
                         <mrow>
                           <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="19" data-semantic-children="17" data-semantic-content="16,18" data-semantic-parent="20">
                             <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="16" data-semantic-parent="19" data-semantic-operator="fenced">(</mo>
                             <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="17" data-semantic-parent="19">n</mi>
                             <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="18" data-semantic-parent="19" data-semantic-operator="fenced">)</mo>
                           </mrow>
                         </mrow>
                       </msup>
                       <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="25" data-semantic-parent="26" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                       <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="24" data-semantic-children="22" data-semantic-content="21,23" data-semantic-parent="26">
                         <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="21" data-semantic-parent="24" data-semantic-operator="fenced">(</mo>
                         <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="22" data-semantic-parent="24">a</mi>
                         <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="23" data-semantic-parent="24" data-semantic-operator="fenced">)</mo>
                       </mrow>
                     </mrow>
                   </mrow>
                   <mrow data-semantic-type="punctuated" data-semantic-role="endpunct" data-semantic-id="29" data-semantic-children="27,28" data-semantic-content="28" data-semantic-parent="30">
                     <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="27" data-semantic-parent="29">n</mi>
                     <mo data-semantic-type="punctuation" data-semantic-role="unknown" data-semantic-id="28" data-semantic-parent="29" data-semantic-operator="punctuated">!</mo>
                   </mrow>
                 </mfrac>
                 <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="40" data-semantic-parent="41" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                 <msup data-semantic-type="superscript" data-semantic-role="leftright" data-semantic-id="39" data-semantic-children="37,38" data-semantic-parent="41">
                   <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="37" data-semantic-children="36" data-semantic-content="31,35" data-semantic-parent="39">
                     <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="31" data-semantic-parent="37" data-semantic-operator="fenced">(</mo>
                     <mrow data-semantic-type="infixop" data-semantic-role="subtraction" data-semantic-id="36" data-semantic-children="32,34" data-semantic-content="33" data-semantic-parent="37">
                       <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="32" data-semantic-parent="36">x</mi>
                       <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="33" data-semantic-parent="36" data-semantic-operator="infixop,-">-</mo>
                       <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="34" data-semantic-parent="36">a</mi>
                     </mrow>
                     <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="35" data-semantic-parent="37" data-semantic-operator="fenced">)</mo>
                   </mrow>
                   <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="38" data-semantic-parent="39">n</mi>
                 </msup>
               </mrow>
             </mrow>
           </mstyle>
         </math>`

        },
        {
           raw:"1/(1-x)=sum_(n=0)^(oo)x^n = 1+x+x^2+x^3+...",
           math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
           <mtable columnalign="left" columnspacing="1em" rowspacing="4pt">
             <mtr>
               <mtd>
                 <munderover>
                   <mo data-mjx-texclass="OP">&#x2211;</mo>
                   <mrow data-mjx-texclass="ORD">
                     <mi>k</mi>
                     <mo>=</mo>
                     <mn>0</mn>
                   </mrow>
                   <mrow data-mjx-texclass="ORD">
                     <mi mathvariant="normal">&#x221E;</mi>
                   </mrow>
                 </munderover>
                 <msup>
                   <mi>x</mi>
                   <mrow data-mjx-texclass="ORD">
                     <mi>k</mi>
                   </mrow>
                 </msup>
                 <mo>=</mo>
                 <mn>1</mn>
                 <mo>+</mo>
                 <mi>x</mi>
                 <mo>+</mo>
                 <msup>
                   <mi>x</mi>
                   <mrow data-mjx-texclass="ORD">
                     <mn>2</mn>
                   </mrow>
                 </msup>
                 <mo>+</mo>
                 <msup>
                   <mi>x</mi>
                   <mrow data-mjx-texclass="ORD">
                     <mn>3</mn>
                   </mrow>
                 </msup>
                 <mo>+</mo>
                 <mo>&#x2026;</mo>
                 <mo>.</mo>
                 <mo stretchy="false">(</mo>
                 <mi>i</mi>
                 <mi>f</mi>
                 <mo>&#x2212;</mo>
                 <mn>1</mn>
                 <mo>&lt;</mo>
                 <mi>x</mi>
                 <mo>&lt;</mo>
                 <mn>1</mn>
                 <mo stretchy="false">)</mo>
               </mtd>
             </mtr>
           </mtable>
         </math>`
        },
        {
          raw:"e^x=sum_(n=0)^(oo)x^n/(n!) = 1+x+x^2/(2!)+x^3/(3!)+....",
          math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
          <mstyle displaystyle="true" data-semantic-type="punctuated" data-semantic-role="endpunct" data-semantic-id="45" data-semantic-children="44,40" data-semantic-content="40" data-semantic-speech="e Superscript x Baseline equals sigma summation Underscript n equals 0 Overscript infinity Endscripts StartFraction x Superscript n Baseline Over n factorial EndFraction equals 1 plus x plus StartFraction x squared Over 2 factorial EndFraction plus StartFraction x cubed Over 3 factorial EndFraction plus period period period period">
            <mrow data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="44" data-semantic-children="2,41,42" data-semantic-content="3,18" data-semantic-parent="45">
              <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="2" data-semantic-children="0,1" data-semantic-parent="44">
                <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="0" data-semantic-parent="2">e</mi>
                <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="1" data-semantic-parent="2">x</mi>
              </msup>
              <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="3" data-semantic-parent="44" data-semantic-operator="relseq,=">=</mo>
              <mrow data-semantic-type="bigop" data-semantic-role="sum" data-semantic-id="41" data-semantic-children="10,17" data-semantic-content="4" data-semantic-parent="44">
                <mrow>
                  <munderover data-semantic-type="limboth" data-semantic-role="sum" data-semantic-id="10" data-semantic-children="4,8,9" data-semantic-parent="41">
                    <mo data-semantic-type="largeop" data-semantic-role="sum" data-semantic-id="4" data-semantic-parent="10" data-semantic-operator="bigop">&#x2211;</mo>
                    <mrow data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="8" data-semantic-children="5,7" data-semantic-content="6" data-semantic-parent="10">
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="5" data-semantic-parent="8">n</mi>
                      <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="6" data-semantic-parent="8" data-semantic-operator="relseq,=">=</mo>
                      <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="7" data-semantic-parent="8">0</mn>
                    </mrow>
                    <mrow>
                      <mo data-semantic-type="operator" data-semantic-role="unknown" data-semantic-id="9" data-semantic-parent="10">&#x221E;</mo>
                    </mrow>
                  </munderover>
                </mrow>
                <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="17" data-semantic-children="13,16" data-semantic-parent="41">
                  <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="13" data-semantic-children="11,12" data-semantic-parent="17">
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="11" data-semantic-parent="13">x</mi>
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="12" data-semantic-parent="13">n</mi>
                  </msup>
                  <mrow data-semantic-type="punctuated" data-semantic-role="endpunct" data-semantic-id="16" data-semantic-children="14,15" data-semantic-content="15" data-semantic-parent="17">
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="14" data-semantic-parent="16">n</mi>
                    <mo data-semantic-type="punctuation" data-semantic-role="unknown" data-semantic-id="15" data-semantic-parent="16" data-semantic-operator="punctuated">!</mo>
                  </mrow>
                </mfrac>
              </mrow>
              <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="18" data-semantic-parent="44" data-semantic-operator="relseq,=">=</mo>
              <mrow data-semantic-type="infixop" data-semantic-role="addition" data-semantic-id="42" data-semantic-children="19,21,29,43" data-semantic-content="20,22,30" data-semantic-parent="44">
                <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="19" data-semantic-parent="42">1</mn>
                <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="20" data-semantic-parent="42" data-semantic-operator="infixop,+">+</mo>
                <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="21" data-semantic-parent="42">x</mi>
                <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="22" data-semantic-parent="42" data-semantic-operator="infixop,+">+</mo>
                <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="29" data-semantic-children="25,28" data-semantic-parent="42">
                  <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="25" data-semantic-children="23,24" data-semantic-parent="29">
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="23" data-semantic-parent="25">x</mi>
                    <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="24" data-semantic-parent="25">2</mn>
                  </msup>
                  <mrow data-semantic-type="punctuated" data-semantic-role="endpunct" data-semantic-id="28" data-semantic-children="26,27" data-semantic-content="27" data-semantic-parent="29">
                    <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="26" data-semantic-parent="28">2</mn>
                    <mo data-semantic-type="punctuation" data-semantic-role="unknown" data-semantic-id="27" data-semantic-parent="28" data-semantic-operator="punctuated">!</mo>
                  </mrow>
                </mfrac>
                <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="30" data-semantic-parent="42" data-semantic-operator="infixop,+">+</mo>
                <mrow data-semantic-type="postfixop" data-semantic-role="multiop" data-semantic-id="43" data-semantic-children="37" data-semantic-content="38,39" data-semantic-parent="42">
                  <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="37" data-semantic-children="33,36" data-semantic-parent="43">
                    <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="33" data-semantic-children="31,32" data-semantic-parent="37">
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="31" data-semantic-parent="33">x</mi>
                      <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="32" data-semantic-parent="33">3</mn>
                    </msup>
                    <mrow data-semantic-type="punctuated" data-semantic-role="endpunct" data-semantic-id="36" data-semantic-children="34,35" data-semantic-content="35" data-semantic-parent="37">
                      <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="34" data-semantic-parent="36">3</mn>
                      <mo data-semantic-type="punctuation" data-semantic-role="unknown" data-semantic-id="35" data-semantic-parent="36" data-semantic-operator="punctuated">!</mo>
                    </mrow>
                  </mfrac>
                  <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="38" data-semantic-parent="43" data-semantic-operator="postfixop,+ ...">+</mo>
                  <mo data-semantic-type="operator" data-semantic-role="fullstop" data-semantic-id="39" data-semantic-parent="43" data-semantic-operator="postfixop,+ ...">...</mo>
                </mrow>
              </mrow>
            </mrow>
            <mo data-semantic-type="punctuation" data-semantic-role="fullstop" data-semantic-id="40" data-semantic-parent="45" data-semantic-operator="punctuated">.</mo>
          </mstyle>
        </math>`
        },
        {
          raw:"sin(x)=sum_(n=0)^(oo)(-1)^n x^(2n+1)/((2n+1)!)=x-x^3/(3!)+x^5/(5!)-x^7/(7!)+...",
          math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
          <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="80" data-semantic-children="6,75,78" data-semantic-content="7,45" data-semantic-speech="sine left parenthesis x right parenthesis equals sigma summation Underscript n equals 0 Overscript infinity Endscripts left parenthesis negative 1 right parenthesis Superscript n Baseline StartFraction x Superscript 2 n plus 1 Baseline Over left parenthesis 2 n plus 1 right parenthesis factorial EndFraction equals x minus StartFraction x cubed Over 3 factorial EndFraction plus StartFraction x Superscript 5 Baseline Over 5 factorial EndFraction minus StartFraction x Superscript 7 Baseline Over 7 factorial EndFraction plus period period period">
            <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="6" data-semantic-children="0,4" data-semantic-content="5,0" data-semantic-parent="80">
              <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="0" data-semantic-parent="6" data-semantic-operator="appl">sin</mi>
              <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="5" data-semantic-parent="6" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
              <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="4" data-semantic-children="2" data-semantic-content="1,3" data-semantic-parent="6">
                <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="1" data-semantic-parent="4" data-semantic-operator="fenced">(</mo>
                <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="4">x</mi>
                <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="3" data-semantic-parent="4" data-semantic-operator="fenced">)</mo>
              </mrow>
            </mrow>
            <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="7" data-semantic-parent="80" data-semantic-operator="relseq,=">=</mo>
            <mrow data-semantic-type="bigop" data-semantic-role="sum" data-semantic-id="75" data-semantic-children="14,74" data-semantic-content="8" data-semantic-parent="80">
              <mrow>
                <munderover data-semantic-type="limboth" data-semantic-role="sum" data-semantic-id="14" data-semantic-children="8,12,13" data-semantic-parent="75">
                  <mo data-semantic-type="largeop" data-semantic-role="sum" data-semantic-id="8" data-semantic-parent="14" data-semantic-operator="bigop">&#x2211;</mo>
                  <mrow data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="12" data-semantic-children="9,11" data-semantic-content="10" data-semantic-parent="14">
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="9" data-semantic-parent="12">n</mi>
                    <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="10" data-semantic-parent="12" data-semantic-operator="relseq,=">=</mo>
                    <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="11" data-semantic-parent="12">0</mn>
                  </mrow>
                  <mrow>
                    <mo data-semantic-type="operator" data-semantic-role="unknown" data-semantic-id="13" data-semantic-parent="14">&#x221E;</mo>
                  </mrow>
                </munderover>
              </mrow>
              <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="74" data-semantic-children="22,44" data-semantic-content="73" data-semantic-parent="75">
                <msup data-semantic-type="superscript" data-semantic-role="leftright" data-semantic-id="22" data-semantic-children="20,21" data-semantic-parent="74">
                  <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="20" data-semantic-children="19" data-semantic-content="15,18" data-semantic-parent="22">
                    <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="15" data-semantic-parent="20" data-semantic-operator="fenced">(</mo>
                    <mrow data-semantic-type="prefixop" data-semantic-role="negative" data-semantic-annotation="clearspeak:simple" data-semantic-id="19" data-semantic-children="17" data-semantic-content="16" data-semantic-parent="20">
                      <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="16" data-semantic-parent="19" data-semantic-operator="prefixop,-">-</mo>
                      <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="17" data-semantic-parent="19">1</mn>
                    </mrow>
                    <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="18" data-semantic-parent="20" data-semantic-operator="fenced">)</mo>
                  </mrow>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="21" data-semantic-parent="22">n</mi>
                </msup>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="73" data-semantic-parent="74" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="44" data-semantic-children="31,43" data-semantic-parent="74">
                  <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="31" data-semantic-children="23,30" data-semantic-parent="44">
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="23" data-semantic-parent="31">x</mi>
                    <mrow data-semantic-type="infixop" data-semantic-role="addition" data-semantic-id="30" data-semantic-children="29,27" data-semantic-content="26" data-semantic-parent="31">
                      <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:simple;clearspeak:unit" data-semantic-id="29" data-semantic-children="24,25" data-semantic-content="28" data-semantic-parent="30">
                        <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="24" data-semantic-parent="29">2</mn>
                        <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="28" data-semantic-parent="29" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                        <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="25" data-semantic-parent="29">n</mi>
                      </mrow>
                      <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="26" data-semantic-parent="30" data-semantic-operator="infixop,+">+</mo>
                      <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="27" data-semantic-parent="30">1</mn>
                    </mrow>
                  </msup>
                  <mrow data-semantic-type="punctuated" data-semantic-role="endpunct" data-semantic-id="43" data-semantic-children="41,42" data-semantic-content="42" data-semantic-parent="44">
                    <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="41" data-semantic-children="40" data-semantic-content="32,37" data-semantic-parent="43">
                      <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="32" data-semantic-parent="41" data-semantic-operator="fenced">(</mo>
                      <mrow data-semantic-type="infixop" data-semantic-role="addition" data-semantic-id="40" data-semantic-children="39,36" data-semantic-content="35" data-semantic-parent="41">
                        <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:simple;clearspeak:unit" data-semantic-id="39" data-semantic-children="33,34" data-semantic-content="38" data-semantic-parent="40">
                          <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="33" data-semantic-parent="39">2</mn>
                          <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="38" data-semantic-parent="39" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                          <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="34" data-semantic-parent="39">n</mi>
                        </mrow>
                        <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="35" data-semantic-parent="40" data-semantic-operator="infixop,+">+</mo>
                        <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="36" data-semantic-parent="40">1</mn>
                      </mrow>
                      <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="37" data-semantic-parent="41" data-semantic-operator="fenced">)</mo>
                    </mrow>
                    <mo data-semantic-type="punctuation" data-semantic-role="unknown" data-semantic-id="42" data-semantic-parent="43" data-semantic-operator="punctuated">!</mo>
                  </mrow>
                </mfrac>
              </mrow>
            </mrow>
            <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="45" data-semantic-parent="80" data-semantic-operator="relseq,=">=</mo>
            <mrow data-semantic-type="infixop" data-semantic-role="subtraction" data-semantic-id="78" data-semantic-children="77,79" data-semantic-content="63" data-semantic-parent="80">
              <mrow data-semantic-type="infixop" data-semantic-role="addition" data-semantic-id="77" data-semantic-children="76,62" data-semantic-content="55" data-semantic-parent="78">
                <mrow data-semantic-type="infixop" data-semantic-role="subtraction" data-semantic-id="76" data-semantic-children="46,54" data-semantic-content="47" data-semantic-parent="77">
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="46" data-semantic-parent="76">x</mi>
                  <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="47" data-semantic-parent="76" data-semantic-operator="infixop,-">-</mo>
                  <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="54" data-semantic-children="50,53" data-semantic-parent="76">
                    <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="50" data-semantic-children="48,49" data-semantic-parent="54">
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="48" data-semantic-parent="50">x</mi>
                      <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="49" data-semantic-parent="50">3</mn>
                    </msup>
                    <mrow data-semantic-type="punctuated" data-semantic-role="endpunct" data-semantic-id="53" data-semantic-children="51,52" data-semantic-content="52" data-semantic-parent="54">
                      <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="51" data-semantic-parent="53">3</mn>
                      <mo data-semantic-type="punctuation" data-semantic-role="unknown" data-semantic-id="52" data-semantic-parent="53" data-semantic-operator="punctuated">!</mo>
                    </mrow>
                  </mfrac>
                </mrow>
                <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="55" data-semantic-parent="77" data-semantic-operator="infixop,+">+</mo>
                <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="62" data-semantic-children="58,61" data-semantic-parent="77">
                  <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="58" data-semantic-children="56,57" data-semantic-parent="62">
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="56" data-semantic-parent="58">x</mi>
                    <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="57" data-semantic-parent="58">5</mn>
                  </msup>
                  <mrow data-semantic-type="punctuated" data-semantic-role="endpunct" data-semantic-id="61" data-semantic-children="59,60" data-semantic-content="60" data-semantic-parent="62">
                    <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="59" data-semantic-parent="61">5</mn>
                    <mo data-semantic-type="punctuation" data-semantic-role="unknown" data-semantic-id="60" data-semantic-parent="61" data-semantic-operator="punctuated">!</mo>
                  </mrow>
                </mfrac>
              </mrow>
              <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="63" data-semantic-parent="78" data-semantic-operator="infixop,-">-</mo>
              <mrow data-semantic-type="postfixop" data-semantic-role="multiop" data-semantic-id="79" data-semantic-children="70" data-semantic-content="71,72" data-semantic-parent="78">
                <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="70" data-semantic-children="66,69" data-semantic-parent="79">
                  <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="66" data-semantic-children="64,65" data-semantic-parent="70">
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="64" data-semantic-parent="66">x</mi>
                    <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="65" data-semantic-parent="66">7</mn>
                  </msup>
                  <mrow data-semantic-type="punctuated" data-semantic-role="endpunct" data-semantic-id="69" data-semantic-children="67,68" data-semantic-content="68" data-semantic-parent="70">
                    <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="67" data-semantic-parent="69">7</mn>
                    <mo data-semantic-type="punctuation" data-semantic-role="unknown" data-semantic-id="68" data-semantic-parent="69" data-semantic-operator="punctuated">!</mo>
                  </mrow>
                </mfrac>
                <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="71" data-semantic-parent="79" data-semantic-operator="postfixop,+ ...">+</mo>
                <mo data-semantic-type="operator" data-semantic-role="fullstop" data-semantic-id="72" data-semantic-parent="79" data-semantic-operator="postfixop,+ ...">...</mo>
              </mrow>
            </mrow>
          </mstyle>
        </math>`
        },
        {
          raw:"cos(x)=sum_(n=0)^(oo)((-1)^n x^(2n))/((2n)!)=1-x^2/(2!)+x^4/(4!)-x^6/(6!)+...",
          math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
          <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="74" data-semantic-children="6,69,72" data-semantic-content="7,41" data-semantic-speech="cosine left parenthesis x right parenthesis equals sigma summation Underscript n equals 0 Overscript infinity Endscripts StartFraction left parenthesis negative 1 right parenthesis Superscript n Baseline x Superscript 2 n Baseline Over left parenthesis 2 n right parenthesis factorial EndFraction equals 1 minus StartFraction x squared Over 2 factorial EndFraction plus StartFraction x Superscript 4 Baseline Over 4 factorial EndFraction minus StartFraction x Superscript 6 Baseline Over 6 factorial EndFraction plus period period period">
            <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="6" data-semantic-children="0,4" data-semantic-content="5,0" data-semantic-parent="74">
              <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="0" data-semantic-parent="6" data-semantic-operator="appl">cos</mi>
              <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="5" data-semantic-parent="6" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
              <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="4" data-semantic-children="2" data-semantic-content="1,3" data-semantic-parent="6">
                <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="1" data-semantic-parent="4" data-semantic-operator="fenced">(</mo>
                <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="4">x</mi>
                <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="3" data-semantic-parent="4" data-semantic-operator="fenced">)</mo>
              </mrow>
            </mrow>
            <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="7" data-semantic-parent="74" data-semantic-operator="relseq,=">=</mo>
            <mrow data-semantic-type="bigop" data-semantic-role="sum" data-semantic-id="69" data-semantic-children="14,40" data-semantic-content="8" data-semantic-parent="74">
              <mrow>
                <munderover data-semantic-type="limboth" data-semantic-role="sum" data-semantic-id="14" data-semantic-children="8,12,13" data-semantic-parent="69">
                  <mo data-semantic-type="largeop" data-semantic-role="sum" data-semantic-id="8" data-semantic-parent="14" data-semantic-operator="bigop">&#x2211;</mo>
                  <mrow data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="12" data-semantic-children="9,11" data-semantic-content="10" data-semantic-parent="14">
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="9" data-semantic-parent="12">n</mi>
                    <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="10" data-semantic-parent="12" data-semantic-operator="relseq,=">=</mo>
                    <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="11" data-semantic-parent="12">0</mn>
                  </mrow>
                  <mrow>
                    <mo data-semantic-type="operator" data-semantic-role="unknown" data-semantic-id="13" data-semantic-parent="14">&#x221E;</mo>
                  </mrow>
                </munderover>
              </mrow>
              <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="40" data-semantic-children="30,39" data-semantic-parent="69">
                <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="30" data-semantic-children="22,28" data-semantic-content="29" data-semantic-parent="40">
                  <msup data-semantic-type="superscript" data-semantic-role="leftright" data-semantic-id="22" data-semantic-children="20,21" data-semantic-parent="30">
                    <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="20" data-semantic-children="19" data-semantic-content="15,18" data-semantic-parent="22">
                      <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="15" data-semantic-parent="20" data-semantic-operator="fenced">(</mo>
                      <mrow data-semantic-type="prefixop" data-semantic-role="negative" data-semantic-annotation="clearspeak:simple" data-semantic-id="19" data-semantic-children="17" data-semantic-content="16" data-semantic-parent="20">
                        <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="16" data-semantic-parent="19" data-semantic-operator="prefixop,-">-</mo>
                        <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="17" data-semantic-parent="19">1</mn>
                      </mrow>
                      <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="18" data-semantic-parent="20" data-semantic-operator="fenced">)</mo>
                    </mrow>
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="21" data-semantic-parent="22">n</mi>
                  </msup>
                  <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="29" data-semantic-parent="30" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                  <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="28" data-semantic-children="23,27" data-semantic-parent="30">
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="23" data-semantic-parent="28">x</mi>
                    <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:simple;clearspeak:unit" data-semantic-id="27" data-semantic-children="24,25" data-semantic-content="26" data-semantic-parent="28">
                      <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="24" data-semantic-parent="27">2</mn>
                      <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="26" data-semantic-parent="27" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="25" data-semantic-parent="27">n</mi>
                    </mrow>
                  </msup>
                </mrow>
                <mrow data-semantic-type="punctuated" data-semantic-role="endpunct" data-semantic-id="39" data-semantic-children="37,38" data-semantic-content="38" data-semantic-parent="40">
                  <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="37" data-semantic-children="36" data-semantic-content="31,34" data-semantic-parent="39">
                    <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="31" data-semantic-parent="37" data-semantic-operator="fenced">(</mo>
                    <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:simple;clearspeak:unit" data-semantic-id="36" data-semantic-children="32,33" data-semantic-content="35" data-semantic-parent="37">
                      <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="32" data-semantic-parent="36">2</mn>
                      <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="35" data-semantic-parent="36" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="33" data-semantic-parent="36">n</mi>
                    </mrow>
                    <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="34" data-semantic-parent="37" data-semantic-operator="fenced">)</mo>
                  </mrow>
                  <mo data-semantic-type="punctuation" data-semantic-role="unknown" data-semantic-id="38" data-semantic-parent="39" data-semantic-operator="punctuated">!</mo>
                </mrow>
              </mfrac>
            </mrow>
            <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="41" data-semantic-parent="74" data-semantic-operator="relseq,=">=</mo>
            <mrow data-semantic-type="infixop" data-semantic-role="subtraction" data-semantic-id="72" data-semantic-children="71,73" data-semantic-content="59" data-semantic-parent="74">
              <mrow data-semantic-type="infixop" data-semantic-role="addition" data-semantic-id="71" data-semantic-children="70,58" data-semantic-content="51" data-semantic-parent="72">
                <mrow data-semantic-type="infixop" data-semantic-role="subtraction" data-semantic-id="70" data-semantic-children="42,50" data-semantic-content="43" data-semantic-parent="71">
                  <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="42" data-semantic-parent="70">1</mn>
                  <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="43" data-semantic-parent="70" data-semantic-operator="infixop,-">-</mo>
                  <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="50" data-semantic-children="46,49" data-semantic-parent="70">
                    <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="46" data-semantic-children="44,45" data-semantic-parent="50">
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="44" data-semantic-parent="46">x</mi>
                      <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="45" data-semantic-parent="46">2</mn>
                    </msup>
                    <mrow data-semantic-type="punctuated" data-semantic-role="endpunct" data-semantic-id="49" data-semantic-children="47,48" data-semantic-content="48" data-semantic-parent="50">
                      <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="47" data-semantic-parent="49">2</mn>
                      <mo data-semantic-type="punctuation" data-semantic-role="unknown" data-semantic-id="48" data-semantic-parent="49" data-semantic-operator="punctuated">!</mo>
                    </mrow>
                  </mfrac>
                </mrow>
                <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="51" data-semantic-parent="71" data-semantic-operator="infixop,+">+</mo>
                <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="58" data-semantic-children="54,57" data-semantic-parent="71">
                  <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="54" data-semantic-children="52,53" data-semantic-parent="58">
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="52" data-semantic-parent="54">x</mi>
                    <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="53" data-semantic-parent="54">4</mn>
                  </msup>
                  <mrow data-semantic-type="punctuated" data-semantic-role="endpunct" data-semantic-id="57" data-semantic-children="55,56" data-semantic-content="56" data-semantic-parent="58">
                    <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="55" data-semantic-parent="57">4</mn>
                    <mo data-semantic-type="punctuation" data-semantic-role="unknown" data-semantic-id="56" data-semantic-parent="57" data-semantic-operator="punctuated">!</mo>
                  </mrow>
                </mfrac>
              </mrow>
              <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="59" data-semantic-parent="72" data-semantic-operator="infixop,-">-</mo>
              <mrow data-semantic-type="postfixop" data-semantic-role="multiop" data-semantic-id="73" data-semantic-children="66" data-semantic-content="67,68" data-semantic-parent="72">
                <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="66" data-semantic-children="62,65" data-semantic-parent="73">
                  <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="62" data-semantic-children="60,61" data-semantic-parent="66">
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="60" data-semantic-parent="62">x</mi>
                    <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="61" data-semantic-parent="62">6</mn>
                  </msup>
                  <mrow data-semantic-type="punctuated" data-semantic-role="endpunct" data-semantic-id="65" data-semantic-children="63,64" data-semantic-content="64" data-semantic-parent="66">
                    <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="63" data-semantic-parent="65">6</mn>
                    <mo data-semantic-type="punctuation" data-semantic-role="unknown" data-semantic-id="64" data-semantic-parent="65" data-semantic-operator="punctuated">!</mo>
                  </mrow>
                </mfrac>
                <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="67" data-semantic-parent="73" data-semantic-operator="postfixop,+ ...">+</mo>
                <mo data-semantic-type="operator" data-semantic-role="fullstop" data-semantic-id="68" data-semantic-parent="73" data-semantic-operator="postfixop,+ ...">...</mo>
              </mrow>
            </mrow>
          </mstyle>
        </math>`
        },
        {
          raw:"tan(x)={(x+x^3/3+(2x^5)/15+(17x^7)/315+... if x^2<1),(pi/2-1/x+1/(3x^3)-1/(5x^5)+....if x^2>1):}",
          math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
          <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="104" data-semantic-children="6,103" data-semantic-content="7" data-semantic-speech="tangent left parenthesis x right parenthesis equals StartLayout Enlarged left brace 1st Row  x plus StartFraction x cubed Over 3 EndFraction plus StartFraction 2 x Superscript 5 Baseline Over 15 EndFraction plus StartFraction 17 x Superscript 7 Baseline Over 315 EndFraction plus period period period if x squared less than 1 2nd Row  StartFraction pi Over 2 EndFraction minus StartFraction 1 Over x EndFraction plus StartFraction 1 Over 3 x cubed EndFraction minus StartFraction 1 Over 5 x Superscript 5 Baseline EndFraction plus period period period period if x squared greater than 1 EndLayout">
            <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="6" data-semantic-children="0,4" data-semantic-content="5,0" data-semantic-parent="104">
              <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="0" data-semantic-parent="6" data-semantic-operator="appl">tan</mi>
              <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="5" data-semantic-parent="6" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
              <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="4" data-semantic-children="2" data-semantic-content="1,3" data-semantic-parent="6">
                <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="1" data-semantic-parent="4" data-semantic-operator="fenced">(</mo>
                <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="4">x</mi>
                <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="3" data-semantic-parent="4" data-semantic-operator="fenced">)</mo>
              </mrow>
            </mrow>
            <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="7" data-semantic-parent="104" data-semantic-operator="relseq,=">=</mo>
            <mrow data-semantic-type="cases" data-semantic-role="binomial" data-semantic-id="103" data-semantic-children="53,102" data-semantic-content="8" data-semantic-parent="104">
              <mo data-semantic-type="punctuation" data-semantic-role="openfence" data-semantic-id="8" data-semantic-parent="103">{</mo>
              <mtable columnalign="left">
                <mtr data-semantic-type="line" data-semantic-role="binomial" data-semantic-id="53" data-semantic-children="51" data-semantic-parent="103">
                  <mtd>
                    <mrow data-semantic-type="relseq" data-semantic-role="inequality" data-semantic-id="51" data-semantic-children="47,46" data-semantic-content="45" data-semantic-parent="53">
                      <mrow data-semantic-type="infixop" data-semantic-role="addition" data-semantic-id="47" data-semantic-children="9,15,24,33,50" data-semantic-content="10,16,25,34" data-semantic-parent="51">
                        <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="9" data-semantic-parent="47">x</mi>
                        <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="10" data-semantic-parent="47" data-semantic-operator="infixop,+">+</mo>
                        <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="15" data-semantic-children="13,14" data-semantic-parent="47">
                          <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="13" data-semantic-children="11,12" data-semantic-parent="15">
                            <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="11" data-semantic-parent="13">x</mi>
                            <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="12" data-semantic-parent="13">3</mn>
                          </msup>
                          <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="14" data-semantic-parent="15">3</mn>
                        </mfrac>
                        <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="16" data-semantic-parent="47" data-semantic-operator="infixop,+">+</mo>
                        <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="24" data-semantic-children="22,23" data-semantic-parent="47">
                          <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="22" data-semantic-children="17,20" data-semantic-content="21" data-semantic-parent="24">
                            <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="17" data-semantic-parent="22">2</mn>
                            <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="21" data-semantic-parent="22" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                            <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="20" data-semantic-children="18,19" data-semantic-parent="22">
                              <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="18" data-semantic-parent="20">x</mi>
                              <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="19" data-semantic-parent="20">5</mn>
                            </msup>
                          </mrow>
                          <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="23" data-semantic-parent="24">15</mn>
                        </mfrac>
                        <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="25" data-semantic-parent="47" data-semantic-operator="infixop,+">+</mo>
                        <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="33" data-semantic-children="31,32" data-semantic-parent="47">
                          <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="31" data-semantic-children="26,29" data-semantic-content="30" data-semantic-parent="33">
                            <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="26" data-semantic-parent="31">17</mn>
                            <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="30" data-semantic-parent="31" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                            <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="29" data-semantic-children="27,28" data-semantic-parent="31">
                              <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="27" data-semantic-parent="29">x</mi>
                              <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="28" data-semantic-parent="29">7</mn>
                            </msup>
                          </mrow>
                          <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="32" data-semantic-parent="33">315</mn>
                        </mfrac>
                        <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="34" data-semantic-parent="47" data-semantic-operator="infixop,+">+</mo>
                        <mrow data-semantic-type="prefixop" data-semantic-role="unknown" data-semantic-id="50" data-semantic-children="49" data-semantic-content="35" data-semantic-parent="47">
                          <mo data-semantic-type="operator" data-semantic-role="fullstop" data-semantic-id="35" data-semantic-parent="50" data-semantic-operator="prefixop,...">...</mo>
                          <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="49" data-semantic-children="41,44" data-semantic-content="48" data-semantic-parent="50">
                            <mrow data-semantic-type="punctuated" data-semantic-role="text" data-semantic-id="41" data-semantic-children="36,37,38" data-semantic-parent="49" data-semantic-collapsed="(41 (c 39 40) 36 37 38)">
                              <mspace width="1ex" data-semantic-type="text" data-semantic-role="space" data-semantic-annotation="clearspeak:unit" data-semantic-id="36" data-semantic-parent="41"></mspace>
                              <mo data-semantic-type="operator" data-semantic-role="latinletter" data-semantic-id="37" data-semantic-parent="41">if</mo>
                              <mspace width="1ex" data-semantic-type="text" data-semantic-role="space" data-semantic-annotation="clearspeak:unit" data-semantic-id="38" data-semantic-parent="41"></mspace>
                            </mrow>
                            <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="48" data-semantic-parent="49" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                            <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="44" data-semantic-children="42,43" data-semantic-parent="49">
                              <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="42" data-semantic-parent="44">x</mi>
                              <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="43" data-semantic-parent="44">2</mn>
                            </msup>
                          </mrow>
                        </mrow>
                      </mrow>
                      <mo data-semantic-type="relation" data-semantic-role="inequality" data-semantic-id="45" data-semantic-parent="51" data-semantic-operator="relseq,&lt;">&lt;</mo>
                      <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="46" data-semantic-parent="51">1</mn>
                    </mrow>
                  </mtd>
                </mtr>
                <mtr data-semantic-type="line" data-semantic-role="binomial" data-semantic-id="102" data-semantic-children="100" data-semantic-parent="103">
                  <mtd>
                    <mrow data-semantic-type="punctuated" data-semantic-role="sequence" data-semantic-id="100" data-semantic-children="95,81,99" data-semantic-content="81" data-semantic-parent="102">
                      <mrow data-semantic-type="infixop" data-semantic-role="subtraction" data-semantic-id="95" data-semantic-children="94,96" data-semantic-content="70" data-semantic-parent="100">
                        <mrow data-semantic-type="infixop" data-semantic-role="addition" data-semantic-id="94" data-semantic-children="93,69" data-semantic-content="61" data-semantic-parent="95">
                          <mrow data-semantic-type="infixop" data-semantic-role="subtraction" data-semantic-id="93" data-semantic-children="56,60" data-semantic-content="57" data-semantic-parent="94">
                            <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="56" data-semantic-children="54,55" data-semantic-parent="93">
                              <mi data-semantic-type="identifier" data-semantic-role="greekletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="54" data-semantic-parent="56">&#x3C0;</mi>
                              <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="55" data-semantic-parent="56">2</mn>
                            </mfrac>
                            <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="57" data-semantic-parent="93" data-semantic-operator="infixop,-">-</mo>
                            <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="60" data-semantic-children="58,59" data-semantic-parent="93">
                              <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="58" data-semantic-parent="60">1</mn>
                              <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="59" data-semantic-parent="60">x</mi>
                            </mfrac>
                          </mrow>
                          <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="61" data-semantic-parent="94" data-semantic-operator="infixop,+">+</mo>
                          <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="69" data-semantic-children="62,68" data-semantic-parent="94">
                            <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="62" data-semantic-parent="69">1</mn>
                            <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="68" data-semantic-children="63,66" data-semantic-content="67" data-semantic-parent="69">
                              <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="63" data-semantic-parent="68">3</mn>
                              <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="67" data-semantic-parent="68" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                              <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="66" data-semantic-children="64,65" data-semantic-parent="68">
                                <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="64" data-semantic-parent="66">x</mi>
                                <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="65" data-semantic-parent="66">3</mn>
                              </msup>
                            </mrow>
                          </mfrac>
                        </mrow>
                        <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="70" data-semantic-parent="95" data-semantic-operator="infixop,-">-</mo>
                        <mrow data-semantic-type="postfixop" data-semantic-role="multiop" data-semantic-id="96" data-semantic-children="78" data-semantic-content="79,80" data-semantic-parent="95">
                          <mfrac data-semantic-type="fraction" data-semantic-role="division" data-semantic-id="78" data-semantic-children="71,77" data-semantic-parent="96">
                            <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="71" data-semantic-parent="78">1</mn>
                            <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="77" data-semantic-children="72,75" data-semantic-content="76" data-semantic-parent="78">
                              <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="72" data-semantic-parent="77">5</mn>
                              <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="76" data-semantic-parent="77" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                              <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="75" data-semantic-children="73,74" data-semantic-parent="77">
                                <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="73" data-semantic-parent="75">x</mi>
                                <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="74" data-semantic-parent="75">5</mn>
                              </msup>
                            </mrow>
                          </mfrac>
                          <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="79" data-semantic-parent="96" data-semantic-operator="postfixop,+ ...">+</mo>
                          <mo data-semantic-type="operator" data-semantic-role="fullstop" data-semantic-id="80" data-semantic-parent="96" data-semantic-operator="postfixop,+ ...">...</mo>
                        </mrow>
                      </mrow>
                      <mo data-semantic-type="punctuation" data-semantic-role="fullstop" data-semantic-id="81" data-semantic-parent="100" data-semantic-operator="punctuated">.</mo>
                      <mrow data-semantic-type="relseq" data-semantic-role="inequality" data-semantic-id="99" data-semantic-children="98,92" data-semantic-content="91" data-semantic-parent="100">
                        <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="98" data-semantic-children="87,90" data-semantic-content="97" data-semantic-parent="99">
                          <mrow data-semantic-type="punctuated" data-semantic-role="text" data-semantic-id="87" data-semantic-children="82,83,84" data-semantic-parent="98" data-semantic-collapsed="(87 (c 85 86) 82 83 84)">
                            <mspace width="1ex" data-semantic-type="text" data-semantic-role="space" data-semantic-annotation="clearspeak:unit" data-semantic-id="82" data-semantic-parent="87"></mspace>
                            <mo data-semantic-type="operator" data-semantic-role="latinletter" data-semantic-id="83" data-semantic-parent="87">if</mo>
                            <mspace width="1ex" data-semantic-type="text" data-semantic-role="space" data-semantic-annotation="clearspeak:unit" data-semantic-id="84" data-semantic-parent="87"></mspace>
                          </mrow>
                          <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="97" data-semantic-parent="98" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                          <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="90" data-semantic-children="88,89" data-semantic-parent="98">
                            <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="88" data-semantic-parent="90">x</mi>
                            <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="89" data-semantic-parent="90">2</mn>
                          </msup>
                        </mrow>
                        <mo data-semantic-type="relation" data-semantic-role="inequality" data-semantic-id="91" data-semantic-parent="99" data-semantic-operator="relseq,&gt;">&gt;</mo>
                        <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="92" data-semantic-parent="99">1</mn>
                      </mrow>
                    </mrow>
                  </mtd>
                </mtr>
              </mtable>
            </mrow>
          </mstyle>
        </math>`
        },
        {
          raw:"ln(1+x)=sum_(n=1)^(oo) (-1)^(n-1)x^n/n=x-x^2/2+x^3/3-x^4/4+....",
          math_ml:`<math xmlns="http://www.w3.org/1998/Math/MathML">
          <mtable columnalign="left" columnspacing="1em" rowspacing="4pt">
            <mtr>
              <mtd>
                <mi>ln</mi>
                <mo data-mjx-texclass="NONE">&#x2061;</mo>
                <mo stretchy="false">(</mo>
                <mn>1</mn>
                <mo>+</mo>
                <mi>x</mi>
                <mo stretchy="false">)</mo>
                <mo>=</mo>
                <munderover>
                  <mo data-mjx-texclass="OP">&#x2211;</mo>
                  <mrow data-mjx-texclass="ORD">
                    <mi>n</mi>
                    <mo>=</mo>
                    <mn>1</mn>
                  </mrow>
                  <mrow data-mjx-texclass="ORD">
                    <mi mathvariant="normal">&#x221E;</mi>
                  </mrow>
                </munderover>
                <mo stretchy="false">(</mo>
                <mo>&#x2212;</mo>
                <mn>1</mn>
                <msup>
                  <mo stretchy="false">)</mo>
                  <mrow data-mjx-texclass="ORD">
                    <mi>n</mi>
                    <mo>+</mo>
                    <mn>1</mn>
                  </mrow>
                </msup>
                <mfrac>
                  <msup>
                    <mi>x</mi>
                    <mrow data-mjx-texclass="ORD">
                      <mi>n</mi>
                    </mrow>
                  </msup>
                  <mi>n</mi>
                </mfrac>
                <mo>=</mo>
                <mi>x</mi>
                <mo>&#x2212;</mo>
                <mfrac>
                  <msup>
                    <mi>x</mi>
                    <mrow data-mjx-texclass="ORD">
                      <mn>2</mn>
                    </mrow>
                  </msup>
                  <mn>2</mn>
                </mfrac>
                <mo>+</mo>
                <mfrac>
                  <msup>
                    <mi>x</mi>
                    <mrow data-mjx-texclass="ORD">
                      <mn>3</mn>
                    </mrow>
                  </msup>
                  <mn>3</mn>
                </mfrac>
                <mo>&#x2212;</mo>
                <mo>&#x22EF;</mo>
              </mtd>
            </mtr>
          </mtable>
        </math>`
        }
      ]
    },
    {
      category:"Coordinate Systems",
      formula:[
        {
          raw:"in Polar Coordinate system , x=rcos(theta),y=rsin(theta),r=sqrt(x^2+y^2)",
          math_ml:`in Polar Coordinate system ,<math xmlns="http://www.w3.org/1998/Math/MathML">
          <mstyle displaystyle="true" data-semantic-type="punctuated" data-semantic-role="sequence" data-semantic-id="40" data-semantic-children="35,10,38,21,39" data-semantic-content="10,21" data-semantic-speech="x equals r cosine left parenthesis theta right parenthesis comma y equals r sine left parenthesis theta right parenthesis comma r equals StartRoot x squared plus y squared EndRoot">
            <mrow data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="35" data-semantic-children="0,34" data-semantic-content="1" data-semantic-parent="40">
              <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="0" data-semantic-parent="35">x</mi>
              <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="1" data-semantic-parent="35" data-semantic-operator="relseq,=">=</mo>
              <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="34" data-semantic-children="2,9" data-semantic-content="33" data-semantic-parent="35">
                <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="34">r</mi>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="33" data-semantic-parent="34" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="9" data-semantic-children="3,7" data-semantic-content="8,3" data-semantic-parent="34">
                  <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="3" data-semantic-parent="9" data-semantic-operator="appl">cos</mi>
                  <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="8" data-semantic-parent="9" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                  <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="7" data-semantic-children="5" data-semantic-content="4,6" data-semantic-parent="9">
                    <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="4" data-semantic-parent="7" data-semantic-operator="fenced">(</mo>
                    <mi data-semantic-type="identifier" data-semantic-role="greekletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="5" data-semantic-parent="7">&#x3B8;</mi>
                    <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="6" data-semantic-parent="7" data-semantic-operator="fenced">)</mo>
                  </mrow>
                </mrow>
              </mrow>
            </mrow>
            <mo data-semantic-type="punctuation" data-semantic-role="comma" data-semantic-id="10" data-semantic-parent="40" data-semantic-operator="punctuated">,</mo>
            <mrow data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="38" data-semantic-children="11,37" data-semantic-content="12" data-semantic-parent="40">
              <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="11" data-semantic-parent="38">y</mi>
              <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="12" data-semantic-parent="38" data-semantic-operator="relseq,=">=</mo>
              <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="37" data-semantic-children="13,20" data-semantic-content="36" data-semantic-parent="38">
                <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="13" data-semantic-parent="37">r</mi>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="36" data-semantic-parent="37" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="20" data-semantic-children="14,18" data-semantic-content="19,14" data-semantic-parent="37">
                  <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="14" data-semantic-parent="20" data-semantic-operator="appl">sin</mi>
                  <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="19" data-semantic-parent="20" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                  <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="18" data-semantic-children="16" data-semantic-content="15,17" data-semantic-parent="20">
                    <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="15" data-semantic-parent="18" data-semantic-operator="fenced">(</mo>
                    <mi data-semantic-type="identifier" data-semantic-role="greekletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="16" data-semantic-parent="18">&#x3B8;</mi>
                    <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="17" data-semantic-parent="18" data-semantic-operator="fenced">)</mo>
                  </mrow>
                </mrow>
              </mrow>
            </mrow>
            <mo data-semantic-type="punctuation" data-semantic-role="comma" data-semantic-id="21" data-semantic-parent="40" data-semantic-operator="punctuated">,</mo>
            <mrow data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="39" data-semantic-children="22,32" data-semantic-content="23" data-semantic-parent="40">
              <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="22" data-semantic-parent="39">r</mi>
              <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="23" data-semantic-parent="39" data-semantic-operator="relseq,=">=</mo>
              <msqrt data-semantic-type="sqrt" data-semantic-role="unknown" data-semantic-id="32" data-semantic-children="31" data-semantic-parent="39">
                <mrow data-semantic-type="infixop" data-semantic-role="addition" data-semantic-id="31" data-semantic-children="26,30" data-semantic-content="27" data-semantic-parent="32">
                  <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="26" data-semantic-children="24,25" data-semantic-parent="31">
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="24" data-semantic-parent="26">x</mi>
                    <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="25" data-semantic-parent="26">2</mn>
                  </msup>
                  <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="27" data-semantic-parent="31" data-semantic-operator="infixop,+">+</mo>
                  <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="30" data-semantic-children="28,29" data-semantic-parent="31">
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="28" data-semantic-parent="30">y</mi>
                    <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="29" data-semantic-parent="30">2</mn>
                  </msup>
                </mrow>
              </msqrt>
            </mrow>
          </mstyle>
        </math>`
        },
        {
          raw:"in Cylindrical System,x=rcos(theta),y=rsin(theta),r=sqrt(x^2+y^2),dA=rdrd( theta),z=z,dV=rdzdrd theta",
          math_ml:`in Cylindrical System, <math xmlns="http://www.w3.org/1998/Math/MathML">
          <mstyle displaystyle="true" data-semantic-type="punctuated" data-semantic-role="sequence" data-semantic-id="84" data-semantic-children="61,10,64,21,65,33,73,42,74,46,83" data-semantic-content="10,21,33,42,46" data-semantic-speech="x equals r cosine left parenthesis theta right parenthesis comma y equals r sine left parenthesis theta right parenthesis comma r equals StartRoot x squared plus y squared EndRoot comma d upper A equals r d r d theta comma z equals z comma d upper V equals r d z d r d theta">
            <mrow data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="61" data-semantic-children="0,60" data-semantic-content="1" data-semantic-parent="84">
              <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="0" data-semantic-parent="61">x</mi>
              <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="1" data-semantic-parent="61" data-semantic-operator="relseq,=">=</mo>
              <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="60" data-semantic-children="2,9" data-semantic-content="59" data-semantic-parent="61">
                <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="60">r</mi>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="59" data-semantic-parent="60" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="9" data-semantic-children="3,7" data-semantic-content="8,3" data-semantic-parent="60">
                  <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="3" data-semantic-parent="9" data-semantic-operator="appl">cos</mi>
                  <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="8" data-semantic-parent="9" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                  <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="7" data-semantic-children="5" data-semantic-content="4,6" data-semantic-parent="9">
                    <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="4" data-semantic-parent="7" data-semantic-operator="fenced">(</mo>
                    <mi data-semantic-type="identifier" data-semantic-role="greekletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="5" data-semantic-parent="7">&#x3B8;</mi>
                    <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="6" data-semantic-parent="7" data-semantic-operator="fenced">)</mo>
                  </mrow>
                </mrow>
              </mrow>
            </mrow>
            <mo data-semantic-type="punctuation" data-semantic-role="comma" data-semantic-id="10" data-semantic-parent="84" data-semantic-operator="punctuated">,</mo>
            <mrow data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="64" data-semantic-children="11,63" data-semantic-content="12" data-semantic-parent="84">
              <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="11" data-semantic-parent="64">y</mi>
              <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="12" data-semantic-parent="64" data-semantic-operator="relseq,=">=</mo>
              <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="63" data-semantic-children="13,20" data-semantic-content="62" data-semantic-parent="64">
                <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="13" data-semantic-parent="63">r</mi>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="62" data-semantic-parent="63" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="20" data-semantic-children="14,18" data-semantic-content="19,14" data-semantic-parent="63">
                  <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="14" data-semantic-parent="20" data-semantic-operator="appl">sin</mi>
                  <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="19" data-semantic-parent="20" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                  <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="18" data-semantic-children="16" data-semantic-content="15,17" data-semantic-parent="20">
                    <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="15" data-semantic-parent="18" data-semantic-operator="fenced">(</mo>
                    <mi data-semantic-type="identifier" data-semantic-role="greekletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="16" data-semantic-parent="18">&#x3B8;</mi>
                    <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="17" data-semantic-parent="18" data-semantic-operator="fenced">)</mo>
                  </mrow>
                </mrow>
              </mrow>
            </mrow>
            <mo data-semantic-type="punctuation" data-semantic-role="comma" data-semantic-id="21" data-semantic-parent="84" data-semantic-operator="punctuated">,</mo>
            <mrow data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="65" data-semantic-children="22,32" data-semantic-content="23" data-semantic-parent="84">
              <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="22" data-semantic-parent="65">r</mi>
              <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="23" data-semantic-parent="65" data-semantic-operator="relseq,=">=</mo>
              <msqrt data-semantic-type="sqrt" data-semantic-role="unknown" data-semantic-id="32" data-semantic-children="31" data-semantic-parent="65">
                <mrow data-semantic-type="infixop" data-semantic-role="addition" data-semantic-id="31" data-semantic-children="26,30" data-semantic-content="27" data-semantic-parent="32">
                  <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="26" data-semantic-children="24,25" data-semantic-parent="31">
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="24" data-semantic-parent="26">x</mi>
                    <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="25" data-semantic-parent="26">2</mn>
                  </msup>
                  <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="27" data-semantic-parent="31" data-semantic-operator="infixop,+">+</mo>
                  <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="30" data-semantic-children="28,29" data-semantic-parent="31">
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="28" data-semantic-parent="30">y</mi>
                    <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="29" data-semantic-parent="30">2</mn>
                  </msup>
                </mrow>
              </msqrt>
            </mrow>
            <mo data-semantic-type="punctuation" data-semantic-role="comma" data-semantic-id="33" data-semantic-parent="84" data-semantic-operator="punctuated">,</mo>
            <mrow data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="73" data-semantic-children="67,72" data-semantic-content="36" data-semantic-parent="84">
              <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:simple;clearspeak:unit" data-semantic-id="67" data-semantic-children="34,35" data-semantic-content="66" data-semantic-parent="73">
                <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="34" data-semantic-parent="67">d</mi>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="66" data-semantic-parent="67" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="35" data-semantic-parent="67">A</mi>
              </mrow>
              <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="36" data-semantic-parent="73" data-semantic-operator="relseq,=">=</mo>
              <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="72" data-semantic-children="37,38,39,40,41" data-semantic-content="68,69,70,71" data-semantic-parent="73">
                <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="37" data-semantic-parent="72">r</mi>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="68" data-semantic-parent="72" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="38" data-semantic-parent="72">d</mi>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="69" data-semantic-parent="72" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="39" data-semantic-parent="72">r</mi>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="70" data-semantic-parent="72" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="40" data-semantic-parent="72">d</mi>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="71" data-semantic-parent="72" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mi data-semantic-type="identifier" data-semantic-role="greekletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="41" data-semantic-parent="72">&#x3B8;</mi>
              </mrow>
            </mrow>
            <mo data-semantic-type="punctuation" data-semantic-role="comma" data-semantic-id="42" data-semantic-parent="84" data-semantic-operator="punctuated">,</mo>
            <mrow data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="74" data-semantic-children="43,45" data-semantic-content="44" data-semantic-parent="84">
              <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="43" data-semantic-parent="74">z</mi>
              <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="44" data-semantic-parent="74" data-semantic-operator="relseq,=">=</mo>
              <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="45" data-semantic-parent="74">z</mi>
            </mrow>
            <mo data-semantic-type="punctuation" data-semantic-role="comma" data-semantic-id="46" data-semantic-parent="84" data-semantic-operator="punctuated">,</mo>
            <mrow data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="83" data-semantic-children="76,82" data-semantic-content="49" data-semantic-parent="84">
              <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:simple;clearspeak:unit" data-semantic-id="76" data-semantic-children="47,48" data-semantic-content="75" data-semantic-parent="83">
                <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="47" data-semantic-parent="76">d</mi>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="75" data-semantic-parent="76" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="48" data-semantic-parent="76">V</mi>
              </mrow>
              <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="49" data-semantic-parent="83" data-semantic-operator="relseq,=">=</mo>
              <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="82" data-semantic-children="50,51,52,55,56,57,58" data-semantic-content="77,53,78,79,80,81" data-semantic-parent="83">
                <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="50" data-semantic-parent="82">r</mi>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="77" data-semantic-parent="82" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mrow>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="51" data-semantic-parent="82">d</mi>
                  <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="53" data-semantic-parent="82" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="52" data-semantic-parent="82">z</mi>
                </mrow>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="78" data-semantic-parent="82" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="55" data-semantic-parent="82">d</mi>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="79" data-semantic-parent="82" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="56" data-semantic-parent="82">r</mi>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="80" data-semantic-parent="82" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="57" data-semantic-parent="82">d</mi>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="81" data-semantic-parent="82" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mi data-semantic-type="identifier" data-semantic-role="greekletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="58" data-semantic-parent="82">&#x3B8;</mi>
              </mrow>
            </mrow>
          </mstyle>
        </math>`
        },
        {
          raw:"in Spherical System , x=rho sinphi cos theta,y=rho sinphi sin theta,z=rho cosphi,rho=sqrt(x^2+y^2+z^2),dV=rho^2 sinphi drho dphi d theta ",
          math_ml:`in Spherical System,<math xmlns="http://www.w3.org/1998/Math/MathML">
          <mstyle displaystyle="true" data-semantic-type="punctuated" data-semantic-role="sequence" data-semantic-id="87" data-semantic-children="67,11,71,23,74,31,75,47,86" data-semantic-content="11,23,31,47" data-semantic-speech="x equals rho sine phi cosine theta comma y equals rho sine phi sine theta comma z equals rho cosine phi comma rho equals StartRoot x squared plus y squared plus z squared EndRoot comma d upper V equals rho squared sine phi d rho d phi d theta">
            <mrow data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="67" data-semantic-children="0,66" data-semantic-content="1" data-semantic-parent="87">
              <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="0" data-semantic-parent="67">x</mi>
              <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="1" data-semantic-parent="67" data-semantic-operator="relseq,=">=</mo>
              <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="66" data-semantic-children="2,6,10" data-semantic-content="64,65" data-semantic-parent="67">
                <mi data-semantic-type="identifier" data-semantic-role="greekletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="66">&#x3C1;</mi>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="64" data-semantic-parent="66" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="6" data-semantic-children="3,4" data-semantic-content="5,3" data-semantic-parent="66">
                  <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="3" data-semantic-parent="6" data-semantic-operator="appl">sin</mi>
                  <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="5" data-semantic-parent="6" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                  <mi data-semantic-type="identifier" data-semantic-role="greekletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="4" data-semantic-parent="6">&#x3D5;</mi>
                </mrow>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="65" data-semantic-parent="66" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="10" data-semantic-children="7,8" data-semantic-content="9,7" data-semantic-parent="66">
                  <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="7" data-semantic-parent="10" data-semantic-operator="appl">cos</mi>
                  <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="9" data-semantic-parent="10" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                  <mi data-semantic-type="identifier" data-semantic-role="greekletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="8" data-semantic-parent="10">&#x3B8;</mi>
                </mrow>
              </mrow>
            </mrow>
            <mo data-semantic-type="punctuation" data-semantic-role="comma" data-semantic-id="11" data-semantic-parent="87" data-semantic-operator="punctuated">,</mo>
            <mrow data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="71" data-semantic-children="12,70" data-semantic-content="13" data-semantic-parent="87">
              <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="12" data-semantic-parent="71">y</mi>
              <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="13" data-semantic-parent="71" data-semantic-operator="relseq,=">=</mo>
              <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="70" data-semantic-children="14,18,22" data-semantic-content="68,69" data-semantic-parent="71">
                <mi data-semantic-type="identifier" data-semantic-role="greekletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="14" data-semantic-parent="70">&#x3C1;</mi>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="68" data-semantic-parent="70" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="18" data-semantic-children="15,16" data-semantic-content="17,15" data-semantic-parent="70">
                  <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="15" data-semantic-parent="18" data-semantic-operator="appl">sin</mi>
                  <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="17" data-semantic-parent="18" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                  <mi data-semantic-type="identifier" data-semantic-role="greekletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="16" data-semantic-parent="18">&#x3D5;</mi>
                </mrow>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="69" data-semantic-parent="70" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="22" data-semantic-children="19,20" data-semantic-content="21,19" data-semantic-parent="70">
                  <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="19" data-semantic-parent="22" data-semantic-operator="appl">sin</mi>
                  <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="21" data-semantic-parent="22" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                  <mi data-semantic-type="identifier" data-semantic-role="greekletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="20" data-semantic-parent="22">&#x3B8;</mi>
                </mrow>
              </mrow>
            </mrow>
            <mo data-semantic-type="punctuation" data-semantic-role="comma" data-semantic-id="23" data-semantic-parent="87" data-semantic-operator="punctuated">,</mo>
            <mrow data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="74" data-semantic-children="24,73" data-semantic-content="25" data-semantic-parent="87">
              <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="24" data-semantic-parent="74">z</mi>
              <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="25" data-semantic-parent="74" data-semantic-operator="relseq,=">=</mo>
              <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="73" data-semantic-children="26,30" data-semantic-content="72" data-semantic-parent="74">
                <mi data-semantic-type="identifier" data-semantic-role="greekletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="26" data-semantic-parent="73">&#x3C1;</mi>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="72" data-semantic-parent="73" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="30" data-semantic-children="27,28" data-semantic-content="29,27" data-semantic-parent="73">
                  <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="27" data-semantic-parent="30" data-semantic-operator="appl">cos</mi>
                  <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="29" data-semantic-parent="30" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                  <mi data-semantic-type="identifier" data-semantic-role="greekletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="28" data-semantic-parent="30">&#x3D5;</mi>
                </mrow>
              </mrow>
            </mrow>
            <mo data-semantic-type="punctuation" data-semantic-role="comma" data-semantic-id="31" data-semantic-parent="87" data-semantic-operator="punctuated">,</mo>
            <mrow data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="75" data-semantic-children="32,46" data-semantic-content="33" data-semantic-parent="87">
              <mi data-semantic-type="identifier" data-semantic-role="greekletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="32" data-semantic-parent="75">&#x3C1;</mi>
              <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="33" data-semantic-parent="75" data-semantic-operator="relseq,=">=</mo>
              <msqrt data-semantic-type="sqrt" data-semantic-role="unknown" data-semantic-id="46" data-semantic-children="45" data-semantic-parent="75">
                <mrow data-semantic-type="infixop" data-semantic-role="addition" data-semantic-id="45" data-semantic-children="36,40,44" data-semantic-content="37,41" data-semantic-parent="46">
                  <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="36" data-semantic-children="34,35" data-semantic-parent="45">
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="34" data-semantic-parent="36">x</mi>
                    <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="35" data-semantic-parent="36">2</mn>
                  </msup>
                  <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="37" data-semantic-parent="45" data-semantic-operator="infixop,+">+</mo>
                  <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="40" data-semantic-children="38,39" data-semantic-parent="45">
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="38" data-semantic-parent="40">y</mi>
                    <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="39" data-semantic-parent="40">2</mn>
                  </msup>
                  <mo data-semantic-type="operator" data-semantic-role="addition" data-semantic-id="41" data-semantic-parent="45" data-semantic-operator="infixop,+">+</mo>
                  <msup data-semantic-type="superscript" data-semantic-role="latinletter" data-semantic-id="44" data-semantic-children="42,43" data-semantic-parent="45">
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="42" data-semantic-parent="44">z</mi>
                    <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="43" data-semantic-parent="44">2</mn>
                  </msup>
                </mrow>
              </msqrt>
            </mrow>
            <mo data-semantic-type="punctuation" data-semantic-role="comma" data-semantic-id="47" data-semantic-parent="87" data-semantic-operator="punctuated">,</mo>
            <mrow data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="86" data-semantic-children="77,85" data-semantic-content="50" data-semantic-parent="87">
              <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:simple;clearspeak:unit" data-semantic-id="77" data-semantic-children="48,49" data-semantic-content="76" data-semantic-parent="86">
                <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="48" data-semantic-parent="77">d</mi>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="76" data-semantic-parent="77" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="49" data-semantic-parent="77">V</mi>
              </mrow>
              <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="50" data-semantic-parent="86" data-semantic-operator="relseq,=">=</mo>
              <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="85" data-semantic-children="53,57,58,59,60,61,62,63" data-semantic-content="78,79,80,81,82,83,84" data-semantic-parent="86">
                <msup data-semantic-type="superscript" data-semantic-role="greekletter" data-semantic-id="53" data-semantic-children="51,52" data-semantic-parent="85">
                  <mi data-semantic-type="identifier" data-semantic-role="greekletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="51" data-semantic-parent="53">&#x3C1;</mi>
                  <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="52" data-semantic-parent="53">2</mn>
                </msup>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="78" data-semantic-parent="85" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mrow data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-annotation="clearspeak:simple" data-semantic-id="57" data-semantic-children="54,55" data-semantic-content="56,54" data-semantic-parent="85">
                  <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="54" data-semantic-parent="57" data-semantic-operator="appl">sin</mi>
                  <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="56" data-semantic-parent="57" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                  <mi data-semantic-type="identifier" data-semantic-role="greekletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="55" data-semantic-parent="57">&#x3D5;</mi>
                </mrow>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="79" data-semantic-parent="85" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="58" data-semantic-parent="85">d</mi>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="80" data-semantic-parent="85" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mi data-semantic-type="identifier" data-semantic-role="greekletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="59" data-semantic-parent="85">&#x3C1;</mi>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="81" data-semantic-parent="85" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="60" data-semantic-parent="85">d</mi>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="82" data-semantic-parent="85" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mi data-semantic-type="identifier" data-semantic-role="greekletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="61" data-semantic-parent="85">&#x3D5;</mi>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="83" data-semantic-parent="85" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="62" data-semantic-parent="85">d</mi>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="84" data-semantic-parent="85" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mi data-semantic-type="identifier" data-semantic-role="greekletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="63" data-semantic-parent="85">&#x3B8;</mi>
              </mrow>
            </mrow>
          </mstyle>
        </math>`
        }
      ]
    },
    {
      category:"Convergence and Divergence",
      formula:[
        {
          raw:"In altering series test , if series is of type sum (-1)^n b_n and lim_(ntooo)b_n=0 and {b_n} is decreasing sequence then the series converges by altering series ",
          math_ml:`In altering series test , if series is of type <math xmlns="http://www.w3.org/1998/Math/MathML">
          <mstyle displaystyle="true" data-semantic-type="relseq" data-semantic-role="equality" data-semantic-id="51" data-semantic-children="47,50" data-semantic-content="27" data-semantic-speech="sigma summation left parenthesis negative 1 right parenthesis Superscript n Baseline b Subscript n Baseline and limit Underscript n right arrow infinity Endscripts b Subscript n Baseline equals 0 and StartSet b Subscript n Baseline EndSet">
            <mrow data-semantic-type="bigop" data-semantic-role="sum" data-semantic-id="47" data-semantic-children="0,46" data-semantic-content="0" data-semantic-parent="51">
              <mo data-semantic-type="largeop" data-semantic-role="sum" data-semantic-id="0" data-semantic-parent="47" data-semantic-operator="bigop">&#x2211;</mo>
              <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="46" data-semantic-children="8,11,17,42" data-semantic-content="43,44,45" data-semantic-parent="47">
                <msup data-semantic-type="superscript" data-semantic-role="leftright" data-semantic-id="8" data-semantic-children="6,7" data-semantic-parent="46">
                  <mrow data-semantic-type="fenced" data-semantic-role="leftright" data-semantic-id="6" data-semantic-children="5" data-semantic-content="1,4" data-semantic-parent="8">
                    <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="1" data-semantic-parent="6" data-semantic-operator="fenced">(</mo>
                    <mrow data-semantic-type="prefixop" data-semantic-role="negative" data-semantic-annotation="clearspeak:simple" data-semantic-id="5" data-semantic-children="3" data-semantic-content="2" data-semantic-parent="6">
                      <mo data-semantic-type="operator" data-semantic-role="subtraction" data-semantic-id="2" data-semantic-parent="5" data-semantic-operator="prefixop,-">-</mo>
                      <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="3" data-semantic-parent="5">1</mn>
                    </mrow>
                    <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="4" data-semantic-parent="6" data-semantic-operator="fenced">)</mo>
                  </mrow>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="7" data-semantic-parent="8">n</mi>
                </msup>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="43" data-semantic-parent="46" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <msub data-semantic-type="subscript" data-semantic-role="latinletter" data-semantic-id="11" data-semantic-children="9,10" data-semantic-parent="46">
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="9" data-semantic-parent="11">b</mi>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="10" data-semantic-parent="11">n</mi>
                </msub>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="44" data-semantic-parent="46" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mrow data-semantic-type="punctuated" data-semantic-role="text" data-semantic-id="17" data-semantic-children="12,13,14" data-semantic-parent="46" data-semantic-collapsed="(17 (c 15 16) 12 13 14)">
                  <mspace width="1ex" data-semantic-type="text" data-semantic-role="space" data-semantic-annotation="clearspeak:unit" data-semantic-id="12" data-semantic-parent="17"></mspace>
                  <mtext data-semantic-type="text" data-semantic-role="unknown" data-semantic-font="normal" data-semantic-annotation="clearspeak:unit" data-semantic-id="13" data-semantic-parent="17">and</mtext>
                  <mspace width="1ex" data-semantic-type="text" data-semantic-role="space" data-semantic-annotation="clearspeak:unit" data-semantic-id="14" data-semantic-parent="17"></mspace>
                </mrow>
                <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="45" data-semantic-parent="46" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
                <mrow data-semantic-type="appl" data-semantic-role="limit function" data-semantic-id="42" data-semantic-children="23,26" data-semantic-content="41,18" data-semantic-parent="46">
                  <munder data-semantic-type="limlower" data-semantic-role="limit function" data-semantic-id="23" data-semantic-children="18,22" data-semantic-parent="42">
                    <mo data-semantic-type="function" data-semantic-role="limit function" data-semantic-id="18" data-semantic-parent="23" data-semantic-operator="appl">lim</mo>
                    <mrow data-semantic-type="relseq" data-semantic-role="arrow" data-semantic-id="22" data-semantic-children="19,21" data-semantic-content="20" data-semantic-parent="23">
                      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="19" data-semantic-parent="22">n</mi>
                      <mo data-semantic-type="relation" data-semantic-role="arrow" data-semantic-id="20" data-semantic-parent="22" data-semantic-operator="relseq,&#x2192;">&#x2192;</mo>
                      <mo data-semantic-type="operator" data-semantic-role="unknown" data-semantic-id="21" data-semantic-parent="22">&#x221E;</mo>
                    </mrow>
                  </munder>
                  <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="41" data-semantic-parent="42" data-semantic-added="true" data-semantic-operator="appl">&#x2061;</mo>
                  <msub data-semantic-type="subscript" data-semantic-role="latinletter" data-semantic-id="26" data-semantic-children="24,25" data-semantic-parent="42">
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="24" data-semantic-parent="26">b</mi>
                    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="25" data-semantic-parent="26">n</mi>
                  </msub>
                </mrow>
              </mrow>
            </mrow>
            <mo data-semantic-type="relation" data-semantic-role="equality" data-semantic-id="27" data-semantic-parent="51" data-semantic-operator="relseq,=">=</mo>
            <mrow data-semantic-type="infixop" data-semantic-role="implicit" data-semantic-annotation="clearspeak:unit" data-semantic-id="50" data-semantic-children="28,34,40" data-semantic-content="48,49" data-semantic-parent="51">
              <mn data-semantic-type="number" data-semantic-role="integer" data-semantic-font="normal" data-semantic-annotation="clearspeak:simple" data-semantic-id="28" data-semantic-parent="50">0</mn>
              <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="48" data-semantic-parent="50" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
              <mrow data-semantic-type="punctuated" data-semantic-role="text" data-semantic-id="34" data-semantic-children="29,30,31" data-semantic-parent="50" data-semantic-collapsed="(34 (c 32 33) 29 30 31)">
                <mspace width="1ex" data-semantic-type="text" data-semantic-role="space" data-semantic-annotation="clearspeak:unit" data-semantic-id="29" data-semantic-parent="34"></mspace>
                <mtext data-semantic-type="text" data-semantic-role="unknown" data-semantic-font="normal" data-semantic-annotation="clearspeak:unit" data-semantic-id="30" data-semantic-parent="34">and</mtext>
                <mspace width="1ex" data-semantic-type="text" data-semantic-role="space" data-semantic-annotation="clearspeak:unit" data-semantic-id="31" data-semantic-parent="34"></mspace>
              </mrow>
              <mo data-semantic-type="operator" data-semantic-role="multiplication" data-semantic-id="49" data-semantic-parent="50" data-semantic-added="true" data-semantic-operator="infixop,&#x2062;">&#x2062;</mo>
              <mrow data-semantic-type="fenced" data-semantic-role="set singleton" data-semantic-id="40" data-semantic-children="38" data-semantic-content="35,39" data-semantic-parent="50">
                <mo data-semantic-type="fence" data-semantic-role="open" data-semantic-id="35" data-semantic-parent="40" data-semantic-operator="fenced">{</mo>
                <msub data-semantic-type="subscript" data-semantic-role="latinletter" data-semantic-id="38" data-semantic-children="36,37" data-semantic-parent="40">
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="36" data-semantic-parent="38">b</mi>
                  <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="37" data-semantic-parent="38">n</mi>
                </msub>
                <mo data-semantic-type="fence" data-semantic-role="close" data-semantic-id="39" data-semantic-parent="40" data-semantic-operator="fenced">}</mo>
              </mrow>
            </mrow>
          </mstyle>
        </math> is decreasing sequence then the series converges by altering series `
        }
      ]

    }
    
]
