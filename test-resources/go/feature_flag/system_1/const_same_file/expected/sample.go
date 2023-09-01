/*
Copyright (c) 2023 Uber Technologies, Inc.
 <p>Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file
 except in compliance with the License. You may obtain a copy of the License at
 <p>http://www.apache.org/licenses/LICENSE-2.0
 <p>Unless required by applicable law or agreed to in writing, software distributed under the
 License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 express or implied. See the License for the specific language governing permissions and
 limitations under the License.
*/

package flag

import "fmt"

const (
    staleFlagConst = "staleFlag"
    normalFlag     = "normalFlag"
)

func a() {
    fmt.Println("false")
}

func (c *Client) b() {
    s, err := exp.StrValue("str")
    if err != nil {
        fmt.Println(err)
    }

    fmt.Println(staleFlagConst)
}

func (c *Client) c(enabled2 bool, enabled3 bool) {
    if enabled2 || enabled3 {
        fmt.Println("enabled")
    }
}

// should not replace the function name
func (c *Client) isEnabled() bool {
    return false
}

func (c *Client) callerMethod() {
    // should not replace isFlagEnabledMethod here
    if c.isFlagEnabledMethod() {
        fmt.Println("enabled")
    } else {
        fmt.Println("disabled")
    }
}

// should not replace the method name
func (c *Client) isFlagEnabledMethod() bool {
    fmt.Println("not enabled")
    return false
}

func callerFunc() {
    // should not replace isFlagEnabledFunc here
    if isFlagEnabledFunc() {
        fmt.Println("enabled")
    } else {
        fmt.Println("disabled")
    }
}

// should not replace the function name
func isFlagEnabledFunc() bool {

    // After deleting the assignment, this comment and the leading `func {...` is not deleted
    t.Run("message", func(t *Foobar.T) {
        fmt.Println("some logging statement")
    })

    // After deleting the assignment, this comment and the trailing `},` is not deleted
    t.Run1(func(t *Foobar.T) {
        fmt.Println("some other logging statement")
    }, "other_message" )


    fmt.Println("not enabled")
    return false
}
