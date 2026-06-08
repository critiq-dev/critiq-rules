use std::rc::Rc;

fn main() {
    let mut v = Vec::new();
    v.push(Rc::new(10));
}
