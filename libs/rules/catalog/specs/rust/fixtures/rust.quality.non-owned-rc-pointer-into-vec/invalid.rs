use std::rc::Rc;

fn main() {
    let mut v = Vec::new();
    let rcp = Rc::new(10);
    v.push(rcp.clone());
}
