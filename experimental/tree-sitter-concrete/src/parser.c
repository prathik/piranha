#include <tree_sitter/parser.h>

#if defined(__GNUC__) || defined(__clang__)
#pragma GCC diagnostic push
#pragma GCC diagnostic ignored "-Wmissing-field-initializers"
#endif

#define LANGUAGE_VERSION 14
#define STATE_COUNT 13
#define LARGE_STATE_COUNT 2
#define SYMBOL_COUNT 13
#define ALIAS_COUNT 0
#define TOKEN_COUNT 6
#define EXTERNAL_TOKEN_COUNT 0
#define FIELD_COUNT 0
#define MAX_ALIAS_SEQUENCE_LENGTH 3
#define PRODUCTION_ID_COUNT 1

enum {
  anon_sym_COLON_LBRACK = 1,
  anon_sym_RBRACK = 2,
  anon_sym_COLON = 3,
  sym_token_expression = 4,
  aux_sym_var_name_token1 = 5,
  sym_source_file = 6,
  sym__expression = 7,
  sym_template_expression = 8,
  sym_template = 9,
  sym_var_name = 10,
  sym_node_type = 11,
  aux_sym_source_file_repeat1 = 12,
};

static const char * const ts_symbol_names[] = {
  [ts_builtin_sym_end] = "end",
  [anon_sym_COLON_LBRACK] = ":[",
  [anon_sym_RBRACK] = "]",
  [anon_sym_COLON] = ":",
  [sym_token_expression] = "token_expression",
  [aux_sym_var_name_token1] = "var_name_token1",
  [sym_source_file] = "source_file",
  [sym__expression] = "_expression",
  [sym_template_expression] = "template_expression",
  [sym_template] = "template",
  [sym_var_name] = "var_name",
  [sym_node_type] = "node_type",
  [aux_sym_source_file_repeat1] = "source_file_repeat1",
};

static const TSSymbol ts_symbol_map[] = {
  [ts_builtin_sym_end] = ts_builtin_sym_end,
  [anon_sym_COLON_LBRACK] = anon_sym_COLON_LBRACK,
  [anon_sym_RBRACK] = anon_sym_RBRACK,
  [anon_sym_COLON] = anon_sym_COLON,
  [sym_token_expression] = sym_token_expression,
  [aux_sym_var_name_token1] = aux_sym_var_name_token1,
  [sym_source_file] = sym_source_file,
  [sym__expression] = sym__expression,
  [sym_template_expression] = sym_template_expression,
  [sym_template] = sym_template,
  [sym_var_name] = sym_var_name,
  [sym_node_type] = sym_node_type,
  [aux_sym_source_file_repeat1] = aux_sym_source_file_repeat1,
};

static const TSSymbolMetadata ts_symbol_metadata[] = {
  [ts_builtin_sym_end] = {
    .visible = false,
    .named = true,
  },
  [anon_sym_COLON_LBRACK] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_RBRACK] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_COLON] = {
    .visible = true,
    .named = false,
  },
  [sym_token_expression] = {
    .visible = true,
    .named = true,
  },
  [aux_sym_var_name_token1] = {
    .visible = false,
    .named = false,
  },
  [sym_source_file] = {
    .visible = true,
    .named = true,
  },
  [sym__expression] = {
    .visible = false,
    .named = true,
  },
  [sym_template_expression] = {
    .visible = true,
    .named = true,
  },
  [sym_template] = {
    .visible = true,
    .named = true,
  },
  [sym_var_name] = {
    .visible = true,
    .named = true,
  },
  [sym_node_type] = {
    .visible = true,
    .named = true,
  },
  [aux_sym_source_file_repeat1] = {
    .visible = false,
    .named = false,
  },
};

static const TSSymbol ts_alias_sequences[PRODUCTION_ID_COUNT][MAX_ALIAS_SEQUENCE_LENGTH] = {
  [0] = {0},
};

static const uint16_t ts_non_terminal_alias_map[] = {
  0,
};

static const TSStateId ts_primary_state_ids[STATE_COUNT] = {
  [0] = 0,
  [1] = 1,
  [2] = 2,
  [3] = 3,
  [4] = 4,
  [5] = 5,
  [6] = 6,
  [7] = 7,
  [8] = 8,
  [9] = 9,
  [10] = 10,
  [11] = 11,
  [12] = 12,
};

