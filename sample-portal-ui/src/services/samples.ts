import { PatchSampleRequest, SampleResponse } from "@/types/samples.api";
import { api } from "@/utils/api";

async function findSampleById(id: string): Promise<SampleResponse> {
  return await api.get(`/sample/${id}`);
}

async function updateSample(
  data: PatchSampleRequest,
): Promise<SampleResponse> {
  return await api.post(`/sample/submit`, data); // this should be a patch but following the project requirements we use post instead
}

export { findSampleById, updateSample };
