import React, {useEffect, Fragment} from 'react';

export default function TypographyTab () {
    return (
        <Fragment>
            <div className="jumbotron">
                <h2 className="subtitle text-center">Heading</h2>
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <h5>Heading 5</h5>
                <h6>Heading 6</h6>
                <pre>
                        <code className="language-html">
                        {
                        `<h1>Heading 1</h1>\n<h2>Heading 2</h2>\n<h3>Heading 3</h3>\n<h4>Heading 4</h4>\n<h5>Heading 5</h5>\n<h6>Heading 6</h6>`
                        }
                        </code>
                    </pre>
            </div>
            <div className="jumbotron">
                <h2 className="subtitle text-center">Example body text</h2>
                <p>This is paragraph text example</p>
                <p><small>This line of text is meant to be treated as fine print.</small></p>
                <p>The following is <strong>rendered as bold text</strong>.</p>
                <p>The following is <em>rendered as italicized text</em>.</p>
                <pre>
                    <code className="language-html">
                        {`<p>This is paragraph text example</p>\n<p><small>This line of text is meant to be treated as fine print.</small></p>\n<p>The following is <strong>rendered as bold text</strong>.</p>\n<p>The following is <em>rendered as italicized text</em>.</p>`}
                    </code>
                </pre>
            </div>
            <div className="jumbotron">
                <h2 className="subtitle text-center">Emphasis classes</h2>
                <p className="text-muted">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
                <p className="text-primary">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                <p className="text-secondary">Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
                <p className="text-warning">Etiam porta sem malesuada magna mollis euismod.</p>
                <p className="text-danger">Donec ullamcorper nulla non metus auctor fringilla.</p>
                <p className="text-success">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                <p className="text-info">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
                <pre>
                    <code className="language-html">
                        {'<p class="text-muted">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>\n<p class="text-primary">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n<p class="text-secondary">Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>\n<p class="text-warning">Etiam porta sem malesuada magna mollis euismod.</p>\n<p class="text-danger">Donec ullamcorper nulla non metus auctor fringilla.</p>\n<p class="text-success">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>\n<p class="text-info">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>'}
                    </code>
                </pre>
            </div>
            <div className="jumbotron d-flex flex-wrap">
                <h2 className="subtitle text-center w-100">Blockquotes</h2>
                <div className="col-md-4 col-sm-12">
                    <blockquote className="blockquote">
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                    </blockquote>
                </div>
                <div className="col-md-4 col-sm-12">
                    <blockquote className="blockquote text-center">
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                    </blockquote>
                </div>
                <div className="col-md-4 col-sm-12">
                    <blockquote className="blockquote text-right">
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                    </blockquote>
                </div>
                <div className="w-100">
                    <pre>
                        <code className="language-html">
{
`<blockquote class="blockquote">
    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>
<blockquote class="blockquote text-center">
    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>
<blockquote class="blockquote text-right">
    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>`
}
                        </code>
                    </pre>
                </div>
            </div>
        </Fragment>
    );
}