static bool ts_lex(TSLexer *lexer, TSStateId state) {
  START_LEXER();
  eof = lexer->eof(lexer);
  switch (state) {
    case 0:
      if (eof) ADVANCE(4);
      if (lookahead == ':') ADVANCE(8);
      if (lookahead == ']') ADVANCE(6);
      if (lookahead == '\t' ||
          lookahead == '\n' ||
          lookahead == '\r' ||
          lookahead == ' ') SKIP(0)
      if (('A' <= lookahead && lookahead <= 'Z') ||
          lookahead == '_' ||
          ('a' <= lookahead && lookahead <= 'z')) ADVANCE(11);
      END_STATE();
    case 1:
      if (lookahead == ':') ADVANCE(7);
      if (lookahead == ']') ADVANCE(6);
      if (lookahead == '\t' ||
          lookahead == '\n' ||
          lookahead == '\r' ||
          lookahead == ' ') SKIP(1)
      END_STATE();
    case 2:
      if (lookahead == '[') ADVANCE(5);
      END_STATE();
    case 3:
      if (eof) ADVANCE(4);
      if (lookahead == ':') ADVANCE(2);
      if (lookahead == '\t' ||
          lookahead == '\n' ||
          lookahead == '\r' ||
          lookahead == ' ') ADVANCE(9);
      if (lookahead != 0 &&
          lookahead != '[') ADVANCE(10);
      END_STATE();
    case 4:
      ACCEPT_TOKEN(ts_builtin_sym_end);
      END_STATE();
    case 5:
      ACCEPT_TOKEN(anon_sym_COLON_LBRACK);
      END_STATE();
    case 6:
      ACCEPT_TOKEN(anon_sym_RBRACK);
      END_STATE();
    case 7:
      ACCEPT_TOKEN(anon_sym_COLON);
      END_STATE();
    case 8:
      ACCEPT_TOKEN(anon_sym_COLON);
      if (lookahead == '[') ADVANCE(5);
      END_STATE();
    case 9:
      ACCEPT_TOKEN(sym_token_expression);
      if (lookahead == '\t' ||
          lookahead == '\n' ||
          lookahead == '\r' ||
          lookahead == ' ') ADVANCE(9);
      if (lookahead != 0 &&
          lookahead != ':' &&
          lookahead != '[') ADVANCE(10);
      END_STATE();
    case 10:
      ACCEPT_TOKEN(sym_token_expression);
      if (lookahead != 0 &&
          lookahead != ':' &&
          lookahead != '[') ADVANCE(10);
      END_STATE();
    case 11:
      ACCEPT_TOKEN(aux_sym_var_name_token1);
      if (('0' <= lookahead && lookahead <= '9') ||
          ('A' <= lookahead && lookahead <= 'Z') ||
          lookahead == '_' ||
          ('a' <= lookahead && lookahead <= 'z')) ADVANCE(11);
      END_STATE();
    default:
      return false;
  }
}

static const TSLexMode ts_lex_modes[STATE_COUNT] = {
  [0] = {.lex_state = 0},
  [1] = {.lex_state = 3},
  [2] = {.lex_state = 3},
  [3] = {.lex_state = 3},
  [4] = {.lex_state = 0},
  [5] = {.lex_state = 3},
  [6] = {.lex_state = 1},
  [7] = {.lex_state = 1},
  [8] = {.lex_state = 0},
  [9] = {.lex_state = 0},
  [10] = {.lex_state = 0},
  [11] = {.lex_state = 0},
  [12] = {.lex_state = 0},
};

static const uint16_t ts_parse_table[LARGE_STATE_COUNT][SYMBOL_COUNT] = {
  [0] = {
    [ts_builtin_sym_end] = ACTIONS(1),
    [anon_sym_COLON_LBRACK] = ACTIONS(1),
    [anon_sym_RBRACK] = ACTIONS(1),
    [anon_sym_COLON] = ACTIONS(1),
    [aux_sym_var_name_token1] = ACTIONS(1),
  },
  [1] = {
    [sym_source_file] = STATE(9),
    [sym__expression] = STATE(2),
    [sym_template_expression] = STATE(2),
    [aux_sym_source_file_repeat1] = STATE(2),
    [ts_builtin_sym_end] = ACTIONS(3),
    [anon_sym_COLON_LBRACK] = ACTIONS(5),
    [sym_token_expression] = ACTIONS(7),
  },
};

