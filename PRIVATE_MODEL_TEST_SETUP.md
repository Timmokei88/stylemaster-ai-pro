# Private model comparison setup

1. Upload the contents of this package to the same GitHub repository used by the Render web service.
2. In Render, open **stylemaster-ai-pro → Environment → Edit**.
3. Add the environment variable `MODEL_TESTER_EMAILS`.
4. Set its value to the email address of the MixoLabs account you personally use to log in. For more than one authorised tester, separate addresses with commas.
5. Choose **Save, rebuild, and deploy**.
6. Open MixoLabs and log in using that exact authorised email address.
7. Press **Private Model Test** in the lower-left corner.

The comparison creates one 1K image with Gemini 3.1 Flash Image and one with Gemini 3.1 Flash Lite Image. It does not deduct MixoLabs credits, but Google charges for both API generations. The results are randomly assigned to A and B. Their model names and estimated output prices are shown only after you vote.

Use a mixture of ordinary scenes, faces, detailed products, exact lettering and difficult lighting. About 30 comparisons should provide a useful first result. Normal customer generation remains unchanged by this test package.
