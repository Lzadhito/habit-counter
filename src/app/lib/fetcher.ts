export function getQuery(input: RequestInfo | URL, init?: RequestInit | undefined) {
  return fetch(input, init).then((res) => res.json());
}

export function postMutation(input: RequestInfo | URL, { arg }: { arg: any }) {
  return fetch(input, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(arg),
  }).then((res) => res.json());
}

export function deleteMutation(input: RequestInfo | URL, { arg }: { arg: any }) {
  return fetch(input, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(arg),
  }).then((res) => res.json());
}
