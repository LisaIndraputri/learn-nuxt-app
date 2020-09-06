export default function (context) {
  
  console.log('kesini harusnya')
  context.store.dispatch('initAuth', context.req)
  
}