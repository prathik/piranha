# Copyright (c) 2023 Uber Technologies, Inc.

# <p>Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file
# except in compliance with the License. You may obtain a copy of the License at
# <p>http://www.apache.org/licenses/LICENSE-2.0

# <p>Unless required by applicable law or agreed to in writing, software distributed under the
# License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
# express or implied. See the License for the specific language governing permissions and
# limitations under the License.

from polyglot_piranha import (
    Rule,
)


# Rules for transforming builder patterns
# Rule to transform EntropyCalculator() arguments
spark_conf_change_java_scala = Rule(
    name="spark_conf_change_java_scala",
    query="cs new SparkConf()",
    replace_node="*",
    replace='SparkSession.builder().config("spark.sql.legacy.allowUntypedScalaUDF", "true")',
    holes={"spark_conf"},
)

app_name_change_java_scala = Rule(
    name="app_name_change_java_scala",
    query="cs :[r].setAppName(:[app_name])",
    replace_node="*",
    replace="@r.appName(@app_name)",
    groups={"BuilderPattern"},
    is_seed_rule=False,
)

master_name_change_java_scala = Rule(
    name="master_name_change_java_scala",
    query="cs :[r].setMaster(:[master])",
    replace_node="*",
    replace="@r.master(@master)",
    groups={"BuilderPattern"},
    is_seed_rule=False,
)

setter_name_change_java_scala = Rule(
    name="setter_name_change_java_scala",
    query="cs :[r].set(:[a1],:[a2])",
    replace_node="*",
    replace="@r.config(@a1, @a2)",
    groups={"BuilderPattern"},
    is_seed_rule=False,
)

set_all_change_java_scala = Rule(
    name="set_all_change_java_scala",
    query="cs :[r].setAll(:[a1])",
    replace_node="*",
    replace="@r.all(@a1)",
    groups={"BuilderPattern"},
    is_seed_rule=False,
)

set_if_missing_java_scala = Rule(
    name="set_if_missing_java_scala",
    query="cs :[r].setIfMissing(:[a1], :[a2])",
    replace_node="*",
    replace="@r.ifMissing(@a1)",
    groups={"BuilderPattern"},
    is_seed_rule=False,
)

set_jars_change_java_scala = Rule(
    name="set_jars_change_java_scala",
    query="cs :[r].setJars(:[a1])",
    replace_node="*",
    replace="@r.jars(@a1)",
    groups={"BuilderPattern"},
    is_seed_rule=False,
)

set_executor_env_change_1_java_scala = Rule(
    name="set_executor_env_change_1_java_scala",
    query="cs :[r].setExecutorEnv(:[a1])",
    replace_node="*",
    replace="@r.executorEnv(@a1)",
    groups={"BuilderPattern"},
    is_seed_rule=False,
)

set_executor_env_change_2_java_scala = Rule(
    name="set_executor_env_change_2_java_scala",
    query="cs :[r].setExecutorEnv(:[a1], :[a2])",
    replace_node="*",
    replace="@r.executorEnv(@a1, @a2)",
    groups={"BuilderPattern"},
    is_seed_rule=False,
)

set_spark_home_change_java_scala = Rule(
    name="set_spark_home_change_java_scala",
    query="cs :[r].setSparkHome(:[a1])",
    replace_node="*",
    replace="@r.sparkHome(@a1)",
    groups={"BuilderPattern"},
    is_seed_rule=False,
)

app_name_change_java_scala_stand_alone_call = Rule(
    name="app_name_change_java_scala_stand_alone_call",
    query="cs @conf_var.setAppName(:[app_name])",
    replace_node="*",
    replace="@conf_var.appName(@app_name)",
    groups={"StandAloneCall"},
    holes= {"conf_var"},
    is_seed_rule=False,
)

