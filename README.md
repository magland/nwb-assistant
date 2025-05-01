# nwb-assistant

The RAG DB is assembled here:
https://github.com/magland/ragdbfor_pynwb/

The RAG documents are summary documents, one for each tutorial in the pynwb doc gallery:
https://github.com/NeurodataWithoutBorders/pynwb/tree/dev/docs/gallery

The embedding vectors are precomputed and stored in the ragdbfor_pynwb repo

The [embeddings.json]() and all the summary docs are hosted on the github pages for the ragdbfor_pynwb repo

Then there is an API endpoint that does the RAG retrieval:

https://github.com/flatironinstitute/neurosift/tree/main-v2/nextjs/neurosift-chat-agent-tools
This is the tool: https://github.com/flatironinstitute/neurosift/tree/main-v2/nextjs/neurosift-chat-agent-tools/src/app/api/pynwb_docs_semantic_search

This web app provides the chat interface and allows the agent access to that API endpoint.