static const uint16_t ts_small_parse_table[] = {
  [0] = 4,
    ACTIONS(5), 1,
      anon_sym_COLON_LBRACK,
    ACTIONS(9), 1,
      ts_builtin_sym_end,
    ACTIONS(11), 1,
      sym_token_expression,
    STATE(3), 3,
      sym__expression,
      sym_template_expression,
      aux_sym_source_file_repeat1,
  [15] = 4,
    ACTIONS(13), 1,
      ts_builtin_sym_end,
    ACTIONS(15), 1,
      anon_sym_COLON_LBRACK,
    ACTIONS(18), 1,
      sym_token_expression,
    STATE(3), 3,
      sym__expression,
      sym_template_expression,
      aux_sym_source_file_repeat1,
  [30] = 3,
    ACTIONS(21), 1,
      aux_sym_var_name_token1,
    STATE(7), 1,
      sym_var_name,
    STATE(10), 1,
      sym_template,
  [40] = 2,
    ACTIONS(25), 1,
      anon_sym_COLON_LBRACK,
    ACTIONS(23), 2,
      ts_builtin_sym_end,
      sym_token_expression,
  [48] = 1,
    ACTIONS(27), 2,
      anon_sym_RBRACK,
      anon_sym_COLON,
  [53] = 2,
    ACTIONS(29), 1,
      anon_sym_RBRACK,
    ACTIONS(31), 1,
      anon_sym_COLON,
  [60] = 2,
    ACTIONS(33), 1,
      aux_sym_var_name_token1,
    STATE(12), 1,
      sym_node_type,
  [67] = 1,
    ACTIONS(35), 1,
      ts_builtin_sym_end,
  [71] = 1,
    ACTIONS(37), 1,
      anon_sym_RBRACK,
  [75] = 1,
    ACTIONS(39), 1,
      anon_sym_RBRACK,
  [79] = 1,
    ACTIONS(41), 1,
      anon_sym_RBRACK,
};

static const uint32_t ts_small_parse_table_map[] = {
  [SMALL_STATE(2)] = 0,
  [SMALL_STATE(3)] = 15,
  [SMALL_STATE(4)] = 30,
  [SMALL_STATE(5)] = 40,
  [SMALL_STATE(6)] = 48,
  [SMALL_STATE(7)] = 53,
  [SMALL_STATE(8)] = 60,
  [SMALL_STATE(9)] = 67,
  [SMALL_STATE(10)] = 71,
  [SMALL_STATE(11)] = 75,
  [SMALL_STATE(12)] = 79,
};

static const TSParseActionEntry ts_parse_actions[] = {
  [0] = {.entry = {.count = 0, .reusable = false}},
  [1] = {.entry = {.count = 1, .reusable = false}}, RECOVER(),
  [3] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_source_file, 0),
  [5] = {.entry = {.count = 1, .reusable = false}}, SHIFT(4),
  [7] = {.entry = {.count = 1, .reusable = true}}, SHIFT(2),
  [9] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_source_file, 1),
  [11] = {.entry = {.count = 1, .reusable = true}}, SHIFT(3),
  [13] = {.entry = {.count = 1, .reusable = true}}, REDUCE(aux_sym_source_file_repeat1, 2),
  [15] = {.entry = {.count = 2, .reusable = false}}, REDUCE(aux_sym_source_file_repeat1, 2), SHIFT_REPEAT(4),
  [18] = {.entry = {.count = 2, .reusable = true}}, REDUCE(aux_sym_source_file_repeat1, 2), SHIFT_REPEAT(3),
  [21] = {.entry = {.count = 1, .reusable = true}}, SHIFT(6),
  [23] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_template_expression, 3),
  [25] = {.entry = {.count = 1, .reusable = false}}, REDUCE(sym_template_expression, 3),
  [27] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_var_name, 1),
  [29] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_template, 1),
  [31] = {.entry = {.count = 1, .reusable = true}}, SHIFT(8),
  [33] = {.entry = {.count = 1, .reusable = true}}, SHIFT(11),
  [35] = {.entry = {.count = 1, .reusable = true}},  ACCEPT_INPUT(),
  [37] = {.entry = {.count = 1, .reusable = true}}, SHIFT(5),
  [39] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_node_type, 1),
  [41] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_template, 3),
};

#ifdef __cplusplus
extern "C" {
#endif
#ifdef _WIN32
#define extern __declspec(dllexport)
#endif

extern const TSLanguage *tree_sitter_concrete(void) {
  static const TSLanguage language = {
    .version = LANGUAGE_VERSION,
    .symbol_count = SYMBOL_COUNT,
    .alias_count = ALIAS_COUNT,
    .token_count = TOKEN_COUNT,
    .external_token_count = EXTERNAL_TOKEN_COUNT,
    .state_count = STATE_COUNT,
    .large_state_count = LARGE_STATE_COUNT,
    .production_id_count = PRODUCTION_ID_COUNT,
    .field_count = FIELD_COUNT,
    .max_alias_sequence_length = MAX_ALIAS_SEQUENCE_LENGTH,
    .parse_table = &ts_parse_table[0][0],
    .small_parse_table = ts_small_parse_table,
    .small_parse_table_map = ts_small_parse_table_map,
    .parse_actions = ts_parse_actions,
    .symbol_names = ts_symbol_names,
    .symbol_metadata = ts_symbol_metadata,
    .public_symbol_map = ts_symbol_map,
    .alias_map = ts_non_terminal_alias_map,
    .alias_sequences = &ts_alias_sequences[0][0],
    .lex_modes = ts_lex_modes,
    .lex_fn = ts_lex,
    .primary_state_ids = ts_primary_state_ids,
  };
  return &language;
}
#ifdef __cplusplus
}
#endif
