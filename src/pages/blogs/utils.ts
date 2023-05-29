export async function getBlogList() {
  const result = await fetch(
    "https://service-4m5qfvjb-1307850796.bj.apigw.tencentcs.com/release/getBlogList",
    { method: "get" }
  );
  if (result.status === 200) {
    return result.json();
  } else {
    console.error(result.status);
    return [];
  }
}
