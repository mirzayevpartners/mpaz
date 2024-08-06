export async function toDataURL_node(url: string) {
  const response = await fetch(url);
  const blob = await response.blob();
  const buffer = Buffer.from(await blob.arrayBuffer());
  return 'data:' + blob.type + ';base64,' + buffer.toString('base64');
}