master_name_change_java_scala_stand_alone_call = Rule(
    name="master_name_change_java_scala_stand_alone_call",
    query="cs @conf_var.setMaster(:[master])",
    replace_node="*",
    replace="@conf_var.master(@master)",
    groups={"StandAloneCall"},
    holes= {"conf_var"},
    is_seed_rule=False,
)

setter_name_change_java_scala_stand_alone_call = Rule(
    name="setter_name_change_java_scala_stand_alone_call",
    query="cs @conf_var.set(:[a1],:[a2])",
    replace_node="*",
    replace="@conf_var.config(@a1, @a2)",
    groups={"StandAloneCall"},
    holes= {"conf_var"},
    is_seed_rule=False,
)

set_all_change_java_scala_stand_alone_call = Rule(
    name="set_all_change_java_scala_stand_alone_call",
    query="cs @conf_var.setAll(:[a1])",
    replace_node="*",
    replace="@conf_var.all(@a1)",
    groups={"StandAloneCall"},
    holes= {"conf_var"},
    is_seed_rule=False,
)

set_if_missing_java_scala_stand_alone_call = Rule(
    name="set_if_missing_java_scala_stand_alone_call",
    query="cs @conf_var.setIfMissing(:[a1], :[a2])",
    replace_node="*",
    replace="@conf_var.ifMissing(@a1)",
    groups={"StandAloneCall"},
    holes= {"conf_var"},
    is_seed_rule=False,
)

set_jars_change_java_scala_stand_alone_call = Rule(
    name="set_jars_change_java_scala_stand_alone_call",
    query="cs @conf_var.setJars(:[a1])",
    replace_node="*",
    replace="@conf_var.jars(@a1)",
    groups={"StandAloneCall"},
    holes= {"conf_var"},
    is_seed_rule=False,
)

set_executor_env_change_1_java_scala_stand_alone_call = Rule(
    name="set_executor_env_change_1_java_scala_stand_alone_call",
    query="cs @conf_var.setExecutorEnv(:[a1])",
    replace_node="*",
    replace="@conf_var.executorEnv(@a1)",
    groups={"StandAloneCall"},
    holes= {"conf_var"},
    is_seed_rule=False,
)

set_executor_env_change_2_java_scala_stand_alone_call = Rule(
    name="set_executor_env_change_2_java_scala_stand_alone_call",
    query="cs @conf_var.setExecutorEnv(:[a1], :[a2])",
    replace_node="*",
    replace="@conf_var.executorEnv(@a1, @a2)",
    groups={"StandAloneCall"},
    holes= {"conf_var"},
    is_seed_rule=False,
)

set_spark_home_change_java_scala_stand_alone_call = Rule(
    name="set_spark_home_change_java_scala_stand_alone_call",
    query="cs @conf_var.setSparkHome(:[a1])",
    replace_node="*",
    replace="@conf_var.sparkHome(@a1)",
    groups={"StandAloneCall"},
    holes= {"conf_var"},
    is_seed_rule=False,
)




dummy = Rule(name="dummy", is_seed_rule=False)

RULES = [
    # Transforms the initializer
    spark_conf_change_java_scala,
    
    # Transforms the builder pattern
    app_name_change_java_scala,
    master_name_change_java_scala,
    setter_name_change_java_scala,
    set_all_change_java_scala,
    set_if_missing_java_scala,
    set_jars_change_java_scala,
    set_executor_env_change_1_java_scala,
    set_executor_env_change_2_java_scala,
    set_spark_home_change_java_scala,
    
    # Transforms the stand alone calls
    app_name_change_java_scala_stand_alone_call,
    master_name_change_java_scala_stand_alone_call,
    setter_name_change_java_scala_stand_alone_call,
    set_all_change_java_scala_stand_alone_call,
    set_if_missing_java_scala_stand_alone_call,
    set_jars_change_java_scala_stand_alone_call,
    set_executor_env_change_1_java_scala_stand_alone_call,
    set_executor_env_change_2_java_scala_stand_alone_call,
    set_spark_home_change_java_scala_stand_alone_call,
    
    
    
    dummy,
]


