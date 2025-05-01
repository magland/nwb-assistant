/* eslint-disable @typescript-eslint/no-explicit-any */
import * as retrievePynwbDocs from "./tools/retrievePynwbDocs";

import { ORFunctionDescription } from "./openRouterTypes";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ToolExecutionContext {}

interface NCTool {
  toolFunction: ORFunctionDescription;
  execute: (params: any, o?: ToolExecutionContext) => Promise<string>;
  detailedDescription: string;
  requiresPermission: boolean;
}

const staticTools: NCTool[] = [retrievePynwbDocs];

export const getAllTools = async () => {
  return [...staticTools] as const;
};

// For backward compatibility with existing imports
export default staticTools;
