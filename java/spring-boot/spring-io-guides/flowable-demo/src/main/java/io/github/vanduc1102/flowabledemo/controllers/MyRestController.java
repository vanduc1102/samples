package io.github.vanduc1102.flowabledemo.controllers;

import io.github.vanduc1102.flowabledemo.dtos.StartProcessPresentation;
import io.github.vanduc1102.flowabledemo.dtos.TaskRepresentation;
import io.github.vanduc1102.flowabledemo.services.MyService;
import java.util.List;
import lombok.extern.log4j.Log4j2;
import org.flowable.task.api.Task;
import org.springframework.web.bind.annotation.*;

@RestController
@Log4j2
public class MyRestController {

  private final MyService myService;

  public MyRestController(MyService myService) {
    this.myService = myService;
  }

  @PostMapping(value = "/process")
  public String startProcessInstance(
      @RequestBody StartProcessPresentation startProcessPresentation) {
    return myService.startProcess(startProcessPresentation.getAssignee());
  }

  @GetMapping(value = "/tasks")
  public List<TaskRepresentation> getTasks(@RequestParam String assignee) {
    List<Task> tasks = myService.getTasks(assignee);
    log.debug("task size: " + tasks.size());
    return tasks.stream()
        .map((task) -> new TaskRepresentation(task.getId(), task.getName()))
        .toList();
  }
}
