# src&#x2F;store&#x2F;answers&#x2F;actions





* * *

### src&#x2F;store&#x2F;answers&#x2F;actions.updateAnswersAC - Create action meant to override current value of answers to a question in state.
See {@link persistQuestionAC|persistQuestionAC} for persistance, like dispatching an API call to the database.(question_code, answers) 

**Parameters**

**question_code**: `integer`, Unique ID corresponding to question these answers relate to

**answers**: `Array.&lt;string&gt;`, One or more strings meant to answer the related question

**Returns**: `Object`


### src&#x2F;store&#x2F;answers&#x2F;actions.loadAllAnswersAC - Create action meant to fetch user&#39;s answers for all questions from API.(userId) 

**Parameters**

**userId**: `integer`

**Returns**: `Object`


### src&#x2F;store&#x2F;answers&#x2F;actions.persistAnswersAC - Create action meant to save user&#39;s answers for one question to the API.(userId, question_code, answers) 

**Parameters**

**userId**: `integer`

**question_code**: `integer`, Unique ID corresponding to question these answers relate to

**answers**: `Array.&lt;string&gt;`, One or more strings meant to answer the related question


**Example**:
```js
<caption>Warning: The following fails because getAnswers is called before the updateAnswersAC operation updates the store.
You need to pass "answers" directly to persistQuestionAC.</caption>
this.props.dispatch(updateAnswersAC(question_code, answers))
 // BROKEN: this.props.dispatch(persistAnswersAC(question_code, getAnswers(this.props.answersRD, question_code)))
```



* * *










