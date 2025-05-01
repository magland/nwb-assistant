/* eslint-disable @typescript-eslint/no-explicit-any */
import { ORFunctionDescription } from "../openRouterTypes";

export const toolFunction: ORFunctionDescription = {
  name: "retrieve_pynwb_docs",
  description: "Semantic search for pynwb usage documents using natural language.",
  parameters: {
    type: "object",
    properties: {
      query: {
        type: "string",
        description: "Natural language query text",
      },
      limit: {
        type: "integer",
        description: "Maximum number of documents to return"
      }
    },
  },
};

type RetrievePynwbDocsParams = {
  query: string;
  limit: number;
};

export const execute = async (
  params: RetrievePynwbDocsParams,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _o: any,
): Promise<string> => {
  const { query, limit } = params;

  const outputLines: string[] = [];
  try {
    const url = "https://neurosift-chat-agent-tools.vercel.app/api/pynwb_docs_semantic_search"
    const body = {
      query,
      limit
    }
    // post request to the API
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
    return JSON.stringify(data, null, 2);
  } catch (error) {
    outputLines.push(
      `Code execution failed: ${error instanceof Error ? error.message : "Unknown error"}`,
    );
    return outputLines.join("\n");
  }
};

export const detailedDescription = `
Semantic search for pynwb usage documents using natural language.

Semantic embeddings are used to find pynwb documents relevant to the query text.

Use this where the user has made a request that requires you to obtain documentation about pynwb.

You should always use this tool at least once when the user asks for help with pynwb.

For the query, you should form a query that would be relevant for finding appropriate documents.

By default you should use a limit of 8, but you can increase or decrease this as needed.

The output is { results: {docUrl: string, docText: string}[] } where each string is the content of a pynwb document.

It may be helpful to link to particular documents in your reply. That way the user can go to the source. Use the docUrl to form the links.

But any links you provide should be directly relevant to what the user is seeking information about.
`;

export const requiresPermission = false;
