import React from 'react';
import Styleguide from '../styleguide';

let exampleCode = "body { font:0.8125em/1.618 Arial, sans-serif;\nbackground-color:#fff;\ncolor:#111;\n}"

export default React.createClass({

  displayName: "NativePage",

  render() {
    return (
      <Styleguide title="Native Elements">
        <h1>Level 01 Heading</h1>
        <h2>Level 02 Heading</h2>
        <p>Lorem ipsum <em>emphasised text</em> dolor sit amet, <strong>strong text</strong>
        consectetur adipisicing elit, <abbr title="">abbreviated text</abbr> sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut
        <q>quoted text</q> enim ad minim veniam, quis nostrud exercitation <a href="http://www.tlswebsolutions.com/">link text</a>
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
        <ins>inserted text</ins> irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat <code>code text</code> cupidatat
        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        <p>
        Suspendisse rhoncus, est ac sollicitudin viverra, leo orci sagittis massa, sed condimentum <acronym title="">acronym text</acronym> est tortor a lectus. Curabitur porta feugiat ullamcorper. Integer lacinia mi id odio faucibus eget tincidunt nisl iaculis. Nam adipiscing hendrerit turpis, et porttitor felis sollicitudin et. Donec dictum massa ac neque accumsan tempor. Cras aliquam, ipsum sit amet laoreet hendrerit, purus <del>deleted text</del> sapien convallis dui, et porta leo ipsum ac nunc. Nullam ornare porta dui ac semper. Cras aliquam laoreet hendrerit. Quisque vulputate dolor eget mi porta vel porta nisl pretium. Vivamus non leo magna, quis imperdiet risus. Morbi tempor risus placerat tellus imperdiet fringilla.
        </p>

        <blockquote>
        <p>I am not one who was born in the possession of knowledge; I am one who is fond of antiquity, and earnest in seeking it there.</p>
        </blockquote>

        <p><cite><a href="http://www.tlswebsolutions.com/">Confucius, The Confucian Analects</a></cite>,  (551 BC - 479 BC)</p>

        <h3>Level 03 Heading</h3>

        <p>Extended paragraph. <a href="">Lorem ipsum</a> dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        <ol>
        <li>Unus</li>
        <li>Duo</li>
        <li>Tres</li>
        <li>Quattuor</li>
        </ol>

        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
        anim id est laborum.</p>

        <h3>Header 3</h3>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.</p>

        <h4>Unordered lists</h4>
          <ul>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipisicing elit</li>
            <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
            <li>Ut enim ad minim veniam</li>
          </ul>
        <p>Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.</p>

        <pre><code>{exampleCode}</code></pre>

        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
        anim id est laborum.</p>

        <h4>Header 4</h4>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.</p>

        <dl>
        <dt>Definition list</dt>
        <dd>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.</dd>
        <dt>Lorem ipsum dolor sit amet</dt>
        <dd>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.</dd>

        </dl>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.</p>
        <h4>Ordered list</h4>
        <ol>
                    <li>List item</li>
                    <li>List item</li>
                    <li>List item
                      <ol>
                        <li>List item level 2</li>
                        <li>List item level 2
                          <ol>
                            <li>List item level 3</li>
                            <li>List item level 3</li>
                          </ol>
                        </li>
                      </ol>
                    </li>
                  </ol>
                  <h4>Unordered list</h4>
                  <ul>
                    <li>List item 01</li>
                    <li>List item 02</li>
                    <li>List item 03
                      <ul>
                        <li>List item level 2</li>
                        <li>List item level 2
                          <ul>
                            <li>List item level 3</li>
                            <li>List item level 3</li>
                          </ul>
                        </li>

                      </ul>
                    </li>
                  </ul>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.</p>


           <h4>Tables</h4>
          <table summary="Jimi Hendrix albums">
          <caption>Jimi Hendrix - albums</caption>
          <thead>
            <tr>
            <th>Album</th>
            <th>Year</th>
            <th>Price</th>
            </tr>
          </thead>
              <tfoot>
            <tr>
            <td>Album</td>
            <td>Year</td>
            <td>Price</td>
            </tr>
          </tfoot>
          <tbody>
            <tr>
            <td>Are You Experienced </td>
            <td>1967</td>
            <td>$10.00</td>
            </tr>
            <tr>
            <td>Axis: Bold as Love</td>
            <td>1967</td>
            <td>$12.00</td>
            </tr>
           <tr>
            <td>Electric Ladyland</td>
            <td>1968</td>
            <td>$10.00</td>
            </tr>
            <tr>
            <td>Band of Gypsys</td>
            <td>1970</td>
            <td>$12.00</td>
            </tr>
              </tbody><tbody>
          </tbody></table>
        <p>
          I am <a href="http://devkick.com/lab/tripoli/sample.php?abc123">the a tag</a> example<br>
          I am <abbr title="test">the abbr tag</abbr> example<br>
          I am <acronym>the acronym tag</acronym> example<br>
          I am <b>the b tag</b> example<br>
          I am <big>the big tag</big> example<br>
          I am <cite>the cite tag</cite> example<br>
          I am <code>the code tag</code> example<br>
          I am <del>the del tag</del> example<br>
          I am <dfn>the dfn tag</dfn> example<br>
          I am <em>the em tag</em> example<br>
          I am <font face="verdana">the font tag</font> example<br>
          I am <i>the i tag</i> example<br>
          I am <ins>the ins tag</ins> example<br>
          I am <kbd>the kbd tag</kbd> example<br>
          I am <q>the q tag <q>inside</q> a q tag</q> example<br>
          I am <s>the s tag</s> example<br>
          I am <samp>the samp tag</samp> example<br>
          I am <small>the small tag</small> example<br>
          I am <span>the span tag</span> example<br>
          I am <strike>the strike tag</strike> example<br>
          I am <strong>the strong tag</strong> example<br>
          I am <sub>the sub tag</sub> example<br>
          I am <sup>the sup tag</sup> example<br>
          I am <tt>the tt tag</tt> example<br>
          I am <var>the var tag</var> example<br>
          I am <u>the u tag</u> example
        </p>

        <p>This is a &lt;p&gt; with some <code>code</code> inside.</p>

        <h3>What is Lorem Ipsum?</h3>
        <p><b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

        <p><strong>This</strong> Lorem Ipsum HTML example is created from the parts of Placeholder Markup with Lorem Ipsum - Jon Tan,
        Emastic CSS Framework,
        Tripoli CSS Framework and
        Baseline CSS Framework .</p>

        <address>Address: somewhere, World</address>

        <p>
        <a href="http://www.tlswebsolutions.com/examples/html-elements/elements.html#">Link</a><br>
        <strong>&lt;strong&gt;</strong><br>
        <del>&lt;del&gt; deleted</del><br>
        <dfn>&lt;dfn&gt; dfn</dfn><br>
        <em>&lt;em&gt; emphasis</em>
        </p>
        <pre><code>&lt;html&gt;</code>
        <code>&lt;head&gt;</code>
        <code>&lt;/head&gt;</code>
        <code>&lt;body&gt;</code>
        <code>&lt;div class = "main"&gt; &lt;div&gt;</code>
        <code>&lt;/body&gt;</code>
        <code>&lt;/html&gt; </code>
        </pre>

        <tt>&lt;tt&gt;
        Pellentesque tempor, dui ut ultrices viverra, neque urna blandit nisi, id accumsan dolor est vitae risus.
        </tt>

        <hr>



        <!-- this following markup from http://bluetrip.org/ -->
        <dl>
        <dt>Description list title 01</dt>

        <dd>Description list description 01</dd>
        <dt>Description list title 02</dt>
        <dd>Description list description 02</dd>
        <dd>Description list description 03</dd>

        </dl>
        <table>
        <caption>Table Caption</caption>

        <thead>
        <tr>
          <th>Table head th</th>
          <td>Table head td</td>
        </tr>

        </thead>
        <tfoot>
        <tr>

          <th>Table foot th</th>
          <td>Table foot td</td>
        </tr>
        </tfoot>

        <tbody>
        <tr>
          <th>Table body th</th>

          <td>Table body td</td>
        </tr>
        <tr>
          <td>Table body td</td>

          <td>Table body td</td>
        </tr>
        </tbody>

        </table>

        <hr>

        <form action="http://www.tlswebsolutions.com/examples/html-elements/elements.html#">
        <fieldset>
        <legend>Form legend</legend>

        <div><label for="f1">Optional Text input:</label><input type="text" id="f1" value="input text" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHklEQVQ4EaVTO26DQBD1ohQWaS2lg9JybZ+AK7hNwx2oIoVf4UPQ0Lj1FdKktevIpel8AKNUkDcWMxpgSaIEaTVv3sx7uztiTdu2s/98DywOw3Dued4Who/M2aIx5lZV1aEsy0+qiwHELyi+Ytl0PQ69SxAxkWIA4RMRTdNsKE59juMcuZd6xIAFeZ6fGCdJ8kY4y7KAuTRNGd7jyEBXsdOPE3a0QGPsniOnnYMO67LgSQN9T41F2QGrQRRFCwyzoIF2qyBuKKbcOgPXdVeY9rMWgNsjf9ccYesJhk3f5dYT1HX9gR0LLQR30TnjkUEcx2uIuS4RnI+aj6sJR0AM8AaumPaM/rRehyWhXqbFAA9kh3/8/NvHxAYGAsZ/il8IalkCLBfNVAAAAABJRU5ErkJggg==&quot;); background-attachment: scroll; background-position: 98% 50%; background-repeat: no-repeat;"></div>
        <div><label for="rt1">Required Text input:</label><input type="text" id="rt1" required=""></div>
        <div><label for="twp1">Text input with pattern requirement and placeholder:</label><input type="text" pattern="\d{5}(-\d{4})?" title="a US Zip code, with or without the +4 exension" placeholder="12345-6789"></div>
        <div><label for="s1">Search input:</label><input type="search" id="s1"></div>
        <div><label for="e1">Email input:</label><input type="email" id="e1"></div>
        <div><label for="u1">URL input:</label><input type="url" id="u1"></div>
        <div><label for="pw">Password input:</label><input type="password" id="pw" value="password" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACIUlEQVQ4EX2TOYhTURSG87IMihDsjGghBhFBmHFDHLWwSqcikk4RRKJgk0KL7C8bMpWpZtIqNkEUl1ZCgs0wOo0SxiLMDApWlgOPrH7/5b2QkYwX7jvn/uc//zl3edZ4PPbNGvF4fC4ajR5VrNvt/mo0Gr1ZPOtfgWw2e9Lv9+chX7cs64CS4Oxg3o9GI7tUKv0Q5o1dAiTfCgQCLwnOkfQOu+oSLyJ2A783HA7vIPLGxX0TgVwud4HKn0nc7Pf7N6vV6oZHkkX8FPG3uMfgXC0Wi2vCg/poUKGGcagQI3k7k8mcp5slcGswGDwpl8tfwGJg3xB6Dvey8vz6oH4C3iXcFYjbwiDeo1KafafkC3NjK7iL5ESFGQEUF7Sg+ifZdDp9GnMF/KGmfBdT2HCwZ7TwtrBPC7rQaav6Iv48rqZwg+F+p8hOMBj0IbxfMdMBrW5pAVGV/ztINByENkU0t5BIJEKRSOQ3Aj+Z57iFs1R5NK3EQS6HQqF1zmQdzpFWq3W42WwOTAf1er1PF2USFlC+qxMvFAr3HcexWX+QX6lUvsKpkTyPSEXJkw6MQ4S38Ljdbi8rmM/nY+CvgNcQqdH6U/xrYK9t244jZv6ByUOSiDdIfgBZ12U6dHEHu9TpdIr8F0OP692CtzaW/a6y3y0Wx5kbFHvGuXzkgf0xhKnPzA4UTyaTB8Ph8AvcHi3fnsrZ7Wore02YViqVOrRXXPhfqP8j6MYlawoAAAAASUVORK5CYII=&quot;); background-attachment: scroll; background-position: 98% 50%; background-repeat: no-repeat;"></div>
        <div><label for="f2">Radio input:</label><input type="radio" id="f2"></div>

        <div><label for="f3">Checkbox input:</label><input type="checkbox" id="f3"></div>
        <div><label for="f4">Select field:</label><select id="f4"><option>Option 01</option><option>Option 02</option></select></div>

        <div><label for="f5">Textarea:</label><textarea id="f5" cols="30" rows="5">Textarea text</textarea></div>
        <div><label for="f6">Input Button:</label> <input type="button" id="f6" value="button text"></div>

        <div><label for="f7">Submit Button:</label> <input type="submit" id="f7" value="button text"></div>

        </fieldset>

        </form>


        <!-- thx peter beverloo: http://peter.sh/examples/?/html/meter-progress.html -->


        <p id="no-support" style="color: red; margin-bottom: 12px;">
        Your browser does not support these elements yet! Consider downloading a <a href="http://tools.peter.sh/download-latest-chromium.php">Chromium Nightly</a>.<br>

        </p>

        <h3>&lt;progress&gt;</h3>
        <p>
        The progress element (spec: <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/the-button-element.html#the-progress-element">4.10.16</a>) represents the completion progress of a task and can be both indeterminate as determinate.
        </p>
        <ul class="compact">
        <li>
         <label>Indeterminate</label>
         <progress max="100"></progress>
        </li>
        <li>
         <label>Progress: 0%</label>
         <progress max="10" value="0"></progress>
        </li>
        <li>
         <label>Progress: 100%</label>
         <progress max="3254" value="3254"></progress>
        </li>
        <li>
         <label>Progress: 57%</label>
         <progress max="0.7" value="0.4"></progress>
        </li>
        <li>
         <label>Javascript</label>
         <progress id="progress-javascript-example"></progress>
        </li>
        </ul>

        <h3>&lt;meter&gt;</h3>
        <p>
        Displaying a scalar measurement within a known range, like hard drive usage, can be done using the meter element (spec: <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/the-button-element.html#the-meter-element">4.10.17</a>)
        </p>
        <ul class="compact">
        <li>
         <label>Meter: empty</label>
         <meter value="0"></meter>
        </li>
        <li>
         <label>Meter: full</label>
         <meter value="1"></meter>
        </li>
        <li>
         <label>Meter: "a bit"</label>
         <meter min=".34" max=".41" value=".36"></meter>
        </li>
        <li>
         <label>Preferred usage</label>
         <meter min="50" max="250" low="100" high="200" value="120"></meter>
        </li>
        <li>
         <label>Too much traffic</label>
         <meter min="1024" max="10240" low="2048" high="8192" value="9216"></meter>
        </li>
        <li>
         <label>Optimum value</label>
         <meter value=".5" optimum=".8"></meter>
        </li>
        <li>
         <label>Javascript</label>
         <meter id="meter-javascript-example" value="0">
        </meter></li>
        </ul>
      </Styleguide>
    );
  }
});
