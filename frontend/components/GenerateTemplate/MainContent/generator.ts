import { IFunction } from "@/api/generated"
import nunjucks from "nunjucks"

export const combineMacroIntoOrderedFunctionString = (blocks: any[]) => {
  return blocks
    .map((func: any) => {
      let variableArray: string[] = []

      func.variables.forEach((variable: any) => {
        variableArray.push(variable.name)
      })

      return `{{ ${func.function}(${variableArray.join(", ")}) }}`
    })
    .join(" ")
}

export const mapVariableObjectToString = (variables: Record<string, any>) => {
  let variablesString = ""

  Object.keys(variables).forEach((element: string) => {
    variablesString += `{% set ${element} = ${JSON.stringify(
      variables[element]
    )} %} `
  })

  return variablesString
}

export const compileString = (
  macros: string,
  templateBlocks: IFunction[],
  variables: Record<string, any>
): string => {
  nunjucks.configure({ autoescape: false, lstripBlocks: true })

  // Contains the macro definitions used
  const specificTemplate = macros

  // Combine templateBLocks in format "macro1 macro2 macro3"
  const index = combineMacroIntoOrderedFunctionString(templateBlocks)

  // Assign variables in this format grabs it from the variable state KEY-value
  // We may run into issues if the keys are not unique
  // const variableString = `{% set username = "Shaan" %} {% set repository = "Test" %}`;

  let variableString = mapVariableObjectToString(variables)

  const string = `${variableString} ${specificTemplate} ${index}`
  const renderedString = nunjucks.renderString(string, {})
  return renderedString
}
