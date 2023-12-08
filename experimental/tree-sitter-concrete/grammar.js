module.exports = grammar({
  name: 'concrete',

  rules: {
    // The entry point of the grammar
    source_file: $ => repeat($._expression),

    _expression: $ => choice(
        $.template_expression,
        $.token_expression
    ),

    template_expression: $ => seq(
        ':[',
        $.template,
        ']'
    ),

    template: $ => choice(
        $.var_name,
        seq($.var_name, ':', $.node_type)
    ),

    token_expression: $ => /[^:\[]+/, // Matches any string until ':[' is encountered

    var_name: $ => /[a-zA-Z_][a-zA-Z0-9_]*/,
    node_type: $ => /[a-zA-Z_][a-zA-Z0-9_]*/
  }
});