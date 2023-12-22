export async function GET(request) {
  // we will use params to access the data passed to the dynamic route

  return new Response({ text: "Hello" });
}
