export const handleNavTabs = () => {
  const triggerTabList = [].slice.call(
    document.querySelectorAll('#v-pills-tab button')
  );
  triggerTabList.forEach((triggerEl, index) => {
    triggerEl.addEventListener('shown.bs.tab', (event) => {
      // newly activated tab
      // console.log(event);

      // previous active tab
      // console.log(event.relatedTarget);
      
      //log current tab index
      console.log(index);
    });
  });
};
